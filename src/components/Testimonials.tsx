import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reviews = [
  { name: "Priya Sharma", city: "Mumbai", text: "Got my loan approved in just 5 minutes! The process was seamless and money was in my account the same day.", rating: 5 },
  { name: "Rahul Verma", city: "Delhi", text: "No hidden charges, exactly what was promised. I've recommended Fatafat Loans to all my friends.", rating: 5 },
  { name: "Anita Patel", city: "Bengaluru", text: "The interest rates are very competitive compared to other apps. Customer support was also very helpful.", rating: 4 },
];

const Testimonials = () => (
  <section id="testimonials" className="section-padding bg-card">
    <div className="container-narrow">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Real Stories</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">What Our Users Say</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="bg-background rounded-2xl p-6 border border-border hover:shadow-card-hover transition-shadow duration-300 flex flex-col h-full">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} className={s < r.rating ? "fill-accent text-accent" : "text-border"} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">"{r.text}"</p>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.city}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
