"use client";

import React from "react";

export default function DetallesGeneralesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Detalles Generales
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">
              Detalles Generales de la Boda
            </h2>
          </div>

          {/* Campo de ejemplo */}
          <Campo label="Fecha de Boda" name="fecha_de_boda" />
          <Campo label="Lugar de la ceremonia" name="lugar_de_la_ceremonia" />
          <Campo label="Hora de la ceremonia" name="hora_de_la_ceremonia" />
          <Campo
            label="Número de invitados a la ceremonia"
            name="numero_invitados_ceremonia"
          />
          <Campo label="Lugar de la recepción" name="lugar_de_la_recepcion" />
          <Campo label="Hora de la recepción" name="hora_de_la_recepcion" />
          <Campo
            label="Número de invitados a la recepción"
            name="numero_invitados_recepcion"
          />
          <Campo label="Tema musical de boda" name="tema_musical_boda" />
          <Campo label="Servicio de banquete" name="servicio_banquete" />
          <Campo
            label="Nombre de responsable de banquete"
            name="responsable_banquete"
          />
          <Campo
            label="Servicio de filmación y fotografía"
            name="filmacion_fotografia"
          />
          <Campo label="Nombre del organizador" name="organizador" />

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Notas
            </label>
            <textarea
              name="notas"
              rows={4}
              placeholder="Escribe observaciones importantes..."
              className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
            />
          </div>

          <div className="md:col-span-2 text-right">
            <button
              type="submit"
              className="inline-block px-6 py-2 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition font-medium shadow"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

function Campo({ label, name }: { label: string; name: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <input
        type="text"
        name={name}
        placeholder={label}
        className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
      />
    </div>
  );
}
