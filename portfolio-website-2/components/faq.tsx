import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is the mentorship really free?",
    answer: "Yes—100% free. No upsells, no hidden fees.",
  },
  {
    question: "Do I need to prepare anything?",
    answer:
      "Come with your questions, goals, or topics you care about. Prep is optional — you own the session and set the agenda.",
  },
  {
    question: "How long are the sessions?",
    answer: "Typically 30–45 minutes, depending on the platform.",
  },
  {
    question: "What topics can we cover?",
    answer:
      "Career strategy, learning paths, ML concepts, resumes, projects, interviews, or anything related to software/ML.",
  },
  {
    question: "Do you offer paid consulting?",
    answer: "Yes—for teams or companies. Mentorship for individuals is always free.",
  },
  {
    question: "Can I book multiple sessions?",
    answer: "Yes—if you find them useful, you're welcome to keep coming back.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-4 mb-16 text-center">
          {/* Flipped gradient (Dark->Mid->Dark) and added w-fit mx-auto for dynamic width */}
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent text-balance w-fit mx-auto">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
