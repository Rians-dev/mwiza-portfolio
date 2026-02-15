import { motion } from "framer-motion";
import { AlertTriangle, Activity, Heart } from "lucide-react";

const cases = [
  {
    icon: AlertTriangle,
    title: "Emergency Stabilization",
    subtitle: "Acute Trauma Response",
    situation: "A 35-year-old male patient arrived at the emergency department following a road traffic accident with multiple injuries, including suspected internal bleeding and a fractured femur.",
    actions: [
      "Performed rapid primary assessment (ABCDE approach)",
      "Initiated IV access and fluid resuscitation",
      "Applied traction splint and stabilized the fracture",
      "Coordinated with the surgical team for emergency intervention",
      "Monitored vitals and managed pain with prescribed analgesia",
    ],
    outcome: "Patient was successfully stabilized within 30 minutes, transferred to surgery, and discharged after 2 weeks with full recovery. Zero complications during the stabilization phase.",
    color: "border-l-accent",
  },
  {
    icon: Activity,
    title: "COVID-19 Outbreak Response",
    subtitle: "Infectious Disease Management",
    situation: "During the peak of the COVID-19 second wave, our clinic experienced a surge of 50+ suspected cases daily with limited PPE supplies and overwhelmed staff.",
    actions: [
      "Established triage protocols to categorize patients by severity",
      "Implemented strict IPC measures and PPE conservation strategies",
      "Trained 15 auxiliary staff on proper screening procedures",
      "Set up an isolation area with proper ventilation protocols",
      "Coordinated community surveillance and contact tracing efforts",
    ],
    outcome: "Successfully managed the surge with a 92% recovery rate. Zero staff infections during the outbreak period. The protocols developed were adopted as best practice across the district.",
    color: "border-l-primary",
  },
  {
    icon: Heart,
    title: "Patient Counselling Success",
    subtitle: "Psychosocial Support",
    situation: "A newly diagnosed HIV-positive mother of three was experiencing severe anxiety, depression, and treatment refusal, putting both her health and her children's welfare at risk.",
    actions: [
      "Conducted private, empathetic counselling sessions over 4 weeks",
      "Provided psychoeducation about HIV management and ART adherence",
      "Connected patient with support groups and social services",
      "Involved family members in supportive care with patient's consent",
      "Developed a personalized treatment adherence plan",
    ],
    outcome: "Patient accepted treatment within 3 weeks, achieved viral suppression within 6 months, and became a peer counsellor helping other newly diagnosed patients in the community.",
    color: "border-l-gold",
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Case Studies</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Real Impact, Real Outcomes
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Anonymized patient care stories showcasing clinical decision-making, compassion, and measurable results.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border border-l-4 ${c.color}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                  <c.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.subtitle}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-1">Situation</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.situation}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-1">Actions Taken</h4>
                  <ul className="space-y-1">
                    {c.actions.map((a) => (
                      <li key={a} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary flex-shrink-0">→</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-primary mb-1">Outcome</h4>
                  <p className="text-sm text-foreground leading-relaxed">{c.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
