import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-md sticky top-0 z-50 border-b border-blue-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
              IAEmpresa
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-cyan-300 transition">Inicio</a>
            
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center hover:text-cyan-300 transition"
              >
                Servicios <FiChevronDown className="ml-1" />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white text-gray-800 rounded-md shadow-lg py-1 z-50">
                  <a href="#servicios" className="block px-4 py-2 hover:bg-blue-50">Todos los Servicios</a>
                  <a href="#analytics" className="block px-4 py-2 hover:bg-blue-50">Customer Analytics</a>
                  <a href="#vision" className="block px-4 py-2 hover:bg-blue-50">Visión por Computadora</a>
                </div>
              )}
            </div>

            <a href="#nosotros" className="hover:text-cyan-300 transition">Nosotros</a>
            <a href="#contacto" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full transition">
              Contacto
            </a>
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-blue-800">
            <div className="flex flex-col space-y-3 mt-4 px-4">
              <a href="/" className="px-3 py-2 rounded-md hover:bg-blue-700">Inicio</a>
              <a href="#servicios" className="px-3 py-2 rounded-md hover:bg-blue-700">Servicios</a>
              <a href="#nosotros" className="px-3 py-2 rounded-md hover:bg-blue-700">Nosotros</a>
              <a href="#contacto" className="px-3 py-2 rounded-md bg-cyan-500 text-white text-center">Contacto</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};