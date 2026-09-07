import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { assetPath } from "../utils/assetPath.js";
import { buildWhatsAppLink } from "../utils/whatsapp.js";
import { getCatalogHash } from "../utils/routes.js";

const steps = [
  {
    title: "1. Escribes por WhatsApp",
    text: "Nos cuentas qué buscas y resolvemos dudas iniciales de forma clara.",
  },
  {
    title: "2. Revisamos tu objetivo",
    text: "Identificamos qué tipo de suero o combinación encaja mejor con tu caso.",
  },
  {
    title: "3. Te mostramos opciones",
    text: "Ves el catálogo, el nombre técnico, el precio y la ficha de cada producto.",
  },
  {
    title: "4. Aplicación supervisada",
    text: "La atención se realiza bajo control profesional y con indicaciones previas.",
  },
  {
    title: "5. Seguimiento",
    text: "Te compartimos recomendaciones y el siguiente paso según tu evolución.",
  },
];

const trustPoints = [
  {
    title: "Información visible",
    text: "Cada ficha muestra nombre comercial, técnico, categoría y precio.",
  },
  {
    title: "Proceso claro",
    text: "Primero entiendes el flujo, luego revisas el catálogo y finalmente consultas.",
  },
  {
    title: "Contacto directo",
    text: "WhatsApp está siempre a un clic para resolver preguntas sin fricción.",
  },
  {
    title: "Presentación profesional",
    text: "La portada resume beneficios, respaldo y una experiencia más confiable.",
  },
];

const whatsappLink = buildWhatsAppLink(
  "Hola, quiero consultar más información sobre la sueroterapia y ver el catálogo."
);

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8FFFE] text-ink">
      <Header actionLabel="Ver catálogo" actionHref={getCatalogHash()} />

      <main className="mx-auto max-w-[1200px] px-4 md:px-10 py-8 md:py-12">
        <section className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 md:gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D9F2F0] bg-white px-3.5 py-2 font-sans-ui text-[11px] tracking-[0.16em] text-teal-dark uppercase">
              Portada de confianza
            </div>

            <h1 className="mt-5 font-serif-display text-[34px] md:text-[58px] leading-[0.92] tracking-[-0.03em] max-w-[720px]">
              Sueroterapia con proceso claro,
              <span className="block italic text-teal mt-1">catálogo visible y contacto directo</span>
            </h1>

            <p className="mt-4 max-w-[620px] font-sans-ui text-[16px] md:text-[15px] leading-[1.7] text-ink/70">
              Esta portada explica cómo funciona la atención antes de abrir el catálogo.
              Así el cliente entiende el proceso, ve los botones correctos y consulta con más confianza.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={getCatalogHash()}
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-ink text-white font-sans-ui text-[14px] font-medium hover:bg-ink/90 transition"
              >
                Ver catálogo
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-teal text-white font-sans-ui text-[14px] font-medium hover:bg-teal-dark transition"
              >
                Consultar por WhatsApp
              </a>
              <button
                onClick={() => scrollToSection("proceso")}
                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-[#E8E8E8] font-sans-ui text-[14px] text-ink/70 hover:text-ink hover:border-teal/30 transition"
              >
                Ver proceso
              </button>
              <button
                onClick={() => scrollToSection("respaldo")}
                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-[#E8E8E8] font-sans-ui text-[14px] text-ink/70 hover:text-ink hover:border-teal/30 transition"
              >
                Ver respaldo
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-[620px]">
              <div className="rounded-[20px] border border-[#E9F4F3] bg-white p-4 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                <div className="font-serif-display text-[24px] leading-none">12</div>
                <div className="mt-1 font-sans-ui text-[10px] tracking-[0.14em] text-ink/45 uppercase">
                  Sueros
                </div>
              </div>
              <div className="rounded-[20px] border border-[#E9F4F3] bg-white p-4 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                <div className="font-serif-display text-[24px] leading-none">5</div>
                <div className="mt-1 font-sans-ui text-[10px] tracking-[0.14em] text-ink/45 uppercase">
                  Pasos
                </div>
              </div>
              <div className="rounded-[20px] border border-[#E9F4F3] bg-white p-4 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                <div className="font-serif-display text-[24px] leading-none">IV</div>
                <div className="mt-1 font-sans-ui text-[10px] tracking-[0.14em] text-ink/45 uppercase">
                  Supervisado
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#E8FFFE] to-[#D3F1EE] blur-[28px] opacity-70" />
            <div className="relative rounded-[32px] border border-white/70 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)] p-6 md:p-7 overflow-hidden">
              <div className="flex items-center gap-4">
                <img
                  src={assetPath("images/logo.jpg")}
                  alt="Logo Josué Rangel"
                  className="w-16 h-16 rounded-full object-cover border border-[#EEF8F7] shadow-sm"
                />
                <div>
                  <div className="font-serif-display text-[20px] font-bold tracking-[0.05em]">
                    JOSUÉ RANGEL
                  </div>
                  <div className="font-sans-ui text-[11px] tracking-[0.18em] text-teal font-semibold">
                    SUEROTERAPIA
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-[24px] bg-[#FAFFFE] border border-[#EDF6F5] p-4 md:p-5">
                <div className="font-sans-ui text-[11px] tracking-[0.16em] text-ink/40 uppercase">
                  Lo que verá el cliente
                </div>
                <div className="mt-4 grid gap-3">
                  {[
                    ["Paso 1", "Consulta inicial por WhatsApp"],
                    ["Paso 2", "Revisión del objetivo"],
                    ["Paso 3", "Elección del suero"],
                    ["Paso 4", "Aplicación supervisada"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center gap-3 rounded-[16px] bg-white border border-[#F0F0F0] px-4 py-3">
                      <div className="w-9 h-9 rounded-full bg-ink text-white flex items-center justify-center font-sans-ui text-[10px] tracking-[0.12em]">
                        {k.replace("Paso ", "")}
                      </div>
                      <div>
                        <div className="font-sans-ui text-[10px] tracking-[0.14em] text-ink/40 uppercase">
                          {k}
                        </div>
                        <div className="font-serif-display text-[15px] font-bold">{v}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-[24px] bg-ink text-white p-4 md:p-5">
                <div className="font-serif-display text-[20px] leading-tight">
                  Botones claros, proceso simple y catálogo al alcance.
                </div>
                <div className="mt-2 font-sans-ui text-[13px] leading-[1.6] text-white/70">
                  Primero explicamos, luego mostramos el catálogo y finalmente pasamos a la consulta.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proceso" className="mt-14 md:mt-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <div className="font-sans-ui text-[11px] tracking-[0.16em] text-ink/40 uppercase">
                Proceso
              </div>
              <h2 className="mt-1 font-serif-display text-[26px] md:text-[34px] leading-tight">
                Cómo funciona la atención
              </h2>
            </div>
            <a
              href={getCatalogHash()}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-[#E8E8E8] font-sans-ui text-[13px] text-ink/70 hover:text-ink hover:border-teal/30 transition"
            >
              Abrir catálogo completo
            </a>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {steps.map((step) => (
              <article
                key={step.title}
                className="rounded-[22px] border border-[#EFEFEF] bg-white p-4 md:p-5 shadow-[0_10px_26px_rgba(0,0,0,0.04)]"
              >
                <div className="font-sans-ui text-[10px] tracking-[0.16em] text-teal font-semibold uppercase">
                  {step.title}
                </div>
                <p className="mt-2 font-sans-ui text-[14px] leading-[1.6] text-ink/70">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 md:mt-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-4 md:gap-5">
          <div className="rounded-[30px] bg-ink text-white p-6 md:p-8">
            <div className="font-sans-ui text-[11px] tracking-[0.16em] text-white/40 uppercase">
              Por qué da confianza
            </div>
            <div className="mt-4 grid gap-3">
              {trustPoints.map((point) => (
                <div key={point.title} className="rounded-[18px] bg-white/10 border border-white/10 p-4">
                  <div className="font-serif-display text-[18px] leading-tight">{point.title}</div>
                  <p className="mt-2 font-sans-ui text-[14px] leading-[1.6] text-white/70">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div id="video" className="rounded-[30px] bg-white border border-[#EFEFEF] p-6 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
            <div className="font-sans-ui text-[11px] tracking-[0.16em] text-ink/40 uppercase">
              Video de presentación
            </div>
            <div className="mt-4 rounded-[24px] aspect-video bg-gradient-to-br from-[#E6FFFB] via-[#F5FFFE] to-[#D9F2EF] border border-[#DFF1EE] flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white shadow-[0_18px_36px_rgba(0,0,0,0.12)] flex items-center justify-center text-[30px] text-teal">
                ▶
              </div>
            </div>
            <p className="mt-4 font-sans-ui text-[14px] leading-[1.7] text-ink/70">
              Aquí puedes colocar un video corto de YouTube explicando quién eres, cómo es el proceso y qué puede esperar el cliente.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={getCatalogHash()}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-ink text-white font-sans-ui text-[13px] hover:bg-ink/90 transition"
              >
                Ver catálogo
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-[#E8E8E8] font-sans-ui text-[13px] text-ink/70 hover:text-ink hover:border-teal/30 transition"
              >
                Consultar ahora
              </a>
            </div>
          </div>
        </section>

        <section id="respaldo" className="mt-14 md:mt-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-4 md:gap-5">
          <div className="rounded-[30px] border border-[#EFEFEF] bg-white p-6 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
            <div className="font-sans-ui text-[11px] tracking-[0.16em] text-ink/40 uppercase">
              Respaldo y transparencia
            </div>
            <h3 className="mt-2 font-serif-display text-[24px] leading-tight">
              Qué verá el cliente antes de decidir
            </h3>
            <ul className="mt-5 space-y-3 font-sans-ui text-[14px] leading-[1.6] text-ink/70">
              <li>• El nombre técnico de cada componente.</li>
              <li>• El precio visible en cada ficha.</li>
              <li>• El paso a paso de la atención.</li>
              <li>• Un acceso directo a WhatsApp.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={getCatalogHash()}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-teal text-white font-sans-ui text-[13px] hover:bg-teal-dark transition"
              >
                Ir al catálogo
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-[#E8E8E8] font-sans-ui text-[13px] text-ink/70 hover:text-ink hover:border-teal/30 transition"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-[30px] bg-[#FAFFFE] border border-[#EFEFEF] p-6 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
            <div className="font-sans-ui text-[11px] tracking-[0.16em] text-ink/40 uppercase">
              Siguiente paso
            </div>
            <div className="mt-2 font-serif-display text-[24px] md:text-[28px] leading-tight">
              Desde aquí el cliente entra al catálogo o te escribe directo.
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <div className="rounded-[20px] bg-white border border-[#EEF4F3] p-4">
                <div className="font-serif-display text-[18px] font-bold">Catálogo</div>
                <p className="mt-2 font-sans-ui text-[13px] leading-[1.6] text-ink/70">
                  Visualización de los 12 sueros con su ficha técnica y precio.
                </p>
              </div>
              <div className="rounded-[20px] bg-white border border-[#EEF4F3] p-4">
                <div className="font-serif-display text-[18px] font-bold">WhatsApp</div>
                <p className="mt-2 font-sans-ui text-[13px] leading-[1.6] text-ink/70">
                  Mensaje prellenado para comenzar la conversación sin fricción.
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-[22px] bg-ink text-white p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="font-serif-display text-[20px] leading-tight">
                  ¿Listo para abrir el catálogo?
                </div>
                <div className="mt-1 font-sans-ui text-[13px] text-white/70">
                  Un clic te lleva a los productos y otro a la conversación.
                </div>
              </div>
              <a
                href={getCatalogHash()}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-white text-ink font-sans-ui text-[13px] font-medium hover:bg-white/90 transition"
              >
                Ver catálogo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
