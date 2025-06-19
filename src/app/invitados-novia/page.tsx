'use client'

import React, { useState } from 'react'

type Invitado = {
  nombre: string
  relacion: string
  confirmado: boolean
}

export default function InvitadosNoviaPage() {
  const [nuevo, setNuevo] = useState<Invitado>({ nombre: '', relacion: '', confirmado: false })
  const [lista, setLista] = useState<Invitado[]>([])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement
    const { name, value, type, checked } = target
    setNuevo({ ...nuevo, [name]: type === 'checkbox' ? checked : value })
  }

  const agregarInvitado = () => {
    if (!nuevo.nombre || !nuevo.relacion) return
    setLista([...lista, nuevo])
    setNuevo({ nombre: '', relacion: '', confirmado: false })
  }

  const eliminarInvitado = (index: number) => {
    const copia = [...lista]
    copia.splice(index, 1)
    setLista(copia)
  }

  return (
    <main className="min-h-screen bg-rose-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-rose-200">
        <h1 className="text-3xl font-bold text-center text-rose-700 mb-6">
          Lista de Invitados (Novia)
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={nuevo.nombre}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Relación</label>
            <input
              type="text"
              name="relacion"
              value={nuevo.relacion}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm"
            />
          </div>
          <div className="flex items-center mt-6">
            <input
              type="checkbox"
              name="confirmado"
              checked={nuevo.confirmado}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm text-gray-700">Confirmado</label>
          </div>
        </div>

        <button
          onClick={agregarInvitado}
          className="mb-6 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition"
        >
          Agregar invitado
        </button>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Lista:</h2>
          {lista.length === 0 ? (
            <p className="text-gray-500 italic">Aún no hay invitados.</p>
          ) : (
            <ul className="space-y-3">
              {lista.map((inv, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center bg-rose-100 rounded-md px-4 py-2"
                >
                  <div>
                    <p className="font-medium">{inv.nombre}</p>
                    <p className="text-sm text-gray-600">{inv.relacion}</p>
                    <p className={`text-xs ${inv.confirmado ? 'text-green-600' : 'text-red-600'}`}>
                      {inv.confirmado ? 'Confirmado' : 'No confirmado'}
                    </p>
                  </div>
                  <button
                    onClick={() => eliminarInvitado(i)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  )
}
