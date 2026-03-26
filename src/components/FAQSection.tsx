import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  { q: "What is the maximum loan amount I can get?", a: "You can get a personal loan of up to ₹5,00,000 depending on your credit profile and income." },
  { q: "What documents are required?", a: "You only need your PAN card, Aadhaar card, and bank statement. Everything is verified digitally — no physical documents needed." },
  { q: "How quickly will I receive the money?", a: "Once approved, the loan amount is disbursed directly to your bank account within 15 minutes." },
  { q: "What are the interest rates?", a: "Interest rates start from 1.33% per month (16% per annum) and vary based on your credit score and profile." },
  { q: "Is there any prepayment penalty?", a: "No, you can prepay your loan at any time without any additional charges after 3 months." },
];

const FAQSection = () => (
  <section id="faq" className="section-padding">
    <div className="container-narrow max-w-3xl">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Got Questions?</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Frequently Asked Questions</h2>
      </AnimatedSection>

      <AnimatedSection>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card">
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQSection;
