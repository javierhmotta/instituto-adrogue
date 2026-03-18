import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Heart,
  Activity,
  FileImage,
  Stethoscope,
  Apple,
  Droplets,
  Brain,
  Lightbulb,
  Dumbbell,
} from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Consultorio de Cardiología",
    description: "Evaluación inicial, seguimiento y control de factores de riesgo cardiovascular para adultos",
    borderColor: "border-l-primary",
  },
  {
    icon: Activity,
    title: "Estudios Cardiológicos",
    description: "Electrocardiogramas, Holter de 24hs, ergometrías y monitoreo ambulatorio de presión arterial (MAPA)",
    borderColor: "border-l-primary/80",
  },
  {
    icon: FileImage,
    title: "Diagnóstico por Imágenes",
    description: "Ecocardiogramas Doppler para evaluar función cardíaca, válvulas y estructura del corazón",
    borderColor: "border-l-primary/60",
  },
  {
    icon: Stethoscope,
    title: "Clínica Médica",
    description: "Atención médica general, control preventivo y riesgo quirúrgico pre-operatorio",
    borderColor: "border-l-foreground/70",
  },
  {
    icon: Apple,
    title: "Nutrición y Diabetes",
    description: "Plan nutricional personalizado y control metabólico para pacientes cardiovasculares",
    borderColor: "border-l-foreground/60",
  },
  {
    icon: Droplets,
    title: "Hematología",
    description: "Coagulación, trombosis y trastornos de sangre vinculados a la salud cardiovascular",
    borderColor: "border-l-foreground/50",
  },
  {
    icon: Lightbulb,
    title: "Psicología",
    description: "Acompañamiento psicológico para pacientes cardíacos y manejo del estrés",
    borderColor: "border-l-muted-foreground/60",
  },
  {
    icon: Brain,
    title: "Neurología",
    description: "Diagnóstico y tratamiento neurológico como parte de la atención integral",
    borderColor: "border-l-muted-foreground/50",
  },
  {
    icon: Dumbbell,
    title: "Rehabilitación Cardiovascular",
    description: "Gimnasio equipado con programas de prevención y recuperación supervisados por profesionales",
    borderColor: "border-l-muted-foreground/40",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:flex md:justify-between md:items-end md:mb-12 md:gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-0.5 bg-primary rounded-full md:w-8 md:h-1" />
              <h2 className="text-xs font-bold text-primary uppercase tracking-widest md:text-sm">
                Nuestros Servicios
              </h2>
            </div>
            <h3 className="text-2xl font-extrabold text-foreground leading-tight md:text-4xl">
              Servicios de cardiología en Adrogué
            </h3>
          </div>
          <p className="hidden text-muted-foreground text-lg max-w-md md:block md:text-right md:border-r-4 md:border-primary/20 md:pr-4 md:py-2">
            Atención médica integral con un equipo multidisciplinario para cuidar tu salud cardiovascular
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className={`bg-white p-5 rounded-xl border-l-4 ${service.borderColor} shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group md:p-7 md:rounded-2xl md:border-l-[6px]`}
            >
              <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground/70 group-hover:bg-primary/5 group-hover:text-primary transition-colors md:h-14 md:w-14 md:rounded-xl md:mb-5">
                  <service.icon className="h-5 w-5 md:h-7 md:w-7" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground md:text-lg md:mb-2">
                    {service.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:mt-12">
          <p className="text-muted-foreground text-sm mb-3 md:mb-4">
            ¿Necesitás un turno con un cardiólogo en Adrogué?
          </p>
          <Button
            asChild
            size="lg"
            className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold shadow-lg px-8 py-5 transition-all duration-300 hover:shadow-xl sm:w-auto md:py-6"
          >
            <a href="tel:+541142937077" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              PEDÍ TU TURNO: (011) 4293-7077
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
