import { Badge } from "@/components/ui/badge"

const skills = [
  "Software Architecture",
  "Team Leadership",
  "React & Next.js",
  "TypeScript",
  "Cloud Infrastructure",
  "DevOps",
  "Career Coaching",
  "Technical Interviews",
  "Agile Methodologies",
  "System Design",
  "Code Quality",
  "Mentorship",
]

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {/* Flipped gradient (Dark->Mid->Dark) and added w-fit (no mx-auto because left aligned) for dynamic width */}
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent text-balance w-fit">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over a decade of experience in software development and technical leadership, I've helped dozens of
                companies scale their engineering teams and build robust, maintainable systems.
              </p>
              <p>
                My approach combines deep technical expertise with a focus on people and process. I believe that great
                software comes from great teams, and great teams are built through mentorship, clear communication, and
                continuous learning.
              </p>
              <p>
                Whether you're a startup finding your technical footing, an enterprise modernizing your stack, or an
                individual looking to level up your career, I'm here to help you succeed.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Experience Highlights</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Led engineering teams of 10-50 people at fast-growing startups</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Architected systems serving millions of users globally</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Mentored 100+ engineers in their career development</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Spoken at international tech conferences and workshops</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
