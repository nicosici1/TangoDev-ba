'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Very subtle side gradients for depth without being noticeable */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-blue-900/5 via-transparent to-transparent"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-slate-900/5 via-transparent to-transparent"></div>
      </div>
      
      {/* Subtle center glow - very minimal */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full pt-28 lg:pt-32 pb-10 flex items-center justify-center min-h-screen">
        <div className="w-full px-4 lg:px-8 xl:px-12 2xl:px-16 max-w-6xl mx-auto">
          
          {/* Main headline - matching Hero typography */}
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[114px] font-medium leading-[0.95] tracking-[-1.2px] text-gradient-ios font-pp-neue mb-4">
              Creemos{' '}
              <span className="text-gradient-ios italic">algo</span>{' '}
              <span className="relative text-gradient-ios">
                extraordinario
                <div className="absolute inset-0 bg-white/8 rounded-full blur-xl -z-10 scale-125 animate-pulse"></div>
                <div className="absolute inset-0 bg-white/4 rounded-full blur-2xl -z-20 scale-150 animate-pulse delay-500"></div>
              </span>{' '}
              <span className="text-gradient-ios">juntos.</span>
            </h1>
          </div>

          {/* Description - matching Services style */}
          <div className="max-w-[733.333px] mx-auto text-center mb-8 lg:mb-12">
            <p className="text-stone-200 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue">
              Estás a solo un clic de transformar tu visión digital en realidad. 
              Trabajemos juntos para crear soluciones web que impulsen tu negocio.
            </p>
          </div>

          {/* CTA Buttons - matching Hero button style */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-8">
            
            {/* Primary button with flip effect - matching Hero */}
            <motion.div
              className="bg-white text-black px-6 py-4 lg:px-10 lg:py-5 rounded-lg hover:bg-gray-100 transition-colors font-medium text-base lg:text-lg font-pp-neue relative overflow-hidden cursor-pointer"
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
                  Iniciar Proyecto
                </div>
                <div 
                  className="absolute top-0 left-0 w-full"
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateX(180deg)"
                  }}
                >
                  ¡Empecemos!
                </div>
              </motion.div>
            </motion.div>

            {/* Secondary button with glass effect - matching Hero */}
            <motion.button 
              className="px-6 py-4 lg:px-10 lg:py-5 rounded-lg font-medium flex items-center gap-2 lg:gap-3 text-base lg:text-lg font-pp-neue text-white backdrop-blur-sm transition-all duration-300 relative overflow-hidden" 
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
              }}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: 'rgba(255, 255, 255, 0.2)'
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
                  Ver Portfolio
                </div>
                <div 
                  className="absolute top-0 left-0 w-full"
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                >
                  Ver Portfolio
                </div>
              </motion.div>
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
}
