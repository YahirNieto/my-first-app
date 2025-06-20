'use client'

import { useState } from 'react'

export default function VotosPage() {
  const [votosEl, setVotosEl] = useState('')

  return (
    <main className="min-h-screen bg-pink-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-pink-200">
        <h1 className="text-3xl font-bold text-center text-pink-700 mb-6">Votos</h1>
        <div>
          <label htmlFor="votosEl" className="block font-semibold text-pink-800 mb-2">
            Votos de Él:
          </label>
          <textarea
            id="votosEl"
            value={votosEl}
            onChange={(e) => setVotosEl(e.target.value)}
            rows={6}
            className="w-full border border-pink-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Escribe aquí tus votos..."
          />
        </div>
      </div>
    </main>
  )
}
