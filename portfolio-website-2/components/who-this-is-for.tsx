import { GraduationCap, Rocket, RefreshCw, BookOpen, TrendingUp } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const personas = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Exploring software engineering or machine learning paths",
  },
  {
    icon: TrendingUp,
    title: "Early-Career Engineers",
    description: "Seeking growth, clarity, and guidance in tech",
  },
  {
    icon: RefreshCw,
    title: "Career Switchers",
    description: "Transitioning into tech or machine learning",
  },
  {
    icon: BookOpen,
    title: "Self-Taught Learners",
    description: "Needing direction and accountability",
  },
  {
    icon: Rocket,
    title: "Ready to Level Up",
    description: "Anyone wanting personalized advice and support",
  },
]

export function WhoThisIsFor() {
  return (
    <section id="who-this-is-for" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16 text-center">
          {/* Flipped gradient (Dark->Mid->Dark) and added w-fit mx-auto for dynamic width */}
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent text-balance w-fit mx-auto">
              Who Is This For?
            </h2>
          </ScrollReveal>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            If you're trying to level up, break in, or break through—you're in the right place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {personas.map((persona, index) => {
            const Icon = persona.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-16 w-16 rounded-full bg-blue-50/80 flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8" style={{ stroke: "url(#blue-gradient-icon)" }} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{persona.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{persona.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
