'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative overflow-hidden">
      {/* Puente visual para conectar con el componente de arriba */}
      <div className="absolute top-0 left-0 right-0 h-16"></div>
      
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-white/3 rounded-full blur-2xl"></div>
      </div>

      {/* Contenido principal del footer */}
      <div className="relative z-20 w-full px-2 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-16 pb-8">
        {/* Grid de contenido principal - 3 columnas juntas + newsletter más ancho */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_2fr] gap-8 lg:gap-12 mb-12">
          
          {/* Columna 1 - SITEMAP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h4 className="text-sm font-medium text-white/60 tracking-wider uppercase mb-8 font-pp-neue">SITEMAP</h4>
            <div className="space-y-4">
              <a href="#" className="block text-white hover:text-white/70 transition-colors duration-300 text-[21.3333px] font-medium leading-[29.8667px] font-pp-neue">Inicio</a>
              <a href="#" className="block text-white hover:text-white/70 transition-colors duration-300 text-[21.3333px] font-medium leading-[29.8667px] font-pp-neue">Precios</a>
              <a href="#" className="block text-white hover:text-white/70 transition-colors duration-300 text-[21.3333px] font-medium leading-[29.8667px] font-pp-neue">Recursos <span className="text-xs text-white/40">164</span></a>
              <a href="#" className="block text-white hover:text-white/70 transition-colors duration-300 text-[21.3333px] font-medium leading-[29.8667px] font-pp-neue">Ingresar</a>
              <a href="#" className="block text-white hover:text-white/70 transition-colors duration-300 text-[21.3333px] font-medium leading-[29.8667px] font-pp-neue">Registrarse</a>
            </div>
          </motion.div>

          {/* Columna 2 - COMPANY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-sm font-medium text-white/60 tracking-wider uppercase mb-8 font-pp-neue">EMPRESA</h4>
            <div className="space-y-4">
              <a href="#" className="block text-white hover:text-white/70 transition-colors duration-300 text-[21.3333px] font-medium leading-[29.8667px] font-pp-neue">Licencias</a>
              <a href="#" className="block text-white hover:text-white/70 transition-colors duration-300 text-[21.3333px] font-medium leading-[29.8667px] font-pp-neue">Términos y Condiciones</a>
              <a href="#" className="block text-white hover:text-white/70 transition-colors duration-300 text-[21.3333px] font-medium leading-[29.8667px] font-pp-neue">Política de Privacidad</a>
              <a href="#" className="block text-white hover:text-white/70 transition-colors duration-300 text-[21.3333px] font-medium leading-[29.8667px] font-pp-neue">Política de Cookies</a>
            </div>
          </motion.div>

          {/* Columna 3 - CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-sm font-medium text-white/60 tracking-wider uppercase mb-8 font-pp-neue">CONTACTO</h4>
            <div className="space-y-4">
              <a href="#" className="block text-white hover:text-white/70 transition-colors duration-300 text-[21.3333px] font-medium leading-[29.8667px] font-pp-neue">Preguntas Frecuentes</a>
              <a href="#" className="block text-white hover:text-white/70 transition-colors duration-300 text-[21.3333px] font-medium leading-[29.8667px] font-pp-neue">Soporte</a>
            </div>
          </motion.div>

          {/* Columna 4 - NEWSLETTER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-sm font-medium text-white/60 tracking-wider uppercase mb-8 font-pp-neue">NEWSLETTER</h4>
            <div className="space-y-6">
              <p className="text-white text-[21.3333px] font-medium leading-[29.8667px] font-pp-neue">
                Ya llegaste hasta aquí, mejor suscríbete.
              </p>
              <div className="flex gap-4">
                <input 
                  type="text" 
                  placeholder="Nombre"
                  className="flex-1 bg-transparent border-b border-white/30 text-white placeholder:text-white/50 py-3 focus:outline-none focus:border-white transition-colors text-[21.3333px] font-medium leading-[29.8667px] font-pp-neue"
                />
                <input 
                  type="email" 
                  placeholder="juan.perez@tangodev.com"
                  className="flex-1 bg-transparent border-b border-white/30 text-white placeholder:text-white/50 py-3 focus:outline-none focus:border-white transition-colors text-[21.3333px] font-medium leading-[29.8667px] font-pp-neue"
                />
                <button className="bg-white text-black px-5 py-3 lg:px-8 lg:py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-base lg:text-lg font-pp-neue whitespace-nowrap">
                  Suscribirse
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Texto grande "tangodev" y flecha */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="font-pp-neue text-[8rem] md:text-[12rem] lg:text-[22rem] text-white leading-none tracking-tighter select-none pointer-events-none"
          >
            <span className="font-bold">tango</span>
            <span className="font-semibold">dev</span>
          </motion.div>
          
          {/* Flecha diagonal hacia arriba-izquierda en la misma línea */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="absolute top-0 right-0 font-pp-neue text-[2rem] md:text-[12rem] lg:text-[22rem] text-white font-bold select-none pointer-events-none leading-none"
          >
            ↖
          </motion.div>
        </div>

        {/* Línea divisoria con efecto glass */}
       {/*  <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16"
        /> */}

        {/* Footer inferior con copyright - estilo Osmo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
        >
          <div className="text-white/90 text-sm font-pp-neue">
            ©{currentYear} TANGODEV. TODOS LOS DERECHOS RESERVADOS.
          </div>
          <div className="flex items-center gap-6 text-white/90 text-sm font-pp-neue">
            <span>LINKEDIN.</span>
            <span>INSTAGRAM.</span>
            <span>X/TWITTER</span>
          </div>
          <div className="text-white/90 text-sm font-pp-neue">
            HECHO CON ❤️ EN ARGENTINA
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 