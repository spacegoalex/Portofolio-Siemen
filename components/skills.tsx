import { Card, CardContent } from "@/components/ui/card"

export function Skills() {
  const skills = [
    {
      name: "Java",
      symbol: "☕",
      description: "Enterprise applications & backend development",
      color: "border-orange-500 hover:bg-orange-500/10",
    },
    {
      name: "JavaScript",
      symbol: "🟨",
      description: "Frontend development & web applications",
      color: "border-yellow-500 hover:bg-yellow-500/10",
    },
    {
      name: "MySQL",
      symbol: "🗄️",
      description: "Database design & query optimization",
      color: "border-blue-500 hover:bg-blue-500/10",
    },
    {
      name: "C",
      symbol: "⚡",
      description: "System programming & performance optimization",
      color: "border-gray-500 hover:bg-gray-500/10",
    },
    {
      name: "C++",
      symbol: "🔧",
      description: "Object-oriented programming & algorithms",
      color: "border-purple-500 hover:bg-purple-500/10",
    },
    {
      name: "React",
      symbol: "⚛️",
      description: "Modern UI development & component architecture",
      color: "border-cyan-500 hover:bg-cyan-500/10",
    },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Technical Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className={`bg-card border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer ${skill.color}`}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{skill.symbol}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{skill.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
