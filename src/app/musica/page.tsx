"use client";

import React from "react";

export default function MusicaPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Música
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Ceremonia
          </h2>
          <FormularioMusica
            campos={[
              "Entrada familiar",
              "Entrada de novio",
              "Entrada novia",
              "Otros temas (Ten piedad, aleluya, comunión)",
              "Salida de novios",
            ]}
          />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Recepción
          </h2>
          <FormularioMusica
            campos={[
              "Bienvenida a la fiesta",
              "Entrada de novios",
              "Primer baile de novios",
              "Baile madre + novio",
              "Baile padre + novia",
              "Temas especiales",
              "Último baile de novios",
            ]}
          />
        </section>

        <div className="mt-8 text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition shadow"
          >
            Guardar
          </button>
        </div>
      </div>
    </main>
  );
}

function FormularioMusica({ campos }: { campos: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {campos.map((campo) => (
        <div key={campo}>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            {campo}
          </label>
          <input
            type="text"
            name={campo.toLowerCase().replace(/\s+/g, "_")}
            placeholder={campo}
            className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
          />
        </div>
      ))}
    </div>
  );
}
