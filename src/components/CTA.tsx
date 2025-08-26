'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Top left avatar - animated float */}
        <motion.div 
          className="absolute top-20 left-20 w-12 h-12 bg-slate-600 rounded-full border-2 border-slate-500"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        {/* Bottom left avatar - slow rotation */}
        <motion.div 
          className="absolute bottom-32 left-32 w-16 h-16 bg-blue-800 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        ></motion.div>
        
        {/* Center star/lightning symbol - pulse */}
        <motion.div 
          className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-blue-400 text-4xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          
        </motion.div>
        
        {/* Top right avatar - now blue instead of orange */}
        <motion.div 
          className="absolute top-32 right-32 w-14 h-14 bg-blue-600 rounded-full"
          animate={{ 
            x: [0, 8, 0],
            y: [0, -8, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        {/* Additional floating element */}
        <motion.div 
          className="absolute bottom-20 right-20 w-8 h-8 bg-cyan-500 rounded-full opacity-60"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 lg:px-8 xl:px-12 2xl:px-16">
        {/* Main headline */}
        <div className="mb-12">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[120px] font-medium text-white leading-[0.9] tracking-[-2px] font-pp-neue text-center mb-4">
            Comienza a crear sitios web
          </div>
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[120px] font-medium text-white leading-[0.9] tracking-[-2px] font-pp-neue text-center">
            que nadie puede ignorar
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary button */}
          <motion.div
            className="bg-white text-black px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-medium text-lg font-pp-neue relative overflow-hidden cursor-pointer"
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
                Iniciar proyecto
              </div>
              <div 
                className="absolute top-0 left-0 w-full"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateX(180deg)"
                }}
              >
                ¡Empezemos! 
              </div>
            </motion.div>
          </motion.div>
          
          {/* Secondary button with avatars - Glass effect */}
          <motion.button 
            className="px-8 py-4 rounded-xl font-medium flex items-center gap-3 text-lg font-pp-neue text-white border border-white/20 backdrop-blur-sm hover:border-white/30 transition-all duration-300 relative overflow-hidden" 
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
              className="flex -space-x-2"
              whileHover={{ 
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="w-6 h-6 bg-slate-600 rounded-full border-2 border-gray-800"></div>
              <div className="w-6 h-6 bg-blue-800 rounded-full border-2 border-gray-800"></div>
              <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-gray-800"></div>
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
                Ver nuestro trabajo
              </div>
              <div 
                className="absolute top-0 left-0 w-full"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                Ver nuestro trabajo
              </div>
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
