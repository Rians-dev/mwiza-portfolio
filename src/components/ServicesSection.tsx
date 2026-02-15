import { motion } from "framer-motion";
import { BookOpen, Users, Shield, Heart } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Health Education Sessions",
    description: "Interactive sessions on disease prevention, nutrition, maternal health, and wellness for individuals and groups.",
  },
  {
    icon: Heart,
    title: "Virtual Patient Counselling",
    description: "Confidential telehealth counselling for chronic disease management, mental health support, and treatment adherence.",
  },
  {
    icon: Shield,
    title: "Infection Prevention Talks",
    description: "Awareness workshops on infection control, hand hygiene, PPE use, and outbreak preparedness for organizations.",
  },
  {
    icon: Users,
    title: "Community Outreach",
    description: "Community health programs focusing on HIV/AIDS awareness, vaccination drives, and maternal-child health education.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Services</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Telehealth & Community Services
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-card rounded-2xl p-8 shadow-card border border-border text-center"
        >
          <h3 className="font-heading text-xl font-bold text-foreground mb-3">Book a Consultation</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Interested in a health education session or virtual consultation? Reach out and let's discuss how I can help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-teal-600 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
