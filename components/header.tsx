"use client"

import { useState } from "react"
import { Phone, Star, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-300">
      <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-soft">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg group-hover:bg-primary/90 transition-colors">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                <path d="m18 15-2-2" />
                <path d="m15 18-2-2" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="hidden font-bold text-[15px] leading-none text-foreground tracking-tight sm:inline-block">
                Instituto
              </span>
              <span className="hidden font-medium text-[13px] leading-none text-primary sm:inline-block">
                Cardiología Adrogué
              </span>
              <span className="text-base font-semibold text-primary sm:hidden">
                ICA
              </span>
            </div>
          </a>
          <div className="hidden items-center gap-1 rounded-full bg-primary/5 border border-primary/10 px-3 py-1 text-xs font-bold text-primary xl:flex">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span>4.9 en Google</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-muted/50 p-1 rounded-full border border-border/50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/50 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex flex-col items-end mr-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Turnos</span>
            <a href="tel:+541142937077" className="text-sm font-bold text-foreground hover:text-primary transition-colors">
              (011) 4293-7077
            </a>
          </div>
          <Button
            asChild
            className="rounded-full bg-accent text-accent-foreground hover:bg-primary transition-colors font-semibold shadow-md px-6"
          >
            <a href="#contacto" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Turnos</span>
              <span className="sm:hidden">Turnos</span>
            </a>
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-foreground"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden mt-2 glass-panel rounded-2xl p-4 shadow-soft">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 pt-3 border-t border-border/50">
              <a
                href="tel:+541142937077"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-base font-bold text-primary"
              >
                <Phone className="h-4 w-4" />
                (011) 4293-7077
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
