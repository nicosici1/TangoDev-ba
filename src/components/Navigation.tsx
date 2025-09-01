'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full px-8 lg:px-12 xl:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24 xl:h-28">
          
          {/* Logo - Left Edge */}
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <Link href="/" className="text-stone-100 text-2xl lg:text-3xl xl:text-4xl font-helvetica-neue hover:text-orange-400 transition-colors">
              <span className="font-bold">tango</span>
              <span className="font-medium">dev</span>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-10 xl:space-x-12">
            <Link 
              href="/" 
              className={`relative font-medium text-lg transition-colors ${
                isActive('/') 
                  ? 'text-white underline underline-offset-4' 
                  : 'text-white hover:text-orange-400'
              }`}
            >
              Inicio
            </Link>
            <Link 
              href="/projects" 
              className={`relative font-medium text-lg transition-colors ${
                isActive('/projects') 
                  ? 'text-white underline underline-offset-4' 
                  : 'text-white hover:text-orange-400'
              }`}
            >
              Proyectos
            </Link>
            <Link 
              href="/pricing" 
              className={`relative font-medium text-lg transition-colors ${
                isActive('/pricing') 
                  ? 'text-white underline underline-offset-4' 
                  : 'text-white hover:text-orange-400'
              }`}
            >
              Precios
            </Link>
            <Link 
              href="/about" 
              className={`relative font-medium text-lg transition-colors ${
                isActive('/about') 
                  ? 'text-white underline underline-offset-4' 
                  : 'text-white hover:text-orange-400'
              }`}
            >
              Nosotros
            </Link>
          </div>

          {/* Right side actions - Right Edge */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <Link 
              href="/contact" 
              className={`hidden lg:block font-medium text-base lg:text-lg transition-colors ${
                isActive('/contact') 
                  ? 'text-white underline underline-offset-4' 
                  : 'text-white hover:text-orange-400'
              }`}
            >
              Contacto
            </Link>
            <Link href="/contact" className="hidden lg:block bg-white text-black px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-base lg:text-lg">
              Comenzar
            </Link>
            <button className="lg:hidden bg-white text-black w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
              <span className="text-sm font-bold">+</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
