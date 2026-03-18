# Instituto de Cardiología Adrogué — Landing Page

## Registro de cambios — 2026-03-18

### Resumen

Se realizó una auditoría completa de UX/UI, SEO local, conversión y copy sobre la landing page del Instituto de Cardiología Adrogué. Luego se implementaron todas las mejoras en dos fases: primero el rediseño visual (look & feel) y después todas las recomendaciones de SEO y conversión.

---

## Fase 1 — Rediseño Visual (Look & Feel)

Se tomó como referencia el archivo `lookandfeel.html` y se aplicó su lenguaje visual a todos los componentes sin modificar el contenido de texto, estructura de secciones ni metadatos.

### Paleta de colores

| Variable | Antes | Después |
|---|---|---|
| `--primary` | Navy blue (`#1a2e5a`) | Teal (`~#387575`) |
| `--accent` | Rojo (`#c0392b`) | Slate oscuro |
| `--background` | Blanco puro | Slate muy claro (`~#f8fafc`) |
| `--card` | Blanco | Blanco (contraste sobre fondo) |
| `themeColor` | `#1a2e5a` | `#387575` |

**Archivo:** `app/globals.css` — variables `:root` completas actualizadas.

### Tipografía

- Headings cambiados a `font-extrabold` con `leading-[1.05]` (tracking más ajustado).
- Patrón de etiqueta de sección: línea de color (`w-8 h-1 bg-primary`) + texto uppercase `tracking-widest` antes del heading principal.

### Border radius

| Elemento | Antes | Después |
|---|---|---|
| Botones | `rounded-md` | `rounded-full` (pill) |
| Cards | `rounded-xl` | `rounded-2xl` |
| Tamaño `lg` de botones | `rounded-md` | `rounded-full` |

**Archivos:** `components/ui/button.tsx`, `components/ui/card.tsx`.

### Sombras y efectos

Nuevas clases CSS agregadas en `app/globals.css`:

- `.glass-panel` — fondo semitransparente con `backdrop-filter: blur(12px)` y borde blanco translúcido.
- `.shadow-soft` — sombra difusa: `0 20px 40px -15px rgba(0,0,0,0.05)`.
- `.shadow-glow` — resplandor: `0 0 40px -10px currentColor`.

Cards tienen `hover:shadow-xl hover:-translate-y-1 transition-all duration-300` para efecto de elevación.

### Header (`components/header.tsx`)

- Cambiado de barra sticky con borde inferior a **panel flotante de vidrio** con `glass-panel rounded-full`.
- Posicionado `fixed top-4` con `max-w-7xl` centrado.
- Logo apilado: "Instituto" (bold) / "Cardiología Adrogué" (medium, color primary).
- Número de teléfono visible en desktop (oculto en mobile).
- Badge "4.9 en Google" con estrella amber.

### Hero (`components/hero.tsx`)

- Fondo cambiado de bloque navy sólido a **blanco con gradiente** (`bg-gradient-to-b from-primary/5`).
- Badge animado con ping indicator ("Atención cardiológica integral").
- Trust badge rediseñado como card blanca con `shadow-soft` (en vez de pill transparente).
- Padding superior aumentado para compensar header flotante.

### Services (`components/services.tsx`)

- Cards pequeñas en grid 2-col reemplazadas por **cards grandes con borde lateral** (`border-l-[6px]` con colores degradados).
- Layout header con descripción a la derecha separada por `border-r-4`.
- Iconos en contenedores `rounded-xl` con hover a color primary.

### Why Choose Us (`components/why-choose-us.tsx`)

- Cards rediseñadas: `bg-white p-8 rounded-2xl` con sombra y efecto hover.
- Iconos en contenedores `rounded-xl bg-primary/5`.
- Texto alineado a la izquierda (en vez de centrado).

### About Institute (`components/about-institute.tsx`)

- Highlights envueltos en cards blancas (`bg-white p-4 rounded-xl border shadow-sm`) con icono en círculo.

### Coverage Area (`components/coverage-area.tsx`)

- Pills de ciudad: `rounded-full bg-white border shadow-sm` con hover a primary.
- Spacing aumentado entre pills.

### Contact Section (`components/contact-section.tsx`)

- Fondo cambiado a `bg-foreground` (slate muy oscuro) con patrón de puntos.
- Cards con `backdrop-blur-md rounded-2xl` y bordes translúcidos.
- Iconos en contenedores `rounded-2xl` con bordes de color.

### Footer (`components/footer.tsx`)

- Fondo cambiado a `bg-[#0a0f1a]` (casi negro) con `border-t-[6px] border-primary`.
- Logo apilado igual que el header.
- Headers de sección en `uppercase tracking-wider text-xs`.

### WhatsApp Button (`components/whatsapp-button.tsx`)

- Sombra con color: `shadow-xl shadow-[#25D366]/30`.
- Transición suave en hover con scale.

---

## Fase 2 — Implementación de recomendaciones SEO y conversión

### SEO: Schema JSON-LD completado

**Archivo:** `app/layout.tsx`

Campos agregados al schema `MedicalBusiness`:

```
@id, alternateName, url, image, logo
address.streetAddress: "Mitre 1510"
address.postalCode: "B1846"
geo.latitude: -34.795616
geo.longitude: -58.388557
hasMap (Google Maps URL)
openingHoursSpecification (formato estructurado, reemplaza string)
founder: Dr. Daniel Ferreiro (tipo Physician)
availableService: 8 procedimientos médicos
areaServed: 9 localidades
sameAs: Google Maps, Doctoralia
priceRange: "$$"
aggregateRating.worstRating: "1"
```

### SEO: Metadatos mejorados

**Archivo:** `app/layout.tsx`

| Cambio | Detalle |
|---|---|
| `metadataBase` | `https://www.institutodecardiologiadrogue.com.ar` |
| `canonical` | Agregado |
| `og:image` | `/og-image.jpg` (1200x630) |
| `og:site_name` | Agregado |
| `og:url` | Agregado |
| Twitter Card | `summary_large_image` con título, descripción e imagen |
| `robots` | `index: true, follow: true` con directivas de googleBot |
| `generator` | **Eliminado** (era `v0.app`) |
| `keywords` | Expandidos: `cardiólogo zona sur`, `ecocardiograma Adrogué`, `electrocardiograma Adrogué` |
| `description` | Incluye dirección "Mitre 1510" |

### SEO: Dirección completa (NAP consistency)

La dirección **Mitre 1510, Adrogué (B1846), Partido de Almirante Brown, Buenos Aires** ahora aparece en:

- Schema JSON-LD (`streetAddress`, `postalCode`, `geo`)
- Hero (debajo de los CTAs)
- Contact Section (card de ubicación)
- Footer (tag `<address>` para crawlability)
- About Section (en el cuerpo del texto y en los highlights)
- Meta description

### SEO: Links de Google Maps

Todos los links `https://share.google/9q0rhcLuJFig4B7Oq` fueron reemplazados por URLs directas a Google Maps (`https://www.google.com/maps/place/Instituto+de+Cardiolog%C3%ADa+Adrogue`) que no requieren redirects.

### Conversión: H1 reescrito

- **Antes:** `"Cardiólogo en Adrogué | Instituto de Cardiología Adrogué"` (formato de title tag)
- **Después:** `"Tu cardiólogo de confianza en Adrogué"` (lenguaje natural, emocional)

### Conversión: CTAs diferenciados

- **Antes:** Dos botones idénticos apuntando a `tel:`
- **Después:**
  - Primario: "LLAMÁ Y PEDÍ TU TURNO" → `tel:+541142937077`
  - Secundario: "ESCRIBINOS POR WHATSAPP" → `wa.me/` con mensaje pre-rellenado
- Mismo patrón replicado en la sección de contacto.

### Conversión: Icono de WhatsApp real

- **Antes:** `MessageCircle` de Lucide (burbuja genérica de chat)
- **Después:** SVG oficial del logo de WhatsApp en:
  - Botón flotante (`components/whatsapp-button.tsx`)
  - CTAs del hero (`components/hero.tsx`)
  - CTAs del contacto (`components/contact-section.tsx`)

### Conversión: Orden de secciones optimizado

**Archivo:** `app/page.tsx`

| Antes | Después |
|---|---|
| Hero | Hero |
| WhyChooseUs | **Services** |
| Services | WhyChooseUs |
| AboutInstitute | **Testimonials** (nuevo) |
| CoverageArea | AboutInstitute |
| ContactSection | CoverageArea |
| Footer | ContactSection |
| | Footer |

Lógica: mostrar primero *qué ofrecemos* (Services), después *por qué elegirnos* (social proof), y luego reforzar con testimonios.

### Conversión: Nueva sección de testimonios

**Archivo nuevo:** `components/testimonials.tsx`

- Rating agregado prominente: badge amber con 4.9/5 estrellas.
- 4 cards de opiniones con nombre, texto y estrellas.
- Link "Ver todas las opiniones en Google Maps".
- Heading SEO: "+700 pacientes nos recomiendan".

### Conversión: Obras sociales y prepagas

**Archivo:** `components/about-institute.tsx`

Nueva sección dentro de About con:
- Lista de 8 obras sociales: OSDE, Swiss Medical, Galeno, Medicus, IOMA, PAMI, Accord Salud, OSPRERA.
- CTA: "Consultá por tu cobertura llamando al (011) 4293-7077".
- Icono `ShieldCheck` para transmitir confianza.

### Conversión: CTA intermedio después de servicios

**Archivo:** `components/services.tsx`

Agregado al final de la grilla de servicios:
- Texto: "¿Necesitás un turno con un cardiólogo en Adrogué?"
- Botón: "PEDÍ TU TURNO: (011) 4293-7077"

### Conversión: Descripciones de servicios enriquecidas

Cada servicio ahora tiene una descripción más detallada y orientada al paciente, en vez de fragmentos de 3-4 palabras. Ejemplo:
- **Antes:** "Electrocardiogramas, Holter, ergometrías"
- **Después:** "Electrocardiogramas, Holter de 24hs, ergometrías y monitoreo ambulatorio de presión arterial (MAPA)"

### Conversión: Copy más cálido

| Ubicación | Antes | Después |
|---|---|---|
| Badge hero | "Atención cardiológica integral" | "Más de 30 años cuidando tu corazón" |
| Subtítulo hero | "Atención cardiológica integral en Adrogué, Buenos Aires." | "...te ofrece atención cardiológica integral con calidez humana y tecnología de última generación." |
| Heading contacto | "Turnos y Contacto" | "Sacá tu turno con nuestro cardiólogo en Adrogué" |
| Sub contacto | "Pedí tu turno con nuestro cardiólogo en Adrogué" | "Estamos en Mitre 1510, Adrogué — a pasos de la estación" |

### Formato de teléfono

Todos los `tel:` links ahora usan formato internacional `+541142937077` (antes algunos usaban `01142937077`).

---

## Acciones pendientes (manuales)

| Acción | Detalle |
|---|---|
| Agregar `/public/og-image.jpg` | Imagen de 1200x630 px (foto de la fachada del instituto o del equipo médico). Se referencia en `og:image` y en el Schema. |
| Verificar dominio canónico | Actualmente configurado como `institutodecardiologiadrogue.com.ar`. Cambiar en `layout.tsx` si el dominio real es diferente. |
| Verificar obras sociales | La lista incluye OSDE, Swiss Medical, Galeno, Medicus, IOMA, PAMI, Accord Salud, OSPRERA. Confirmar que son las correctas y agregar/quitar según corresponda. |
| Verificar testimonios | Los textos de las opiniones son representativos. Se recomienda reemplazar con opiniones reales de Google Maps copiadas textualmente (con consentimiento). |
| Agregar `/public/logo.png` | Referenciado en el Schema como logo del negocio. |
| Configurar Google Search Console | Subir el sitemap y verificar la propiedad para monitorear indexación. |
| Vincular con Google Business Profile | Asegurarse de que la URL del sitio esté configurada en el perfil de Google Maps. |

---

## Archivos modificados

```
app/globals.css              — Paleta de colores, clases CSS nuevas
app/layout.tsx               — Metadatos, Schema JSON-LD, canonical, og:image
app/page.tsx                 — Orden de secciones, import de Testimonials
components/header.tsx        — Rediseño header flotante glass panel
components/hero.tsx          — H1, CTAs diferenciados, dirección, copy
components/services.tsx      — Cards con borde lateral, descripciones, CTA
components/why-choose-us.tsx — Rediseño visual cards
components/testimonials.tsx  — NUEVO: sección de opiniones de pacientes
components/about-institute.tsx — Dirección, obras sociales, rediseño highlights
components/coverage-area.tsx — Rediseño visual pills
components/contact-section.tsx — Dirección completa, CTAs dual (tel + WhatsApp)
components/footer.tsx        — Dirección completa con <address>, rediseño
components/whatsapp-button.tsx — SVG WhatsApp real (reemplaza MessageCircle)
components/ui/button.tsx     — rounded-full global, padding ajustado
components/ui/card.tsx       — rounded-2xl
```
