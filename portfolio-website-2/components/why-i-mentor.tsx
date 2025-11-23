export function WhyIMentor() {
  return (
    <section id="why-i-mentor" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 text-center glass-light rounded-3xl p-12">
          {/* Flipped gradient (Dark->Mid->Dark) and added w-fit mx-auto for dynamic width */}
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neutral-950 via-neutral-500 to-neutral-950 bg-clip-text text-transparent text-balance w-fit mx-auto">
            Why I Mentor (For Free)
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I started my career with little guidance—and I know how difficult it can be to navigate learning paths,
              job applications, and industry expectations.
            </p>

            <p className="text-xl font-medium text-neutral-900 italic">
              "I want to help others grow faster and with more support than I had."
            </p>

            <p>
              My goal is simple: help you grow faster, avoid common mistakes, and feel 100% supported on your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
