"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ExternalLink, Calendar, MessageCircle, Clock, LucideIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import testimonialsData from "@/data/testimonials.json"
import statsData from "@/data/stats.json"
import { Inter } from "next/font/google"
import { ScrollReveal } from "@/components/scroll-reveal"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import { PlatformBadge } from "@/components/platform-badge"

const inter = Inter({ subsets: ["latin"] })

const testimonials = testimonialsData

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
  // Embla Carousel hook with AutoScroll plugin
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps"
    },
    [
      AutoScroll({
        playOnInit: true,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
        speed: 0.5
      })
    ]
  )

  return (
    <section id="testimonials" className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto w-full">
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

        {/* Embla Carousel Container */}
        <div
          className="relative max-w-7xl mx-auto"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex py-8 items-start touch-pan-y">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-[320px] select-none mr-6">
                  <Card className="h-full glass relative overflow-hidden border-white/20 bg-white/60 transition-all duration-500 shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:border-blue-500/30">

                    <CardContent className="p-6 space-y-4 relative z-10 flex flex-col h-full">
                      {/* Header: Rating & Platform */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded-full">
                          <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                          <span className="font-bold text-yellow-700 text-xs">{testimonial.rating}.0</span>
                        </div>
                        {testimonial.type && (
                          <PlatformBadge type={testimonial.type} />
                        )}
                      </div>

                      {/* Testimonial Text */}
                      <div className="flex-grow">
                        <p className="text-[15px] text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: testimonial.text }} />
                      </div>

                      {/* Author Info */}
                      <div className="pt-4 border-t border-black/5 flex items-center gap-3 mt-auto">
                        <div className="relative">
                          <div className="absolute inset-0 bg-blue-500 blur opacity-20 rounded-full"></div>
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-10 h-10 rounded-full object-cover relative border-2 border-white shadow-sm"
                            draggable={false}
                          />
                        </div>
                        <div>
                          <div className="font-bold text-foreground text-sm">{testimonial.name}</div>
                          <div className="text-xs text-muted-foreground font-medium">{testimonial.date}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
