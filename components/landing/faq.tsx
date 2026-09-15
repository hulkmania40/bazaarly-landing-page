"use client"

import { StaggerItem } from "@/components/landing/reveal"
import { FAQS } from "@/lib/landing-content"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map(({ question, answer }, i) => (
              <StaggerItem key={question} index={i}>
                <AccordionItem value={`item-${i}`} className="border-b">
                  <AccordionTrigger className="text-left font-medium py-4">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              </StaggerItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
