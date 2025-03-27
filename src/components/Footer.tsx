import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">IA Empresa</h3>
            <p className="text-gray-400">
              Transformación digital mediante inteligencia artificial y análisis de datos.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Machine Learning</a></li>
              <li><a href="#" className="hover:text-white transition">Análisis Predictivo</a></li>
              <li><a href="#" className="hover:text-white transition">Automatización</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition">Términos</a></li>
              <li><a href="#" className="hover:text-white transition">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Redes</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><FaGithub size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} IA Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};