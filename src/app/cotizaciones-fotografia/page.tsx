"use client";

import { useState } from "react";

type Fotografo = {
  nombre: string;
  contacto: string;
  estilo: string;
  paquete1: string;
  paquete2: string;
  extra: boolean;
  cancelacion: string;
  disponible: boolean;
  comentarios: string;
};

export default function CotizacionesFotografiaPage() {
  const [fotografos, setFotografos] = useState<Fotografo[]>([
    {
      nombre: "",
      contacto: "",
      estilo: "",
      paquete1: "",
      paquete2: "",
      extra: false,
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
      extra: false,
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
      extra: false,
      cancelacion: "",
      disponible: false,
      comentarios: "",
    },
  ]);

  const handleFotografoChange = (
    i: number,
    campo: keyof Fotografo,
    valor: unknown
  ) => {
    const copia = [...fotografos];

    // Validación y asignación segura
    if (typeof valor === "string" || typeof valor === "boolean") {
      copia[i][campo] = valor as never; // evita conflicto por tipo genérico
      setFotografos(copia);
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
    sesion: "",
  });

  const [ubicaciones, setUbicaciones] = useState("");

  return (
    <main className="min-h-screen bg-sky-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-sky-200 space-y-10">
        <h1 className="text-3xl font-bold text-sky-700 text-center">
          Cotizaciones de Fotografía
        </h1>

        {/* Comparativo */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-sky-800">
            Comparativo de Fotógrafos
          </h2>
          {fotografos.map((f, i) => (
            <div
              key={i}
              className="border border-sky-100 rounded-lg p-4 mb-6 space-y-3 bg-sky-50"
            >
              <h3 className="font-bold text-sky-600">Fotógrafo {i + 1}</h3>
              <input
                placeholder="Nombre"
                value={f.nombre}
                onChange={(e) =>
                  handleFotografoChange(i, "nombre", e.target.value)
                }
                className="w-full border px-3 py-2 rounded"
              />
              <input
                placeholder="Contacto"
                value={f.contacto}
                onChange={(e) =>
                  handleFotografoChange(i, "contacto", e.target.value)
                }
                className="w-full border px-3 py-2 rounded"
              />
              <input
                placeholder="Estilo"
                value={f.estilo}
                onChange={(e) =>
                  handleFotografoChange(i, "estilo", e.target.value)
                }
                className="w-full border px-3 py-2 rounded"
              />
              <input
                placeholder="Paquete 1"
                value={f.paquete1}
                onChange={(e) =>
                  handleFotografoChange(i, "paquete1", e.target.value)
                }
                className="w-full border px-3 py-2 rounded"
              />
              <input
                placeholder="Paquete 2"
                value={f.paquete2}
                onChange={(e) =>
                  handleFotografoChange(i, "paquete2", e.target.value)
                }
                className="w-full border px-3 py-2 rounded"
              />
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={f.extra}
                  onChange={(e) =>
                    handleFotografoChange(i, "extra", e.target.checked)
                  }
                />
                Incluye fotógrafo extra
              </label>
              <input
                placeholder="Política de cancelación"
                value={f.cancelacion}
                onChange={(e) =>
                  handleFotografoChange(i, "cancelacion", e.target.value)
                }
                className="w-full border px-3 py-2 rounded"
              />
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={f.disponible}
                  onChange={(e) =>
                    handleFotografoChange(i, "disponible", e.target.checked)
                  }
                />
                ¿Tiene disponibilidad?
              </label>
              <textarea
                placeholder="Comentarios"
                value={f.comentarios}
                onChange={(e) =>
                  handleFotografoChange(i, "comentarios", e.target.value)
                }
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          ))}
        </section>

        {/* Fotógrafo Contratado */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-sky-800">
            Fotógrafo Contratado
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

        {/* Ubicaciones */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-sky-800">
            Ubicaciones para Fotos
          </h2>
          <textarea
            rows={4}
            value={ubicaciones}
            onChange={(e) => setUbicaciones(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Lista de ubicaciones..."
          />
        </section>
      </div>
    </main>
  );
}
