"use client";

import { useState } from "react";

type Lugar = {
  contacto: string;
  costo: string;
  capacidad: string;
  deposito: string;
  pagoRestante: string;
  accesible: boolean;
  incluye: string;
  comentarios: string;
};

export default function CotizacionesLugarPage() {
  const [lugares, setLugares] = useState<Lugar[]>([
    {
      contacto: "",
      costo: "",
      capacidad: "",
      deposito: "",
      pagoRestante: "",
      accesible: false,
      incluye: "",
      comentarios: "",
    },
    {
      contacto: "",
      costo: "",
      capacidad: "",
      deposito: "",
      pagoRestante: "",
      accesible: false,
      incluye: "",
      comentarios: "",
    },
    {
      contacto: "",
      costo: "",
      capacidad: "",
      deposito: "",
      pagoRestante: "",
      accesible: false,
      incluye: "",
      comentarios: "",
    },
  ]);

  const handleChange = (
    index: number,
    campo: keyof Lugar,
    valor: string | boolean
  ) => {
    const copia = [...lugares];
    copia[index][campo] = valor as never;
    setLugares(copia);
  };

  const campos = [
    { label: "Contacto", key: "contacto" },
    { label: "Costo", key: "costo" },
    { label: "Capacidad", key: "capacidad" },
    { label: "Depósito", key: "deposito" },
    { label: "Pago restante", key: "pagoRestante" },
    { label: "Accesible para discapacitados", key: "accesible" },
    { label: "¿Qué incluye?", key: "incluye" },
    { label: "Comentarios", key: "comentarios" },
  ] as const;

  return (
    <main className="min-h-screen bg-green-50 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-green-200 space-y-8">
        <h1 className="text-3xl font-bold text-green-700 text-center">
          Cotización Lugar del Evento
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="text-left px-4 py-2">Campo</th>
                <th className="px-4 py-2">Lugar 1</th>
                <th className="px-4 py-2">Lugar 2</th>
                <th className="px-4 py-2">Lugar 3</th>
              </tr>
            </thead>
            <tbody>
              {campos.map(({ label, key }) => (
                <tr key={key} className="border-t">
                  <td className="px-4 py-2 font-medium text-gray-700">
                    {label}
                  </td>
                  {[0, 1, 2].map((i) => (
                    <td key={i} className="px-4 py-2">
                      {key === "accesible" ? (
                        <input
                          type="checkbox"
                          checked={lugares[i].accesible}
                          onChange={(e) =>
                            handleChange(i, "accesible", e.target.checked)
                          }
                          className="w-4 h-4"
                        />
                      ) : key === "comentarios" || key === "incluye" ? (
                        <textarea
                          value={lugares[i][key]}
                          onChange={(e) => handleChange(i, key, e.target.value)}
                          rows={2}
                          className="w-full border px-2 py-1 rounded"
                        />
                      ) : (
                        <input
                          type="text"
                          value={lugares[i][key]}
                          onChange={(e) => handleChange(i, key, e.target.value)}
                          className="w-full border px-2 py-1 rounded"
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
