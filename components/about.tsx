import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const workExperiences = [
    {
      position: "Equipment & Logistics Coordinator - Malam Keakraban 2025",
      company: "Keluarga Mahasiswa Buddhis Dhammavaddhana Binus University",
      location: "Bogor, Indonesia",
      period: "Jan 2025 - Mar 2025",
      description:
        "Led a 5-member logistics team responsible for managing equipment and supplies for Malam Keakraban 2025, a large-scale internal bonding event.",
      image: "/Makrab.jpg",
    },
    {
      position: "Freshman Partner",
      company: "BINUS University",
      location: "Jakarta, Indonesia",
      period: "Sep 2024 - May 2025",
      description:
        "As a freshman partner, I helped guide new students through their first-year program. I supported them in creating their society project, where we worked together to help a local community clean up a park in Jakarta.",
      image: "/FreshmanPartner.jpg",
    },
    {
      position: "Sponsorship Division Member - Kathina Puja 2568 B.E / 2024",
      company: "Keluarga Mahasiswa Buddhis Dhammavaddhana Binus University",
      location: "Jakarta, Indonesia",
      period: "Jul 2024 - Oct 2024",
      description:
        "Successfully secured sponsorship deals totaling around IDR 2,000,000, contributing to the event’s operational and ceremonial needs.",
      image: "/Kathina.jpg",
    },
    {
      position: "Freshman Leader",
      company: "BINUS University",
      location: "Jakarta, Indonesia",
      period: "Aug 2024 - Sep 2024",
      description: "As a Freshman Leader, I played an active role in welcoming and guiding new students during Orientation Week at BINUS University. I was responsible for facilitating various introductory activities, ensuring a smooth transition for freshmen into university life and also coordinating with fellow leaders to organize engaging events and ice-breaking activities.",
      image: "/FreshmanLeader.jpg",
    },
    {
      position: "Operations Team Member",
      company: "PT Genta Mas Sejahtera",
      location: "Cirebon, Indonesia",
      period: "Aug 2020 - Aug 2024",
      description:
        "Managing a team of 6 drivers, overseeing daily operations, salary administration, and operational cost management.",
      image: "/GMS.jpg",
    },
  ]

  const competitions = [
    {
      title: "DATATHON 2025",
      description:
        "I developed a deep learning model to address real-world challenges across industries. My project focused on salary prediction for regions across Indonesia, providing valuable insights for international companies seeking to identify areas with the lowest operational costs.",
      poster: "/Datathon.jpg",
    },
    {
      title: "BUSINESS CASE COMPETITION",
      description:
        "We were tasked with addressing a marketing challenge faced by by.U. To better understand customer needs and behaviors, we conducted a survey and analyzed the results. Based on these insights, we developed a targeted campaign solution aimed at effectively addressing the problem and enhancing by.U’s market engagement.",
      poster: "/Bpre.jpg",
    }
  ]

  const languages = [
    { name: "Indonesian", level: 100, color: "bg-red-500" },
    { name: "English", level: 85, color: "bg-blue-500" },
    { name: "Mandarin", level: 70, color: "bg-yellow-500" },
    { name: "Japanese", level: 60, color: "bg-green-500" },
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">About Me</h2>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className=" bg-muted rounded-lg mb-6 overflow-hidden">
              <img src="/PhotoSendiri.jpeg" alt="Siemen Gunawan Iksan"  className="w-full h-full object-cover"/>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-3xl text-muted-foreground leading-relaxed mb-8 text-pretty">
              I am a Computer Science student at Bina Nusantara University with a strong interest in Artificial Intelligence. I enjoy tackling challenges in big data and complex data to create impactful solutions.
            </p>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8">Work Experience</h3>
          <div className="space-y-8">
            {workExperiences.map((exp, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h4 className="text-3xl font-semibold text-foreground mb-2">{exp.position}</h4>
                      <p className="text-xl font-medium mb-1">{exp.company}</p>
                      <p className="text-muted-foreground text-m mb-2">
                        {exp.location} • {exp.period}
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-pretty text-xl">{exp.description}</p>
                    </div>
                    <div className="md:col-span-1">
                      <img
                        src={exp.image || "/placeholder.svg"}
                        alt={`${exp.company} workplace`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Competitions */}
        <div className="mb-60">
          <h3 className="text-3xl font-bold mb-8">Competitions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {competitions.map((comp, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <img
                    src={comp.poster || "/placeholder.svg"}
                    alt={comp.title}
                    className="w-full h-200 object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-2xl font-semibold text-foreground mb-3 text-balance">{comp.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-pretty text-xl">{comp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Language Skills */}
        <div>
          <h3 className="text-3xl font-bold mb-8">Language Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{lang.name}</span>
                  <span className="text-muted-foreground text-sm">{lang.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${lang.color}`}
                    style={{ width: `${lang.level}%` }}
                  />
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  )
}
