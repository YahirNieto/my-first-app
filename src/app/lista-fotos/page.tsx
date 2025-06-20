"use client";

import { useState } from "react";

type Foto = {
  texto: string;
  lista: boolean;
};

type Categoria = {
  titulo: string;
  fotos: Foto[];
};

export default function ListaFotosPage() {
  const [categorias, setCategorias] = useState<Categoria[]>([
    {
      titulo: "Los novios",
      fotos: [
        { texto: "Primer vistazo con los novios", lista: false },
        { texto: "Fotos espontáneas durante el primer vistazo", lista: false },
        { texto: "Retratos de la novia", lista: false },
        { texto: "Retratos del novio", lista: false },
        { texto: "Retratos con poses de la novia y el novio", lista: false },
        { texto: "Fotos espontáneas de la novia y el novio", lista: false },
      ],
    },
    {
      titulo: "Con familia",
      fotos: [
        { texto: "Novios con toda la familia de la novia", lista: false },
        { texto: "Novios con la mamá y el papá de la novia", lista: false },
        { texto: "Novia con solo mamá", lista: false },
        { texto: "Novia con solo papá", lista: false },
        { texto: "Novia con mamá + papá", lista: false },
        { texto: "Novia con hermanos", lista: false },
        { texto: "Novia + Novio con hermanos", lista: false },
        { texto: "Novia con abuelos", lista: false },
        { texto: "Novios con toda la familia del novio", lista: false },
        { texto: "Novios con mamá + papá", lista: false },
        { texto: "Novio solo con mamá", lista: false },
        { texto: "Novio solo con papá", lista: false },
        { texto: "Novio con mamá + papá", lista: false },
        { texto: "Novio con hermanos", lista: false },
        { texto: "Novios con hermanos del novio", lista: false },
        { texto: "Novio con abuelos", lista: false },
        { texto: "Novios con abuelos", lista: false },
      ],
    },
    {
      titulo: "Recepción",
      fotos: [
        { texto: "Novia + Novias posadas + fotos espontáneas", lista: false },
        { texto: "Novia con cada dama de honor", lista: false },
        { texto: "Primer plano de todos los ramos de flores", lista: false },
        { texto: "Retratos de cada dama de honor", lista: false },
        { texto: "Novio + Padrinos de boda variedad de poses", lista: false },
        { texto: "Novio con cada padrino", lista: false },
        { texto: "Retratos de cada padrino de boda", lista: false },
        { texto: "Foto grupal de retratos del grupo nupcial", lista: false },
        { texto: "Fotos espontáneas del grupo nupcial", lista: false },
        { texto: "Novias con los padrinos de boda", lista: false },
        { texto: "Novio con las damas de honor", lista: false },
      ],
    },
    {
      titulo: "Getting Ready",
      fotos: [
        { texto: "Toques finales en el cabello", lista: false },
        { texto: "Toques finales de maquillaje", lista: false },
        { texto: "Novia + Damas de honor en bata/pijama", lista: false },
        { texto: "Chicas sirviendo mimosas/champán", lista: false },
        { texto: "Brindis de copas", lista: false },
        {
          texto: "Momentos espontáneos entre la novia y las damas de honor",
          lista: false,
        },
        { texto: "Colocándose el velo", lista: false },
        {
          texto: "Mamá de la novia ayudando a ponerse el vestido",
          lista: false,
        },
        { texto: "Novia poniéndose zapatos + joyas", lista: false },
        { texto: "Novia mirándose en el espejo", lista: false },
        { texto: "Primer vistazo con el padre de la novia", lista: false },
        { texto: "Foto grupal", lista: false },
      ],
    },
  ]);

  const [otras, setOtras] = useState<Foto[]>([]);
  const [nuevoTexto, setNuevoTexto] = useState("");

  const toggle = (catIndex: number, fotoIndex: number) => {
    const copia = [...categorias];
    copia[catIndex].fotos[fotoIndex].lista =
      !copia[catIndex].fotos[fotoIndex].lista;
    setCategorias(copia);
  };

  const toggleOtra = (i: number) => {
    const copia = [...otras];
    copia[i].lista = !copia[i].lista;
    setOtras(copia);
  };

  const agregarOtra = () => {
    if (nuevoTexto.trim()) {
      setOtras([...otras, { texto: nuevoTexto.trim(), lista: false }]);
      setNuevoTexto("");
    }
  };

  const eliminarOtra = (i: number) => {
    const copia = [...otras];
    copia.splice(i, 1);
    setOtras(copia);
  };

  return (
    <main className="min-h-screen bg-pink-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-pink-200 space-y-8">
        <h1 className="text-3xl font-bold text-pink-700 text-center">
          Lista de Fotos Deseadas
        </h1>

        {categorias.map((cat, catIndex) => (
          <section key={catIndex}>
            <h2 className="text-xl font-semibold text-pink-800 mb-3">
              {cat.titulo}
            </h2>
            <ul className="space-y-2">
              {cat.fotos.map((foto, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 bg-pink-100 rounded-md px-4 py-2"
                >
                  <input
                    type="checkbox"
                    checked={foto.lista}
                    onChange={() => toggle(catIndex, i)}
                    className="w-4 h-4 text-pink-600"
                  />
                  <span
                    className={
                      foto.lista
                        ? "line-through text-gray-500"
                        : "text-gray-800"
                    }
                  >
                    {foto.texto}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Sección editable */}
        <section>
          <h2 className="text-xl font-semibold text-pink-800 mb-3">
            Otras propuestas
          </h2>
          <ul className="space-y-2 mb-4">
            {otras.map((foto, i) => (
              <li
                key={i}
                className="flex items-center justify-between bg-pink-100 rounded-md px-4 py-2"
              >
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={foto.lista}
                    onChange={() => toggleOtra(i)}
                    className="w-4 h-4"
                  />
                  <span
                    className={
                      foto.lista
                        ? "line-through text-gray-500"
                        : "text-gray-800"
                    }
                  >
                    {foto.texto}
                  </span>
                </label>
                <button
                  onClick={() => eliminarOtra(i)}
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
              value={nuevoTexto}
              onChange={(e) => setNuevoTexto(e.target.value)}
              placeholder="Agregar propuesta nueva"
              className="flex-1 border px-4 py-2 rounded"
            />
            <button
              onClick={agregarOtra}
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
            >
              Agregar
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
