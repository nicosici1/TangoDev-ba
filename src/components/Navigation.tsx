'use client';

// import { useState } from 'react';

export default function Navigation() {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full px-8 lg:px-12 xl:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24 xl:h-28">  nm
          
          {/* Logo - Left Edge */}
          <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-white rounded-full"></div>
            <span className="text-stone-100 text-2xl lg:text-3xl xl:text-4xl font-helvetica-neue">
              <span className="font-bold">tango</span>
              <span className="font-medium">dev</span>
            </span>
           
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-10 xl:space-x-12">
            <a href="#" className="text-white hover:text-orange-400 transition-colors underline underline-offset-4 font-medium text-lg">Inicio</a>
            <a href="#" className="text-white hover:text-orange-400 transition-colors font-medium text-lg">Recursos</a>
            <a href="#" className="text-white hover:text-orange-400 transition-colors font-medium text-lg">Precios</a>
            <a href="#" className="text-white hover:text-orange-400 transition-colors font-medium text-lg">FAQ</a>
          </div>

          {/* Right side actions - Right Edge */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <a href="#" className="hidden lg:block text-white hover:text-orange-400 transition-colors font-medium text-base lg:text-lg">Iniciar sesión</a>
            <button className="hidden lg:block bg-white text-black px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-base lg:text-lg">
              Comenzar
            </button>
            <button className="lg:hidden bg-white text-black w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
              <span className="text-sm font-bold">+</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
