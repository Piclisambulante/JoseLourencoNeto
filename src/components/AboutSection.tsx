import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const infoItems = [
    { icon: MapPin, label: "Localização", value: "Blumenau, SC" },
    { icon: Calendar, label: "Idade", value: "17 anos" },
    { icon: GraduationCap, label: "Formação", value: "Engenharia de Software" },
  ];

  return (
    <section id="sobre" className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">01. Sobre mim</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Quem é <span className="text-gradient">José</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-card glass overflow-hidden shadow-card">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="../public/images/bontinho.jpeg" alt="Foto de José" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-24 h-24 rounded-full bg-primary/20 animate-pulse-glow"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um desenvolvedor apaixonado por criar soluções backend robustas e eficientes. 
                Com experiência prática em desenvolvimento de APIs RESTful e automação de processos, 
                busco constantemente aprender novas tecnologias e aprimorar minhas habilidades.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha jornada inclui projetos práticos e trabalhos freelance, onde pude aplicar 
                conhecimentos em <span className="text-primary font-medium">Spring Boot</span>, 
                <span className="text-primary font-medium"> ASP.NET</span> e 
                <span className="text-primary font-medium"> Flask</span>, além de integrações 
                com sistemas de pagamento e automação de processos.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6">
                {infoItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="glass rounded-xl p-4 text-center"
                  >
                    <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                    <div className="text-sm font-semibold">{item.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
