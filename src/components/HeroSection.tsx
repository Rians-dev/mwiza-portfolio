import { motion } from "framer-motion";
import { Download, Calendar, Briefcase, Globe } from "lucide-react";
import heroImage from "@/assets/mwiza.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-hero flex items-center pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
              <Globe size={16} className="text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">
                Available for International Roles
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Mwiza
              <br />
              <span className="text-gradient-primary">Nyirenda</span>
            </h1>

            <p className="text-lg md:text-xl text-primary font-semibold mb-3">
              Registered Nurse | Nursing Officer
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Compassionate Registered Nurse Delivering Evidence-Based Care and Patient Advocacy.
              4+ years transforming patient outcomes in acute care and emergency settings.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "4+", label: "Years Experience" },
                { value: "4", label: "Hospitals Served" },
                { value: "5+", label: "Certifications" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 bg-card rounded-xl shadow-card">
                  <div className="text-2xl md:text-3xl font-bold text-primary font-heading">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#recruiter"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-teal-600 transition-all shadow-hero"
              >
                <Download size={18} />
                Download CV
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-card text-foreground font-semibold rounded-xl border border-border hover:border-primary hover:text-primary transition-all shadow-card"
              >
                <Calendar size={18} />
                Book Consultation
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-xl hover:bg-teal-100 transition-all"
              >
                <Briefcase size={18} />
                View Experience
              </a>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden shadow-hero border-4 border-card">
                <img
                  src={heroImage}
                  alt="Mwiza Nyirenda - Registered Nurse"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card px-4 py-3 rounded-2xl shadow-card-hover border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse-soft" />
                  <span className="text-sm font-semibold text-foreground">Open to Work</span>
                </div>
              </div>
              {/* Location badge */}
              <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-card text-sm font-semibold">
                📍 Solwezi, Zambia
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
