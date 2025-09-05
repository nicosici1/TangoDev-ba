'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

const Showcase = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Subilo Dashboard",
      description: "Proyecto personal desarrollado por el equipo. Plataforma completa para músicos que permite gestionar envíos, subir tracks y compartir música profesionalmente.",
      background: "url('/imgs/pilares.jpg')",
      category: "Proyecto Personal",
      details: [
        "Dashboard completo para músicos",
        "Gestión de tracks y envíos",
        "Links personalizados para compartir",
        "Interfaz moderna y intuitiva"
      ]
    },
    {
      id: 2,
      title: "E-commerce Avanzado",
      description: "Ejemplo de nuestras capacidades en e-commerce. Plataformas completas con pasarelas de pago, gestión de inventario y analytics en tiempo real.",
      background: "url('/imgs/back.jpg')",
      category: "Capacidad Técnica",
      details: [
        "Plataformas completas de e-commerce",
        "Integración con pasarelas de pago",
        "Gestión de inventario y pedidos",
        "Analytics y reportes avanzados"
      ]
    },
    {
      id: 3,
      title: "SaaS & Aplicaciones Web",
      description: "Desarrollamos aplicaciones web escalables con backends robustos, sistemas de autenticación y paneles de administración avanzados.",
      background: "url('/imgs/escalera.jpg')",
      category: "Desarrollo Web",
      details: [
        "Aplicaciones web escalables",
        "Backend con APIs RESTful",
        "Sistemas de autenticación",
        "Paneles de administración"
      ]
    },
    {
      id: 4,
      title: "Landing Pages de Alto Impacto",
      description: "Sitios web optimizados para conversión, con diseños modernos, animaciones fluidas y SEO técnico implementado desde el desarrollo.",
      background: "url('/imgs/window.jpg')",
      category: "Web Design & Development",
      details: [
        "Diseño responsive y moderno",
        "Optimización para conversiones",
        "SEO técnico implementado",
        "Animaciones y microinteracciones"
      ]
    }
  ];

  const handleCardClick = (cardId: number) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  // Calcular el ancho de la card expandida para uso completo del ancho
  const getExpandedCardWidth = () => {
    const totalCards = services.length;
    const normalCardWidth = 450; // Ancho más grande para cards normales
    const gap = 32; // 8 * 4 = 32px gap
    const availableWidth = window.innerWidth > 1024 ? window.innerWidth - 128 : 1400; // Full width minus padding
    const totalGaps = (totalCards - 1) * gap;
    const otherCardsWidth = (totalCards - 1) * normalCardWidth;
    const expandedWidth = availableWidth - otherCardsWidth - totalGaps;
    return Math.max(expandedWidth, 700);
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 w-full pt-32 lg:pt-40 pb-24 lg:pb-32">
        <div className="w-full px-4 lg:px-8 xl:px-12 2xl:px-16">
          
          {/* Section Header - Enfoque en capacidades */}
          <div className="text-center mb-20 lg:mb-32">
            <div className="w-full mb-8">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-medium text-stone-200 leading-[0.95] tracking-[-1.2px] font-helvetica-neue text-center">
                El tipo de proyectos que
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-medium text-stone-200 leading-[0.95] tracking-[-1.2px] font-helvetica-neue text-center">
                creamos para ti
              </div>
            </div>
            
            {/* Subtítulo explicativo */}
            <div className="max-w-[800px] mx-auto">
              <p className="text-stone-200 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue text-center">
                Somos una agencia nueva con desarrolladores experimentados. Estos son ejemplos de nuestras capacidades y proyectos desarrollados por el equipo.
              </p>
            </div>
          </div>

          {/* Cards Container - Full Width */}
          <div className="relative w-full">
            <div className={`flex transition-all duration-700 gap-6 lg:gap-2 w-full ${expandedCard ? 'justify-start' : 'justify-center'}`}>
            {services.map((service, index) => {
              const isExpanded = expandedCard === service.id;
              const expandedIndex = expandedCard ? services.findIndex(s => s.id === expandedCard) : -1;
              
              // Determinar si esta card debe tener margen negativo para pegarse a la expandida
              let marginLeft = 0;
              if (expandedCard && !isExpanded) {
                if (index === expandedIndex + 1) {
                  // La card que está justo después de la expandida se pega a ella
                  marginLeft = -16; // -gap-4 (16px) en lugar de -32px para dejar un pequeño padding
                }
              }
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{
                    width: isExpanded ? getExpandedCardWidth() : 450,
                    flexShrink: isExpanded ? 0 : 1,
                    marginLeft: marginLeft,
                  }}
                  transition={{ 
                    duration: 0.7, 
                    ease: "easeInOut",
                    delay: index * 0.1 
                  }}
                  className={`group relative h-[600px]`}
                >
                  <div 
                    className={`relative overflow-hidden cursor-pointer transition-all duration-500 h-full rounded-2xl`}
                    onClick={() => handleCardClick(service.id)}
                  >
                    {/* Background with image */}
                    <div 
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                      style={{ 
                        background: service.background,
                        backgroundSize: isExpanded ? 'cover' : 'cover',
                        backgroundPosition: isExpanded ? 'center' : '30% center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    
                    {/* Overlay gradient - más sutil arriba, más fuerte abajo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
                    
                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-6">
                      {/* Top right arrow/close button */}
                      <div className="absolute top-4 right-4 z-10">
                        <motion.div
                          className={`backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                            isExpanded
                              ? 'w-10 h-10 bg-red-500/20 hover:bg-red-500/30'
                              : 'w-10 h-10 bg-gray-300/90 hover:bg-gray-200/90'
                          }`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isExpanded ? (
                            <X className="w-6 h-6 text-white" />
                          ) : (
                            <div className="w-6 h-6 text-black flex items-center justify-center transform -rotate-45">
                              <ArrowRight className="w-5 h-5" />
                            </div>
                          )}
                        </motion.div>
                      </div>
                      
                      {/* Top section */}
                      <div>
                      {/*   <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                          <span className="text-sm lg:text-base font-medium text-white/90 font-pp-neue">
                            {service.category}
                          </span>
                        </div>  */}
                        {/* Título comentado temporalmente
                        <h3 className="text-white text-xl lg:text-2xl font-medium mb-3 font-pp-neue">
                          {service.title}
                        </h3>
                        */}
                        {/* Descripción comentada temporalmente
                        <p className="text-gray-300 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue mb-6">
                          {service.description}
                        </p>
                        */}
                        
                        {/* Expanded content - Horizontal layout */}
                        {/* Contenido expandido comentado temporalmente
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                              className="mt-6 overflow-hidden"
                            >
                              <h4 className="text-lg lg:text-xl font-medium text-white mb-3 font-pp-neue">
                                Características principales:
                              </h4>
                              <div className="grid grid-cols-2 gap-4">
                                {service.details.map((detail, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.05 }}
                                    className="flex items-center text-gray-300 font-pp-neue font-medium text-base lg:text-[21.3333px] leading-relaxed"
                                  >
                                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-2 flex-shrink-0"></div>
                                    {detail}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        */}
                      </div>
                      
                      {/* Bottom section - Title and Category */}
                      <div className="relative z-10">
                        {/* Overlay adicional para mejor legibilidad */}
                        <div className="absolute -left-6 -right-6 -bottom-6 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
                        
                        <div className="relative z-20">
                          <span className="text-xs lg:text-sm font-normal text-stone-400 font-pp-neue uppercase tracking-wider mb-2 block">
                            {service.category}
                          </span>
                          <h3 className="text-stone-200 text-xl lg:text-2xl xl:text-3xl font-medium font-pp-neue leading-tight">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              );
            })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Showcase;
