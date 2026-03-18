import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Betty C.",
    text: "Hace años que me atiendo con el Dr. Ferreiro y realmente estoy muy contenta. Muy buena atención por parte de la secretaria. Y el lugar muy confortable. Muy recomendable.",
    rating: 5,
  },
  {
    name: "Gabriel L.",
    text: "Excelente atención tanto del Dr. Ferreiro como de la secretaria, puntual cumplimiento en los horarios, clara explicación por parte del Dr. en cada uno de los exámenes. Muy rápido el envío de los informes con las imágenes correspondientes. Excelentes instalaciones, muy confortable todo.",
    rating: 5,
  },
  {
    name: "Jose V.",
    text: "Muy conforme con el trato recibido en el Instituto. El personal administrativo es muy cordial. La atención del Dr. Ferreiro es de excelencia.",
    rating: 5,
  },
  {
    name: "Laura P.",
    text: "Excelente atención del Dr. Ferreiro. El personal administrativo del Instituto tuvo un trato muy amable y una gestión eficaz. Muy conforme con el trato recibido.",
    rating: 5,
  },
  {
    name: "María Silvia M.",
    text: "Me atiendo con el Dr. Daniel Ferreiro, a quien considero un excelente profesional. Siempre me he sentido cuidada y respetada en las consultas.",
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

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-5">
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
