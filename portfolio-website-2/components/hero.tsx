"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Github, Calendar, ExternalLink } from "lucide-react"
import Image from "next/image"
import { ADPListButton } from "@/components/adplist-button"
import { GroupSessionButton } from "@/components/group-session-button"
import { useState, useEffect } from "react"

const slogans = [
  "Free Mentorship",
  "Resume Reviews",
  "ML Career Advice",
  "1:1 Sessions",
  "Prepare for Interview"
]

export function Hero() {
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentSlogan = slogans[currentSloganIndex]
    const typingSpeed = isDeleting ? 50 : 100 // Faster when deleting
    const pauseTime = 2000 // Pause when fully typed

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentSlogan) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && displayedText === "") {
        // Move to next slogan
        setIsDeleting(false)
        setCurrentSloganIndex((prev) => (prev + 1) % slogans.length)
      } else if (isDeleting) {
        // Delete one character
        setDisplayedText(currentSlogan.substring(0, displayedText.length - 1))
      } else {
        // Type one character
        setDisplayedText(currentSlogan.substring(0, displayedText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentSloganIndex, displayedText, isDeleting])

  return (
    <section id="hero" className="pt-20 pb-16 px-6 min-h-screen flex items-center relative overflow-hidden">
      {/* Top Right Badge */}


      <div className="container mx-auto max-w-6xl relative z-10 mt-16 md:mt-20 lg:mt-24">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="block mb-2">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
                <span className="block bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
                  with Yahya
                </span>
              </h1>
              <h2 className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-normal">
                👋 I'm <span className="font-semibold text-foreground">Yahya Alaa</span>, a Senior Machine Learning
                Engineer with a Masters in AI. <br></br>
                I help engineers navigate their careers with clarity through <span className="font-semibold text-foreground underline decoration-primary/30 underline-offset-[6px] decoration-2">personalized technical mentorship</span>, <span className="font-semibold text-foreground underline decoration-primary/30 underline-offset-[6px] decoration-2">comprehensive resume reviews</span>, and <span className="font-semibold text-foreground underline decoration-primary/30 underline-offset-[6px] decoration-2">actionable advice</span>.
              </h2>

              <div className="space-y-4 pt-4">
                <div className="flex flex-col gap-3 items-start w-full">
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <ADPListButton />
                    <GroupSessionButton />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Also available on{" "}
                    <a
                      href="https://topmate.io/yahya_alaa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary underline underline-offset-2 font-medium transition-colors"
                    >
                      Topmate
                    </a>
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">100% free. No prep needed. All levels welcome.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/yahya-alaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:yahya.alaa.massoud@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center items-center order-1 md:order-1 text-primary">
            {/* Profile picture with rotating dashed ring */}
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] flex items-center justify-center group" style={{ perspective: '1200px' }}>
              {/* Rotating dashed ring - vertical flip */}
              <div
                className="absolute inset-0 rounded-full border-[3px] border-dashed border-sky-300"
                style={{
                  animation: 'flipVertical 8s linear infinite',
                  transformStyle: 'preserve-3d'
                }}
              />

              {/* Image Container */}
              <div className="absolute inset-4 md:inset-6 rounded-full overflow-hidden border-[6px] border-white shadow-lg bg-white group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                <Image src="/images/profile-enhanced.png" alt="Yahya Alaa" fill className="object-cover" priority />
              </div>

              {/* Top 10 Mentor Badge - Bottom Right */}
              <a
                href="https://adplist.org/community-certifications/top10fresh-dec-2025-data-engineering-c945f3"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-6 -right-6 md:-bottom-4 md:-right-10 z-20 flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-full py-2 px-3 pr-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out group/badge"
              >
                <Image
                  src="/images/adplist-top-10-final.png"
                  alt="Top 10 Data Engineering Mentor Badge"
                  width={120}
                  height={120}
                  className="w-10 h-10 md:w-12 md:h-12 drop-shadow-md group-hover/badge:rotate-6 transition-transform duration-300"
                  priority
                />
                <span className="flex items-center gap-1.5 text-[11px] md:text-xs font-semibold text-gray-800 leading-tight max-w-[140px]">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Top 10 Mentors in Data Engineering on ADPList (Dec'25)
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
