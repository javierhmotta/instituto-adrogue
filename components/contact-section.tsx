import { Phone, Clock, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contacto" className="bg-foreground py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(white 1.5px, transparent 1.5px)',
        backgroundSize: '20px 20px',
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-2 md:text-sm md:mb-3">
              Contacto
            </h2>
            <h3 className="text-2xl font-extrabold text-background leading-tight md:text-4xl">
              Sacá tu turno con nuestro cardiólogo en Adrogué
            </h3>
            <p className="mt-2 text-sm text-background/70 md:mt-4 md:text-lg">
              Estamos en Mitre 1510, Adrogué — a pasos de la estación
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3 md:gap-6">
            {/* Hours */}
            <div className="bg-background/10 backdrop-blur-md rounded-xl border border-background/10 p-5 text-center md:p-8 md:rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary mx-auto flex items-center justify-center mb-3 border border-primary/30 md:w-12 md:h-12 md:rounded-2xl md:mb-4">
                <Clock className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h4 className="text-base font-bold text-background md:text-lg">
                Horarios
              </h4>
              <div className="mt-2 text-sm text-background/80 md:mt-3 md:text-base">
                <p>Lunes a Viernes</p>
                <p className="font-semibold">8 a 12 hs</p>
                <p className="font-semibold">15 a 20 hs</p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-background/10 backdrop-blur-md rounded-xl border border-background/10 p-5 text-center md:p-8 md:rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-background/10 text-background mx-auto flex items-center justify-center mb-3 border border-background/20 md:w-12 md:h-12 md:rounded-2xl md:mb-4">
                <MapPin className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h4 className="text-base font-bold text-background md:text-lg">
                Ubicación
              </h4>
              <div className="mt-2 text-sm text-background/80 md:mt-3 md:text-base">
                <p className="font-semibold">Mitre 1510</p>
                <p>Adrogué (B1846)</p>
                <p>Almirante Brown, Buenos Aires</p>
              </div>
              <a
                href="https://maps.app.goo.gl/reVaALXSkursuw2z7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary/80 transition-colors md:text-sm"
              >
                Ver en Google Maps
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Phones */}
            <div className="bg-background/10 backdrop-blur-md rounded-xl border border-background/10 p-5 text-center md:p-8 md:rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary mx-auto flex items-center justify-center mb-3 border border-primary/30 md:w-12 md:h-12 md:rounded-2xl md:mb-4">
                <Phone className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h4 className="text-base font-bold text-background md:text-lg">
                Teléfonos
              </h4>
              <div className="mt-2 space-y-1 text-sm text-background/80 md:mt-3 md:space-y-2 md:text-base">
                <a href="tel:+541142937077" className="block font-medium hover:text-background hover:underline transition-colors">
                  (011) 4293-7077
                </a>
                <a href="tel:+541142936689" className="block font-medium hover:text-background hover:underline transition-colors">
                  (011) 4293-6689
                </a>
                <a href="tel:+541142936473" className="block font-medium hover:text-background hover:underline transition-colors">
                  (011) 4293-6473
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center md:mt-12">
            <Button
              asChild
              size="lg"
              className="w-full rounded-full bg-background text-foreground hover:bg-background/90 text-base font-bold shadow-lg px-8 py-5 transition-all duration-300 sm:w-auto md:text-lg md:px-10 md:py-6"
            >
              <a href="tel:+541142937077" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                LLAMÁ AHORA: (011) 4293-7077
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
