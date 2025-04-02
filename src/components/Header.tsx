import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-md sticky top-0 z-50 border-b border-blue-700/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-3xl font-bold">
              <span className="text-white">Solver</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-300">IA</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-cyan-300 transition-colors duration-300 font-medium">Inicio</a>
            
            <a 
              href="#servicios" 
              className="hover:text-cyan-300 transition-colors duration-300 font-medium"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              Servicios
            
            </a>

            <a href="#nosotros" className="hover:text-cyan-300 transition-colors duration-300 font-medium">Nosotros</a>
            <a href="#contacto" className="bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-600 hover:to-cyan-500 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 font-medium">
              Contacto
            </a>
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-gradient-to-b from-blue-800 to-blue-900">
            <div className="flex flex-col space-y-3 mt-4 px-4">
              <a 
                href="/" 
                className="px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#servicios" 
                className="px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </a>
              <a 
                href="#nosotros" 
                className="px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </a>
              <a 
                href="#contacto" 
                className="px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 text-white text-center font-medium shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};