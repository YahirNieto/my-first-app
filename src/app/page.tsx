import Link from 'next/link'

const sections = [
  {
    title: 'Planeación general',
    links: [
      { name: 'Checklist', href: '/checklist' },
      { name: 'Cronograma', href: '/cronograma' },
      { name: 'Pagos a proveedores', href: '/pagos-proveedores' },
    ],
  },
  {
    title: 'Ceremonia y recepción',
    links: [
      { name: 'Detalles generales', href: '/detalles-generales' },
      { name: 'Mapa de asientos', href: '/mapa-asientos' },
      { name: 'Lista decorativa', href: '/lista-decorativa' },
      { name: 'Música', href: '/musica' },
      { name: 'Música DJ', href: '/musica-dj' },
    ],
  },
  {
    title: 'Invitados y roles',
    links: [
      { name: 'Invitados novia', href: '/invitados-novia' },
      { name: 'Invitados novio', href: '/invitados-novio' },
      { name: 'Votos novia', href: '/votos-novia' },
      { name: 'Votos novio', href: '/votos-novio' },
    ],
  },
  {
    title: 'Proveedores y cotizaciones',
    links: [
      { name: 'Contacto proveedores', href: '/contacto-proveedores' },
      { name: 'Cotización lugar', href: '/cotizaciones-lugar' },
      { name: 'Cotización fotografía', href: '/cotizaciones-fotografia' },
      { name: 'Cotización filmación', href: '/cotizaciones-filmacion' },
      { name: 'Catering', href: '/catering' },
      { name: 'Florista', href: '/florista' },
    ],
  },
  {
    title: 'Preparativos y kits',
    links: [
      { name: 'Vestido novia', href: '/vestido-novia' },
      { name: 'Traje novio', href: '/traje-novio' },
      { name: 'Maquillaje y peinado', href: '/maquillaje-peinado' },
      { name: 'Kit emergencia', href: '/kit-emergencia' },
      { name: 'Kit novia', href: '/kit-novia' },
      { name: 'Kit novio', href: '/kit-novio' },
    ],
  },
  {
    title: 'Regalos y recuerdos',
    links: [
      { name: 'Regalos', href: '/regalos' },
      { name: 'Lista de fotos', href: '/lista-fotos' },
      { name: 'Papelería', href: '/papeleria' },
    ],
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-emerald-700 mb-10">Planner de Boda</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((sec, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-5 border border-emerald-100 hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold text-emerald-800 mb-4">{sec.title}</h2>
              <ul className="space-y-2">
                {sec.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="text-emerald-600 hover:underline hover:text-emerald-800"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
