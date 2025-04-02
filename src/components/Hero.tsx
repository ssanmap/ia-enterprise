import { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

export const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Soluciones de IA y análisis de datos para la transformación digital";
  const [h1Visible, setH1Visible] = useState(false);

  // Animación de escritura para el párrafo
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        // Efecto de cursor parpadeante al final
        clearInterval(typingInterval);
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
      }
    }, 50); // Velocidad de escritura

    return () => clearInterval(typingInterval);
  }, []);

  // Animación de aparición para el h1
  useEffect(() => {
    setH1Visible(true);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo mejorada */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-gray-900/90 z-10"></div>
        <img
          src="/assets/images/hero-bg1.png" // Reemplaza con tu nueva imagen atractiva
          alt="IA transformando negocios"
          className="w-full h-full object-cover object-center animate-fade-in brightness-[0.7] contrast-110"
          loading="eager"
        />
      </div>

      <div className="relative z-10 text-center px-4 text-white max-w-6xl mx-auto">
        {/* h1 con animación de slide-up */}
        <h1 
          className={`text-4xl md:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 ${h1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          Inteligencia Artificial <span className="text-cyan-300">en tu Empresa</span>
        </h1>
        
        {/* p con animación de typing */}
        <div className="h-20 flex items-center justify-center">
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 min-h-[60px]">
            {typedText}
            <span className={`inline-block w-2 h-8 bg-cyan-400 ml-1 transition-opacity duration-300 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
          </p>
        </div>

        <a
          href="#contacto"
          className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-600 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/30"
        >
          Consultoría Gratuita <FiArrowRight className="ml-2 animate-bounce-horizontal" />
        </a>
      </div>
    </section>
  );
};