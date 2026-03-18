"use client"

import { useRef, useState } from "react"
import { Star, Building2, Users, ChevronLeft, ChevronRight } from "lucide-react"

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
  const scrollRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  function scrollTo(index: number) {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.scrollWidth / reasons.length
    el.scrollTo({ left: cardWidth * index, behavior: "smooth" })
    setCurrent(index)
  }

  function onScroll() {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.scrollWidth / reasons.length
    setCurrent(Math.round(el.scrollLeft / cardWidth))
  }

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

        {/* Mobile carousel */}
        <div className="mt-8 md:hidden">
          <div className="relative">
            {/* Left arrow */}
            {current > 0 && (
              <button
                onClick={() => scrollTo(current - 1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md border border-border/50 text-foreground"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}
            {/* Right arrow */}
            {current < reasons.length - 1 && (
              <button
                onClick={() => scrollTo(current + 1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md border border-border/50 text-foreground"
                aria-label="Siguiente"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            )}

            <div
              ref={scrollRef}
              onScroll={onScroll}
              className="-mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="snap-center shrink-0 w-[80vw] bg-white p-6 rounded-xl shadow-sm border border-border/50"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary">
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 text-base font-bold text-foreground">{reason.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-2">
            {reasons.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-5 bg-primary" : "w-1.5 bg-primary/25"
                }`}
                aria-label={`Ir a ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid mt-12 gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors">
                <reason.icon className="h-7 w-7" />
              </div>
              <h4 className="mt-5 text-xl font-bold text-foreground">{reason.title}</h4>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
