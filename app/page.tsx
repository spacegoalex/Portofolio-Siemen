import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingShapes } from "@/components/floating-shapes"
import { MatrixRain } from "@/components/matrix-rain"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <FloatingShapes />
      <MatrixRain />
      <div className="grid-overlay fixed inset-0 pointer-events-none z-0" />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
