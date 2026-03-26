import { IndianRupee, Calendar, Clock, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  { icon: IndianRupee, title: "₹5,000 – ₹5,00,000", desc: "Wide loan amount range" },
  { icon: Calendar, title: "3 – 36 Months", desc: "Flexible repayment tenure" },
  { icon: Clock, title: "Instant Approval", desc: "Decision in under 2 minutes" },
  { icon: ShieldCheck, title: "No Collateral", desc: "Completely unsecured loans" },
];

const LoanFeatures = () => (
  <section id="features" className="section-padding">
    <div className="container-narrow">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Loan Details</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Benefits & Features</h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="text-center bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="text-primary" size={26} />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default LoanFeatures;
