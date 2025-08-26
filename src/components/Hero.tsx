'use client';

import { motion } from 'framer-motion';
import Aurora from './Aurora';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Aurora effect - replacing static blue shapes */}
      <div className="absolute inset-0">
        <Aurora
          colorStops={["#0f172a", "#1e293b", "#0f172a"]}
          blend={0.8}
          amplitude={1.2}
          speed={0.8}
        />
      </div>

      {/* Grain texture overlay */}
   {/*    <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}></div>
      </div> */}

      {/* Content Grid - EXACT dimensions from reference */}
      <div className="relative z-10 w-full pt-28 lg:pt-62 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[432px_1fr] gap-8 lg:gap-32 items-stretch w-full min-h-[584px]">
          
          {/* Left Column - Navigation Links - EXACT 432px width */}
          <div className="hidden lg:block pl-8 lg:pl-10 xl:pl-14 pt-6">
            <div className="grid grid-cols-2 gap-1">
              <div className="space-y-1">
                <a href="#" className="block hover:text-white transition-colors font-pp-neue text-[21.3333px] font-medium leading-[29.8667px] text-stone-400">
                  Botones
                </a>
                <a href="#" className="block hover:text-white transition-colors font-pp-neue text-[21.3333px] font-medium leading-[29.8667px] text-stone-400">
                  Componentes
                </a>
                <a href="#" className="block hover:text-white transition-colors font-pp-neue text-[21.3333px] font-medium leading-[29.8667px] text-stone-400">
                  Transiciones
                </a>
                <a href="#" className="block hover:text-white transition-colors font-pp-neue text-[21.3333px] font-medium leading-[29.8667px] text-stone-400">
                  Animaciones
                </a>
                <a href="#" className="block hover:text-white transition-colors font-pp-neue text-[21.3333px] font-medium leading-[29.8667px] text-stone-400">
                  Cargadores
                </a>
              </div>
              <div className="space-y-1">
                <a href="#" className="block hover:text-white transition-colors font-pp-neue text-[21.3333px] font-medium leading-[29.8667px] text-stone-400">
                  Documentación
                </a>
                <a href="#" className="block hover:text-white transition-colors font-pp-neue text-[21.3333px] font-medium leading-[29.8667px] text-stone-400">
                  Herramientas
                </a>
                <a href="#" className="block hover:text-white transition-colors font-pp-neue text-[21.3333px] font-medium leading-[29.8667px] text-stone-400">
                  Referencias
                </a>
                <a href="#" className="block hover:text-white transition-colors font-pp-neue text-[21.3333px] font-medium leading-[29.8667px] text-stone-400">
                  Tutoriales
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content - EXACT 1269.36px width */}
          <div className="lg:col-start-2 px-4 lg:px-8 xl:px-12 2xl:px-16">
            {/* Main Heading - EXACT dimensions from reference */}
            <div className="max-w-7xl mb-8 lg:mb-16">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[114px] font-medium leading-[0.95] tracking-[-1.2px] text-gradient-ios">
                Creamos{' '}
                <span className="text-gradient-ios">servicios web</span>{' '}
                que{' '}
                <span className="text-gradient-ios">impactan.</span>{' '}
                {/* y perduran. */}
              </h1>
            </div>
       
            {/* CTA Buttons */}
            <div className="flex flex-row gap-3 lg:gap-4 mb-12 lg:mb-24">
              {/* Primary button with flip effect */}
              <motion.div
                className="bg-white text-black px-5 py-3 lg:px-8 lg:py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-base lg:text-lg font-pp-neue relative overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  initial={false}
                  whileHover={{
                    rotateX: 180,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div style={{ backfaceVisibility: "hidden" }}>
                    Ver proyectos
                  </div>
                  <div 
                    className="absolute top-0 left-0 w-full"
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateX(180deg)"
                    }}
                  >
                    ¡Veámoslos!
                  </div>
                </motion.div>
              </motion.div>

              {/* Secondary button with glass effect and flip */}
              <motion.button 
                className="px-5 py-3 lg:px-8 lg:py-4 rounded-lg font-medium flex items-center gap-2 lg:gap-3 text-base lg:text-lg font-pp-neue text-white border border-white/20 backdrop-blur-sm hover:border-white/20 transition-all duration-300 relative overflow-hidden" 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                }}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="flex -space-x-1 lg:-space-x-2"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-slate-600 rounded-full border-2 border-gray-800"></div>
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-blue-800 rounded-full border-2 border-gray-800"></div>
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-blue-600 rounded-full border-2 border-gray-800"></div>
                </motion.div>
                
                <motion.div
                  initial={false}
                  whileHover={{
                    rotateY: 180,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div style={{ backfaceVisibility: "hidden" }}>
                    Sobre nosotros
                  </div>
                  <div 
                    className="absolute top-0 left-0 w-full"
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                  >
                    Sobre nosotros
                  </div>
                </motion.div>
              </motion.button>
            </div>
       
            {/* Description */}
            <div className="max-w-[533.333px] mb-16 lg:mb-24">
              <p className="text-stone-200 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue">
                Nuestro servicio web nace de la necesidad de crear soluciones digitales que perduren. 
                Somos tu socio tecnológico, especializado en desarrollo web, APIs y servicios en la nube que crecen con tu negocio.
              </p>
            </div>
       
            {/* Mobile Navigation Links */}
            <div className="lg:hidden">
              <div className="grid grid-cols-2 gap-0">
                <div className="space-y-1">
                  <a href="#" className="block hover:text-white transition-colors font-pp-neue text-sm font-medium leading-relaxed text-[rgb(240,240,240)]">
                    Botones
                  </a>
                  <a href="#" className="block hover:text-white transition-colors font-pp-neue text-sm font-medium leading-relaxed text-[rgb(240,240,240)]">
                    Componentes
                  </a>
                  <a href="#" className="block hover:text-white transition-colors font-pp-neue text-sm font-medium leading-relaxed text-[rgb(240,240,240)]">
                    Transiciones
                  </a>
                  <a href="#" className="block hover:text-white transition-colors font-pp-neue text-sm font-medium leading-relaxed text-[rgb(240,240,240)]">
                    Animaciones
                  </a>
                  <a href="#" className="block hover:text-white transition-colors font-pp-neue text-sm font-medium leading-relaxed text-[rgb(240,240,240)]">
                    Cargadores
                  </a>
                </div>
                <div className="space-y-1">
                  <a href="#" className="block hover:text-white transition-colors font-pp-neue text-sm font-medium leading-relaxed text-[rgb(240,240,240)]">
                    Documentación
                  </a>
                  <a href="#" className="block hover:text-white transition-colors font-pp-neue text-base font-medium leading-relaxed text-[rgb(240,240,240)]">
                    Herramientas
                  </a>
                  <a href="#" className="block hover:text-white transition-colors font-pp-neue text-sm font-medium leading-relaxed text-[rgb(240,240,240)]">
                    Referencias
                  </a>
                  <a href="#" className="block hover:text-white transition-colors font-pp-neue text-sm font-medium leading-relaxed text-[rgb(240,240,240)]">
                    Tutoriales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom right visual element */}
 {/*      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="w-32 h-20 bg-gray-900 border border-gray-700 rounded-lg p-2">
          <div className="flex space-x-1 h-full">
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
            <div className="w-6 h-6 bg-orange-500 rounded"></div>
            <div className="w-6 h-6 bg-gray-500 rounded"></div>
            <div className="w-6 h-6 bg-orange-400 rounded"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
