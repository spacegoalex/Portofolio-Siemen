"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const navigationItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="hidden md:flex justify-center">
          <div className="flex space-x-8">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={`text-xl font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold text-foreground">Siemen Gunawan Iksan</div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
              <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col space-y-2">
                  {navigationItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left justify-start text-sm font-medium transition-colors hover:text-primary ${
                        activeSection === item.id ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
