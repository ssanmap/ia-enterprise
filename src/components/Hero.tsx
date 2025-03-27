import { FiArrowRight } from "react-icons/fi";

export const Hero = () => {
    return (

        <section className="relative h-[90vh] flex items-center justify-center">
            <div
                className="absolute inset-0 bg-[url('/assets/images/hero2.jpg')] bg-cover bg-center"
                style={{ filter: 'brightness(0.4)' }}
            ></div>
            <div className="relative z-10 text-center px-4 text-white ">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Inteligencia Artificial en tu empresa
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                    Soluciones de IA y análisis de datos para la transformación digital
                </p>
                <a
                    href="#contacto"
                    className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                    Consultoría Gratuita <FiArrowRight className="ml-2" />
                </a>
            </div>
        </section>
    );
};