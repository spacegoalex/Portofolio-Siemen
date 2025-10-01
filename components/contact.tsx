import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, MessageCircle, Mail, Github } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Get In Touch</h2>

        <Card className="bg-card border-border">
          <CardContent className="p-8 text-center">
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              I'm always interested in discussing new opportunities, innovative projects, or just connecting with fellow
              data enthusiasts. Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <a href="https://linkedin.com/in/siemen-iksan" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>

              <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-900 text-white">
                <a href="https://github.com/spacegoalex" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>

              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <a href="mailto:iksansiemen@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Gmail
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
