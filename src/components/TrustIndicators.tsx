import { Shield, Users, BadgeCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const items = [
  { icon: Users, label: "Trusted by 1L+ Users", sub: "Growing community" },
  { icon: Shield, label: "Secure & Safe Process", sub: "Bank-grade encryption" },
  { icon: BadgeCheck, label: "RBI Registered Partner", sub: "Fully compliant" },
];

const TrustIndicators = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-6 rounded-2xl bg-secondary border border-border"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <item.icon className="text-accent" size={24} />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TrustIndicators;
