function About() {
  return (
    <section id="about" className="bg-slate-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12">Sobre mí</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-slate-300 text-lg leading-8">
              Soy bachiller en Ingeniería de Sistemas y desarrollo software a
              medida para empresas que quieren dejar atrás el papel y las hojas
              de cálculo. Me enfoco en sistemas web y APIs que se entregan
              funcionando y pueden crecer con el negocio.
            </p>

            <p className="text-slate-400 text-lg leading-8 mt-6">
              Mi forma de trabajar es simple: entiendo cómo opera tu negocio,
              propongo una solución clara y te acompaño hasta que esté en uso.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 p-6 rounded-xl">
              🎓 Ingeniería de Sistemas
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              💻 Full Stack Developer
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              ⚡ React & Node.js
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              🗄 SQL Server & MySQL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
