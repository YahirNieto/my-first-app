"use client";

import { useState } from "react";

type ComparativoCatering = {
  contacto: string;
  costoPorPersona: string;
  totalEstimado: string;
  menu1: string;
  menu2: string;
  menu3: string;
  notas: string;
  pros: string;
  contras: string;
};

type CateringContratado = {
  nombre: string;
  direccion: string;
  celular: string;
  costoPorPersona: string;
  incluye: string;
  tarifas: string;
  costoTotal: string;
  menu: string;
};

export default function CateringPage() {
  const [caterings, setCaterings] = useState<ComparativoCatering[]>([
    {
      contacto: "",
      costoPorPersona: "",
      totalEstimado: "",
      menu1: "",
      menu2: "",
      menu3: "",
      notas: "",
      pros: "",
      contras: "",
    },
    {
      contacto: "",
      costoPorPersona: "",
      totalEstimado: "",
      menu1: "",
      menu2: "",
      menu3: "",
      notas: "",
      pros: "",
      contras: "",
    },
    {
      contacto: "",
      costoPorPersona: "",
      totalEstimado: "",
      menu1: "",
      menu2: "",
      menu3: "",
      notas: "",
      pros: "",
      contras: "",
    },
  ]);

  const handleComparativoChange = (
    i: number,
    campo: keyof ComparativoCatering,
    valor: string
  ) => {
    const copia = [...caterings];
    copia[i][campo] = valor;
    setCaterings(copia);
  };

  const campos = [
    { key: "contacto", label: "Contacto" },
    { key: "costoPorPersona", label: "Costo por persona" },
    { key: "totalEstimado", label: "Precio total estimado" },
    { key: "menu1", label: "Menú 1" },
    { key: "menu2", label: "Menú 2" },
    { key: "menu3", label: "Menú 3" },
    { key: "notas", label: "Notas extra" },
    { key: "pros", label: "Pros" },
    { key: "contras", label: "Contras" },
  ] as const;

  const [contratado, setContratado] = useState<CateringContratado>({
    nombre: "",
    direccion: "",
    celular: "",
    costoPorPersona: "",
    incluye: "",
    tarifas: "",
    costoTotal: "",
    menu: "",
  });

  return (
    <main className="min-h-screen bg-yellow-50 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-yellow-200 space-y-10">
        <h1 className="text-3xl font-bold text-yellow-700 text-center">
          Catering
        </h1>

        {/* Comparador */}
        <div className="overflow-x-auto">
          <h2 className="text-xl font-semibold text-yellow-800 mb-3">
            Comparativo de Caterers
          </h2>
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-yellow-100 text-yellow-800">
                <th className="text-left px-4 py-2">Campo</th>
                <th className="px-4 py-2">Caterer 1</th>
                <th className="px-4 py-2">Caterer 2</th>
                <th className="px-4 py-2">Caterer 3</th>
              </tr>
            </thead>
            <tbody>
              {campos.map(({ key, label }) => (
                <tr key={key} className="border-t">
                  <td className="px-4 py-2 font-medium text-gray-700">
                    {label}
                  </td>
                  {[0, 1, 2].map((i) => (
                    <td key={i} className="px-4 py-2">
                      <input
                        type="text"
                        value={caterings[i][key]}
                        onChange={(e) =>
                          handleComparativoChange(i, key, e.target.value)
                        }
                        className="w-full border px-2 py-1 rounded"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Contratado */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-yellow-800">
            Caterer Contratado
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <input
              placeholder="Nombre"
              value={contratado.nombre}
              onChange={(e) =>
                setContratado({ ...contratado, nombre: e.target.value })
              }
              className="border px-3 py-2 rounded"
            />
            <input
              placeholder="Dirección"
              value={contratado.direccion}
              onChange={(e) =>
                setContratado({ ...contratado, direccion: e.target.value })
              }
              className="border px-3 py-2 rounded"
            />
            <input
              placeholder="Celular"
              value={contratado.celular}
              onChange={(e) =>
                setContratado({ ...contratado, celular: e.target.value })
              }
              className="border px-3 py-2 rounded"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <input
              placeholder="Costo por persona"
              value={contratado.costoPorPersona}
              onChange={(e) =>
                setContratado({
                  ...contratado,
                  costoPorPersona: e.target.value,
                })
              }
              className="border px-3 py-2 rounded"
            />
            <input
              placeholder="¿Qué incluye?"
              value={contratado.incluye}
              onChange={(e) =>
                setContratado({ ...contratado, incluye: e.target.value })
              }
              className="border px-3 py-2 rounded"
            />
            <input
              placeholder="Tarifas adicionales"
              value={contratado.tarifas}
              onChange={(e) =>
                setContratado({ ...contratado, tarifas: e.target.value })
              }
              className="border px-3 py-2 rounded"
            />
            <input
              placeholder="Costo total"
              value={contratado.costoTotal}
              onChange={(e) =>
                setContratado({ ...contratado, costoTotal: e.target.value })
              }
              className="border px-3 py-2 rounded"
            />
          </div>

          <textarea
            placeholder="Menú"
            rows={4}
            value={contratado.menu}
            onChange={(e) =>
              setContratado({ ...contratado, menu: e.target.value })
            }
            className="w-full border px-3 py-2 rounded"
          />
        </section>
      </div>
    </main>
  );
}
