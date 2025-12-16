"use client"

import { useState, useEffect, useRef } from "react"
import { FileText, GraduationCap, Briefcase, ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import experiencesData from "@/data/experiences.json"
import publicationsData from "@/data/publications.json"
import teachingData from "@/data/teaching.json"
import { TeachingBento } from "@/components/teaching-bento"
import { IndustryBento } from "@/components/industry-bento"
import { ResearchBento } from "@/components/research-bento"
import { motion, AnimatePresence } from "framer-motion"

const experiences = experiencesData
const publications = publicationsData
const teaching = teachingData

export function MeetYourMentor() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section id="meet-your-mentor" ref={sectionRef} className="py-24 px-6 bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                {/* Main Header */}
                <div className="space-y-4 mb-24 text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent text-balance w-fit mx-auto">
                            Meet Your Mentor
                        </h2>
                    </ScrollReveal>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        A blend of industry leadership, academic research, and educational experience.
                    </p>
                </div>

                <div className="space-y-32">
                    {/* Industry Section */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                                <Briefcase className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Industry Experience</h3>
                        </div>
                        <IndustryBento experiences={experiences} />
                    </div>

                    {/* Research Section */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                                <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Research & Publications</h3>
                        </div>
                        <ResearchBento publications={publications} />
                    </div>

                    {/* Teaching Section */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Teaching & Education</h3>
                        </div>
                        <TeachingBento teaching={teaching} />
                    </div>
                </div>
            </div>
        </section>
    )
}
