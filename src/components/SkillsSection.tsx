import { motion } from "framer-motion";
import { Zap, Database, Code, Server, GitBranch, Container, CreditCard } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Linguagens",
      icon: Code,
      skills: [
        { name: "Python", level: 90, color: "bg-primary" },
        { name: "C#", level: 83, color: "bg-accent" },
        { name: "Java", level: 70, color: "bg-accent" },
        { name: "TypeScript", level: 30, color: "bg-primary" },
      ],
    },
    {
      title: "Frameworks",
      icon: Zap,
      skills: [
        { name: "Flask", level: 95, color: "bg-accent" },
        { name: "Spring Boot", level: 84, color: "bg-accent" },
        { name: "ASP.NET", level: 85, color: "bg-primary" },
        { name: "React", level: 40, color: "bg-primary" },
      ],  
    },
    {
      title: "Banco de Dados",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 85, color: "bg-primary" },
        { name: "MySQL", level: 83, color: "bg-accent" },
        { name: "SQLite", level:  90, color: "bg-primary" },
        { name: "SQLAlchemy", level: 90, color: "bg-accent" },
      ],
    },
  ];

  return (
    <section id="habilidades" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">02. Habilidades</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Habilidades em <span className="text-gradient">Destaque</span>
            </h2>
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <category.icon className="w-5 h-5" />
                <span>{category.title}</span>
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-mono text-sm text-foreground">{skill.name}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full ${skill.color} rounded-full`}
                        style={{ boxShadow: "0 0 10px hsl(var(--primary) / 0.5)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
