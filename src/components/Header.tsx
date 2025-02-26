import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="py-6 md:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-textPrimary mb-4">
            Ashish Yeluri
          </h1>
          <h2 className="text-xl md:text-2xl text-textSecondary mb-6">
            MERN Stack Developer
          </h2>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/ashish-yeluri-527a33343"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:ashishyeluri31@gmail.com"
              className="text-secondary hover:text-secondary/80 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}