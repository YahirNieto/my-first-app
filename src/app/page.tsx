import Link from "next/link";
import { sections } from "@/data/sections"; // usando alias si está configurado, o con ruta relativa

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-emerald-700 mb-10">
          Planner de Boda
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((sec, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-5 border border-emerald-100 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-emerald-800 mb-4">
                {sec.title}
              </h3>
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
  );
}
