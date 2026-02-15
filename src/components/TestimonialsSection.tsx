import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Mwiza is one of the most dedicated nurses I've worked with. Her ability to remain calm under pressure and her genuine compassion for patients sets her apart.",
    author: "Dr. K. Mulenga",
    role: "Senior Medical Officer, Kitwe Central Hospital",
  },
  {
    quote: "During the COVID-19 response, Mwiza demonstrated exceptional leadership and clinical skills. She trained our entire team on IPC protocols and maintained zero staff infections.",
    author: "Sr. M. Banda",
    role: "Nurse Manager, Kamitondo Clinic",
  },
  {
    quote: "Her patient counselling approach is remarkable. She combines clinical knowledge with genuine empathy, achieving outstanding treatment adherence rates among our patients.",
    author: "Mrs. C. Phiri",
    role: "Psychosocial Coordinator",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            What Colleagues Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border"
            >
              <Quote size={24} className="text-primary/30 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
