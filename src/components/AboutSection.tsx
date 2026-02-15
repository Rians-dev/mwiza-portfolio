import { motion } from "framer-motion";
import { Heart, Shield, Stethoscope, Wifi } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Stethoscope, title: "Emergency & Triage", desc: "Expert in rapid patient assessment and prioritization in high-pressure environments." },
    { icon: Shield, title: "Infection Control", desc: "Frontline COVID-19 respondent with deep expertise in IPC protocols." },
    { icon: Heart, title: "Patient Advocacy", desc: "Zero-harm mindset with focus on compassionate, patient-centered care." },
    { icon: Wifi, title: "Telehealth Ready", desc: "Experienced in virtual consultations and remote patient monitoring." },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Me</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Dedicated to Saving Lives &amp; Empowering Communities
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            I am a Registered Nurse with over 4 years of hands-on clinical experience across acute care, emergency medicine, 
            infectious disease response, and occupational health. My journey in nursing has been driven by a deep commitment 
            to evidence-based practice, patient safety, and compassionate care delivery. From stabilizing emergency patients 
            at Kitwe Central Hospital to leading infection prevention efforts during the COVID-19 pandemic, I bring clinical 
            excellence and resilience to every role.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto bg-card rounded-2xl p-8 shadow-card border border-border mb-16 text-center"
        >
          <p className="text-primary font-heading text-xl italic">
            "My mission is to deliver holistic, evidence-based nursing care that respects patient dignity, 
            promotes wellness, and contributes to healthier communities — locally and globally."
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border group"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
