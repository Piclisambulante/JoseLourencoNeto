import { motion } from "framer-motion";
import { link } from "fs";
import { ExternalLink, Github, Sparkles, CreditCard, ShoppingBag, BarChart3 } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      //Solvian

      title: "Solvian",
      link: "https://github.com/andre8756/cedup",
      img: "/images/solvian.png", 
      icon: ShoppingBag,
      description: "Sistema web fullstack para gestão financeira pessoal. Cadastro de contas bancárias, registro de receitas e despesas, com geração de relatórios e extratos financeiros personalizados.",
      tech:  ["Java", "Spring Boot", "React", "Flutter", "MySQL"],
      gradient: "from-accent to-primary",
      features: ["Gerenciamento de múltiplas contas", "Operações com saldo", "Geração de Extratos Personalizados" ],
    },
    {
      
      // L'AZUr

      title: "L'azur",
    link: "https://github.com/Piclisambulante/dickproject",
    img: "/images/lazur.png",
    icon: ShoppingBag,
    description:
      "E-commerce completo para padaria com integração ao Mercado Pago, pagamento via PIX por QR Code, confirmação automática via webhooks e envio de e-mails transacionais.",
    tech: [
      "Python",
      "Flask",
      "Mercado Pago",
      "PostgreSQL",
      "Flask-Login",
      "Flask-WTF",
      "Cloudinary",
      "Webhooks",
      "ReportLab",
      "QR Code"
    ],
    gradient: "from-accent to-primary",
    features: [
      "Pagamento via PIX",
      "Geração de QR Code dinâmico",
      "Envio automático de e-mails",
      "Confirmação e validação de pagamentos via webhook"
    ], 
    },
    {

      // StockMate

      title: "StockMate",
      link: "https://github.com/Piclisambulante/stockcontroll",
      img: "/images/stockmate.png",
      icon: ShoppingBag, 
      description:
        "Sistema de controle e gestão de estoque com autenticação de usuários, geração de relatórios em PDF, envio automático de informações por e-mail e gerenciamento de imagens em nuvem.",
      tech: [
        "Python",
        "Flask",
        "SQLAlchemy",
        "PostgreSQL",
        "Flask-Login",
        "Cloudinary",
        "ReportLab"
      ],
      gradient: "from-primary to-accent",
      features: [
        "Controle de estoque (entrada e saída)",
        "Autenticação de usuários",
        "Geração de relatórios em PDF",
        "Envio automático de e-mails",
        "Gerenciamento de imagens em nuvem"
      ],
    },
    {

      // Ramos Tatttoo

      title: "Ramos Tatttoo",
      link: "https://github.com/Piclisambulante/RamosTattoo",
      img: "/images/ramostattoo.png",
      icon: ShoppingBag,
      description: "Landing page desenvolvida para o estúdio Ramos Tattoo, com foco em presença online profissional, divulgação do trabalho artístico e contato direto com clientes.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      gradient: "from-accent to-primary",
      features: [""],
    },

  ];

  return (
    <section id="projetos" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">03. Projetos</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Trabalhos em <span className="text-gradient">Destaque</span>
            </h2>

          <p className="text-muted-foreground text-lg">Coisas legais que eu construí</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto teste">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-card border border-border rounded-3xl overflow-hidden group1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${project.gradient} p-6 relative overflow-hidden`}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-8 -top-8 w-32 h-32 bg-background/10 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -left-4 -bottom-4 w-24 h-24 bg-background/10 rounded-full"
                  />
                  
                  <div className="relative flex items-center gap-4">
                    <div className="w-16 h-16 bg-background/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-secondary flex-shrink-0 shadow-lg  overflow-hidden flex items-center image_project ">
                        <img 
                          src={project.img} 
                          alt={project.title} 
                          className="w-full h-full object-contain img_individual" 
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-foreground flex items-center gap-2">
                        {project.title}
                        
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
                      >
                        <Sparkles className="w-3 h-3" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs bg-muted px-3 py-1.5 rounded-lg text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary font-medium py-3 rounded-xl transition-colors"
                    >
                      <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 w-full h-10 justify-center"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>

                    </motion.button>
                    
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
