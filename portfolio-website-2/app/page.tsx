import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhoThisIsFor } from "@/components/who-this-is-for"
import { WhyIMentor } from "@/components/why-i-mentor"
import { Testimonials } from "@/components/testimonials"
import { Publications } from "@/components/publications"
import { Experience } from "@/components/experience"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhoThisIsFor />
      <WhyIMentor />
      <Testimonials />
      <Experience />
      <Publications />
      <FAQ />
      <Footer />
    </main>
  )
}

