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
                threshold: 0.1, // Trigger earlier: when 10% is visible
                rootMargin: "0px" // Trigger as soon as it enters viewport
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
            className={`transition-all duration-500 ease-out ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
                } ${className}`}
        >
            {children}
        </div>
    )
}
