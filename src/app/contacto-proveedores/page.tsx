'use client'

import React, { useState } from 'react'

type Proveedor = {
  nombre: string
  servicio: string
  telefono: string
  email: string
  contacto: string
  notas: string
}

export default function ContactoProveedoresPage() {
  const [nuevo, setNuevo] = useState<Proveedor>({
    nombre: '',
    servicio: '',
    telefono: '',
    email: '',
    contacto: '',
    notas: '',
  })

  const [proveedores, setProveedores] = useState<Proveedor[]>([])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setNuevo({ ...nuevo, [name]: value })
  }

  const agregarProveedor = () => {
    if (!nuevo.nombre || !nuevo.servicio) return
    setProveedores([...proveedores, nuevo])
    setNuevo({
      nombre: '',
      servicio: '',
      telefono: '',
      email: '',
      contacto: '',
      notas: '',
    })
  }

  const eliminarProveedor = (index: number) => {
    const copia = [...proveedores]
    copia.splice(index, 1)
    setProveedores(copia)
  }

  return (
    <main className="min-h-screen bg-purple-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-purple-200">
        <h1 className="text-3xl font-bold text-purple-700 text-center mb-6">Contacto de Proveedores</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Campo label="Nombre del proveedor" name="nombre" value={nuevo.nombre} onChange={handleChange} />
          <Campo label="Servicio" name="servicio" value={nuevo.servicio} onChange={handleChange} />
          <Campo label="Teléfono" name="telefono" value={nuevo.telefono} onChange={handleChange} />
          <Campo label="Email" name="email" value={nuevo.email} onChange={handleChange} />
          <Campo label="Persona de contacto" name="contacto" value={nuevo.contacto} onChange={handleChange} />
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Notas</label>
            <textarea
              name="notas"
              value={nuevo.notas}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm"
            />
          </div>
        </div>

        <button
          onClick={agregarProveedor}
          className="mb-6 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Agregar proveedor
        </button>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">Lista de proveedores:</h2>
        {proveedores.length === 0 ? (
          <p className="text-gray-500 italic">No hay proveedores registrados aún.</p>
        ) : (
          <ul className="space-y-3">
            {proveedores.map((prov, i) => (
              <li key={i} className="bg-purple-100 rounded-md p-4 flex justify-between items-start">
                <div>
                  <p className="font-semibold text-purple-800">{prov.nombre}</p>
                  <p className="text-sm text-gray-700">{prov.servicio}</p>
                  <p className="text-sm text-gray-600">
                    {prov.contacto} | {prov.telefono} | {prov.email}
                  </p>
                  {prov.notas && <p className="text-xs text-gray-500 mt-1">Notas: {prov.notas}</p>}
                </div>
                <button
                  onClick={() => eliminarProveedor(i)}
                  className="text-sm text-red-500 hover:underline"
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

function Campo({
  label,
  name,
  value,
  onChange,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm"
      />
    </div>
  )
}
