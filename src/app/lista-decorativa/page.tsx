'use client'

import React, { useState } from 'react'

type Item = {
  nombre: string
  listo: boolean
}

type Categoria = {
  titulo: string
  items: Item[]
}

export default function ListaDecoracionPage() {
  const [categorias, setCategorias] = useState<Categoria[]>([
    {
      titulo: 'Ceremonia',
      items: [
        { nombre: 'Cartel de bienvenida', listo: false },
        { nombre: 'Señalización (asientos, ceremonia, orden o eventos)', listo: false },
        { nombre: 'Exhibición de orden de servicio', listo: false },
        { nombre: 'Señales de asientos reservados', listo: false },
        { nombre: 'Arco de ceremonia (floral/tela)', listo: false },
        { nombre: 'Telón de fondo de la ceremonia', listo: false },
        { nombre: 'Alfombra de pasillo', listo: false },
        { nombre: 'Decoraciones de bancas y alfombra', listo: false },
        { nombre: 'Arreglos florales', listo: false },
        { nombre: 'Velas / Linternas', listo: false },
        { nombre: 'Cuaderno de votos', listo: false },
      ],
    },
    {
      titulo: 'Mesas de Recepción',
      items: [
        { nombre: 'Centros de mesa', listo: false },
        { nombre: 'Manteles', listo: false },
        { nombre: 'Camino de mesa', listo: false },
        { nombre: 'Velas', listo: false },
        { nombre: 'Números de mesa / Nombres', listo: false },
        { nombre: 'Soportes de números de mesa', listo: false },
        { nombre: 'Nombres de los asientos', listo: false },
        { nombre: 'Menús (por persona o por mesa)', listo: false },
        { nombre: 'Copas (vino, agua, etc.)', listo: false },
        { nombre: 'Platillos (acompañamientos, entrada, principal, postre)', listo: false },
        { nombre: 'Cubiertos', listo: false },
        { nombre: 'Servilletas', listo: false },
        { nombre: 'Detalles de boda', listo: false },
        { nombre: 'Extras como juegos de mesa / desechables', listo: false },
        { nombre: 'Paquetes de actividades para niños', listo: false },
      ],
    },
    {
      titulo: 'Recepción (Decoración General)',
      items: [
        { nombre: 'Señalización (cartel de bienvenida, baños, bar)', listo: false },
        { nombre: 'Señalización personal (frases, recuerdos, fotografías)', listo: false },
        { nombre: 'Plano de mesas y asientos', listo: false },
        { nombre: 'Velas / faroles decorativos por el lugar', listo: false },
        { nombre: 'Sillones, mesas auxiliares', listo: false },
        { nombre: 'Decoración aérea o colgante', listo: false },
        { nombre: 'Estación de libro de visitas (bolígrafos, cámara, señalización)', listo: false },
        { nombre: 'Estación de fotomatón (cabina de fotos)', listo: false },
        { nombre: 'Tarjetas y mesa de regalos y cartel', listo: false },
        { nombre: 'Juegos al aire libre', listo: false },
        { nombre: 'Mesa de pastel (soporte, flores, cuchillo para pastel)', listo: false },
        { nombre: 'Mesa de postres (expositor y telón de fondo)', listo: false },
        { nombre: 'Estación de bar o copas (más carta de cócteles)', listo: false },
        { nombre: 'Jarrón para ramo', listo: false },
        { nombre: 'Señalización de cócteles de autor', listo: false },
      ],
    },
  ])

  const toggleItem = (catIndex: number, itemIndex: number) => {
    const copia = [...categorias]
    copia[catIndex].items[itemIndex].listo = !copia[catIndex].items[itemIndex].listo
    setCategorias(copia)
  }

  return (
    <main className="min-h-screen bg-yellow-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-yellow-200">
        <h1 className="text-3xl font-bold text-yellow-700 text-center mb-6">Lista de Decoración</h1>

        {categorias.map((cat, catIndex) => (
          <section key={catIndex} className="mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">{cat.titulo}</h2>
            <ul className="space-y-2">
              {cat.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex items-center gap-3 bg-yellow-100 rounded-md px-4 py-2"
                >
                  <input
                    type="checkbox"
                    checked={item.listo}
                    onChange={() => toggleItem(catIndex, itemIndex)}
                    className="w-4 h-4 text-yellow-600"
                  />
                  <span className={item.listo ? 'line-through text-gray-500' : 'text-gray-800'}>
                    {item.nombre}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
