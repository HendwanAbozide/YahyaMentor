"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { PlatformBadge } from "@/components/platform-badge"
import { cn } from "@/lib/utils"
import { TestimonialCard } from "@/components/testimonial-card"

interface Testimonial {
    id: string
    type: string
    rating: number
    text: string
    name: string
    date: string
    avatar: string
    link: string
    location?: string
    position?: string
}

interface TestimonialColumnProps {
    testimonials: Testimonial[]
    className?: string
    duration?: number // Duration in seconds for one full cycle
    reverse?: boolean
}

export function TestimonialColumn({
    testimonials,
    className,
    duration = 40,
    reverse = false
}: TestimonialColumnProps) {
    const [isHovered, setIsHovered] = useState(false)

    // Duplicate testimonials to create seamless loop
    const displayTestimonials = [...testimonials, ...testimonials, ...testimonials]

    return (
        <div
            className={cn("relative h-[800px] overflow-hidden group", className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={cn(
                    "flex flex-col gap-6 w-full will-change-transform",
                    isHovered && "pause-animation"
                )}
                style={{
                    animation: `marquee-vertical ${duration}s linear infinite`,
                    animationDirection: reverse ? 'reverse' : 'normal'
                }}
            >
                {displayTestimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={`${testimonial.id}-${index}`}
                        testimonial={testimonial}
                        className="flex-shrink-0"
                    />
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee-vertical {
                    from { transform: translateY(0); }
                    to { transform: translateY(-33.33%); }
                }
                .pause-animation {
                    animation-play-state: paused !important;
                }
            `}</style>
        </div>
    )
}
