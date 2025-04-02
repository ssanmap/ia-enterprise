import { FaLightbulb, FaChartLine, FaUsers, FaHandshake } from "react-icons/fa";

export const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Encabezado con tipografía elegante */}
        <div className="text-center mb-20">
          <span className="font-serif text-lg text-cyan-600 tracking-widest uppercase block mb-3">
            Liderando la Revolución Tecnológica
          </span>
          <h2 className="text-5xl font-light text-gray-900 mb-6 leading-tight">
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-500">
              Innovación con Propósito
            </span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="font-serif text-xl text-gray-600 leading-relaxed">
              En la intersección entre ciencia de datos y estrategia empresarial, desarrollamos 
              soluciones de IA que trascienden lo técnico para generar <span className="italic">impacto tangible</span>.
            </p>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            {/* Texto principal con fuente serif para elegancia */}
            <div className="prose prose-xl font-serif text-gray-600 mb-14 leading-relaxed">
              <p className="text-2xl font-light mb-8 text-gray-700">
                Como <span className="font-medium">referentes regionales</span> en implementación de inteligencia artificial, 
                hemos perfeccionado un enfoque único que combina:
              </p>
              
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-3">▸</span>
                  <span>Diagnóstico de <span className="font-semibold">madurez digital</span> personalizado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-3">▸</span>
                  <span>Arquitecturas <span className="font-semibold">escalables</span> y centradas en datos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-3">▸</span>
                  <span>Programas de <span className="font-semibold">capacitación continua</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-3">▸</span>
                  <span>Rutas de adopción <span className="font-semibold">Data-Driven</span></span>
                </li>
              </ul>
              
              <p className="mt-8 text-xl">
                Nuestro equipo -compuesto por <span className="font-medium">doctores en machine learning</span>, ingenieros 
                especializados y consultores estratégicos- opera como extensión de su organización.
              </p>
            </div>
            
            {/* Tarjetas con tipografía moderna */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                    <FaLightbulb className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium ml-4 font-sans">Excelencia Certificada</h3>
                </div>
                <p className="text-gray-600 text-sm font-sans">
                  Alianza estratégica con NVIDIA, AWS AI y Google Cloud AI. Certificados en tecnologías emergentes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-cyan-50 p-3 rounded-lg">
                    <FaChartLine className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-medium ml-4 font-sans">Impacto Medible</h3>
                </div>
                <p className="text-gray-600 text-sm font-sans">
                  87% de clientes reportan aumento en eficiencia operacional durante el primer año.
                </p>
              </div>
            </div>
          </div>
          
          {/* Sección de imagen con overlay elegante */}
          <div className="mt-16 lg:mt-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/40 to-cyan-400/40 rounded-2xl opacity-70 group-hover:opacity-90 blur transition duration-300"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg h-full">
                <img 
                  src="/assets/images/tech.jpg" 
                  alt="Equipo colaborando" 
                  className="w-full h-full object-cover aspect-square"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-8">
                  <div>
                    <span className="font-serif text-white/80 text-sm mb-2 block">Caso de Éxito</span>
                    <h3 className="text-white font-serif text-2xl mb-2">Transformación Bancaria</h3>
                    <p className="text-white/80 font-sans text-sm">
                      Implementación de modelos predictivos que redujeron fraudes en 62% para grupo financiero líder.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA con tipografía híbrida */}
        <div className="mt-24 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 p-10 md:p-12 bg-gradient-to-r from-blue-600/5 to-cyan-500/5">
              <span className="font-serif text-blue-600 text-lg mb-3 block">Próximo Paso</span>
              <h3 className="text-3xl font-light text-gray-900 mb-4 font-serif">
                <span className="font-bold">Evaluación inicial</span> sin costo
              </h3>
              <p className="text-gray-600 max-w-lg font-serif text-lg">
                Nuestro equipo analizará sus necesidades y propondrá una hoja de ruta personalizada.
              </p>
            </div>
            <div className="md:w-1/3 p-10 md:p-12 flex items-center justify-center bg-gray-50">
              <a 
                href="#contacto" 
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition font-sans"
              >
                Iniciar Conversación
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};