"use client"

import { Briefcase, Calendar, TrendingUp, Code, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
    {
        company: "Shopify",
        role: "Senior Machine Learning Engineer",
        period: "Present",
        description: "Building scalable machine learning systems and driving technical innovation.",
        metrics: [],
        tech: ["Machine Learning", "Scalable Systems"],
    },
    {
        company: "Tempo Analytics",
        role: "Machine Learning Engineer",
        period: "May '22 – Present",
        description: "Leading development of video analytics platform for quick-service restaurants.",
        metrics: [
            "Improved system reliability by 28% using OpenMMLab models",
            "Halved label refinement time with custom Angular annotation tool",
            "Optimized models for edge inference using TensorRT",
        ],
        tech: ["PyTorch", "FastAPI", "Qdrant", "Angular", "TensorRT"],
    },
    {
        company: "VRapeutic",
        role: "Technical Lead & Co-founder",
        period: "Jan '21 – Apr '22",
        description: "Led technical development for VR therapeutics startup, securing six-figure UNICEF funding.",
        metrics: [
            "Achieved >90% backend test coverage with Jest",
            "Cut operational costs by 50% via AWS serverless migration",
            "Advanced to RBPC'21 semi-finals with successful pitch",
        ],
        tech: ["Node.js", "React", "AWS", "Jest", "CI/CD"],
    },
    {
        company: "SensorCortek",
        role: "Machine Learning Engineer",
        period: "May '20 – Dec '20",
        description: "Developed AI perception systems for autonomous driving.",
        metrics: [
            "Improved radar-based detection accuracy by 17%",
            "Shipped 3D data annotation web tool using Three.js",
        ],
        tech: ["PyTorch", "Three.js", "Python", "Data-Centric AI"],
    },
    {
        company: "VIVA Lab",
        role: "Graduate AI Researcher",
        period: "Sep '19 – May '22",
        description: "Conducted research on multimodal deep learning and sensor fusion methods.",
        metrics: ["Authored multiple publications in sensor fusion"],
        tech: ["Deep Learning", "Sensor Fusion", "Multimodal AI"],
    },
    {
        company: "Intelligent Systems Lab",
        role: "Machine Learning Engineer",
        period: "Jul '18 – Jul '19",
        description: "Integrated pose estimation in an augmented reality web app.",
        metrics: ["Integrated pose estimation using TensorFlow.js & Angular 2"],
        tech: ["TensorFlow.js", "Angular 2", "Augmented Reality"],
    },
]

const projects = [
    {
        title: "Semantic Search on Wikipedia",
        description: "Embedded 500k passages in Qdrant vector store using binary quantization to enable retrieval and reranking.",
        tech: ["Qdrant", "SentenceTransformers", "Binary Quantization"],
    },
    {
        title: "Quora Similar Questions Finder",
        description: "Stored BGE sentence embeddings within a Qdrant vector index, enabling similarity search using cosine distance.",
        tech: ["Qdrant", "BGE Embeddings", "Cosine Similarity"],
    },
    {
        title: "Rest APIs for Face Detection & Similarity",
        description: "Developed APIs for face detection & similarity search in videos.",
        tech: ["Flask", "MongoDB", "TensorFlow"],
        link: "https://github.com/vyndapp/vynd_api",
    },
]

export function Experience() {
    return (
        <section id="experience" className="py-24 px-6 bg-muted/30">
            <div className="container mx-auto max-w-5xl">
                <div className="space-y-4 mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent text-balance w-fit mx-auto">
                        Professional Experience
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Building scalable AI systems and leading technical teams
                    </p>

                    {/* Metrics Row */}
                    <div className="flex justify-center gap-8 pt-4">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-foreground">5+</span>
                            <span className="text-sm text-muted-foreground">Years Experience</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-foreground">3+</span>
                            <span className="text-sm text-muted-foreground">Major Projects</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-foreground">5</span>
                            <span className="text-sm text-muted-foreground">Publications</span>
                        </div>
                    </div>
                </div>

                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Icon on the timeline */}
                            <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center shadow-sm -translate-x-1/2 shrink-0 z-10 group-hover:scale-110 transition-transform duration-300">
                                <Briefcase className="w-5 h-5 text-muted-foreground" />
                            </div>

                            {/* Content Card */}
                            <div className="w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0">
                                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card transition-colors duration-300">
                                    <CardHeader className="pb-3">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                                            <CardTitle className="text-xl font-bold">{exp.company}</CardTitle>
                                            <div className="flex items-center text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded-md w-fit">
                                                <Calendar className="w-3 h-3 mr-2" />
                                                {exp.period}
                                            </div>
                                        </div>
                                        <div className="text-base font-medium text-primary">{exp.role}</div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>

                                        <div className="space-y-2">
                                            {exp.metrics.map((metric, i) => (
                                                <div key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                                                    <TrendingUp className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                    <span>{metric}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {exp.tech.map((tech, i) => (
                                                <Badge key={i} variant="secondary" className="text-xs font-normal bg-muted/50 hover:bg-muted">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Projects Section */}
                <div className="mt-24 space-y-8">
                    <div className="text-center space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold">Key Projects</h3>
                        <p className="text-muted-foreground">Selected technical implementations and open source work</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <Card key={index} className="flex flex-col border-border/50 bg-card/50 hover:bg-card transition-all duration-300 hover:-translate-y-1">
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-2">
                                        <CardTitle className="text-lg font-semibold leading-tight">{project.title}</CardTitle>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col justify-between gap-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <Badge key={i} variant="outline" className="text-xs font-normal">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
