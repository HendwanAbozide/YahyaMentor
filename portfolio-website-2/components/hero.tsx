"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Github, Calendar, ExternalLink } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="hero" className="pt-20 pb-16 px-6 min-h-screen flex items-center relative">
      <div className="container mx-auto max-w-6xl relative z-10 mt-16 md:mt-20 lg:mt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
                <span className="whitespace-nowrap">Free Mentorship for</span>{" "}
                <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
                  Aspiring Engineers
                </span>
              </h1>
              <h2 className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-normal">
                👋 I'm <span className="font-semibold text-foreground">Yahya Alaa</span>, a Senior Machine Learning
                Engineer. I help engineers grow their careers through 1:1 guidance, resume reviews, and personalized
                career advice.
              </h2>

              <div className="space-y-4 pt-4">
                <p className="text-base font-medium text-foreground/80">Book Free Mentorship</p>
                <div className="flex flex-wrap gap-3 items-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#141414] hover:bg-[#141414]/90 text-white font-semibold px-6 transition-transform hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl"
                  >
                    <a href="https://topmate.io/yahya_alaa" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book on Topmate
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="font-semibold px-6 bg-transparent transition-transform hover:scale-110 active:scale-95 hover:bg-accent/10 shadow-sm hover:shadow-md"
                  >
                    <a href="https://adplist.org/mentors/yahya-alaa" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Book on ADPList
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">100% free. No prep needed. All levels welcome.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-neutral-700 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center items-center order-1 md:order-2 text-primary">
            {/* replaced geometric background with circular dashed frame style */}
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] flex items-center justify-center">
              {/* Dashed Ring */}
              <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-sky-300 text-primary" />

              {/* Image Container */}
              <div className="absolute inset-4 md:inset-6 rounded-full overflow-hidden border-[6px] border-white shadow-lg bg-white">
                <Image src="/images/profile-outdoors.jpg" alt="Yahya Alaa" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
