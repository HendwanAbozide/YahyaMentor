import { Code2, FileText, Briefcase, Target, MessageSquare } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Career Direction & Roadmaps",
    description: "Get clarity on skills to learn, what to focus on, and what to ignore.",
  },
  {
    icon: FileText,
    title: "Resume Review",
    description: "Actionable feedback that improves your visibility and interview chances.",
  },
  {
    icon: Briefcase,
    title: "Portfolio & Project Guidance",
    description: "Learn how to choose, structure, and present impactful technical projects.",
  },
  {
    icon: Code2,
    title: "Machine Learning Mentorship",
    description: "Ask about ML fundamentals, pipelines, modeling, MLOps, and real-world workflows.",
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    description: "Mock interviews, feedback, and strategies to help you perform with confidence.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16 text-center">
          {/* Flipped gradient (Dark->Mid->Dark) and added w-fit mx-auto for dynamic width */}
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neutral-950 via-neutral-500 to-neutral-950 bg-clip-text text-transparent text-balance w-fit mx-auto">
            How I Can Help You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Personalized guidance for engineers at every stage of their journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-16 w-16 rounded-full bg-blue-50/80 flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8" style={{ stroke: "url(#blue-gradient-icon)" }} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
