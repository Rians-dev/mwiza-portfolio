import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Registered Nurse (Volunteer)",
    hospital: "Solwezi General Hospital",
    location: "Solwezi, Zambia",
    period: "2023 – Present",
    responsibilities: [
      "Patient triage and assessment in outpatient and emergency departments",
      "Administration of medications and IV therapy",
      "Health education and community outreach programs",
      "Electronic health records management using SmartCare",
    ],
    achievements: ["Streamlined patient flow reducing wait times by 20%", "Led health education sessions reaching 200+ community members"],
    skills: ["Triage", "IV Therapy", "SmartCare", "Patient Education"],
  },
  {
    title: "Registered Nurse",
    hospital: "Kitwe Central Hospital",
    location: "Kitwe, Zambia",
    period: "2021 – 2023",
    responsibilities: [
      "Acute care nursing in medical and surgical wards",
      "Emergency department support and critical patient stabilization",
      "Multidisciplinary team collaboration for complex cases",
      "Infection prevention and control compliance monitoring",
    ],
    achievements: ["Zero hospital-acquired infections during tenure in surgical ward", "Recognized for excellence in emergency response protocols"],
    skills: ["Acute Care", "Emergency Response", "IPC", "Team Collaboration"],
  },
  {
    title: "Infectious Disease Respondent",
    hospital: "Kamitondo Clinic",
    location: "Mufulira, Zambia",
    period: "2020 – 2021",
    responsibilities: [
      "COVID-19 screening, testing, and case management",
      "Contact tracing and community surveillance",
      "PPE compliance and staff training",
      "Patient isolation and monitoring protocols",
    ],
    achievements: ["Managed 500+ COVID-19 cases with high recovery rate", "Trained 15 healthcare workers on IPC protocols"],
    skills: ["COVID-19 Response", "Contact Tracing", "IPC Training", "Case Management"],
  },
  {
    title: "Student Nurse (Clinical Rotations)",
    hospital: "Saint Mary's Hospital",
    location: "Mufulira, Zambia",
    period: "2019 – 2020",
    responsibilities: [
      "Clinical rotations across pediatrics, maternity, and medical wards",
      "Patient assessments and nursing care plans",
      "Assisting in surgical procedures and post-operative care",
      "Psychosocial counselling for patients and families",
    ],
    achievements: ["Top-performing student in clinical assessments", "Commended for patient rapport and communication skills"],
    skills: ["Pediatrics", "Maternity", "Surgical Assist", "Counselling"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Clinical Experience</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            My Professional Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.hospital}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative mb-12 md:mb-16 pl-12 md:pl-0 ${
                i % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 md:left-1/2 top-2 w-3.5 h-3.5 bg-primary rounded-full border-4 border-card md:-translate-x-1/2 z-10 shadow-card" />

              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border">
                <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-2">
                  <Calendar size={14} />
                  {exp.period}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                  <MapPin size={14} />
                  {exp.hospital}, {exp.location}
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Responsibilities</h4>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Achievements</h4>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((a) => (
                      <li key={a} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent mt-0.5 flex-shrink-0">★</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
