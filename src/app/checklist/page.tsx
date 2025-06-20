"use client";

import { useState } from "react";

type Tarea = {
  texto: string;
  lista: boolean;
};

type Seccion = {
  titulo: string;
  tareas: Tarea[];
  abierta: boolean;
};

export default function ChecklistPage() {
  const [secciones, setSecciones] = useState<Seccion[]>([
    {
      titulo: "12 meses antes",
      abierta: true,
      tareas: [
        { texto: "Establecer un presupuesto.", lista: false },
        { texto: "Elegir vestido de novia y programar pruebas.", lista: false },
        { texto: "Establecer de 2 a 3 fechas preferidas.", lista: false },
        { texto: "Elegir y reservar lugar de ceremonia.", lista: false },
        { texto: "Elegir y reservar lugar de recepción.", lista: false },
        { texto: "Crear lista de invitados.", lista: false },
        {
          texto: "Contratar un organizador o consultor de boda.",
          lista: false,
        },
        { texto: "Comenzar la investigación de proveedores.", lista: false },
        { texto: "Recopilar ideas en Pinterest o blogs.", lista: false },
        { texto: "Determinar estilo y colores.", lista: false },
        { texto: "Visitas guiadas a lugares de recepción.", lista: false },
        { texto: "Reservar catering.", lista: false },
        { texto: "Ordenar pastel.", lista: false },
        { texto: "Reservar fotografía y filmación.", lista: false },
        { texto: "Contratar músico para ceremonia.", lista: false },
        { texto: "Reservar banda en vivo o DJ.", lista: false },
        { texto: "Reservar florista y decorador.", lista: false },
        { texto: "Contratar coordinador del día.", lista: false },
        { texto: "Solicitar presupuesto de invitaciones.", lista: false },
      ],
    },
    {
      titulo: "10 meses antes",
      abierta: false,
      tareas: [
        { texto: "Primera prueba de vestido.", lista: false },
        { texto: "Enviar tarjetas save-the-date.", lista: false },
        { texto: "Crear sitio web de boda.", lista: false },
        { texto: "Elegir accesorios: velo, joyas, zapatos.", lista: false },
        { texto: "Programar reunión de compromiso.", lista: false },
        { texto: "Planificar y reservar luna de miel.", lista: false },
        { texto: "Reservar habitaciones de hotel.", lista: false },
        { texto: "Reservar transporte para invitados.", lista: false },
        { texto: "Crear mesa de regalos.", lista: false },
        { texto: "Comprar anillos de boda.", lista: false },
        { texto: "Encargar vestidos para damas.", lista: false },
        { texto: "Alquiler de mantelería, mesas, sillas, etc.", lista: false },
        { texto: "Fotomatón, estaciones de comida, etc.", lista: false },
        { texto: "Reservar entretenimiento y florista.", lista: false },
        { texto: "Tomar fotos de compromiso.", lista: false },
        { texto: "Finalizar lista de invitados.", lista: false },
      ],
    },
    {
      titulo: "8 a 6 meses antes",
      abierta: false,
      tareas: [
        { texto: "Segunda prueba de vestido.", lista: false },
        { texto: "Pedido de invitaciones.", lista: false },
        { texto: "Contratar banda o DJ.", lista: false },
        { texto: "Prueba de pasteles.", lista: false },
        { texto: "Reservar estilista y maquillador.", lista: false },
        { texto: "Planificar decoración.", lista: false },
        { texto: "Organizar transporte.", lista: false },
        { texto: "Comprar regalos a familiares.", lista: false },
        { texto: "Comprar adorno de pastel.", lista: false },
        { texto: "Agendar ensayos y degustaciones.", lista: false },
        { texto: "Clases de baile.", lista: false },
        { texto: "Escribir votos.", lista: false },
        { texto: "Discutir ceremonia con sacerdote.", lista: false },
        { texto: "Comprar lazo de boda.", lista: false },
        { texto: "Enviar invitaciones.", lista: false },
        { texto: "Comprar atuendo del novio y padrinos.", lista: false },
        { texto: "Adquirir seguro de boda.", lista: false },
      ],
    },
    {
      titulo: "2 a 1 meses antes",
      abierta: false,
      tareas: [
        { texto: "Comprar vestido de novia.", lista: false },
        { texto: "Confirmar menú, asistentes y proveedores.", lista: false },
        { texto: "Imprimir papelería: cartel, menú, mapa, etc.", lista: false },
        { texto: "Delegar tareas del día de la boda.", lista: false },
        {
          texto: "Prueba final de vestido, zapatos y accesorios.",
          lista: false,
        },
        { texto: "Pagar proveedores en su totalidad.", lista: false },
        { texto: "Practicar votos en voz alta.", lista: false },
        { texto: "Recolectar kits de emergencia.", lista: false },
      ],
    },
    {
      titulo: "1 mes antes",
      abierta: false,
      tareas: [
        { texto: "Trabajar en ubicación de mesas.", lista: false },
        { texto: "Programar visita al lugar de recepción.", lista: false },
        { texto: "Confirmar horarios de peinado y maquillaje.", lista: false },
        { texto: "Comprar alcohol y libro de firmas.", lista: false },
        { texto: "Entregar kits al hotel.", lista: false },
        { texto: "Dormir bien, comer saludable.", lista: false },
        { texto: "Intercambiar notas con tu pareja.", lista: false },
      ],
    },
    {
      titulo: "2 semanas antes",
      abierta: false,
      tareas: [
        { texto: "Última prueba del vestido.", lista: false },
        { texto: "Seguir a invitados que no confirmen.", lista: false },
        { texto: "Lista de edición de video.", lista: false },
        { texto: "Confirmar alergias y comidas especiales.", lista: false },
        { texto: "Realizar pagos pendientes.", lista: false },
        { texto: "Rutina de belleza: manicure, cejas, etc.", lista: false },
      ],
    },
    {
      titulo: "1 semana antes",
      abierta: false,
      tareas: [
        { texto: "Finalizar diagramas de ubicación.", lista: false },
        { texto: "Confirmar horarios y reservaciones.", lista: false },
        { texto: "Preparar documentos y maletas.", lista: false },
        { texto: "Finalizar votos matrimoniales.", lista: false },
      ],
    },
    {
      titulo: "2 días antes",
      abierta: false,
      tareas: [
        { texto: "Entregar anillos a padrinos.", lista: false },
        { texto: "Preparar vestido y regalos.", lista: false },
        { texto: "Entrega de artículos al lugar.", lista: false },
      ],
    },
    {
      titulo: "Después de la boda",
      abierta: false,
      tareas: [
        { texto: "Devolver alquileres.", lista: false },
        { texto: "Limpieza de ropa.", lista: false },
        { texto: "Enviar tarjetas de agradecimiento.", lista: false },
        { texto: "Dejar reseñas de proveedores.", lista: false },
      ],
    },
  ]);

  const [nuevas, setNuevas] = useState<string[]>(secciones.map(() => ""));

  const toggleTarea = (sIndex: number, tIndex: number) => {
    const copia = [...secciones];
    copia[sIndex].tareas[tIndex].lista = !copia[sIndex].tareas[tIndex].lista;
    setSecciones(copia);
  };

  const toggleSeccion = (index: number) => {
    const copia = [...secciones];
    copia[index].abierta = !copia[index].abierta;
    setSecciones(copia);
  };

  const agregarTarea = (index: number) => {
    const texto = nuevas[index].trim();
    if (texto) {
      const copia = [...secciones];
      copia[index].tareas.push({ texto, lista: false });
      setSecciones(copia);
      const actual = [...nuevas];
      actual[index] = "";
      setNuevas(actual);
    }
  };

  return (
    <main className="min-h-screen bg-rose-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-xl border border-rose-200 space-y-8">
        <h1 className="text-3xl font-bold text-rose-700 text-center">
          Checklist de Boda
        </h1>

        {secciones.map((sec, sIndex) => (
          <div
            key={sIndex}
            className="border border-rose-100 rounded-md overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleSeccion(sIndex)}
              className="w-full text-left px-5 py-3 font-semibold bg-rose-100 text-rose-800 hover:bg-rose-200"
            >
              {sec.titulo}
            </button>

            {sec.abierta && (
              <div className="p-5 space-y-4">
                <ul className="space-y-2">
                  {sec.tareas.map((t, tIndex) => (
                    <li key={tIndex} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={t.lista}
                        onChange={() => toggleTarea(sIndex, tIndex)}
                        className="w-4 h-4"
                      />
                      <span
                        className={
                          t.lista
                            ? "line-through text-gray-500"
                            : "text-gray-800"
                        }
                      >
                        {t.texto}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 pt-2">
                  <input
                    type="text"
                    placeholder="Nueva tarea..."
                    value={nuevas[sIndex]}
                    onChange={(e) => {
                      const nueva = [...nuevas];
                      nueva[sIndex] = e.target.value;
                      setNuevas(nueva);
                    }}
                    className="border flex-1 px-3 py-2 rounded"
                  />
                  <button
                    onClick={() => agregarTarea(sIndex)}
                    className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700"
                  >
                    Agregar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
