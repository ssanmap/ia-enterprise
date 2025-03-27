import { FaChartLine, FaRobot, FaEye, FaBrain } from "react-icons/fa";

const services = [
  {
    id: "analytics",
    icon: <FaChartLine className="w-10 h-10 text-blue-600" />,
    title: "Customer Analytics",
    description: "Segmentación avanzada de clientes, personalización de ofertas y modelos de recomendación.",
    features: ["Análisis de comportamiento", "Modelos predictivos", "Dashboard integrado"]
  },
  {
    id: "vision",
    icon: <FaEye className="w-10 h-10 text-blue-600" />,
    title: "Visión por Computadora",
    description: "Detección de anomalías e inspección de calidad automatizada en imágenes médicas e industriales.",
    features: ["Reconocimiento facial", "Análisis de radiografías", "Control de calidad"]
  },
  {
    id: "nlp",
    icon: <FaBrain className="w-10 h-10 text-blue-600" />,
    title: "Procesamiento de Lenguaje Natural",
    description: "Análisis de sentimiento y extracción de información de documentos.",
    features: ["Chatbots avanzados", "Clasificación de textos", "Automatización"]
  },
  {
    id: "ia-generativa",
    icon: <FaRobot className="w-10 h-10 text-blue-600" />,
    title: "IA Generativa",
    description: "Soluciones con LLMs para contenido automatizado y personalizado.",
    features: ["Fine-tuning especializado", "Generación de contenido", "Integración Cloud"]
  }
];

export const Services = () => {
  return (
    <section id="servicios" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Nuestros Servicios de IA</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Soluciones tecnológicas a medida para tu empresa</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              id={service.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 mt-auto">
                <a 
                  href="#contacto" 
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
                >
                  Solicitar información
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};