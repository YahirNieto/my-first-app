'use client'

import React, { useState } from 'react'

type Item = {
  nombre: string
  listo: boolean
}

export default function KitEmergenciaPage() {
  const [nuevoItem, setNuevoItem] = useState('')
const [items, setItems] = useState<Item[]>([
  { nombre: 'Aguja e hilo', listo: false },
  { nombre: 'Curitas', listo: false },
  { nombre: 'Pañuelos', listo: false },
  { nombre: 'Pastillas para el dolor', listo: false },
  { nombre: 'Desodorante', listo: false },
  { nombre: 'Tijeras pequeñas', listo: false },
  { nombre: 'Ligas para el cabello', listo: false },
  { nombre: 'Spray para el cabello', listo: false },
  { nombre: 'Gel antibacterial', listo: false },
  { nombre: 'Toallas húmedas', listo: false },
  { nombre: 'Maquillaje de repuesto', listo: false },
  { nombre: 'Polvo compacto', listo: false },
  { nombre: 'Brillos labiales', listo: false },
  { nombre: 'Paracetamol / Ibuprofeno', listo: false },
  { nombre: 'Medicamentos personales', listo: false },
  { nombre: 'Cotonetes', listo: false },
  { nombre: 'Limpiador de manchas', listo: false },
  { nombre: 'Pegamento para uñas', listo: false },
  { nombre: 'Botones de repuesto', listo: false },
  { nombre: 'Imperdibles', listo: false },
  { nombre: 'Cinta doble cara', listo: false },
  { nombre: 'Cepillo o peine', listo: false },
  { nombre: 'Cepillo de dientes', listo: false },
  { nombre: 'Pasta dental', listo: false },
  { nombre: 'Mentas o chicles', listo: false },
  { nombre: 'Agua embotellada', listo: false },
  { nombre: 'Snacks o barritas', listo: false },
  { nombre: 'Calcetas o medias extra', listo: false },
  { nombre: 'Cargador de celular', listo: false },
  { nombre: 'Pila externa (power bank)', listo: false },
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
    <main className="min-h-screen bg-pink-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-pink-200">
        <h1 className="text-3xl font-bold text-pink-700 text-center mb-6">Kit de Emergencia</h1>

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
            className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
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
                className="flex items-center justify-between bg-pink-100 rounded-md px-4 py-2"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={item.listo}
                    onChange={() => toggleItem(i)}
                    className="w-4 h-4 text-pink-600"
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
