import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

const radarData = [
  { skill: "Triage", level: 95 },
  { skill: "Emergency Care", level: 90 },
  { skill: "IPC", level: 95 },
  { skill: "IV Therapy", level: 85 },
  { skill: "Telehealth", level: 80 },
  { skill: "EHR Systems", level: 88 },
  { skill: "Counselling", level: 85 },
  { skill: "Leadership", level: 82 },
];

const skillCategories = [
  {
    title: "Clinical Skills",
    color: "bg-primary",
    skills: [
      { name: "Patient Triage", level: 95 },
      { name: "IV Therapy & Medication", level: 85 },
      { name: "Emergency & Critical Care", level: 90 },
      { name: "Wound Management", level: 85 },
    ],
  },
  {
    title: "Digital Skills",
    color: "bg-teal-600",
    skills: [
      { name: "SmartCare EHR", level: 90 },
      { name: "Telehealth Platforms", level: 80 },
      { name: "Electronic Documentation", level: 88 },
      { name: "Data Reporting", level: 75 },
    ],
  },
  {
    title: "Soft Skills",
    color: "bg-accent",
    skills: [
      { name: "Patient Advocacy", level: 95 },
      { name: "Psychosocial Counselling", level: 85 },
      { name: "Team Collaboration", level: 90 },
      { name: "Health Education", level: 88 },
    ],
  },
  {
    title: "Safety & IPC",
    color: "bg-gold",
    skills: [
      { name: "Infection Prevention", level: 95 },
      { name: "PPE Compliance", level: 95 },
      { name: "Zero-Harm Protocols", level: 90 },
      { name: "Contact Tracing", level: 88 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-gradient-section">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Skills & Competencies</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Clinical Readiness Dashboard
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 shadow-card border border-border"
          >
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4 text-center">Skills Radar</h3>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(174, 20%, 88%)" />
                <PolarAngleAxis dataKey="skill" tick={{ fontSize: 12, fill: "hsl(200, 12%, 48%)" }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Skills"
                  dataKey="level"
                  stroke="hsl(174, 62%, 38%)"
                  fill="hsl(174, 62%, 38%)"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Skill Categories */}
          <div className="space-y-6">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-full rounded-full ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
