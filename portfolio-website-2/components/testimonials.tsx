"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Smile } from "lucide-react"

const testimonials = [
  // ADPList
  {
    type: "adplist",
    rating: 5,
    text: "I had an outstanding experience with my mentor, who excelled in communication, motivation, subject knowledge, and problem-solving. Their ability to provide clear guidance and inspire me made a significant impact on my growth. I highly recommend booking a session with them if you're looking for someone who will exceed your expectations and",
    name: "Hossam El-kharbotly",
    country: "🇪🇬",
    role: "Computer Engineer, Free",
    date: "November 19, 2025",
    badges: ["Technically competent", "Very motivational", "Amazing communicator", "Amazing problem solver"],
    avatar: "https://adplist-bucket.s3.amazonaws.com/media/profile_photos/562580f36b354f93a057e5500f783616SN3fr.webp",
  },
  {
    type: "adplist",
    rating: 5,
    text: "Yahya was incredibly generous with his time, gave me great advice, a lot of resources to learn from, and gave me a lot of encouragement. I can't recommend him enough!",
    name: "Mentee",
    country: "",
    role: "Mentee",
    date: "November 15, 2025",
    badges: ["Technically competent", "Very motivational"],
    avatar: "/diverse-avatars.png",
  },
  // Topmate
  {
    type: "topmate",
    rating: 5,
    text: "Eng. Yahya gave me an incredible mock interview session that was very helpful. He asked both behavior and technical questions, like a real interview, and provided clear and valuable advice. At the end of the session, he gave me detailed document covering everything I need to review and focus on for both technical and behavioral areas. This extra effort boosted my confidence and helped me feel fully prepared. It was an amazing session!",
    name: "Moataz Habib",
    date: "12th Dec, 2024",
  },
  {
    type: "topmate",
    rating: 5,
    text: "It was great talking with Yahya and I really enjoyed the discussion that we had!",
    name: "Youssef Awad",
    date: "19th Jan, 2025",
  },
  {
    type: "topmate",
    rating: 5,
    text: "I had a fantastic session with Yahya. He provided invaluable advice on transitioning to an ML career, including specific book and tool recommendations. The session exceeded my expectations and left me feeling motivated and prepared. I'm truly grateful for his expertise.",
    name: "Adama Sorho",
    date: "11th Dec, 2024",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-4 mb-12 text-center">
          {/* Flipped gradient (Dark->Mid->Dark) and added w-fit mx-auto for dynamic width */}
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neutral-950 via-neutral-500 to-neutral-950 bg-clip-text text-transparent text-balance w-fit mx-auto">
            What Mentees Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real feedback from engineers I've mentored
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="break-inside-avoid mb-6">
              <Card className="glass transition-all duration-300 hover:border-accent/60 hover:border-2 h-full">
                <CardContent className="p-6 space-y-4">
                  {testimonial.type === "adplist" ? (
                    <>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-foreground">{testimonial.rating}/5</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
                      <div className="flex flex-wrap gap-2">
                        {testimonial.badges?.map((badge, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm bg-accent/10 text-foreground border border-accent/20"
                          >
                            <Smile className="w-4 h-4" />
                            {badge}
                          </span>
                        ))}
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-accent/5 text-muted-foreground">
                          +5
                        </span>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-3">
                          <img
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div>
                            <div className="font-semibold text-foreground">
                              {testimonial.name} {testimonial.country}
                            </div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                          <p className="text-sm text-muted-foreground">Mentee</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-foreground">{testimonial.rating}/5</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
                      <div className="pt-4 border-t">
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.date}</div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="https://adplist.org/mentors/yahya-alaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors font-medium text-center"
          >
            View all ADPList reviews →
          </a>
          <span className="hidden sm:inline text-muted-foreground">|</span>
          <a
            href="https://topmate.io/yahya_alaa#testimonials"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors font-medium text-center"
          >
            View all Topmate reviews →
          </a>
        </div>
      </div>
    </section>
  )
}
