'use client';

export default function Services() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden mt-32">
      {/* Grain texture overlay - matching Hero */}
  {/*     <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}></div>
      </div> */}

      {/* Content Container */}
      <div className="relative z-10 w-full pt-32 lg:pt-40 pb-24 lg:pb-32">
        <div className="w-full px-4 lg:px-8 xl:px-12 2xl:px-16">
          
          {/* Section Header - estilo español */}
          <div className="text-center mb-20 lg:mb-32">
            <div className="w-full mb-8">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-medium text-stone-200 leading-[1.1] tracking-[-1.2px] font-pp-neue text-center">
                Las herramientas que impulsan
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-medium text-stone-200 leading-[1.1] tracking-[-1.2px] font-pp-neue text-center">
                sitios web extraordinarios
              </div>
            </div>
            
            {/* Description matching Hero style */}
            <div className="max-w-[733.333px] mx-auto">
              <p className="text-stone-200 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue text-center">
                Cada herramienta está diseñada para acelerar tu flujo de trabajo y elevar la calidad de tus proyectos. 
                Desde componentes listos hasta fragmentos de código, todo pensado para desarrolladores que buscan excelencia.
              </p>
            </div>
          </div>

          {/* Services Grid - Full Width Layout: 2 arriba, 3 abajo */}
          <div className="space-y-8">
            
            {/* Top Row: 2 Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Card 1: Componentes Listos para Usar */}
              <div className="group relative rounded-2xl p-8 lg:p-10 transition-all duration-500" style={{backgroundColor: 'rgba(239, 238, 236, 0.06)', border: '1px solid rgba(239, 238, 236, 0.03)'}}>
                {/* Content */}
                <h3 className="text-stone-200 text-2xl lg:text-3xl font-medium font-pp-neue">
                  Componentes Listos para Usar
                </h3>
                <p className="text-stone-400 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue mb-6">
                  Componentes pre-construidos y personalizables que puedes copiar a Webflow o usar el HTML/CSS. No más construir desde cero.
                </p>
                
                {/* Visual: UI Components Collage */}
                <div className="w-full h-32 lg:h-40 rounded-xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-2 p-4 w-full">
                      {/* UI Component previews */}
                      <div className="bg-white rounded-lg p-2 text-xs text-gray-800 font-medium text-center">Volver Arriba</div>
                      <div className="bg-white rounded-lg p-2 text-xs text-gray-800 font-medium text-center">Slider</div>
                      <div className="bg-white rounded-lg p-2 text-xs text-gray-800 font-medium text-center">Formulario</div>
                      <div className="bg-white rounded-lg p-2 text-xs text-gray-800 font-medium text-center">Botón</div>
                      <div className="bg-white rounded-lg p-2 text-xs text-gray-800 font-medium text-center">Card</div>
                      <div className="bg-white rounded-lg p-2 text-xs text-gray-800 font-medium text-center">Nav</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Contenido Educativo */}
              <div className="group relative rounded-2xl p-8 lg:p-10 transition-all duration-500" style={{backgroundColor: 'rgba(239, 238, 236, 0.06)', border: '1px solid rgba(239, 238, 236, 0.03)'}}>
                {/* Content */}
                <h3 className="text-stone-200 text-2xl lg:text-3xl font-medium mb-3 font-pp-neue">
                  Contenido Educativo
                </h3>
                <p className="text-stone-400 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue mb-6">
                  Comprende los principios y desarrolla tus habilidades. No se trata solo de herramientas drag-and-drop.
                </p>
                
                {/* Visual: Video Player with Update Notification */}
                <div className="w-full h-32 lg:h-40 rounded-xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-3 w-4/5 h-4/5 relative">
                      {/* Video Player */}
                      <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      
                      {/* Update Notification */}
                      <div className="absolute -right-2 -top-2 bg-blue-500 text-white text-xs px-2 py-1 rounded border border-blue-400">
                        Actualizaciones Frecuentes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: 3 Services */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
              
              {/* Card 3: Fundamentos Web */}
              <div className="group relative lg:col-span-1 rounded-2xl p-8 lg:p-10 transition-all duration-500" style={{backgroundColor: 'rgba(239, 238, 236, 0.06)', border: '1px solid rgba(239, 238, 236, 0.03)'}}>
                {/* Visual: Basic UI Elements */}
                <div className="w-full h-32 lg:h-40 rounded-xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-1 gap-3 p-4 w-full">
                      {/* Display Count Element */}
                      <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                        <span className="text-gray-800 text-sm font-medium">Contador: 0</span>
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      </div>
                      {/* Abstract Shapes */}
                      <div className="flex gap-2 justify-center">
                        <div className="w-8 h-8 bg-gray-300 rounded"></div>
                        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-stone-200 text-2xl lg:text-3xl font-medium mb-3 font-pp-neue">
                  Fundamentos Web
                </h3>
                <p className="text-stone-400 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue mb-6">
                  Descubre funcionalidades esenciales y técnicas para construir bases sólidas de sitios web.
                </p>
              </div>

              {/* Card 4: Fragmentos de Código - Middle (Wider) */}
              <div className="group relative lg:col-span-2 rounded-2xl p-8 lg:p-10 transition-all duration-500" style={{backgroundColor: 'rgba(239, 238, 236, 0.06)', border: '1px solid rgba(239, 238, 236, 0.03)'}}>
                {/* Content */}
                <h3 className="text-stone-200 text-2xl lg:text-3xl font-medium mb-3 font-pp-neue">
                  Fragmentos de Código
                </h3>
                <p className="text-stone-400 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue mb-6">
                  Mantén un registro de fragmentos de código útiles. Cópialos y pégalos en tus proyectos.
                </p>
                
                {/* Visual: Code Editor */}
                <div className="w-full h-32 lg:h-40 rounded-xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gray-900 rounded-lg p-3 w-4/5 h-4/5 relative">
                      {/* Copy Button */}
                      <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                        Copiar
                      </div>
                      {/* Code Content */}
                      <div className="text-xs text-white font-mono mt-4">
                        <div className="text-gray-400">{/* Obtener año actual */}</div>
                        <div className="text-blue-400">const</div> <div className="text-white">añoActual =</div> <div className="text-green-400">new Date</div><div className="text-white">().</div><div className="text-blue-400">getFullYear</div><div className="text-white">();</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5: Tango Icons */}
              <div className="group relative lg:col-span-1 rounded-2xl p-8 lg:p-10 transition-all duration-500" style={{backgroundColor: 'rgba(239, 238, 236, 0.06)', border: '1px solid rgba(239, 238, 236, 0.03)'}}>
                {/* Visual: Icons Grid */}
                <div className="w-full h-32 lg:h-40 rounded-xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-2 p-4 w-full">
                      {/* Icon previews */}
                      <div className="bg-white rounded-lg p-2 text-xs text-gray-800 font-medium text-center">📁</div>
                      <div className="bg-white rounded-lg p-2 text-xs text-gray-800 font-medium text-center">⚡</div>
                      <div className="bg-white rounded-lg p-2 text-xs text-gray-800 font-medium text-center">T</div>
                      <div className="bg-white rounded-lg p-2 text-xs text-gray-800 font-medium text-center">🛒</div>
                      <div className="bg-white rounded-lg p-2 text-xs text-gray-800 font-medium text-center">V2</div>
                      <div className="bg-white rounded-lg p-2 text-xs text-gray-800 font-medium text-center">★</div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-stone-200 text-2xl lg:text-3xl font-medium font-pp-neue">
                    Tango Icons
                  </h3>
                  <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    NUEVO
                  </div>
                </div>
                <p className="text-stone-400 text-base lg:text-[21.3333px] leading-relaxed font-medium font-pp-neue mb-6">
                  Iconos SVG limpios y escalables para tus proyectos. Simples y efectivos.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom CTA Section */}
          <div className="mt-8">
            <div className="rounded-2xl p-8 lg:p-10 text-center transition-all duration-500" style={{backgroundColor: 'rgba(239, 238, 236, 0.06)', border: '1px solid rgba(239, 238, 236, 0.03)'}}>
              <p className="text-white text-lg lg:text-xl font-medium font-pp-neue">
                Y viene mucho más...
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
