import { Phone, Star, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white pt-24 pb-10 md:pt-36 md:pb-16">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold mb-5 md:text-sm md:px-4 md:py-2 md:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Más de 30 años cuidando tu corazón
          </div>

          <h1 className="text-balance text-3xl font-extrabold tracking-tight text-foreground leading-[1.1] md:text-5xl lg:text-6xl md:leading-[1.05]">
            Tu cardiólogo de confianza en Adrogué
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground leading-relaxed md:mt-6 md:text-xl">
            El <strong className="text-foreground">Instituto de Cardiología Adrogué</strong> te ofrece atención cardiológica integral con calidez humana y tecnología de última generación.{" "}
            <strong className="text-foreground">Dr. Daniel Ferreiro</strong>, Director Médico.
          </p>

          {/* Trust Badge */}
          <a
            href="https://maps.app.goo.gl/reVaALXSkursuw2z7"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg border border-border/50 transition-all hover:shadow-xl hover:-translate-y-0.5 md:mt-8 md:gap-3 md:rounded-2xl md:px-6 md:py-4"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400 md:h-6 md:w-6" />
              ))}
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold text-foreground md:text-lg">
                4.9 / 5 en Google
              </span>
              <span className="block text-xs text-muted-foreground md:text-sm">
                +700 opiniones reales
              </span>
            </div>
            <MapPin className="hidden h-5 w-5 text-muted-foreground sm:block" />
          </a>

          {/* CTA */}
          <div className="mt-6 md:mt-10">
            <Button
              asChild
              size="lg"
              className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold shadow-lg px-8 py-6 sm:w-auto transition-all duration-300 hover:shadow-xl"
            >
              <a href="tel:+541142937077" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                LLAMÁ Y PEDÍ TU TURNO
              </a>
            </Button>

            {/* WhatsApp CTA — oculto por ahora, el instituto opera solo por teléfono */}
          </div>

          <div className="mt-4 flex flex-col items-center gap-1 text-xs text-muted-foreground md:mt-6 md:flex-row md:justify-center md:gap-4 md:text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              Mitre 1510, Adrogué
            </span>
            <span className="hidden sm:inline">·</span>
            <span>Tel: (011) 4293-7077 / 6689 / 6473</span>
          </div>
        </div>
      </div>
    </section>
  )
}
