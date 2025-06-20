"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { sections } from "@/data/sections"; // usando alias si está configurado, o con ruta relativa

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex">
      {/* Sidebar para pantallas grandes */}
      <aside className="hidden md:block w-64 bg-gray-800 text-white min-h-screen p-4 fixed z-40 top-0 bottom-0">
        <div className="flex justify-center mb-6 mt-4">
          <Link href="/">
            <Image src="/cinema222.png" alt="Logo" width={40} height={40} className="cursor-pointer" />
          </Link>
        </div>
        {sections.map((sec, i) => (
          <div key={i} className="mb-6">
            <h3 className="text-emerald-300 font-semibold mb-2">{sec.title}</h3>
            <ul className="space-y-1">
              {sec.links.map((link, j) => (
                <li key={j}>
                  <Link href={link.href} className="block hover:underline text-emerald-100">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

       {/* Contenido principal con barra superior y menú móvil */}
      <div className="flex-1 md:ml-64">
        <nav className="bg-gray-800 text-white px-6 py-4 md:hidden z-50 relative">
          <div className="flex items-center justify-between">
            {/* Botón hamburguesa */}
            <button onClick={() => setOpen(!open)}>
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo */}
            <Link href="/">
              <Image src="/cinema222.png" alt="Logo" width={40} height={40} className="inline-block cursor-pointer" />
            </Link>

            {/* Link a Inicio */}
            <Link href="/" className="font-semibold">Inicio</Link>
          </div>

          {open && (
            <div className="absolute left-0 top-full w-full bg-gray-800 text-white mt-2 p-4 shadow-lg z-50">
              {sections.map((sec, i) => (
                <div key={i} className="mb-4">
                  <h3 className="text-emerald-300 font-semibold mb-2">{sec.title}</h3>
                  <ul className="space-y-1">
                    {sec.links.map((link, j) => (
                      <li key={j}>
                        <Link
                          href={link.href}
                          className="block hover:underline text-emerald-100"
                          onClick={() => setOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </nav>
      </div>
    </div>
  )
}

// Nota: Este componente Navbar es un ejemplo de cómo implementar una barra de navegación responsiva
// con un menú desplegable para pantallas pequeñas y una barra lateral para pantallas grandes.  