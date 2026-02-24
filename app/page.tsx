import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { WorkSection } from '@/components/work-section'
import { ContentSection } from '@/components/content-section'
import { ExperienceSection } from '@/components/experience-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <HeroSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="work">
        <WorkSection />
      </section>
      <section id="content">
        <ContentSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <TestimonialsSection />
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  )
}
