"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ExternalLink, Calendar, MessageCircle, Clock, LucideIcon, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import testimonialsData from "@/data/testimonials.json"
import statsData from "@/data/stats.json"
import { Inter } from "next/font/google"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TestimonialCard, Testimonial } from "@/components/testimonial-card"
import { BentoGrid, BentoGridItem } from "@/components/bento-grid"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"

const inter = Inter({ subsets: ["latin"] })

const testimonials: Testimonial[] = [...testimonialsData].sort((a, b) =>
  new Date(b.dateSort).getTime() - new Date(a.dateSort).getTime()
) as Testimonial[]

const iconMap: Record<string, LucideIcon> = {
  Calendar,
  MessageCircle,
  Clock,
}

// Counter component with animation
function AnimatedCounter({ end, duration = 2500, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            const startTime = Date.now()
            const animate = () => {
              const now = Date.now()
              const progress = Math.min((now - startTime) / duration, 1)
              // Smoother easing function (ease-out-cubic)
              const easeOutCubic = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(easeOutCubic * end))

              if (progress < 1) {
                requestAnimationFrame(animate)
              }
            }
            animate()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return <span ref={counterRef}>{count}{suffix}</span>
}

export function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Top 5 for the Bento Main View
  // We'll use 5 items for a nice 3-column + 2-column bento mix
  const featuredTestimonials = testimonials.slice(0, 5)

  return (
    <section id="testimonials" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto w-full max-w-7xl">
        <div className="space-y-6 mb-16 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent text-balance w-fit mx-auto">
              What Mentees Say
            </h2>
          </ScrollReveal>

          {/* Stats with animated counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-2xl mx-auto">
            {statsData.map((stat, index) => {
              const Icon = iconMap[stat.icon] || Calendar
              return (
                <div key={index} className="glass px-3 py-2.5 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:border-blue-500/30">
                  <div className="p-2 bg-blue-500/10 rounded-full">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-black tabular-nums text-blue-500 leading-none mb-1 ${inter.className}`}>
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground tracking-tight">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bento Grid Layout (Main View) */}
        <BentoGrid className="max-w-7xl mx-auto mb-12">
          {featuredTestimonials.map((testimonial, index) => {
            // Bento Logic:
            // Item 0 (First one): Large (2 col span if needed, or row span)
            // Item 3: Wide
            const isWide = index === 3 || index === 6;
            const isTall = index === 0;

            return (
              <BentoGridItem
                key={testimonial.id}
                className={cn(
                  "glass border-white/20 bg-white/60", // Apply same glass style as cards
                  index === 0 ? "md:col-span-2" : "",  // First item spans 2 columns
                  index === 3 ? "md:col-span-2" : ""   // Fourth item spans 2 columns
                )}
              >
                <TestimonialCard testimonial={testimonial} className="h-full border-0 shadow-none bg-transparent hover:shadow-none hover:border-0" />
              </BentoGridItem>
            )
          })}
        </BentoGrid>

        {/* View All Button & Modal */}
        <div className="flex justify-center">
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="rounded-full px-8 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 group">
                View All {testimonials.length}+ Reviews
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-6xl h-[90vh] flex flex-col p-0 overflow-hidden bg-slate-50/95 backdrop-blur-xl border-white/20">
              <DialogHeader className="p-6 border-b bg-white/50 backdrop-blur-sm z-20 shrink-0">
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                  Mentee Success Stories
                </DialogTitle>
                <DialogDescription>
                  Read what others describe about their mentorship experience.
                </DialogDescription>
              </DialogHeader>
              <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                <BentoGrid className="max-w-7xl mx-auto pb-20">
                  {/* Render ALL testimonials in Bento Layout with repeating pattern */}
                  {testimonials.map((testimonial, i) => {
                    // Pattern: repeats every 7 items
                    // Index 0, 3, 6, etc. logic to create organic feel
                    const index = i % 7;
                    const isWide = index === 0 || index === 3;

                    return (
                      <BentoGridItem
                        key={testimonial.id}
                        className={cn(
                          "glass border-white/20 bg-white/60",
                          isWide ? "md:col-span-2" : ""
                        )}
                      >
                        <TestimonialCard testimonial={testimonial} className="h-full border-0 shadow-none bg-transparent hover:shadow-none hover:border-0" />
                      </BentoGridItem>
                    )
                  })}
                </BentoGrid>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
