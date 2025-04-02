import { FaRobot, FaChartLine, FaDatabase, FaLightbulb, FaCloud, FaShieldAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

type FeatureItem = {
  icon: JSX.Element;
  title: string;
  description: string;
  gradient: string;
};

export const Features = () => {
  const features: FeatureItem[] = [
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "Automatización con IA",
      description: "Reducción de hasta 70% en procesos manuales mediante workflows inteligentes",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Analítica Predictiva",
      description: "Modelos con 92% de precisión para anticipar tendencias del mercado",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "Big Data",
      description: "Procesamiento de petabytes de datos en arquitecturas distribuidas",
      gradient: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "IA Generativa",
      description: "Soluciones con LLMs para contenido personalizado y automatizado",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: "Cloud Computing",
      description: "Despliegue escalable en AWS, Azure y Google Cloud",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Seguridad de Datos",
      description: "Protección de información sensible con cifrado end-to-end",
      gradient: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="servicios">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-cyan-600 uppercase">
            Tecnología de Vanguardia
          </span>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Soluciones Especializadas
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Implementamos las últimas innovaciones en IA para impulsar tu ventaja competitiva
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            Explorar todos los servicios <FiArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, gradient }: FeatureItem) => (
  <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
    
    <div className="p-8 h-full flex flex-col">
      <div className={`flex items-center justify-center w-14 h-14 mb-6 rounded-lg bg-gradient-to-br ${gradient} text-white`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      
      <a 
        href="#contacto" 
        className={`inline-flex items-center text-sm font-medium text-${gradient.split(' ')[1].replace('to-', '')} hover:underline`}
      >
        Saber más <FiArrowRight className="ml-1" />
      </a>
    </div>
  </div>
);