"use client";

import { useState } from "react";

type Item = {
  texto: string;
  listo: boolean;
};

type Categoria = {
  titulo: string;
  items: Item[];
};

export default function PapeleriaPage() {
  const [categorias, setCategorias] = useState<Categoria[]>([
    {
      titulo: "Antes de la boda",
      items: [
        { texto: "“Save The Dates”", listo: false },
        { texto: "Invitaciones de boda", listo: false },
        { texto: "Invitaciones a la cena de ensayo", listo: false },
        { texto: "Invitaciones de despedida de soltera", listo: false },
        { texto: "Notas de agradecimiento", listo: false },
      ],
    },
    {
      titulo: "Para la boda",
      items: [
        { texto: "Programas", listo: false },
        { texto: "Menús de recepción", listo: false },
        { texto: "Boletos", listo: false },
        { texto: "Cartel de bienvenida", listo: false },
        { texto: "Números de mesas", listo: false },
        { texto: "Carteles de sillas reservadas", listo: false },
        { texto: "Carteles para la cabina de fotos", listo: false },
        { texto: "Señalética", listo: false },
      ],
    },
    {
      titulo: "Invitaciones",
      items: [
        { texto: "Invitaciones", listo: false },
        { texto: "Tarjetas de información", listo: false },
        { texto: "Tarjetas de alojamiento", listo: false },
        { texto: "Sobres externos", listo: false },
        { texto: "Monograma / logotipo de boda", listo: false },
        { texto: "Mapa / tarjetas de dirección", listo: false },
        { texto: "Sobres internos", listo: false },
        { texto: "Forros interiores para sobres", listo: false },
        { texto: "Tarjeta de información del área local", listo: false },
      ],
    },
    {
      titulo: "Recuerdos boda",
      items: [
        { texto: "Mapa impreso", listo: false },
        { texto: "Impresión de monograma", listo: false },
        { texto: "Ilustración del lugar del evento", listo: false },
        { texto: "Suite de invitación enmarcada", listo: false },
        { texto: "Retratos de la novia y el novio", listo: false },
        { texto: "Fotos espontáneas de la novia y el novio", listo: false },
      ],
    },
  ]);

  const [otros, setOtros] = useState<Item[]>([]);
  const [nuevo, setNuevo] = useState("");

  const toggleItem = (catIndex: number, itemIndex: number) => {
    const copia = [...categorias];
    copia[catIndex].items[itemIndex].listo =
      !copia[catIndex].items[itemIndex].listo;
    setCategorias(copia);
  };

  const toggleOtro = (i: number) => {
    const copia = [...otros];
    copia[i].listo = !copia[i].listo;
    setOtros(copia);
  };

  const agregarOtro = () => {
    if (nuevo.trim()) {
      setOtros([...otros, { texto: nuevo.trim(), listo: false }]);
      setNuevo("");
    }
  };

  const eliminarOtro = (i: number) => {
    const copia = [...otros];
    copia.splice(i, 1);
    setOtros(copia);
  };

  return (
    <main className="min-h-screen bg-stone-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-stone-200 space-y-10">
        <h1 className="text-3xl font-bold text-stone-700 text-center">
          Papelería
        </h1>

        {categorias.map((cat, catIndex) => (
          <section key={catIndex}>
            <h2 className="text-xl font-semibold text-stone-800 mb-3">
              {cat.titulo}
            </h2>
            <ul className="space-y-2">
              {cat.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 bg-stone-100 px-4 py-2 rounded"
                >
                  <input
                    type="checkbox"
                    checked={item.listo}
                    onChange={() => toggleItem(catIndex, i)}
                    className="w-4 h-4 text-stone-600"
                  />
                  <span
                    className={
                      item.listo
                        ? "line-through text-gray-500"
                        : "text-gray-800"
                    }
                  >
                    {item.texto}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Otros */}
        <section>
          <h2 className="text-xl font-semibold text-stone-800 mb-3">Otros</h2>
          <ul className="space-y-2 mb-4">
            {otros.map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-between bg-stone-100 rounded-md px-4 py-2"
              >
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={item.listo}
                    onChange={() => toggleOtro(i)}
                    className="w-4 h-4"
                  />
                  <span
                    className={
                      item.listo
                        ? "line-through text-gray-500"
                        : "text-gray-800"
                    }
                  >
                    {item.texto}
                  </span>
                </label>
                <button
                  onClick={() => eliminarOtro(i)}
                  className="text-xs text-red-500 hover:underline"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <input
              type="text"
              value={nuevo}
              onChange={(e) => setNuevo(e.target.value)}
              placeholder="Agregar elemento personalizado"
              className="flex-1 border px-4 py-2 rounded"
            />
            <button
              onClick={agregarOtro}
              className="bg-stone-600 text-white px-4 py-2 rounded hover:bg-stone-700"
            >
              Agregar
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
