import SGOVdashboard from "../../assets/images/SGOV/SGOVdashboard.png";
import SGOVordenes from "../../assets/images/SGOV/SGOVdashboard.png";
import SGOVreportes from "../../assets/images/SGOV/SGOVdashboard.png";

import { useState } from "react";

function Projects() {
  const [openSGOV, setOpenSGOV] = useState(false);

  return (
    <section id="projects" className="bg-slate-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-4">Proyectos</h2>

        <p className="text-slate-400 mb-12">
          Algunos de los proyectos que he desarrollado.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
            <div className="relative h-56 overflow-hidden">
              <img src={SGOVdashboard} alt="Dashboard Sistema" object-contain />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-3xl font-bold">SGOV</h3>

                <p className="text-slate-200">
                  Sistema para Talleres Automotrices
                </p>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">
                Sistema Web de Gestión Vehicular
              </h3>

              <p className="text-slate-400 mb-4">
                Plataforma web desarrollada para gestionar clientes, vehículos,
                diagnósticos, órdenes de trabajo, inventario y reportes,
                optimizando los procesos operativos de talleres automotrices.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-700 rounded-full">
                  React
                </span>

                <span className="px-3 py-1 bg-slate-700 rounded-full">
                  TypeScript
                </span>

                <span className="px-3 py-1 bg-slate-700 rounded-full">
                  Material UI
                </span>

                <span className="px-3 py-1 bg-slate-700 rounded-full">
                  Node.js
                </span>

                <span className="px-3 py-1 bg-slate-700 rounded-full">
                  MySQL
                </span>
                <p className="text-green-400 text-sm mt-4">
                  ✅ En fase de entrega al cliente
                </p>
              </div>

              <button
                onClick={() => setOpenSGOV(true)}
                className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg"
              >
                Más información
              </button>
              <p className="text-yellow-400 text-sm">🔒 Proyecto privado</p>
            </div>
          </div>
          {/* TARJETA DOCUMENT PROCESSOR API */}
          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
            <div className="relative h-56 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-cyan-600 via-blue-700 to-slate-900 flex flex-col items-center justify-center">
                <h3 className="text-4xl font-bold text-white">
                  Document Processor
                </h3>

                <p className="text-slate-200 mt-2">PDF → OCR → Parser → JSON</p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-3xl font-bold">
                  Document Processor API
                </h3>

                <p className="text-slate-200">
                  Motor de Procesamiento Documental Automotriz
                </p>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">
                Extracción Automática de Diagnósticos
              </h3>

              <p className="text-slate-400 mb-4">
                Lee reportes PDF de escáneres automotrices y extrae VIN, placa,
                kilometraje, fecha y códigos de falla, sin digitarlos. Probada
                con reportes reales de Launch y compatible con G-Scan según
                imágenes de muestra. Diseñada para integrarse a SGOV.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-slate-700 rounded-full">
                  Node.js
                </span>

                <span className="px-3 py-1 bg-slate-700 rounded-full">
                  TypeScript
                </span>

                <span className="px-3 py-1 bg-slate-700 rounded-full">
                  Express
                </span>

                <span className="px-3 py-1 bg-slate-700 rounded-full">OCR</span>

                <span className="px-3 py-1 bg-slate-700 rounded-full">
                  Tesseract.js
                </span>

                <span className="px-3 py-1 bg-slate-700 rounded-full">
                  ImageMagick
                </span>

                <span className="px-3 py-1 bg-slate-700 rounded-full">
                  Ghostscript
                </span>
              </div>

              <p className="text-yellow-400 text-sm">🔒 Repositorio privado</p>
            </div>
          </div>
        </div>
      </div>

      {openSGOV && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpenSGOV(false)}
        >
          <div
            className="bg-slate-800 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white">SGOV</h3>
                <p className="text-slate-400">
                  Sistema para talleres automotrices
                </p>
              </div>
              <button
                onClick={() => setOpenSGOV(false)}
                className="text-slate-400 hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>

            <img
              src={SGOVdashboard}
              alt="Dashboard de SGOV"
              className="rounded-lg mb-8 w-full object-contain"
            />

            <h4 className="text-blue-400 font-semibold mb-2">El problema</h4>
            <p className="text-slate-300 mb-6">
              El taller no contaba con ningún sistema. Las fotos de evidencia
              quedaban en los celulares, los acuerdos se hacían por chat de
              WhatsApp o de palabra, y los diagnósticos en PDF estaban sueltos.
              No existía un registro único, así que encontrar el historial de un
              vehículo era difícil y era fácil que algo se perdiera. Toda la
              información dependía de un solo celular: si se malograba o se
              perdía, se perdía también el registro de clientes, fotos y
              conversaciones.
            </p>

            <h4 className="text-blue-400 font-semibold mb-2">La solución</h4>
            <p className="text-slate-300 mb-6">
              Con SGOV todo queda guardado de forma centralizada en un servidor,
              accesible desde cualquier equipo, sin depender de un celular.
            </p>

            <h4 className="text-blue-400 font-semibold mb-2">
              Funciones principales
            </h4>
            <ul className="list-disc list-inside text-slate-300 space-y-1 mb-6">
              <li>
                Diagnóstico del vehículo, con integración al escáner para
                llenado automático (próximamente)
              </li>
              <li>Órdenes de trabajo con registro de fotografías</li>
              <li>
                Historial vehicular: diagnósticos, órdenes, costos, repuestos
                usados y trabajos realizados
              </li>
              <li>Gestión de clientes, vehículos, inventario y proveedores</li>
              <li>Reportes de toda la operación</li>
              <li>Usuarios y roles con control de acceso</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <img
                src={SGOVordenes}
                alt="Órdenes de trabajo en SGOV"
                className="rounded-lg object-contain"
              />
              <img
                src={SGOVreportes}
                alt="Reportes en SGOV"
                className="rounded-lg object-contain"
              />
            </div>

            <h4 className="text-blue-400 font-semibold mb-2">
              Estado y mi rol
            </h4>
            <p className="text-slate-300 mb-2">
              ✅ En fase de entrega al cliente.
            </p>
            <p className="text-slate-300 mb-8">
              Diseñé y desarrollé el sistema completo: análisis, base de datos,
              API e interfaz.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={() => setOpenSGOV(false)}
                className="inline-block bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg text-white"
              >
                Quiero algo así
              </a>
              <p className="text-yellow-400 text-sm">
                🔒 Código privado por acuerdo con el cliente
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
