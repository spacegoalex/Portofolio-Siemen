import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "CoreFit",
      description:
        "CoreFit is a free fitness app that makes health and wellness accessible to everyone. It features a BMI calculator, nutrition tracker, AI-powered health consultation, personalized workout programs, and more—all in one easy-to-use platform.",
      image: "/real-time-analytics-dashboard.png",
      technologies: ["React", "Figma"],
      demoLink: "https://youtube.com/watch?v=demo1",
    },
    {
      title: "Indonesian Bank Detector",
      description:
        "Developed a machine learning system that can accurately detect and recognize the value of Indonesian banknotes. This technology is designed to assist blind and visually impaired individuals, giving them the ability to independently verify their money and reduce the risk of being scammed.",
      image: "/data-lake-architecture-diagram.jpg",
      technologies: ["Python"],
      demoLink: "https://youtube.com/watch?v=demo2",
    },
    {
      title: "Warehouse Sorting",
      description:
        "Created a warehouse sorting machine that automatically organizes items based on their barcodes. This system streamlines the sorting process, reduces human error, and improves overall efficiency in warehouse operations.",
      image: "/machine-learning-pipeline-automation.jpg",
      technologies: ["Python"],
      demoLink: "https://youtube.com/watch?v=demo3",
    },
    {
      title: "Vkellogg's",
      description:
        "Developed a website for a well-known brand, focusing on delivering a modern design, smooth user experience, and strong brand presence online.",
      image: "/etl-data-processing-system.jpg",
      technologies: ["Figma","HTML","CSS","JavaScript"],
      demoLink: "https://youtube.com/watch?v=demo4",
    },
    {
      title: "Money Manager App",
      description:
        "Designed a user-friendly mobile app for managing personal finances, helping users track expenses and monitor savings. The app was built with a clean interface and intuitive features to make money management easier, more organized, and accessible for everyday users.",
      image: "/customer-analytics-platform.jpg",
      technologies: ["Figma"],
      demoLink: "https://youtube.com/watch?v=demo5",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors group">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg text-2xl">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3 text-balance text-2xl">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-pretty">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 text-xl">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xl">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
