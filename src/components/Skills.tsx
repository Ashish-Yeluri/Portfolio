import { motion } from 'framer-motion';

export default function Skills() {
  const skills = {
    'Programming Languages': ['JavaScript', 'C', 'ReactJS'],
    'Database Management': ['MongoDB', 'MySQL'],
    'Web Technologies': ['HTML', 'CSS', 'Bootstrap'],
    'Tools': ['GIT', 'Windows', 'MS Office']
  };

  return (
    <section className="py-20" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-primary/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-textPrimary mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}