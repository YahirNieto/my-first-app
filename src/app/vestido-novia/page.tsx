'use client'

import React from 'react'

export default function VestidoNoviaPage() {
  return (
    <main className="min-h-screen bg-pink-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl rounded-xl border border-pink-200">
        <h1 className="text-3xl font-bold text-pink-700 mb-6 text-center">Vestido de Novia</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Campo label="Aspecto general" name="aspecto_general" />
          <Campo label="Estilo" name="estilo" />
          <Campo label="Accesorios" name="accesorios" />
          <Campo label="Notas" name="notas" textarea />
        </section>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">Presupuesto</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Campo label="Tienda de vestidos" name="tienda" />
          <Campo label="Dirección" name="direccion" />
          <Campo label="Celular" name="celular" />
          <Campo label="Fecha de pedido" name="fecha_pedido" />
          <Campo label="Persona de contacto" name="contacto" />
          <Campo label="Email" name="email" />
          <Campo label="Diseñador / Estilo" name="disenador_estilo" />
          <Campo label="Fecha de entrega" name="fecha_entrega" />
        </section>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">Fechas de prueba</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Campo label="Primera fecha de prueba" name="fecha_prueba_1" />
          <Campo label="Segunda fecha de prueba" name="fecha_prueba_2" />
        </section>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">Costos</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Campo label="Precio del vestido" name="precio" />
          <Campo label="Honorarios de costura" name="costura" />
          <Campo label="Costo de accesorios" name="accesorios_costo" />
          <Campo label="Costos extra" name="extra" />
          <Campo label="Impuestos" name="impuestos" />
          <Campo label="Total" name="total" />
        </section>

        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition shadow"
          >
            Guardar
          </button>
        </div>
      </div>
    </main>
  )
}

function Campo({
  label,
  name,
  textarea = false,
}: {
  label: string
  name: string
  textarea?: boolean
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {textarea ? (
        <textarea
          name={name}
          rows={3}
          className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm shadow-sm focus:ring-pink-300 focus:border-pink-400 transition"
        />
      ) : (
        <input
          type="text"
          name={name}
          className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm shadow-sm focus:ring-pink-300 focus:border-pink-400 transition"
        />
      )}
    </div>
  )
}
