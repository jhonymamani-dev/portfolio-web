function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Columna izquierda */}
        <div>
          <p className="text-blue-400 text-lg mb-3">Hola, soy</p>

          <h1 className="text-6xl md:text-8xl font-bold mb-4">Jhony Mamani</h1>

          <h2 className="text-2xl md:text-4xl text-slate-300 mb-6">
            Sistemas web a medida que automatizan tu negocio
          </h2>

          <p className="text-slate-400 max-w-2xl text-lg mb-8">
            Desarrollo sistemas empresariales y APIs que reemplazan procesos
            manuales por software rápido, seguro y fácil de usar.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              <a href="#projects">Ver proyectos</a>
            </button>

            <button className="border border-slate-700 px-6 py-3 rounded-lg hover:bg-slate-800 transition">
              <a href="#contact">Cuéntame tu proyecto</a>
            </button>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-6">
            Tecnologías Principales
          </h3>

          <div className="space-y-3 text-slate-300">
            <p>⚛ React</p>

            <p>📘 TypeScript</p>

            <p>🎨 Material UI (MUI)</p>

            <p>🟢 Node.js</p>

            <p>🗄 MySQL</p>

            <p>🔧 Git & GitHub</p>
          </div>

          <div className="border-t border-slate-800 my-6"></div>

          <h3 className="text-xl font-semibold mb-3">🚗 Proyecto destacado</h3>

          <h4 className="text-lg font-medium text-white">SGOV</h4>

          <p className="text-slate-400 mt-2">
            Sistema Web de Gestión Operativa Vehicular
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
