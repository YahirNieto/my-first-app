'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex gap-4 flex-wrap">
      <Link href="/" className="hover:underline">Inicio</Link>
      <Link href="/about" className="hover:underline">Acerca</Link>
      <Link href="/contact" className="hover:underline">Contacto</Link>
      <Link href="/detalles-generales" className="hover:underline">Detalles Generales</Link>
      <Link href="/musica" className="hover:underline">Música</Link>
      <Link href="/invitados-novio" className="hover:underline">Invitados Novio</Link>
      <Link href="/invitados-novia" className="hover:underline">Invitados Novia</Link>
      <Link href="/mapa-asientos" className="hover:underline">Mapa Asientos</Link>
      <Link href="/pagos-proveedores" className="hover:underline">Pago Proveedores</Link>
      <Link href="/contacto-proveedores" className="hover:underline">Contacto Proveedores</Link>
      <Link href="/kit-emergencia" className="hover:underline">Kit Emergencia</Link>
      <Link href="/kit-novio" className="hover:underline">Kit Novio</Link>
      <Link href="/kit-novia" className="hover:underline">Kit Novia</Link>
    </nav>
  )
}
