import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María L.",
    text: "Excelente atención del Dr. Ferreiro y todo su equipo. Me hicieron sentir contenida desde la primera consulta. El instituto es muy prolijo y organizado.",
    rating: 5,
  },
  {
    name: "Roberto G.",
    text: "Hace años que me atiendo acá. Los estudios son rápidos, el personal muy amable y los resultados siempre están a tiempo. Lo recomiendo a toda la familia.",
    rating: 5,
  },
  {
    name: "Susana P.",
    text: "Después de un susto con el corazón, el equipo de rehabilitación cardiovascular me ayudó a recuperarme. Profesionales de primera y un trato muy humano.",
    rating: 5,
  },
  {
    name: "Carlos M.",
    text: "Muy buena experiencia. El doctor se tomó el tiempo de explicarme todo con paciencia. Las instalaciones son modernas y está todo muy cerca en Adrogué.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="opiniones" className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center gap-2 justify-center mb-3">
            <div className="w-6 h-0.5 bg-primary rounded-full md:w-8 md:h-1" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest md:text-sm">
              Opiniones de Pacientes
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-foreground leading-tight md:text-4xl">
            +700 pacientes nos recomiendan
          </h2>
          <p className="mt-2 text-muted-foreground text-sm max-w-xl mx-auto md:mt-4 md:text-lg md:max-w-2xl">
            Somos uno de los institutos de cardiología mejor valorados de la zona sur del Gran Buenos Aires
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200/50 px-4 py-2 md:mt-6 md:gap-3 md:px-5 md:py-2.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400 md:h-5 md:w-5" />
              ))}
            </div>
            <span className="text-base font-bold text-foreground md:text-lg">4.9 / 5</span>
            <span className="text-xs text-muted-foreground md:text-sm">en Google Maps</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-[#f8fafc] p-5 rounded-xl border border-border/50 transition-all duration-300 hover:shadow-md md:p-6 md:rounded-2xl"
            >
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400 md:h-4 md:w-4" />
                ))}
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground mb-3 md:text-sm md:mb-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="text-xs font-bold text-foreground md:text-sm">
                {testimonial.name}
              </p>
              <p className="text-[11px] text-muted-foreground md:text-xs">
                Opinión en Google
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center md:mt-8">
          <a
            href="https://maps.app.goo.gl/reVaALXSkursuw2z7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary font-bold hover:text-primary/80 transition-colors border-b-2 border-primary/20 hover:border-primary pb-0.5"
          >
            Ver todas las opiniones en Google Maps
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
