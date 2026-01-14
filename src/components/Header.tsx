import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto header">
        <nav className="glass-strong rounded-full px-6 py-3 flex items-center justify-between">
          <motion.a
            href="#"
            className="text-xl font-bold text-gradient"
            whileHover={{ scale: 1.02 }}
          >
            <img src="../public/images/bontinho.jpeg" alt="foto de josé" className="hidden w-12 h-12 rounded-full object-cover" />

          </motion.a>

          <ul className=" md:flex items-center gap-8 w-full justify-center text-base md:text-xl content">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <a
                  href={item.href}
                  className="font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>

          <ThemeToggle />
        </nav>
      </div>
    </motion.header>
  );
};
