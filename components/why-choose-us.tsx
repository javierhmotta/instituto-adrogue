import { Star, Building2, Users } from "lucide-react"

const reasons = [
  {
    icon: Star,
    title: "Excelencia Comprobada",
    description:
      "Más de 700 pacientes nos recomiendan en Google con 4.9 estrellas — uno de los institutos de cardiología mejor valorados de la zona sur del GBA.",
  },
  {
    icon: Building2,
    title: "Tecnología de Última Generación",
    description:
      "Tecnología diagnóstica de última generación para estudios cardiológicos complementarios y diagnóstico por imágenes.",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description:
      "Atención personalizada con un equipo multidisciplinario: cardiología, nutrición, neurología, psicología y más.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-[#f8fafc] py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 justify-center mb-3">
          <div className="w-6 h-0.5 bg-primary rounded-full md:w-8 md:h-1" />
          <h2 className="text-xs font-bold text-primary uppercase tracking-widest md:text-sm">
            Nuestra Diferencia
          </h2>
        </div>
        <h3 className="text-center text-2xl font-extrabold text-foreground leading-tight md:text-4xl">
          ¿Por qué elegirnos?
        </h3>

        <div className="mt-8 grid gap-4 md:grid-cols-3 md:mt-12 md:gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white p-6 rounded-xl shadow-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group md:p-8 md:rounded-2xl"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors md:h-14 md:w-14 md:rounded-xl">
                <reason.icon className="h-5 w-5 md:h-7 md:w-7" />
              </div>
              <h4 className="mt-4 text-base font-bold text-foreground md:mt-5 md:text-xl">
                {reason.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:mt-3 md:text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
