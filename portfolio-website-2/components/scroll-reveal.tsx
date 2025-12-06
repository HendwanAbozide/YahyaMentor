"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

interface ScrollRevealProps {
    children: ReactNode
    className?: string
    delay?: number
}

export function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false)
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true)
                    }, delay)
                }
            },
            {
                threshold: 0.3, // Trigger when 30% of element is visible
                rootMargin: "0px 0px -50px 0px" // Trigger slightly before element enters viewport
            }
        )

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current)
            }
        }
    }, [delay])

    return (
        <div
            ref={elementRef}
            className={`transition-all duration-700 ease-out ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                } ${className}`}
        >
            {children}
        </div>
    )
}
