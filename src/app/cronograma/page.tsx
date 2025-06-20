'use client'

import { useState } from 'react'

type Evento = {
  hora: string
  actividad: string
}

const actividadesBase: Evento[] = [
  { hora: '', actividad: 'Preárense: Novia y damas de honor' },
  { hora: '', actividad: 'Llega el fotógrafo - Fotos de preparación + Fotos detalladas' },
  { hora: '', actividad: 'Prepárense: Novio + padrinos de boda' },
  { hora: '', actividad: 'El fotógrafo toma fotos de preparación y detalles de los chicos' },
  { hora: '', actividad: 'La novia se viste' },
  { hora: '', actividad: 'Retratos de la novia' },
  { hora: '', actividad: 'Retratos del novio' },
  { hora: '', actividad: 'Primer vistazo con el padre de la novia' },
  { hora: '', actividad: 'Primer vistazo Novia + Novio' },
  { hora: '', actividad: 'Retratos - Novia + Novio' },
  { hora: '', actividad: 'Descanso' },
  { hora: '', actividad: 'Salida a ceremonia' },
  { hora: '', actividad: 'El fotógrafo y videógrafo toman detalles de la ceremonia e invitados' },
  { hora: '', actividad: 'Ceremonia' },
  { hora: '', actividad: 'Retratos - Novia + Damas de honor' },
  { hora: '', actividad: 'Retratos - Novio + Padrinos de boda' },
  { hora: '', actividad: 'Salida a recepción' },
  { hora: '', actividad: 'Retratos de novia y novio' },
  { hora: '', actividad: 'Retratos familiares' },
  { hora: '', actividad: 'Los novios se unen para entrar a recepción' },
  { hora: '', actividad: 'Comida' },
  { hora: '', actividad: 'Agradecimiento y fotos mesa por mesa' },
  { hora: '', actividad: 'Discurso de padrinos y familiares' },
  { hora: '', actividad: 'Primer baile, baile de padre e hija, baile de madre e hijo' },
  { hora: '', actividad: 'Pista de baile abierta' },
  { hora: '', actividad: 'Protocolo: ramo, liguero, víbora de la mar, marcha fúnebre, etc.' },
  { hora: '', actividad: 'Corte de pastel, postre + café' },
  { hora: '', actividad: 'Mariachi y cena (tacos, chilaquiles, esquites, maruchan, etc.)' },
  { hora: '', actividad: 'Última llamada en barra de bebidas' },
  { hora: '', actividad: 'Gran salida' },
]

export default function CronogramaPage() {
  const [eventos, setEventos] = useState<Evento[]>(actividadesBase)
  const [nuevo, setNuevo] = useState<Evento>({ hora: '', actividad: '' })

  const actualizarHora = (index: number, hora: string) => {
    const copia = [...eventos]
    copia[index].hora = hora
    setEventos(copia)
  }

  const agregarActividad = () => {
    if (nuevo.actividad.trim()) {
      setEventos([...eventos, nuevo])
      setNuevo({ hora: '', actividad: '' })
    }
  }

  const eliminar = (index: number) => {
    const copia = [...eventos]
    copia.splice(index, 1)
    setEventos(copia)
  }

  return (
    <main className="min-h-screen bg-orange-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-orange-200">
        <h1 className="text-3xl font-bold text-orange-700 text-center mb-6">Cronograma del Día</h1>

        <ul className="space-y-3 mb-8">
          {eventos.map((evento, i) => (
            <li key={i} className="flex flex-col md:flex-row items-start md:items-center gap-3 bg-orange-100 p-3 rounded">
              <input
                type="time"
                value={evento.hora}
                onChange={(e) => actualizarHora(i, e.target.value)}
                className="border border-gray-300 px-3 py-1 rounded"
              />
              <span className="flex-1 text-gray-800">{evento.actividad}</span>
              {i >= actividadesBase.length && (
                <button onClick={() => eliminar(i)} className="text-red-500 text-sm hover:underline">Eliminar</button>
              )}
            </li>
          ))}
        </ul>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="time"
            value={nuevo.hora}
            onChange={(e) => setNuevo({ ...nuevo, hora: e.target.value })}
            className="w-full md:w-1/3 border border-gray-300 px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Nueva actividad"
            value={nuevo.actividad}
            onChange={(e) => setNuevo({ ...nuevo, actividad: e.target.value })}
            className="flex-1 border border-gray-300 px-3 py-2 rounded"
          />
          <button
            onClick={agregarActividad}
            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
          >
            Agregar
          </button>
        </div>
      </div>
    </main>
  )
}
