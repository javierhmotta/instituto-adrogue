import { MapPin } from "lucide-react"

const cities = [
  "Adrogué",
  "Burzaco",
  "Monte Grande",
  "Longchamps",
  "Glew",
  "Almirante Brown",
  "Lomas de Zamora",
  "Lanús",
  "Quilmes",
]

export function CoverageArea() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center gap-2 justify-center mb-3">
            <div className="w-6 h-0.5 bg-primary rounded-full md:w-8 md:h-1" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest md:text-sm">
              Zona de Cobertura
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-foreground leading-tight md:text-4xl">
            Atendemos pacientes de toda la zona sur del Gran Buenos Aires
          </h2>
          <p className="mt-2 text-sm text-muted-foreground md:mt-4 md:text-lg">
            Nuestro instituto recibe pacientes de las siguientes localidades:
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 md:mt-8 md:gap-3">
            {cities.map((city) => (
              <div
                key={city}
                className="flex items-center gap-1.5 rounded-full bg-white border border-border px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 md:gap-2 md:px-5 md:py-2.5 md:text-base"
              >
                <MapPin className="h-3 w-3 text-primary md:h-4 md:w-4" />
                {city}
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted-foreground md:mt-8 md:text-sm">
            Si buscás un <strong className="text-foreground">cardiólogo en Almirante Brown</strong> o en la zona sur de Buenos Aires, estamos a tu disposición.
          </p>
        </div>
      </div>
    </section>
  )
}
