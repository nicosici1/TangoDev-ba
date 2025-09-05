'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // Mostrar navbar en la parte superior
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Ocultar navbar al hacer scroll hacia abajo
        setIsVisible(false);
      } else {
        // Mostrar navbar al hacer scroll hacia arriba
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ 
            duration: 0.3, 
            ease: "easeInOut" 
          }}
          className="fixed top-0 left-0 right-0 z-50 bg-transparent"
        >
          <div className="w-full px-8 lg:px-12 xl:px-12">
            <div className="flex items-center justify-between h-20 lg:h-24 xl:h-28">
              <span className="text-stone-100 text-2xl lg:text-3xl xl:text-4xl font-helvetica-neue">tangodev</span>
              

              {/* Desktop Navigation - Center */}
              <div className="hidden lg:flex items-center space-x-10 xl:space-x-12">
                <a href="#" className="text-white hover:text-blue-400 transition-colors underline underline-offset-4 font-medium text-lg">Inicio</a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors font-medium text-lg">Recursos</a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors font-medium text-lg">Precios</a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors font-medium text-lg">FAQ</a>
              </div>

              {/* Right side actions - Right Edge */}
              <div className="flex items-center space-x-4 lg:space-x-6">
                <a href="#" className="hidden lg:block text-white hover:text-blue-400 transition-colors font-medium text-base lg:text-lg">Iniciar sesión</a>
                <button className="hidden lg:block bg-white text-black px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-base lg:text-lg">
                  Comenzar
                </button>
                <button className="lg:hidden bg-white text-black w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <span className="text-sm font-bold">+</span>
                </button>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
