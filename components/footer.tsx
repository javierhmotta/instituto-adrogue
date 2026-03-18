import { Heart, Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0f1a] pt-10 pb-6 border-t-4 border-primary md:pt-14 md:pb-8 md:border-t-[6px]">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 grid-cols-2 md:grid-cols-4 mb-8 md:gap-10 md:mb-12">
          {/* Logo & Name */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 md:gap-3 md:mb-4">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-foreground md:w-10 md:h-10">
                <Heart className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm leading-none text-white tracking-tight md:text-lg">
                  Instituto
                </span>
                <span className="font-medium text-xs leading-none text-primary md:text-sm">
                  Cardiología Adrogué
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-white/50 pr-4 md:text-sm">
              Centro médico especializado en cardiología integral y rehabilitación cardiovascular. Más de 30 años cuidando la salud cardiovascular de la zona sur.
            </p>
          </div>

          {/* Director */}
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase text-[10px] mb-3 md:text-xs md:mb-4">Director Médico</h4>
            <p className="text-xs text-white/50 font-medium md:text-sm">
              Dr. Daniel Ferreiro
            </p>
            <p className="text-[10px] text-white/30 mt-0.5 md:text-xs md:mt-1">
              Especialista en Cardiología
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase text-[10px] mb-3 md:text-xs md:mb-4">Contacto</h4>
            <div className="space-y-2 text-xs text-white/50 md:space-y-3 md:text-sm">
              <div className="flex items-start gap-2 md:gap-3">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-white/30 mt-0.5 md:h-4 md:w-4" />
                <address className="not-italic text-[11px] md:text-sm">
                  Mitre 1510, Adrogué (B1846)<br />
                  Almirante Brown, Buenos Aires
                </address>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Phone className="h-3.5 w-3.5 flex-shrink-0 text-white/30 md:h-4 md:w-4" />
                <span className="text-[11px] md:text-sm">(011) 4293-7077</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-bold tracking-wider uppercase text-[10px] mb-3 md:text-xs md:mb-4">Horario de Atención</h4>
            <div className="flex items-start gap-2 text-xs text-white/50 md:gap-3 md:text-sm">
              <Clock className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-white/30 md:h-4 md:w-4" />
              <div>
                <p>Lunes a Viernes</p>
                <p>8 a 12 hs y 15 a 20 hs</p>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/reVaALXSkursuw2z7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] font-bold text-primary mt-3 hover:text-primary/80 transition-colors md:text-xs md:mt-4"
            >
              Ver en Google Maps →
            </a>
          </div>
        </div>

        <div className="pt-5 border-t border-white/10 flex flex-col items-center gap-2 text-center md:flex-row md:justify-between md:pt-6">
          <p className="text-white/30 text-[10px] font-medium md:text-xs">
            © {new Date().getFullYear()} Instituto de Cardiología Adrogué. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-[10px] font-medium flex items-center gap-1 md:text-xs">
            <Heart className="h-2.5 w-2.5 text-primary md:h-3 md:w-3" /> Mitre 1510, Adrogué, Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  )
}
