import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Real-time Analytics Dashboard",
      description:
        "Built a comprehensive real-time analytics dashboard using Apache Kafka, Spark Streaming, and React. Processes over 1M events per minute and provides instant insights for business stakeholders.",
      image: "/real-time-analytics-dashboard.png",
      technologies: ["Java", "JavaScript", "React", "Apache Kafka"],
      demoLink: "https://youtube.com/watch?v=demo1",
    },
    {
      title: "Data Lake Architecture",
      description:
        "Designed and implemented a scalable data lake architecture on AWS using S3, Glue, and Athena. Reduced data processing costs by 60% while improving query performance by 3x.",
      image: "/data-lake-architecture-diagram.jpg",
      technologies: ["Python", "SQL", "AWS", "Apache Spark"],
      demoLink: "https://youtube.com/watch?v=demo2",
    },
    {
      title: "ML Pipeline Automation",
      description:
        "Created an automated machine learning pipeline that handles data preprocessing, model training, and deployment. Reduced model deployment time from weeks to hours.",
      image: "/machine-learning-pipeline-automation.jpg",
      technologies: ["Python", "Docker", "Kubernetes", "MLflow"],
      demoLink: "https://youtube.com/watch?v=demo3",
    },
    {
      title: "ETL Data Processing System",
      description:
        "Developed a robust ETL system processing 50GB+ daily data from multiple sources. Implemented data quality checks and automated error handling with 99.9% uptime.",
      image: "/etl-data-processing-system.jpg",
      technologies: ["Python", "SQL", "Apache Airflow", "PostgreSQL"],
      demoLink: "https://youtube.com/watch?v=demo4",
    },
    {
      title: "Customer Analytics Platform",
      description:
        "Built a comprehensive customer analytics platform that provides 360-degree customer insights. Integrated data from 15+ sources and serves 100+ business users daily.",
      image: "/customer-analytics-platform.jpg",
      technologies: ["Java", "JavaScript", "React", "MySQL"],
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
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 text-balance">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-pretty">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
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
