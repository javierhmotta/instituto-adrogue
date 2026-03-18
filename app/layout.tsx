import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.institutodecardiologiadrogue.com.ar'),
  title: 'Cardiólogo en Adrogué | Instituto de Cardiología Adrogué – Dr. Daniel Ferreiro',
  description: 'Instituto de Cardiología Adrogué · Mitre 1510. Consultorio del Dr. Daniel Ferreiro. Cardiología, estudios complementarios, rehabilitación cardiovascular. 4.9 en Google · +700 opiniones. Turnos: (011) 4293-7077.',
  keywords: 'cardiólogo Adrogué, cardiología Adrogué, turno cardiólogo Adrogué, Instituto Cardiología Adrogué, Dr Daniel Ferreiro, cardiólogo Almirante Brown, cardiólogo zona sur, ecocardiograma Adrogué, electrocardiograma Adrogué',
  alternates: {
    canonical: 'https://www.institutodecardiologiadrogue.com.ar',
  },
  openGraph: {
    title: 'Instituto de Cardiología Adrogué – Dr. Daniel Ferreiro',
    description: 'Atención cardiológica integral en Adrogué, Buenos Aires. +30 años de trayectoria. 4.9 en Google con +700 opiniones. Turnos: (011) 4293-7077.',
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.institutodecardiologiadrogue.com.ar',
    siteName: 'Instituto de Cardiología Adrogué',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Instituto de Cardiología Adrogué – Mitre 1510, Adrogué',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cardiólogo en Adrogué | Instituto de Cardiología Adrogué',
    description: 'Atención cardiológica integral. Dr. Daniel Ferreiro. 4.9 en Google · +700 opiniones. Turnos: (011) 4293-7077.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#387575',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "@id": "https://www.institutodecardiologiadrogue.com.ar/#organization",
              "name": "Instituto de Cardiología Adrogué",
              "alternateName": "ICA - Instituto de Cardiología Adrogué",
              "description": "Instituto de cardiología integral en Adrogué, Buenos Aires. Consultorios, estudios diagnósticos y gimnasio de rehabilitación cardiovascular. Más de 30 años de trayectoria.",
              "url": "https://www.institutodecardiologiadrogue.com.ar",
              "image": "https://www.institutodecardiologiadrogue.com.ar/og-image.jpg",
              "logo": "https://www.institutodecardiologiadrogue.com.ar/logo.png",
              "medicalSpecialty": "Cardiology",
              "telephone": "+541142937077",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mitre 1510",
                "addressLocality": "Adrogué",
                "addressRegion": "Buenos Aires",
                "postalCode": "B1846",
                "addressCountry": "AR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -34.795616,
                "longitude": -58.388557
              },
              "hasMap": "https://maps.app.goo.gl/reVaALXSkursuw2z7",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "12:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "15:00",
                  "closes": "20:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "700",
                "bestRating": "5",
                "worstRating": "1"
              },
              "founder": {
                "@type": "Physician",
                "name": "Dr. Daniel Ferreiro",
                "jobTitle": "Director Médico",
                "medicalSpecialty": "Cardiology"
              },
              "availableService": [
                { "@type": "MedicalProcedure", "name": "Consulta Cardiológica" },
                { "@type": "MedicalProcedure", "name": "Electrocardiograma" },
                { "@type": "MedicalProcedure", "name": "Ecocardiograma Doppler" },
                { "@type": "MedicalProcedure", "name": "Ergometría" },
                { "@type": "MedicalProcedure", "name": "Holter 24hs" },
                { "@type": "MedicalProcedure", "name": "MAPA (Monitoreo Ambulatorio de Presión Arterial)" },
                { "@type": "MedicalProcedure", "name": "Rehabilitación Cardiovascular" },
                { "@type": "MedicalProcedure", "name": "Riesgo Quirúrgico" }
              ],
              "areaServed": [
                { "@type": "City", "name": "Adrogué" },
                { "@type": "City", "name": "Burzaco" },
                { "@type": "City", "name": "Monte Grande" },
                { "@type": "City", "name": "Longchamps" },
                { "@type": "City", "name": "Glew" },
                { "@type": "AdministrativeArea", "name": "Almirante Brown" },
                { "@type": "City", "name": "Lomas de Zamora" },
                { "@type": "City", "name": "Lanús" },
                { "@type": "City", "name": "Quilmes" }
              ],
              "sameAs": [
                "https://maps.app.goo.gl/reVaALXSkursuw2z7",
                "https://www.doctoraliar.com/clinicas/instituto-de-cardiologia-adrogue"
              ],
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
