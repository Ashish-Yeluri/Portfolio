import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">About Me</h2>
          <p className="text-textSecondary leading-relaxed max-w-3xl">
            Motivated MERN Stack Developer with a robust technical foundation and exceptional soft skills,
            seeking to apply expertise in fullstack development and problem-solving to drive innovation
            and contribute to organizational success. Proficient in JavaScript, React, C, and experienced
            with key web technologies including HTML, CSS, and Bootstrap.
          </p>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-textPrimary mb-4">Contact</h3>
            <p className="text-textSecondary">
              📍 Andhra Pradesh<br />
              📱 +91 7659867153<br />
              ✉️ ashishyeluri31@gmail.com
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-textPrimary mb-4">Languages</h3>
            <div className="flex gap-2 flex-wrap">
              <span className="skill-tag">English</span>
              <span className="skill-tag">Telugu</span>
              <span className="skill-tag">Hindi</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}