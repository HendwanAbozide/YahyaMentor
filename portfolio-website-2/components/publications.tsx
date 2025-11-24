import { FileText, ExternalLink } from "lucide-react"

export function Publications() {
  const publications = [
    {
      title: "Enhanced thermal-rgb fusion for robust object detection",
      venue: "Software Engineering Journal",
      year: "2024",
      link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=NxOd8yoAAAAJ&citation_for_view=NxOd8yoAAAAJ:9yKSN-GCB0IC",
      tags: ["Architecture", "Microservices", "Cloud"],
    },
    {
      title: "RGB-LiDAR fusion for accurate 2D and 3D object detection",
      venue: "IEEE Computer Society",
      year: "2023",
      link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=NxOd8yoAAAAJ&citation_for_view=NxOd8yoAAAAJ:2osOgNQ5qMEC",
      tags: ["Machine Learning", "DevOps", "Production"],
    },
    {
      title: "Sensor fusion for 3d object detection for autonomous vehicles",
      venue: "ACM Queue",
      year: "2023",
      link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=NxOd8yoAAAAJ&citation_for_view=NxOd8yoAAAAJ:u5HHmVD_uO8C",
      tags: ["Career", "Leadership", "Mentorship"],
    },
    {
      title: "Learnable fusion mechanisms for multimodal object detection in autonomous vehicles",
      venue: "International Conference on AI",
      year: "2022",
      link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=NxOd8yoAAAAJ&citation_for_view=NxOd8yoAAAAJ:qjMakFHDy7sC",
      tags: ["AI", "Edge Computing", "Optimization"],
    },
    {
      title: "Sensor fusion operators for multimodal 2d object detection",
      venue: "Journal of Systems Engineering",
      year: "2022",
      link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=NxOd8yoAAAAJ&citation_for_view=NxOd8yoAAAAJ:u-x6o8ySG0sC",
      tags: ["Distributed Systems", "Reliability", "Analysis"],
    },
  ]

  return (
    <section id="publications" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent text-balance w-fit mx-auto">
            Research & Publications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contributing to the software engineering community through research and technical writing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 relative"
            >
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ExternalLink className="h-5 w-5 text-muted-foreground" />
              </a>

              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-blue-50/80 w-fit">
                  <FileText className="h-8 w-8" style={{ stroke: "url(#blue-gradient-icon)" }} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 leading-tight">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {pub.venue} • {pub.year}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {pub.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-muted text-foreground rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
