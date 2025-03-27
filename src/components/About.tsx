import { FaMicrochip, FaCloud, FaShieldAlt } from "react-icons/fa";

export const About = () => {
  return (
    <section id="nosotros" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Innovación Tecnológica</h2>
            <p className="text-lg text-gray-600 mb-8">
              Somos pioneros en implementar soluciones de IA con tecnología de punta, 
              combinando lo mejor de modelos clásicos y modernos para ofrecer resultados reales.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <FaMicrochip className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Hardware Especializado</h3>
                  <p className="text-gray-600">
                    Utilizamos GPUs de última generación para entrenamiento acelerado de modelos.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <FaCloud className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Infraestructura Cloud</h3>
                  <p className="text-gray-600">
                    Despliegue seguro en AWS, Google Cloud y Azure con arquitecturas escalables.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <FaShieldAlt className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Seguridad de Datos</h3>
                  <p className="text-gray-600">
                    Cumplimiento con GDPR y protección avanzada de información sensible.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl p-1">
              <div className="bg-white rounded-xl p-6 h-full">
                <img 
                  src="/assets/images/tech.jpg" 
                  alt="Tecnología IA" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};