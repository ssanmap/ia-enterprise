import { FaChartLine, FaRobot, FaEye, FaBrain, FaLightbulb, FaTable, FaCloud, FaSearch, FaDesktop } from "react-icons/fa";

const services = [
  {
    id: "landing",
    icon: <FaDesktop className="w-8 h-8" />,
    title: "Landing Page",
    description: "Diseño e implementación de página de aterrizaje React/Next.js con Tailwind, SEO básico y hosting gratuito.",
    price: "M$180.000",
    features: ["Diseño responsive", "Optimización SEO", "Deploy Vercel/Netlify"],
    color: "from-pink-500 to-pink-600"
  },
  {
    id: "analytics",
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Customer Analytics",
    description: "Segmentación avanzada de clientes y modelos predictivos para aumentar tus ventas.",
    price: "M$199.000",
    features: ["Análisis de comportamiento", "Personalización de ofertas", "Dashboard integrado"],
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "vision",
    icon: <FaEye className="w-8 h-8" />,
    title: "Visión Computacional",
    description: "Sistemas de inspección automatizada para control de calidad industrial.",
    price: "M$385.000",
    features: ["Detección de anomalías", "Análisis médico", "Reconocimiento facial"],
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "nlp",
    icon: <FaBrain className="w-8 h-8" />,
    title: "Procesamiento de Lenguaje",
    description: "Extracción inteligente de información desde documentos y conversaciones.",
    price: "M$300.000",
    features: ["Chatbots avanzados", "Análisis de sentimiento", "Clasificación automática"],
    color: "from-green-500 to-green-600"
  },
  {
    id: "ia-generativa",
    icon: <FaRobot className="w-8 h-8" />,
    title: "IA Generativa",
    description: "Modelos de lenguaje especializados para tu industria.",
    price: "M$278.000",
    features: ["Fine‑tuning de LLMs", "Generación de contenido", "Integración Cloud"],
    color: "from-cyan-500 to-cyan-600"
  },
  {
    id: "predictivo",
    icon: <FaLightbulb className="w-8 h-8" />,
    title: "Análisis Predictivo",
    description: "Anticipa tendencias y comportamientos con modelos avanzados.",
    price: "M$199.000",
    features: ["Predicción de demanda", "Mantenimiento predictivo", "Análisis de churn"],
    color: "from-orange-500 to-orange-600"
  },
  {
    id: "webscrapping",
    icon: <FaSearch className="w-8 h-8" />,
    title: "Web Scraping",
    description: "Extracción automatizada de datos públicos estratégicos.",
    price: "M$50.000",
    features: ["Monitoreo competencia", "Recolección de reviews", "Datos estructurados"],
    color: "from-red-500 to-red-600"
  },
  {
    id: "dashboards",
    icon: <FaTable className="w-8 h-8" />,
    title: "Power BI/Tableau",
    description: "Visualización profesional de datos para toma de decisiones.",
    price: "M$390.000",
    features: ["Reportes interactivos", "Actualización automática", "Integración multiplataforma"],
    color: "from-yellow-500 to-yellow-600"
  },
  {
    id: "webapps",
    icon: <FaCloud className="w-8 h-8" />,
    title: "Aplicaciones Web",
    description: "Soluciones a medida con Django/FastAPI para tu negocio.",
    price: "M$280.000",
    features: ["Desarrollo personalizado", "Integración con IA", "Alta disponibilidad"],
    color: "from-indigo-500 to-indigo-600"
  }
];

export const Services = () => (
  <section id="servicios" className="py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Servicios de IA
          </span>{" "}
          para tu negocio
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Soluciones tecnológicas personalizadas que impulsan tu ventaja competitiva
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div 
            key={service.id}
            className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100"
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
            
            <div className="p-6 flex-grow">
              <div className={`flex items-center justify-center w-14 h-14 mb-6 rounded-lg bg-gradient-to-br ${service.color} text-white`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="mb-6">
                <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                <span className="text-sm text-gray-500">/implementación</span>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className={`flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="px-6 pb-6">
              <a 
                href="#contacto" 
                className={`block w-full text-center bg-gradient-to-r ${service.color} hover:opacity-90 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform group-hover:-translate-y-1`}
              >
                Consultar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
