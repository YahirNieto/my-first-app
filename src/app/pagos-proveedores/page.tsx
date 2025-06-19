'use client'

import React, { useState } from 'react'

type Pago = {
  proveedor: string
  servicio: string
  fecha: string
  monto: string
  metodo: string
  notas: string
}

export default function PagosProveedoresPage() {
  const [nuevo, setNuevo] = useState<Pago>({
    proveedor: '',
    servicio: '',
    fecha: '',
    monto: '',
    metodo: '',
    notas: '',
  })

  const [pagos, setPagos] = useState<Pago[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNuevo({ ...nuevo, [name]: value })
  }

  const agregarPago = () => {
    if (!nuevo.proveedor || !nuevo.servicio || !nuevo.fecha || !nuevo.monto) return
    setPagos([...pagos, nuevo])
    setNuevo({
      proveedor: '',
      servicio: '',
      fecha: '',
      monto: '',
      metodo: '',
      notas: '',
    })
  }

  const eliminarPago = (index: number) => {
    const copia = [...pagos]
    copia.splice(index, 1)
    setPagos(copia)
  }

  return (
    <main className="min-h-screen bg-yellow-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-yellow-200">
        <h1 className="text-3xl font-bold text-yellow-700 mb-6 text-center">Pago a Proveedores</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Campo label="Proveedor" name="proveedor" value={nuevo.proveedor} onChange={handleChange} />
          <Campo label="Servicio" name="servicio" value={nuevo.servicio} onChange={handleChange} />
          <Campo label="Fecha de pago" name="fecha" type="date" value={nuevo.fecha} onChange={handleChange} />
          <Campo label="Monto pagado" name="monto" type="number" value={nuevo.monto} onChange={handleChange} />
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Método de pago</label>
            <select
              name="metodo"
              value={nuevo.metodo}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm"
            >
              <option value="">Seleccionar</option>
              <option value="efectivo">Efectivo</option>
              <option value="tarjeta">Tarjeta</option>
              <option value="transferencia">Transferencia</option>
              <option value="cheque">Cheque</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-600 mb-1">Notas</label>
            <textarea
              name="notas"
              rows={3}
              value={nuevo.notas}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm"
            />
          </div>
        </div>

        <button
          onClick={agregarPago}
          className="mb-6 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition"
        >
          Agregar pago
        </button>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Pagos registrados:</h2>
          {pagos.length === 0 ? (
            <p className="text-gray-500 italic">Aún no hay pagos registrados.</p>
          ) : (
            <ul className="space-y-3">
              {pagos.map((pago, i) => (
                <li key={i} className="bg-yellow-100 rounded-md p-4 flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{pago.proveedor} - {pago.servicio}</p>
                    <p className="text-sm text-gray-600">
                      {pago.fecha} | {pago.metodo} | ${pago.monto}
                    </p>
                    {pago.notas && <p className="text-xs text-gray-500 mt-1">Notas: {pago.notas}</p>}
                  </div>
                  <button
                    onClick={() => eliminarPago(i)}
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

function Campo({
  label,
  name,
  value,
  onChange,
  type = 'text',
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm"
      />
    </div>
  )
}
