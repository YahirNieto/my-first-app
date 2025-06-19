'use client'

import React, { useState } from 'react'

type Item = {
  nombre: string
  listo: boolean
}

export default function KitNovioPage() {
  const [nuevoItem, setNuevoItem] = useState('')
 const [items, setItems] = useState<Item[]>([
  { nombre: 'Traje', listo: false },
  { nombre: 'Corbata / pajarita', listo: false },
  { nombre: 'Gemelos', listo: false },
  { nombre: 'Botones de camisa', listo: false },
  { nombre: 'Camisa blanca', listo: false },
  { nombre: 'Camisa blanca extra', listo: false },
  { nombre: 'Zapatos de boda', listo: false },
  { nombre: 'Zapatos de recepción', listo: false },
  { nombre: 'Libro de votos', listo: false },
  { nombre: 'Votos', listo: false },
  { nombre: 'Colonia', listo: false },
  { nombre: 'Loción', listo: false },
  { nombre: 'Desodorante', listo: false },
  { nombre: 'Peine', listo: false },
  { nombre: 'Spray cabello', listo: false },
  { nombre: 'Kit de uñas', listo: false },
  { nombre: 'Espejo', listo: false },
  { nombre: 'Curitas', listo: false },
  { nombre: 'Aguja e hilo', listo: false },
  { nombre: 'Cargador de teléfono', listo: false },
  { nombre: 'Power bank', listo: false },
  { nombre: 'Snacks + Bebidas', listo: false },
  { nombre: 'Pañuelos desechables', listo: false },
  { nombre: 'Paracetamol o ibuprofeno', listo: false },
  { nombre: 'Música', listo: false },
])


  const agregarItem = () => {
    if (!nuevoItem.trim()) return
    setItems([...items, { nombre: nuevoItem.trim(), listo: false }])
    setNuevoItem('')
  }

  const toggleItem = (index: number) => {
    const copia = [...items]
    copia[index].listo = !copia[index].listo
    setItems(copia)
  }

  const eliminarItem = (index: number) => {
    const copia = [...items]
    copia.splice(index, 1)
    setItems(copia)
  }

  return (
    <main className="min-h-screen bg-blue-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-blue-200">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">Kit de Emergencia del Novio</h1>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Agregar nuevo ítem"
            value={nuevoItem}
            onChange={(e) => setNuevoItem(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm"
          />
          <button
            onClick={agregarItem}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Agregar
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-gray-500 italic">No hay ítems en el kit aún.</p>
        ) : (
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-between bg-blue-100 rounded-md px-4 py-2"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={item.listo}
                    onChange={() => toggleItem(i)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span
                    className={`text-sm ${item.listo ? 'line-through text-gray-500' : 'text-gray-700'}`}
                  >
                    {item.nombre}
                  </span>
                </div>
                <button
                  onClick={() => eliminarItem(i)}
                  className="text-xs text-red-500 hover:underline"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}
