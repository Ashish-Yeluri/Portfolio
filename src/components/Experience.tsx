import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: 'Python Full-stack Developer Intern',
      company: 'Pantech eLearning',
      period: 'February 2023 - June 2023',
      description: `Developed and deployed dynamic full-stack web applications using Python (Django/Flask) and JavaScript 
        (React/Angular) for responsive, user-centric front-end interfaces. Collaborated in a team environment to integrate 
        RESTful APIs, optimize database queries, and implement robust user authentication and authorization mechanisms.`
    },
    {
      title: 'Salesforce Developer Intern',
      company: 'Salesforce',
      period: 'December 2023 - April 2024',
      description: `Gained hands-on experience in customizing and developing Salesforce applications using tools such as Apex,
        Visualforce, and Lightning. Participated in testing, debugging, and documentation of Salesforce code.`
    }
  ];

  return (
    <section className="py-20" id="experience">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-primary/30 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-textPrimary">{exp.title}</h3>
                <p className="text-secondary mt-1">{exp.company}</p>
                <p className="text-textSecondary text-sm mt-1">{exp.period}</p>
                <p className="text-textSecondary mt-4 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}