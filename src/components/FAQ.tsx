'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, ArrowRight } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const faqs = [
    {
      question: "¿Qué servicios de desarrollo web ofrecen?",
      answer: "Ofrecemos desarrollo completo de sitios web, aplicaciones web, e-commerce, y consultoría técnica. Desde landing pages hasta plataformas SaaS complejas, creamos soluciones digitales que impulsan el crecimiento de tu negocio con tecnologías modernas y escalables."
    },
    {
      question: "¿Cuánto tiempo toma desarrollar un proyecto web?",
      answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Una landing page simple puede tomar 1-2 semanas, mientras que una aplicación web completa puede requerir 1-3 meses. Trabajamos con metodologías ágiles para entregar resultados rápidos sin comprometer la calidad."
    },
    {
      question: "¿Trabajan con empresas grandes o pequeñas?",
      answer: "Trabajamos con empresas de todos los tamaños, desde startups hasta corporaciones. Nuestra metodología se adapta a cada cliente, ofreciendo soluciones personalizadas que se ajustan a su presupuesto, timeline y objetivos específicos de negocio."
    },
    {
      question: "¿Por qué elegir TangoDev para mi proyecto?",
      answer: "Somos una agencia nueva con desarrolladores experimentados. Combinamos creatividad, tecnología de vanguardia y metodologías probadas para crear experiencias digitales excepcionales. Nuestro enfoque está en resultados medibles y relaciones a largo plazo con nuestros clientes."
    },
    {
      question: "¿Ofrecen mantenimiento y soporte post-lanzamiento?",
      answer: "Sí, ofrecemos planes de mantenimiento continuo que incluyen actualizaciones de seguridad, optimizaciones de rendimiento, backups automáticos y soporte técnico 24/7. Esto asegura que tu sitio web funcione perfectamente y se mantenga actualizado."
    },
    {
      question: "¿Cómo garantizan la calidad del código y la seguridad?",
      answer: "Implementamos las mejores prácticas de desarrollo, realizamos testing exhaustivo en múltiples dispositivos y navegadores, y seguimos estándares de seguridad web. Además, utilizamos herramientas de análisis de código y realizamos auditorías de seguridad antes de cada lanzamiento."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-black overflow-hidden group"
    >
      {/* Background image with rocky texture */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-no-repeat opacity-30 transition-opacity duration-700"
          style={{
            backgroundImage: "url('/imgs/building.jpg')",
            backgroundPosition: 'center 40%',
            filter: 'grayscale(100%) contrast(1.2) brightness(0.8)'
          }}
        />
        {/* Hover effect - subtle glow on building that follows mouse */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
          style={{
            backgroundImage: "url('/imgs/building.jpg')",
            backgroundPosition: 'center 40%',
            filter: 'grayscale(100%) contrast(1.5) brightness(1.2)',
            maskImage: `radial-gradient(ellipse 200px 200px at ${mousePosition.x}% ${mousePosition.y}%, black 0%, transparent 70%)`,
            WebkitMaskImage: `radial-gradient(ellipse 200px 200px at ${mousePosition.x}% ${mousePosition.y}%, black 0%, transparent 70%)`
          }}
        />
        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/90"></div>
      </div>

      {/* Main content - Full width layout */}
      <div className="relative z-10 w-full pt-20 lg:pt-32 pb-16 lg:pb-24">
        <div className="w-full px-4 lg:px-8 xl:px-12 2xl:px-16">
          
          {/* Full width grid - exactly like reference */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Left column - Half width */}
            <div className="flex flex-col justify-start">
              {/* FAQS label */}
                                      <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="text-stone-400 text-sm lg:text-base font-pp-neue font-medium tracking-wider uppercase mb-4"
                        >
                          FAQS
                        </motion.div>
              
              {/* Main title - takes most of left half */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-medium text-white leading-[0.95] tracking-[-1.2px] font-pp-neue mb-8"
              >
                Preguntas frecuentes
              </motion.h2>
              
              {/* Tabs */}
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white/10 rounded-lg text-white font-medium text-sm lg:text-base font-pp-neue transition-colors">
                  General
                </button>
                <button className="px-4 py-2 text-white/60 hover:text-white font-medium text-sm lg:text-base font-pp-neue transition-colors">
                  Soporte
                </button>
                <button className="px-4 py-2 text-white/60 hover:text-white font-medium text-sm lg:text-base font-pp-neue transition-colors">
                  Cuenta
                </button>
              </div>
            </div>
            
            {/* Right column - Half width */}
            <div className="space-y-0 pt-16 lg:pt-72">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-6 lg:py-8 text-left hover:text-white/80 transition-colors duration-300"
                >
                  <h3 className="text-lg lg:text-xl xl:text-2xl font-medium text-white font-pp-neue pr-8">
                    {faq.question}
                  </h3>
                  
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <X className="w-6 h-6 text-white" />
                    ) : (
                      <Plus className="w-6 h-6 text-white" />
                    )}
                  </motion.div>
                </button>

                {/* Separator line */}
                <div className="w-full h-px bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="py-6 lg:py-8">
                        <p className="text-stone-300 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default FAQ;
