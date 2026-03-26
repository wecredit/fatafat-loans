import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-illustration.png";

const HeroSection = () => (
  <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24" style={{ background: "var(--hero-gradient)" }}>
    {/* subtle floating orbs */}
    <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float" />
    <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

    <div className="container-narrow px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-xs font-semibold tracking-wide uppercase">
            100% Digital Process
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground mb-6">
            Instant Personal Loans up to{" "}
            <span className="text-accent">₹5 Lakhs</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-lg">
            Fast approval · No paperwork · 100% digital. Get funds directly in your bank account within minutes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-cta text-base font-semibold rounded-full px-8 py-6 transition-transform hover:scale-105">
              Apply Now
            </Button>
            <Button variant="outline" className="border-accent text-accent bg-white/95 hover:bg-accent hover:text-accent-foreground text-base font-semibold rounded-full px-8 py-6 transition-colors">
              Check Eligibility
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="hidden md:flex justify-center"
        >
          <img src={heroImg} alt="Person using Fatafat Loans app on phone" className="w-full max-w-md animate-float" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
