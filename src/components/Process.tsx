'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Process = () => {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  const steps = [
    {
      id: "01",
      title: "Análisis",
      subtitle: "Investigación y estrategia",
      description: "Comenzamos conociendo a fondo tu negocio, objetivos y audiencia. Analizamos tu competencia, definimos el alcance del proyecto y establecemos una estrategia digital clara que maximice el retorno de inversión.",
      deliverables: ["Brief estratégico completo", "Análisis competitivo", "Definición de objetivos medibles", "Propuesta técnica y cronograma"],
      duration: "1-2 días"
    },
    {
      id: "02", 
      title: "Estructura",
      subtitle: "Wireframes y flujos",
      description: "Diseñamos la estructura de información y los flujos de navegación. Creamos wireframes que optimizan la experiencia del usuario y facilitan la conversión, estableciendo las bases sólidas para el desarrollo.",
      deliverables: ["Wireframes detallados", "Arquitectura de información", "Flujos de conversión", "Prototipo navegable"],
      duration: "2-3 días"
    },
    {
      id: "03",
      title: "Diseño",
      subtitle: "Identidad visual",
      description: "Creamos una identidad visual que refleje la personalidad de tu marca y conecte con tu audiencia. Cada elemento está diseñado estratégicamente para generar confianza y maximizar las conversiones.",
      deliverables: ["Diseños finales responsivos", "Sistema de diseño completo", "Recursos gráficos", "Guía de estilos de marca"],
      duration: "3-5 días"
    },
    {
      id: "04",
      title: "Código", 
      subtitle: "Implementación técnica",
      description: "Transformamos los diseños en código limpio, escalable y optimizado. Implementamos funcionalidades avanzadas, integraciones necesarias y aseguramos que tu sitio cargue rápido y funcione perfectamente.",
      deliverables: ["Sitio web funcional", "Integraciones completadas", "Optimización SEO técnico", "Panel de administración"],
      duration: "1-3 semanas"
    },
    {
      id: "05",
      title: "Testing",
      subtitle: "Control de calidad", 
      description: "Realizamos pruebas exhaustivas en todos los dispositivos y navegadores. Verificamos la velocidad, funcionalidad y experiencia de usuario para garantizar que todo funcione perfectamente antes del lanzamiento.",
      deliverables: ["Reporte de testing completo", "Optimización de velocidad", "Corrección de errores", "Certificación de calidad"],
      duration: "2-3 días"
    },
    {
      id: "06",
      title: "Deploy",
      subtitle: "Puesta en marcha",
      description: "Lanzamos tu sitio web al mundo. Configuramos analytics, implementamos estrategias SEO y te capacitamos para gestionar el contenido. Incluimos soporte continuo para asegurar el éxito a largo plazo.",
      deliverables: ["Sitio web en producción", "Google Analytics configurado", "Capacitación personalizada", "Manual de uso y soporte"],
      duration: "1-2 días"
    }
  ];

  const handleStepClick = (stepId: string) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 w-full pt-20 lg:pt-32 pb-24 lg:pb-32">
        <div className="w-full px-4 lg:px-6 xl:px-8 2xl:px-12">
          
          {/* Header Section */}
       {/*    <div className="flex justify-between items-start mb-16 lg:mb-24">
            <div className="text-left">
              <div className="text-white/40 text-sm lg:text-base font-pp-neue tracking-wider mb-2">
                [ 02 ]
              </div>
            </div>
            <div className="text-right">
              <div className="text-white/60 text-sm lg:text-base font-pp-neue tracking-wider">
                TANGODEV
              </div>
            </div>
          </div> */}

          {/* Main Title - Consistent with other sections */}
          <div className="text-center mb-20 lg:mb-32">
            <div className="w-full mb-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-medium text-stone-200 leading-[0.95] tracking-[-1.2px] font-pp-neue text-center"
              >
                Metodología que transforma
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-medium text-stone-200 leading-[0.95] tracking-[-1.2px] font-pp-neue text-center"
              >
                ideas en productos digitales
              </motion.div>
            </div>
            
            <div className="max-w-[600px] mx-auto">
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-stone-200 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue text-center"
              >
                Seis etapas estructuradas que garantizan resultados excepcionales en cada proyecto de desarrollo web.
              </motion.p>
            </div>
          </div>

          {/* Steps List - Diagonal Layout - Full Width */}
          <div className="relative w-full">
            {/* Header Row */}
           {/*  <div className="flex justify-between items-center mb-16 lg:mb-24">
              <div className="text-white/60 text-lg lg:text-xl font-pp-neue tracking-wider">
                STAGE
              </div>
              <div className="text-white/40 text-lg lg:text-xl font-pp-neue tracking-wider">
                [ 00 ]
              </div>
            </div> */}

            {/* Line connecting header */}
{/*             <div className="w-full h-px bg-white/20 mb-12"></div>
 */}
            {/* Steps - Diagonal Staggered Layout */}
            <div className="relative space-y-0">
              {steps.map((step, index) => {
                const marginLeftValues = ['0%', '15%', '35%', '50%', '60%', '75%'];
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    className="group relative"
                    style={{ marginLeft: marginLeftValues[index] }}
                  >
                    <div className="py-6 lg:py-8">
                      <div 
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => handleStepClick(step.id)}
                      >
                        <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-white font-pp-neue tracking-tight group-hover:text-white/80 transition-colors">
                          {step.title}
                        </h3>
                        <div className="text-white/40 text-xl lg:text-2xl font-pp-neue tracking-wider">
                          [ {step.id} ]
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-0.5 bg-white/20 group-hover:bg-white/40 transition-colors duration-300"></div>
                    
                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedStep === step.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pb-6 px-4 lg:px-0">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                              {/* Description */}
                              <div className="lg:col-span-2">
                                <h4 className="text-stone-200 text-lg lg:text-xl font-medium mb-3 font-pp-neue">
                                  {step.subtitle}
                                </h4>
                                <p className="text-stone-400 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue mb-6">
                                  {step.description}
                                </p>
                                <div className="flex items-center gap-2 mb-4">
                                  <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                                  <span className="text-stone-400 text-base font-medium font-pp-neue">
                                    Duración: {step.duration}
                                  </span>
                                </div>
                              </div>
                              
                              {/* Deliverables */}
                              <div>
                                <h5 className="text-stone-200 text-lg lg:text-xl font-medium mb-4 font-pp-neue">
                                  Entregables
                                </h5>
                                <div className="space-y-3">
                                  {step.deliverables.map((deliverable, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                                      <span className="text-stone-400 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue">
                                        {deliverable}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Process Label at bottom left */}
           {/*  <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-0 left-0 text-white/60 text-xl lg:text-2xl font-pp-neue tracking-wider"
            >
              PROCESO
            </motion.div> */}
          </div>

          {/* Bottom Action */}
          <motion.div 
            className="text-center mt-20 lg:mt-32"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="bg-black border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300 font-medium text-lg font-pp-neue"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Iniciar proyecto
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Process;
