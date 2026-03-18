import { CheckCircle2, ShieldCheck } from "lucide-react"

const highlights = [
  "Más de 30 años de trayectoria en cardiología",
  "Enfoque integral en prevención cardiovascular",
  "Gimnasio de rehabilitación cardiovascular equipado",
  "Equipo multidisciplinario de profesionales",
  "Ubicación estratégica en el centro de Adrogué — Mitre 1510",
]

const obrasSociales = [
  "OSDE",
  "Swiss Medical",
  "Galeno",
  "Medicus",
  "IOMA",
  "PAMI",
  "Accord Salud",
  "OSPRERA",
]

export function AboutInstitute() {
  return (
    <section id="nosotros" className="bg-[#f8fafc] py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-0.5 bg-primary rounded-full md:w-8 md:h-1" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest md:text-sm">
              Sobre Nosotros
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-foreground leading-tight md:text-4xl">
            Instituto de Cardiología de referencia en Adrogué
          </h2>

          <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground md:mt-8 md:space-y-4 md:text-lg">
            <p>
              El <strong className="text-foreground">Instituto de Cardiología Adrogué</strong> es un centro médico especializado en el cuidado de la salud cardiovascular, ubicado en <strong className="text-foreground">Mitre 1510, Adrogué</strong>, Partido de Almirante Brown, zona sur del Gran Buenos Aires.
            </p>
            <p>
              Bajo la dirección del <strong className="text-foreground">Dr. Daniel Ferreiro</strong>, nuestro instituto se destaca por brindar atención médica de excelencia, combinando tecnología de última generación con un trato humano y personalizado hacia cada paciente.
            </p>
            <p>
              Nos especializamos en la <strong className="text-foreground">prevención y rehabilitación cardiovascular en Adrogué</strong>, ofreciendo programas integrales que incluyen evaluación cardiológica completa, estudios diagnósticos avanzados y un gimnasio de rehabilitación supervisado por profesionales.
            </p>
          </div>

          <ul className="mt-6 space-y-2 md:mt-10 md:space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-border/50 shadow-sm md:gap-4 md:p-4 md:rounded-xl">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 shrink-0 md:h-8 md:w-8">
                  <CheckCircle2 className="h-4 w-4 text-primary md:h-5 md:w-5" />
                </div>
                <span className="text-sm font-medium text-foreground md:text-base">{item}</span>
              </li>
            ))}
          </ul>

          {/* Obras Sociales */}
          <div className="mt-8 bg-white rounded-xl border border-border/50 p-5 shadow-sm md:mt-12 md:rounded-2xl md:p-8">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 shrink-0 md:h-10 md:w-10 md:rounded-xl">
                <ShieldCheck className="h-4 w-4 text-primary md:h-5 md:w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground md:text-lg">
                  Obras sociales y prepagas
                </h3>
                <p className="text-xs text-muted-foreground md:text-sm">
                  Trabajamos con las principales coberturas médicas
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {obrasSociales.map((os) => (
                <span
                  key={os}
                  className="rounded-full bg-primary/5 border border-primary/10 px-3 py-1 text-xs font-semibold text-foreground md:px-4 md:py-1.5 md:text-sm"
                >
                  {os}
                </span>
              ))}
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground md:px-4 md:py-1.5 md:text-sm">
                y más...
              </span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground md:mt-4 md:text-sm">
              Consultá por tu cobertura llamando al <a href="tel:+541142937077" className="font-semibold text-primary hover:underline">(011) 4293-7077</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
