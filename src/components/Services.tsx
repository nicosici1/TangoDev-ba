'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  // Transformaciones para efectos parallax solo en las imágenes - valores más notorios
  const imageParallax1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const imageParallax2 = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const imageParallax3 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const imageParallax4 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const imageParallax5 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  
  // Efecto de escala para hacer el parallax más visible
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  return (
    <section className="relative min-h-screen bg-black overflow-hidden mt-32">
      {/* Grain texture overlay - matching Hero */}
  {/*     <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}></div>
      </div> */}

      {/* Content Container */}
      <div ref={containerRef} className="relative z-10 w-full pt-32 lg:pt-40 pb-24 lg:pb-32">
        <div className="w-full px-4 lg:px-8 xl:px-12 2xl:px-16">
          
          {/* Section Header */}
          <div className="text-center mb-20 lg:mb-32">
            <div className="w-full mb-8">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-medium text-stone-200 leading-[1.1] tracking-[-1.2px] font-pp-neue text-center">
                Servicios de desarrollo web
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-medium text-stone-200 leading-[1.1] tracking-[-1.2px] font-pp-neue text-center">
                que transforman ideas en realidad
              </div>
            </div>
            
            {/* Description */}
            <div className="max-w-[733.333px] mx-auto">
              <p className="text-stone-200 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue text-center">
                Desde sitios web corporativos hasta aplicaciones web complejas, 
                creamos soluciones digitales que impulsan el crecimiento de tu negocio.
              </p>
            </div>
          </div>

          {/* Services Grid - Full Width Layout: 2 arriba, 3 abajo */}
          <div className="space-y-8">
            
            {/* Top Row: 2 Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Card 1: Desarrollo de Sitios Web */}
              <div className="group relative rounded-2xl p-8 lg:p-10 transition-all duration-500" style={{backgroundColor: 'rgba(239, 238, 236, 0.06)', border: '1px solid rgba(239, 238, 236, 0.03)'}}>
                <h3 className="text-stone-200 text-2xl lg:text-3xl font-medium font-pp-neue mb-4">
                  Desarrollo de Sitios Web
                </h3>
                <p className="text-stone-400 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue mb-6">
                  Creamos sitios web modernos, responsivos y optimizados para SEO. Desde landing pages hasta sitios corporativos completos.
                </p>
                
                {/* Visual: Website Mockup con parallax */}
                <motion.div 
                  style={{ y: imageParallax1, scale: imageScale }}
                  className="w-full h-32 lg:h-40 rounded-xl mb-6 relative overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-3 w-4/5 h-4/5 relative shadow-lg">
                      {/* Browser mockup */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <div className="flex-1 bg-gray-200 rounded px-2 py-1 text-xs text-gray-600">tu-sitio.com</div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-8 rounded flex items-center justify-center text-white text-sm font-medium">
                        Tu Marca
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Card 2: Aplicaciones Web */}
              <div className="group relative rounded-2xl p-8 lg:p-10 transition-all duration-500" style={{backgroundColor: 'rgba(239, 238, 236, 0.06)', border: '1px solid rgba(239, 238, 236, 0.03)'}}>
                <h3 className="text-stone-200 text-2xl lg:text-3xl font-medium mb-3 font-pp-neue">
                  Aplicaciones Web
                </h3>
                <p className="text-stone-400 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue mb-6">
                  Desarrollamos aplicaciones web personalizadas con React, Next.js y tecnologías modernas para tu negocio.
                </p>
                
                {/* Visual: App Interface con parallax */}
                <motion.div 
                  style={{ y: imageParallax2, scale: imageScale }}
                  className="w-full h-32 lg:h-40 rounded-xl mb-6 relative overflow-hidden bg-gradient-to-br from-green-500/20 to-blue-500/20"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-3 w-4/5 h-4/5 relative shadow-lg">
                      {/* App interface mockup */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-800">Dashboard</div>
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-2 bg-green-400 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Row: 3 Services */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
              
              {/* Card 3: E-commerce */}
              <div className="group relative lg:col-span-1 rounded-2xl p-8 lg:p-10 transition-all duration-500" style={{backgroundColor: 'rgba(239, 238, 236, 0.06)', border: '1px solid rgba(239, 238, 236, 0.03)'}}>
                {/* Visual: E-commerce Interface con parallax */}
                <motion.div 
                  style={{ y: imageParallax3, scale: imageScale }}
                  className="w-full h-32 lg:h-40 rounded-xl mb-6 relative overflow-hidden bg-gradient-to-br from-orange-500/20 to-red-500/20"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-3 w-4/5 h-4/5 relative shadow-lg">
                      {/* Shopping interface */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-800">🛒 Tienda</div>
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">3</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-3 bg-gray-200 rounded"></div>
                        <div className="h-2 bg-orange-400 rounded w-2/3"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <h3 className="text-stone-200 text-2xl lg:text-3xl font-medium mb-3 font-pp-neue">
                  E-commerce
                </h3>
                <p className="text-stone-400 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue mb-6">
                  Tiendas online completas con carrito de compras, pagos seguros y gestión de inventario.
                </p>
              </div>

              {/* Card 4: Consultoría Técnica - Middle (Wider) */}
              <div className="group relative lg:col-span-2 rounded-2xl p-8 lg:p-10 transition-all duration-500" style={{backgroundColor: 'rgba(239, 238, 236, 0.06)', border: '1px solid rgba(239, 238, 236, 0.03)'}}>
                <h3 className="text-stone-200 text-2xl lg:text-3xl font-medium mb-3 font-pp-neue">
                  Consultoría Técnica
                </h3>
                <p className="text-stone-400 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue mb-6">
                  Te ayudamos a elegir las mejores tecnologías, optimizar tu sitio web existente y planificar el crecimiento digital de tu empresa.
                </p>
                
                {/* Visual: Analytics Dashboard con parallax */}
                <motion.div 
                  style={{ y: imageParallax4, scale: imageScale }}
                  className="w-full h-32 lg:h-40 rounded-xl mb-6 relative overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-3 w-4/5 h-4/5 relative shadow-lg">
                      {/* Analytics mockup */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-800">📊 Analytics</div>
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        <div className="h-4 bg-purple-400 rounded"></div>
                        <div className="h-3 bg-pink-400 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded"></div>
                        <div className="h-3 bg-purple-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Card 5: Mantenimiento */}
              <div className="group relative lg:col-span-1 rounded-2xl p-8 lg:p-10 transition-all duration-500" style={{backgroundColor: 'rgba(239, 238, 236, 0.06)', border: '1px solid rgba(239, 238, 236, 0.03)'}}>
                {/* Visual: Maintenance Tools con parallax */}
                <motion.div 
                  style={{ y: imageParallax5, scale: imageScale }}
                  className="w-full h-32 lg:h-40 rounded-xl mb-6 relative overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-3 w-4/5 h-4/5 relative shadow-lg">
                      {/* Tools interface */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-800">🔧 Mantenimiento</div>
                        <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-cyan-400 rounded w-full"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-2 bg-cyan-300 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <h3 className="text-stone-200 text-2xl lg:text-3xl font-medium mb-3 font-pp-neue">
                  Mantenimiento
                </h3>
                <p className="text-stone-400 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue mb-6">
                  Mantenemos tu sitio web actualizado, seguro y funcionando perfectamente las 24/7.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom CTA Section */}
          <div className="mt-8">
            <div className="rounded-2xl p-8 lg:p-10 text-center transition-all duration-500" style={{backgroundColor: 'rgba(239, 238, 236, 0.06)', border: '1px solid rgba(239, 238, 236, 0.03)'}}>
              <h3 className="text-white text-2xl lg:text-3xl font-medium font-pp-neue mb-4">
                ¿Listo para comenzar tu proyecto?
              </h3>
              <p className="text-stone-300 text-lg lg:text-xl font-medium font-pp-neue mb-6">
                Trabajemos juntos para crear algo extraordinario
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Iniciar Proyecto
                </button>
                <button className="px-8 py-3 border border-white/20 text-white rounded-lg font-medium hover:border-white/40 transition-colors">
                  Ver Portfolio
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

