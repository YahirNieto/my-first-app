"use client";

import { useState } from "react";

type Regalo = {
  nombre: string;
  regalo: string;
  nota: boolean;
};

export default function RegalosPage() {
  const [regalos, setRegalos] = useState<Regalo[]>([]);
  const [nuevo, setNuevo] = useState({ nombre: "", regalo: "" });

  const agregarRegalo = () => {
    if (nuevo.nombre.trim() && nuevo.regalo.trim()) {
      setRegalos([
        ...regalos,
        {
          nombre: nuevo.nombre.trim(),
          regalo: nuevo.regalo.trim(),
          nota: false,
        },
      ]);
      setNuevo({ nombre: "", regalo: "" });
    }
  };

  const eliminar = (i: number) => {
    const copia = [...regalos];
    copia.splice(i, 1);
    setRegalos(copia);
  };

  const toggleNota = (i: number) => {
    const copia = [...regalos];
    copia[i].nota = !copia[i].nota;
    setRegalos(copia);
  };

  return (
    <main className="min-h-screen bg-amber-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-amber-200 space-y-8">
        <h1 className="text-3xl font-bold text-amber-700 text-center">
          Regalos de Boda
        </h1>

        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Nombre"
            value={nuevo.nombre}
            onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })}
            className="border px-3 py-2 rounded flex-1"
          />
          <input
            type="text"
            placeholder="Regalo"
            value={nuevo.regalo}
            onChange={(e) => setNuevo({ ...nuevo, regalo: e.target.value })}
            className="border px-3 py-2 rounded flex-1"
          />
          <button
            onClick={agregarRegalo}
            className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
          >
            Agregar
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-amber-100 text-amber-800">
                <th className="text-left px-4 py-2">Nombre</th>
                <th className="text-left px-4 py-2">Regalo</th>
                <th className="text-center px-4 py-2">
                  Nota de agradecimiento
                </th>
                <th className="text-center px-4 py-2">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {regalos.map((r, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-2">{r.nombre}</td>
                  <td className="px-4 py-2">{r.regalo}</td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={r.nota}
                      onChange={() => toggleNota(i)}
                      className="w-4 h-4"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => eliminar(i)}
                      className="text-sm text-red-500 hover:underline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
