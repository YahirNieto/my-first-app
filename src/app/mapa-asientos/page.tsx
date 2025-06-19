'use client'

import React, { useState } from 'react'

type Mesa = {
  nombre: string
  invitados: string[]
}

export default function MapaAsientosPage() {
  const [nombreMesa, setNombreMesa] = useState('')
  const [nombreInvitado, setNombreInvitado] = useState('')
  const [mesaSeleccionada, setMesaSeleccionada] = useState('')
  const [mesas, setMesas] = useState<Mesa[]>([])

  const agregarMesa = () => {
    if (!nombreMesa.trim()) return
    setMesas([...mesas, { nombre: nombreMesa, invitados: [] }])
    setNombreMesa('')
  }

  const agregarInvitado = () => {
    if (!nombreInvitado.trim() || !mesaSeleccionada) return
    setMesas((prevMesas) =>
      prevMesas.map((mesa) =>
        mesa.nombre === mesaSeleccionada
          ? { ...mesa, invitados: [...mesa.invitados, nombreInvitado] }
          : mesa
      )
    )
    setNombreInvitado('')
    setMesaSeleccionada('')
  }

  const eliminarInvitado = (mesaNombre: string, index: number) => {
    setMesas((prevMesas) =>
      prevMesas.map((mesa) =>
        mesa.nombre === mesaNombre
          ? {
              ...mesa,
              invitados: mesa.invitados.filter((_, i) => i !== index),
            }
          : mesa
      )
    )
  }

  return (
    <main className="min-h-screen bg-emerald-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-emerald-200">
        <h1 className="text-3xl font-bold text-emerald-700 text-center mb-6">Mapa de Asientos</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Crear nueva mesa</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Nombre de la mesa"
              value={nombreMesa}
              onChange={(e) => setNombreMesa(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm"
            />
            <button
              onClick={agregarMesa}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
            >
              Agregar mesa
            </button>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Agregar invitado a mesa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Nombre del invitado"
              value={nombreInvitado}
              onChange={(e) => setNombreInvitado(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm"
            />
            <select
              value={mesaSeleccionada}
              onChange={(e) => setMesaSeleccionada(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm"
            >
              <option value="">Selecciona una mesa</option>
              {mesas.map((mesa, i) => (
                <option key={i} value={mesa.nombre}>
                  {mesa.nombre}
                </option>
              ))}
            </select>
            <button
              onClick={agregarInvitado}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
            >
              Asignar invitado
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Mesas y Asientos</h2>
          {mesas.length === 0 ? (
            <p className="text-gray-500 italic">No hay mesas aún.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {mesas.map((mesa, i) => (
                <div key={i} className="bg-emerald-100 rounded-lg p-4 border border-emerald-300">
                  <h3 className="text-lg font-bold text-emerald-800 mb-2">{mesa.nombre}</h3>
                  {mesa.invitados.length === 0 ? (
                    <p className="text-sm text-gray-600">Sin invitados</p>
                  ) : (
                    <ul className="list-disc pl-5 space-y-1">
                      {mesa.invitados.map((inv, j) => (
                        <li key={j} className="flex justify-between">
                          <span>{inv}</span>
                          <button
                            onClick={() => eliminarInvitado(mesa.nombre, j)}
                            className="text-xs text-red-500 hover:underline"
                          >
                            Quitar
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
