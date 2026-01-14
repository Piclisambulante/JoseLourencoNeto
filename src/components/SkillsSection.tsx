import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Wrench, Zap } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Linguagens",
    skills: ["Python", "Java", "TypeScript", "C#"],
  },
  {
    icon: Zap,
    title: "Frameworks",
    skills: ["Spring Boot", "ASP.NET", "Flask", "Node.js", "React"],
  },
  {
    icon: Database,
    title: "Bancos de Dados",
    skills: ["PostgreSQL", "MySQL", "SQLite", "SQLAlchemy", "H2"],
  },
  {
    icon: Wrench,
    title: "Ferramentas",
    skills: ["Git", "Docker", "Stripe", "Postman", "GitHub"],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="habilidades" className="py-32 relative bg-gradient-hero">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">02. Habilidades</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Minhas <span className="text-gradient">Tecnologias</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
                className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.2 + skillIndex * 0.05 }}
                      className="px-3 py-1.5 rounded-full bg-secondary text-sm font-mono text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 glass rounded-2xl p-8 text-center"
          >
            <h3 className="text-lg font-semibold mb-4">Competências Adicionais</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["APIs RESTful", "Automação de Processos", "Integrações de Pagamento", "Webhooks", "Cloud Storage"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-primary/30 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
