import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { AboutInstitute } from "@/components/about-institute"
import { CoverageArea } from "@/components/coverage-area"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
// WhatsApp oculto — el instituto opera solo por teléfono
// import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <AboutInstitute />
      <CoverageArea />
      <ContactSection />
      <Footer />
      {/* <WhatsAppButton /> */}
    </main>
  )
}
