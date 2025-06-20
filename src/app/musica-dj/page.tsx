"use client";

import { useState } from "react";

type DJInfo = {
  contacto: string;
  direccion: string;
  celular: string;
  compania: string;
  web: string;
  email: string;
  horario: string;
  staff: string;
  paquete: string;
  incluye: string;
  costo: string;
  notas: string;
};

export default function MusicaDjPage() {
  const [info, setInfo] = useState<DJInfo>({
    contacto: "",
    direccion: "",
    celular: "",
    compania: "",
    web: "",
    email: "",
    horario: "",
    staff: "",
    paquete: "",
    incluye: "",
    costo: "",
    notas: "",
  });

  return (
    <main className="min-h-screen bg-indigo-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-indigo-200 space-y-8">
        <h1 className="text-3xl font-bold text-indigo-700 text-center">
          DJ / Música
        </h1>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="Contacto"
            value={info.contacto}
            onChange={(e) => setInfo({ ...info, contacto: e.target.value })}
            className="border px-3 py-2 rounded"
          />
          <input
            placeholder="Dirección"
            value={info.direccion}
            onChange={(e) => setInfo({ ...info, direccion: e.target.value })}
            className="border px-3 py-2 rounded"
          />
          <input
            placeholder="Celular"
            value={info.celular}
            onChange={(e) => setInfo({ ...info, celular: e.target.value })}
            className="border px-3 py-2 rounded"
          />
          <input
            placeholder="Compañía"
            value={info.compania}
            onChange={(e) => setInfo({ ...info, compania: e.target.value })}
            className="border px-3 py-2 rounded"
          />
          <input
            placeholder="Página web"
            value={info.web}
            onChange={(e) => setInfo({ ...info, web: e.target.value })}
            className="border px-3 py-2 rounded"
          />
          <input
            placeholder="Email"
            value={info.email}
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            className="border px-3 py-2 rounded"
          />
          <input
            placeholder="Hora de inicio y término"
            value={info.horario}
            onChange={(e) => setInfo({ ...info, horario: e.target.value })}
            className="border px-3 py-2 rounded"
          />
          <input
            placeholder="Número de personas del staff"
            value={info.staff}
            onChange={(e) => setInfo({ ...info, staff: e.target.value })}
            className="border px-3 py-2 rounded"
          />
          <input
            placeholder="Paquete"
            value={info.paquete}
            onChange={(e) => setInfo({ ...info, paquete: e.target.value })}
            className="border px-3 py-2 rounded"
          />
          <input
            placeholder="¿Qué incluye el paquete?"
            value={info.incluye}
            onChange={(e) => setInfo({ ...info, incluye: e.target.value })}
            className="border px-3 py-2 rounded"
          />
          <input
            placeholder="Costo"
            value={info.costo}
            onChange={(e) => setInfo({ ...info, costo: e.target.value })}
            className="border px-3 py-2 rounded"
          />
        </div>

        <textarea
          rows={4}
          placeholder="Notas"
          value={info.notas}
          onChange={(e) => setInfo({ ...info, notas: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />
      </div>
    </main>
  );
}
