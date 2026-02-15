import { motion } from "framer-motion";
import { Award, Download } from "lucide-react";

const certifications = [
  {
    title: "Infection Prevention & Control",
    issuer: "Ministry of Health, Zambia",
    year: "2021",
    icon: "🛡️",
    description: "Comprehensive training in hospital infection control measures and outbreak response.",
  },
  {
    title: "Psychosocial Counselling",
    issuer: "Certified Training Program",
    year: "2022",
    icon: "💬",
    description: "Patient and family counselling with focus on mental health support and coping strategies.",
  },
  {
    title: "Emergency & Critical Care (COVID-19)",
    issuer: "WHO / National Response",
    year: "2020",
    icon: "🚑",
    description: "Specialized training in critical care management during the COVID-19 pandemic.",
  },
  {
    title: "IELTS Academic",
    issuer: "British Council",
    year: "2023",
    icon: "🌍",
    description: "English language proficiency certification for international career readiness.",
  },
  {
    title: "Diploma in Registered Nursing",
    issuer: "Mufulira Nursing College",
    year: "2023",
    icon: "🎓",
    description: "Comprehensive 3-year nursing diploma covering all core nursing competencies.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Certifications & Training</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Professional Credentials
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all border border-border group"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <div className="flex items-center gap-2 mb-2">
                <Award size={14} className="text-primary" />
                <span className="text-xs font-semibold text-primary">{cert.year}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cert.description}</p>
              <button className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
                <Download size={14} />
                View Certificate
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
