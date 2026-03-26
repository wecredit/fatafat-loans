import { ClipboardList, ThumbsUp, Banknote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { icon: ClipboardList, step: "Step 1", title: "Enter Details", desc: "Fill a simple form with basic info in under 2 minutes." },
  { icon: ThumbsUp, step: "Step 2", title: "Get Instant Approval", desc: "Our AI evaluates your profile and approves instantly." },
  { icon: Banknote, step: "Step 3", title: "Money in Bank", desc: "Funds are disbursed directly to your bank account." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="section-padding">
    <div className="container-narrow">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Simple Process</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">How It Works</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center group">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">{s.step}</span>
              <div className="mx-auto my-5 w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <s.icon className="text-accent" size={28} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
