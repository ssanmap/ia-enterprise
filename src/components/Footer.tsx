import { FaLinkedin, FaTwitter, FaGithub, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Columna 1 - Logo y descripción */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-white">Solver</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-300">IA</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Líderes en transformación digital mediante soluciones de inteligencia artificial y análisis de datos predictivos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/solveria" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/solveria_ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="https://github.com/solveria" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2 - Servicios */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                <FiArrowRight className="w-3 h-3" />
              </span>
              Nuestros Servicios
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#servicios" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-start"
                >
                  <span className="block w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-2"></span>
                  <span>Customer Analytics</span>
                </a>
              </li>
              <li>
                <a 
                  href="#servicios" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-start"
                >
                  <span className="block w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-2"></span>
                  <span>IA Generativa</span>
                </a>
              </li>
              <li>
                <a 
                  href="#servicios" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-start"
                >
                  <span className="block w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-2"></span>
                  <span>Visión por Computadora</span>
                </a>
              </li>
              <li>
                <a 
                  href="#servicios" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-start"
                >
                  <span className="block w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-2"></span>
                  <span>Procesamiento de Lenguaje</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                <FiArrowRight className="w-3 h-3" />
              </span>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#nosotros" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-start"
                >
                  <span className="block w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-2"></span>
                  <span>Sobre Nosotros</span>
                </a>
              </li>
              <li>
                <a 
                  href="#casos" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-start"
                >
                  <span className="block w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-2"></span>
                  <span>Casos de Estudio</span>
                </a>
              </li>
              <li>
                <a 
                  href="#blog" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-start"
                >
                  <span className="block w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-2"></span>
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a 
                  href="#contacto" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-start"
                >
                  <span className="block w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-2"></span>
                  <span>Contacto</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                <FiArrowRight className="w-3 h-3" />
              </span>
              Contacto
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="flex-shrink-0 mt-1 mr-3 text-cyan-400" />
                <span>Av. Andrés Bello 2425, Providencia<br />Santiago, Chile</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="flex-shrink-0 mr-3 text-cyan-400" />
                <a href="tel:+56223456789" className="hover:text-cyan-400 transition-colors">+56 2 2345 6789</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="flex-shrink-0 mr-3 text-cyan-400" />
                <a href="mailto:contacto@solveria.cl" className="hover:text-cyan-400 transition-colors">contacto@solveria.cl</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider y copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} SolverIA. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">Términos de Servicio</a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">Política de Privacidad</a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};