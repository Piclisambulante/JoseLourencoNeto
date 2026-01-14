import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Send } from "lucide-react";

const handleWhatsAppChat = (projectName: string) => {
  const phone = "5547984817923"; // COLOQUE SEU NÚMERO AQUI
  const message = `Vi seu portifólio e gostaria de entrar em contato.`;
  
  // Codifica a mensagem para o formato de URL
  const encodedMessage = encodeURIComponent(message);
  
  // Abre o link em uma nova aba
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "joselourenconeto879@gmail.com",
    href: "mailto:joselourenconeto879@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(47) 98481-7923",
    href: "tel:+5547984817923",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Blumenau, SC",
    href: null,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Piclisambulante",
    href: "https://github.com/Piclisambulante",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-32 relative bg-gradient-hero">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">04. Contato</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vamos <span className="text-gradient">Conversar</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Sinta-se à vontade para entrar em contato!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                        <div className="font-semibold group-hover:text-primary transition-colors">{item.value}</div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                        <div className="font-semibold">{item.value}</div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <motion.a
              href="mailto:joselourenconeto879@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-glow hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >

              <button 
                onClick={() => handleWhatsAppChat("seu projeto")}
                className="p-2 rounded-full text-green-500 transition-colors"
                title="Conversar sobre este projeto"
              >
                enviar mensagem
              </button>

            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
