import { Eye, TrendingDown, Zap, Smartphone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  { icon: Eye, title: "No Hidden Charges", desc: "Complete transparency with zero surprise fees." },
  { icon: TrendingDown, title: "Low Interest Rates", desc: "Competitive rates starting from 1.33% per month." },
  { icon: Zap, title: "Quick Disbursal", desc: "Get money in your account within 15 minutes." },
  { icon: Smartphone, title: "Fully Digital Process", desc: "Apply from anywhere — no branch visits needed." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Our Promise</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Why Choose Us</h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="bg-background rounded-2xl p-6 border border-border hover:shadow-card-hover transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <r.icon className="text-accent" size={22} />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
