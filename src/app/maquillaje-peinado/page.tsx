'use client'

import React, { useState } from 'react'

export default function MaquillajePeinadoPage() {
  const [formData, setFormData] = useState({
    proveedor: '',
    email: '',
    fecha_evento: '',
  })
  const [errores, setErrores] = useState<{ [key: string]: string }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrores({ ...errores, [e.target.name]: '' }) // limpia error cuando se edita
  }

  const validar = () => {
    const nuevosErrores: { [key: string]: string } = {}
    if (!formData.proveedor) nuevosErrores.proveedor = 'Campo requerido'
    if (!formData.email) {
      nuevosErrores.email = 'Campo requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nuevosErrores.email = 'Email inválido'
    }
    if (!formData.fecha_evento) nuevosErrores.fecha_evento = 'Campo requerido'

    return nuevosErrores
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const erroresValidados = validar()
    if (Object.keys(erroresValidados).length > 0) {
      setErrores(erroresValidados)
    } else {
      console.log('Formulario válido ✅', formData)
      alert('Formulario enviado')
    }
  }

  return (
    <main className="min-h-screen bg-rose-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl rounded-xl border border-rose-200">
        <h1 className="text-3xl font-bold text-rose-700 mb-6 text-center">Maquillaje y Peinado</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Campo
            label="Nombre del salón o proveedor"
            name="proveedor"
            value={formData.proveedor}
            onChange={handleChange}
            error={errores.proveedor}
          />
          <Campo
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errores.email}
          />
          <Campo
            label="Fecha del evento"
            name="fecha_evento"
            value={formData.fecha_evento}
            onChange={handleChange}
            error={errores.fecha_evento}
          />
          {/* Puedes agregar más campos aquí y seguir usando los mismos props */}

          <div className="md:col-span-2 text-right mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition shadow"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

function Campo({
  label,
  name,
  value,
  onChange,
  error,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border px-4 py-2 text-sm shadow-sm transition ${
          error
            ? 'border-red-500 focus:ring-red-200 focus:border-red-500'
            : 'border-gray-300 focus:ring-rose-200 focus:border-rose-400'
        }`}
      />
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  )
}
