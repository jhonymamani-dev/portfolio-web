function Skills() {
  return (
    <section id="skills" className="bg-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12">Skills</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-blue-400 font-semibold mb-4">Frontend</h3>

            <div className="space-y-2">
              <p>React</p>
              <p>TypeScript</p>
              <p>JavaScript</p>
              <p>Material UI</p>
              <p>HTML5</p>
              <p>Tailwind CSS</p>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-blue-400 font-semibold mb-4">Backend</h3>

            <div className="space-y-2">
              <p text-base>Node.js</p>
              <p>Express.js</p>
              <p>REST APIs</p>
              <p>Autenticación JWT</p>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-blue-400 font-semibold mb-4">Bases de Datos</h3>

            <div className="space-y-2">
              <p>SQL Server</p>
              <p>MySQL</p>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-blue-400 font-semibold mb-4">Herramientas</h3>

            <div className="space-y-2">
              <p>Git</p>
              <p>GitHub</p>
              <p>VS Code</p>
              <p>Thunder Client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
