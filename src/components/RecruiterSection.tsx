import { motion } from "framer-motion";
import { Download, FileText, Globe, CheckCircle, Clock } from "lucide-react";

const RecruiterSection = () => {
  return (
    <section id="recruiter" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">For Employers</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Recruiter Zone
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Everything you need to evaluate my candidacy — quick access to documents, qualifications, and availability.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Availability & Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border mb-8"
          >
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <CheckCircle size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Availability</p>
                  <p className="text-sm text-primary font-medium">Immediately Available</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Globe size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Work Eligibility</p>
                  <p className="text-sm text-primary font-medium">Local & International</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Notice Period</p>
                  <p className="text-sm text-primary font-medium">Immediate Start</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Downloads & Documents */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover transition-shadow"
            >
              <FileText size={32} className="text-primary mb-4" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Curriculum Vitae</h3>
              <p className="text-sm text-muted-foreground mb-4">Complete professional CV with detailed experience, education, and references.</p>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-teal-600 transition-colors text-sm">
                <Download size={16} />
                Download CV (PDF)
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover transition-shadow"
            >
              <FileText size={32} className="text-accent mb-4" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Skills Summary</h3>
              <p className="text-sm text-muted-foreground mb-4">One-page skills summary highlighting clinical competencies and certifications.</p>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground font-semibold rounded-xl hover:bg-teal-100 transition-colors text-sm">
                <Download size={16} />
                Download Summary (PDF)
              </button>
            </motion.div>
          </div>

          {/* Quick Reference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border"
          >
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Quick Reference Contacts</h3>
            <p className="text-sm text-muted-foreground mb-4">Professional references available upon request. Please contact me directly for referee details.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { role: "Clinical Supervisor", org: "Kitwe Central Hospital" },
                { role: "Nurse Manager", org: "Kamitondo Clinic" },
                { role: "Academic Referee", org: "Mufulira Nursing College" },
                { role: "Department Head", org: "Solwezi General Hospital" },
              ].map((ref) => (
                <div key={ref.role} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{ref.role}</p>
                    <p className="text-xs text-muted-foreground">{ref.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterSection;
