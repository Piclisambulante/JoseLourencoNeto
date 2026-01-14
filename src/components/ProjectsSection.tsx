import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Layers, ShoppingBag } from "lucide-react";
import "./cssComponents/mobile.css";

const projects = [
  {
    icon: Layers,
    title: "Solvian",
    description: "Sistema web fullstack para gestão financeira pessoal. Cadastro de contas bancárias, registro de receitas e despesas, com geração de relatórios e extratos financeiros personalizados.",
    technologies: ["Java", "Spring Boot", "React", "Flutter", "MySQL"],
    link: "https://github.com/andre8756/cedup",
    img: "/images/solvian.png", // Ajustado: remova o ../public
  },
  {
    icon: ShoppingBag,
    title: "L'azur",
    description: "E-commerce completo para padaria com integração Mercado Pago (PIX), geração de QR Code, confirmação de pagamentos via webhooks, envio automático de pedidos por e-mail e gerenciamento de imagens em nuvem.",
    technologies: ["Python", "Flask", "Mercado Pago", "Cloudinary", "PostgreSQL","Flask-Login", "ReportLab", "qrcode","Flask-WTF", "Webhooks"],
    link: "https://github.com/Piclisambulante/dickproject",
    img: "/images/lazur.png",
  },
  {
    icon: ShoppingBag,
    title: "StockMate",
    description: "E-commerce completo para padaria com integração Mercado Pago (PIX), geração de QR Code, confirmação de pagamentos via webhooks, envio automático de pedidos por e-mail e gerenciamento de imagens em nuvem.",
    technologies: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "Flask-Login","Cloudinary", "ReportLab"],
    link: "https://github.com/Piclisambulante/stockcontroll",
    img: "/images/stockmate.png",
  },
  {
    icon: ShoppingBag,
    title: "RamosTattoo",
    description: "E-commerce completo para padaria com integração Mercado Pago (PIX), geração de QR Code, confirmação de pagamentos via webhooks, envio automático de pedidos por e-mail e gerenciamento de imagens em nuvem.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Render"],
    link: "https://github.com/Piclisambulante/RamosTattoo",
    img: "/images/ramostattoo.png",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">03. Projetos</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Trabalhos em <span className="text-gradient">Destaque</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="group"
              >
                <div className="glass rounded-3xl p-8 md:p-10 hover:shadow-glow transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl opacity-5 blur-3xl group-hover:opacity-10 transition-opacity" />
                  
                  <div className="relative z-10">
                    {/* GANCHO: Adicionamos a classe dinâmica baseada no título aqui */}
                    <div className={`flex items-start gap-6 container_projeto ${project.title.toLowerCase().replace(/\s+/g, '')}`}>

                      <div className="w-40 h-40 rounded-2xl bg-secondary flex-shrink-0 shadow-lg  overflow-hidden flex items-center image_project ">
                        <img 
                          src={project.img} 
                          alt={project.title} 
                          className="w-full h-full object-contain img_individual" 
                        />
                      </div>
                      <div className="flex items-start gap-6 flex-1">
                      <div className="flex-1 project_content project-content">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 mb-3 group/link"
                        >
                          <h3 className="text-2xl md:text-3xl font-bold group-hover/link:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <ExternalLink className="text-primary opacity-0 group-hover:opacity-100 transition-opacity w-5 h-5" />
                        </a>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 rounded-full bg-secondary text-sm font-mono text-secondary-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};