import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"

interface GroupSessionButtonProps {
    text?: string
}

export function GroupSessionButton({
    text = "Book a Group Session",
}: GroupSessionButtonProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (open) {
            // Slight delay to ensure DOM is ready
            const timer = setTimeout(() => {
                // @ts-ignore
                if (typeof Tally !== "undefined") {
                    // @ts-ignore
                    Tally.loadEmbeds()
                }
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [open])

    // Load Tally embed script
    useEffect(() => {
        const scriptSrc = "https://tally.so/widgets/embed.js"
        if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
            const script = document.createElement("script")
            script.src = scriptSrc
            script.async = true
            script.onload = () => {
                // @ts-ignore
                if (typeof Tally !== "undefined") {
                    // @ts-ignore
                    Tally.loadEmbeds()
                }
            }
            document.body.appendChild(script)
        }
    }, [])

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="group relative h-[52px] px-6 rounded-xl flex items-center justify-center gap-2 bg-gradient-to-b from-[#0f0f2e] to-[#05051b] border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(20,20,100,0.4)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer text-white w-full sm:w-auto"
                >
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 ease-out group-hover:scale-110"
                    >
                        <path
                            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.01 6.11684 19.01 7.005C19.01 7.89316 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <p className="font-bold text-sm leading-6 mb-0 whitespace-nowrap">
                        {text}
                    </p>
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px] lg:max-w-[1000px] w-[95vw] p-0 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50/50 border-2 border-blue-200/60 shadow-[0_20px_60px_-15px_rgba(20,73,231,0.3)] max-h-[85vh] min-h-[600px] overflow-y-auto rounded-3xl backdrop-blur-xl">
                <DialogTitle className="sr-only">Group Project Review Session Intake Form</DialogTitle>
                {/* Header Section with Gradient */}
                <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 p-8 pb-12 relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
                            Book Your Group Session
                        </h2>
                        <p className="text-blue-50 text-lg leading-relaxed max-w-2xl">
                            Hi, I'm Yahya, and I'm really looking forward to our project review session! This quick form will just help me understand your goals so I can tailor our session to what you need.
                        </p>
                    </div>
                </div>

                {/* Form Container with enhanced padding */}
                <div className="p-8 sm:p-10 lg:p-12 bg-white/80 backdrop-blur-sm">
                    <iframe
                        src="https://tally.so/embed/VLGXPv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                        data-tally-src="https://tally.so/embed/VLGXPv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                        loading="lazy"
                        width="100%"
                        height="600"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        title="Group Project Review Session - Intake Form withyahya.com"
                        className="rounded-lg"
                    ></iframe>
                </div>
            </DialogContent>
        </Dialog>
    )
}
