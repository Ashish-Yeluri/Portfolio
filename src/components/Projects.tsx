import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Website',
      company: 'Reyan Soft',
      period: 'July 2024 - December 2024',
      description: `Spearheaded the end-to-end development and optimization of an e-commerce platform utilizing front-end technologies 
        including HTML, CSS, JavaScript, and React, resulting in a 30% increase in user engagement and a 20% boost in sales 
        through enhanced UI/UX design and improved product discovery features.`
    },
    {
      title: 'Shopping Mall Management System',
      company: 'TNS-IF',
      period: 'September 2023 - February 2024',
      description: `Developed and deployed a comprehensive shopping mall management system using Java, Spring Boot, and MySQL, 
        streamlining tenant management, inventory tracking, and customer engagement, resulting in a 30% improvement in 
        operational efficiency.`
    }
  ];

  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-primary/30 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-textPrimary">{project.title}</h3>
                <p className="text-secondary mt-1">{project.company}</p>
                <p className="text-textSecondary text-sm mt-1">{project.period}</p>
                <p className="text-textSecondary mt-4 leading-relaxed">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}