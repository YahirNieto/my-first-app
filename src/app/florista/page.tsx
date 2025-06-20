"use client";

import { useState } from "react";

type CotizacionFlorista = {
  centroMesas: string;
  floresPrincipales: string;
  bouquetNovia: string;
  bouquetDamas: string;
  solapaNovio: string;
  solapaPadrinos: string;
  arreglosCeremonia: string;
  arreglosRecepcion: string;
  precio: string;
};

type FloristaContratado = {
  nombre: string;
  direccion: string;
  celular: string;
  bouquetNovia: string;
  bouquetDamas: string;
  solapaNovio: string;
  solapaPadrinos: string;
  centroMesas: string;
  floresCeremonia: string;
  floresRecepcion: string;
  costo: string;
};

export default function FloristaPage() {
  const [cotizaciones, setCotizaciones] = useState<CotizacionFlorista[]>([
    {
      centroMesas: "",
      floresPrincipales: "",
      bouquetNovia: "",
      bouquetDamas: "",
      solapaNovio: "",
      solapaPadrinos: "",
      arreglosCeremonia: "",
      arreglosRecepcion: "",
      precio: "",
    },
    {
      centroMesas: "",
      floresPrincipales: "",
      bouquetNovia: "",
      bouquetDamas: "",
      solapaNovio: "",
      solapaPadrinos: "",
      arreglosCeremonia: "",
      arreglosRecepcion: "",
      precio: "",
    },
    {
      centroMesas: "",
      floresPrincipales: "",
      bouquetNovia: "",
      bouquetDamas: "",
      solapaNovio: "",
      solapaPadrinos: "",
      arreglosCeremonia: "",
      arreglosRecepcion: "",
      precio: "",
    },
  ]);

  const campos = [
    { key: "centroMesas", label: "Centro de mesas" },
    { key: "floresPrincipales", label: "Flores principales" },
    { key: "bouquetNovia", label: "Bouquet novia" },
    { key: "bouquetDamas", label: "Bouquet damas" },
    { key: "solapaNovio", label: "Solapa Novio" },
    { key: "solapaPadrinos", label: "Solapa Padrinos" },
    { key: "arreglosCeremonia", label: "Arreglos ceremonia" },
    { key: "arreglosRecepcion", label: "Arreglos recepción" },
    { key: "precio", label: "Precio estimado" },
  ] as const;

  const handleCotizacionChange = (
    i: number,
    campo: keyof CotizacionFlorista,
    valor: string
  ) => {
    const copia = [...cotizaciones];
    copia[i][campo] = valor;
    setCotizaciones(copia);
  };

  const [florista, setFlorista] = useState<FloristaContratado>({
    nombre: "",
    direccion: "",
    celular: "",
    bouquetNovia: "",
    bouquetDamas: "",
    solapaNovio: "",
    solapaPadrinos: "",
    centroMesas: "",
    floresCeremonia: "",
    floresRecepcion: "",
    costo: "",
  });

  return (
    <main className="min-h-screen bg-rose-50 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-rose-200 space-y-10">
        <h1 className="text-3xl font-bold text-rose-700 text-center">
          Florista
        </h1>

        {/* Comparador */}
        <div className="overflow-x-auto">
          <h2 className="text-xl font-semibold text-rose-800 mb-3">
            Cotizador de florerías
          </h2>
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-rose-100 text-rose-800">
                <th className="text-left px-4 py-2">Servicio</th>
                <th className="px-4 py-2">Florería 1</th>
                <th className="px-4 py-2">Florería 2</th>
                <th className="px-4 py-2">Florería 3</th>
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
                        value={cotizaciones[i][key]}
                        onChange={(e) =>
                          handleCotizacionChange(i, key, e.target.value)
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

        {/* Florista Contratado */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-rose-800">
            Información del florista contratado
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <input
              placeholder="Nombre del florista"
              value={florista.nombre}
              onChange={(e) =>
                setFlorista({ ...florista, nombre: e.target.value })
              }
              className="border px-3 py-2 rounded"
            />
            <input
              placeholder="Dirección"
              value={florista.direccion}
              onChange={(e) =>
                setFlorista({ ...florista, direccion: e.target.value })
              }
              className="border px-3 py-2 rounded"
            />
            <input
              placeholder="Celular"
              value={florista.celular}
              onChange={(e) =>
                setFlorista({ ...florista, celular: e.target.value })
              }
              className="border px-3 py-2 rounded"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {Object.entries(florista).map(([key, value]) =>
              ["nombre", "direccion", "celular"].includes(key) ? null : (
                <input
                  key={key}
                  placeholder={key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (c) => c.toUpperCase())}
                  value={value}
                  onChange={(e) =>
                    setFlorista({ ...florista, [key]: e.target.value })
                  }
                  className="border px-3 py-2 rounded"
                />
              )
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
