"use client";

import { useState } from "react";

type Videografo = {
  nombre: string;
  contacto: string;
  estilo: string;
  paquete1: string;
  paquete2: string;
  incluyeDron: boolean;
  incluyeResumen: boolean;
  cancelacion: string;
  disponible: boolean;
  comentarios: string;
};

export default function CotizacionesFilmacionPage() {
  const [videografos, setVideografos] = useState<Videografo[]>([
    {
      nombre: "",
      contacto: "",
      estilo: "",
      paquete1: "",
      paquete2: "",
      incluyeDron: false,
      incluyeResumen: false,
      cancelacion: "",
      disponible: false,
      comentarios: "",
    },
    {
      nombre: "",
      contacto: "",
      estilo: "",
      paquete1: "",
      paquete2: "",
      incluyeDron: false,
      incluyeResumen: false,
      cancelacion: "",
      disponible: false,
      comentarios: "",
    },
    {
      nombre: "",
      contacto: "",
      estilo: "",
      paquete1: "",
      paquete2: "",
      incluyeDron: false,
      incluyeResumen: false,
      cancelacion: "",
      disponible: false,
      comentarios: "",
    },
  ]);

  const handleChange = (i: number, campo: keyof Videografo, valor: unknown) => {
    const copia = [...videografos];
    if (typeof valor === "string" || typeof valor === "boolean") {
      copia[i][campo] = valor as never;
      setVideografos(copia);
    }
  };

  const [contratado, setContratado] = useState({
    nombre: "",
    direccion: "",
    celular: "",
    email: "",
    negocio: "",
    web: "",
    paquete: "",
    incluye: "",
    costo: "",
    estilo: "",
    musica: "",
  });

  return (
    <main className="min-h-screen bg-purple-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-purple-200 space-y-10">
        <h1 className="text-3xl font-bold text-purple-700 text-center">
          Cotizaciones de Filmación
        </h1>

        {/* Comparativo */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-purple-800">
            Comparativo de Videógrafos
          </h2>
          {videografos.map((v, i) => (
            <div
              key={i}
              className="border border-purple-100 rounded-lg p-4 mb-6 space-y-3 bg-purple-50"
            >
              <h3 className="font-bold text-purple-600">Videógrafo {i + 1}</h3>
              <input
                placeholder="Nombre"
                value={v.nombre}
                onChange={(e) => handleChange(i, "nombre", e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                placeholder="Contacto"
                value={v.contacto}
                onChange={(e) => handleChange(i, "contacto", e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                placeholder="Estilo"
                value={v.estilo}
                onChange={(e) => handleChange(i, "estilo", e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                placeholder="Paquete 1"
                value={v.paquete1}
                onChange={(e) => handleChange(i, "paquete1", e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                placeholder="Paquete 2"
                value={v.paquete2}
                onChange={(e) => handleChange(i, "paquete2", e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={v.incluyeDron}
                  onChange={(e) =>
                    handleChange(i, "incluyeDron", e.target.checked)
                  }
                />
                ¿Incluye dron?
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={v.incluyeResumen}
                  onChange={(e) =>
                    handleChange(i, "incluyeResumen", e.target.checked)
                  }
                />
                ¿Incluye resumen editado?
              </label>
              <input
                placeholder="Política de cancelación"
                value={v.cancelacion}
                onChange={(e) => handleChange(i, "cancelacion", e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={v.disponible}
                  onChange={(e) =>
                    handleChange(i, "disponible", e.target.checked)
                  }
                />
                ¿Tiene disponibilidad?
              </label>
              <textarea
                placeholder="Comentarios"
                value={v.comentarios}
                onChange={(e) => handleChange(i, "comentarios", e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          ))}
        </section>

        {/* Videógrafo Contratado */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-purple-800">
            Videógrafo Contratado
          </h2>
          {Object.entries(contratado).map(([campo, valor]) => (
            <input
              key={campo}
              placeholder={campo[0].toUpperCase() + campo.slice(1)}
              value={valor}
              onChange={(e) =>
                setContratado({ ...contratado, [campo]: e.target.value })
              }
              className="w-full mb-2 border px-3 py-2 rounded"
            />
          ))}
        </section>
      </div>
    </main>
  );
}
