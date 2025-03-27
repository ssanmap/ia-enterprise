import { FaRobot, FaChartLine, FaDatabase } from "react-icons/fa";
import { FeatureItem } from "../types/feature";

export const Features = () => {
  const features: FeatureItem[] = [
    {
      icon: <FaRobot className="w-12 h-12 text-blue-600" />,
      title: "Automatización con IA",
      description: "Procesos inteligentes para reducir costos"
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-blue-600" />,
      title: "Analítica Predictiva",
      description: "Anticipa tendencias con datos históricos"
    },
    {
      icon: <FaDatabase className="w-12 h-12 text-blue-600" />,
      title: "Big Data",
      description: "Manejo de grandes volúmenes de información"
    }
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto px-4" id="servicios">
      <h2 className="text-3xl font-bold text-center mb-12">Nuestra Tecnología</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: FeatureItem) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);