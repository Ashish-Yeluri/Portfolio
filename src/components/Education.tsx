import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    {
      degree: 'MCA Graduate',
      institution: 'S.V.K.P & Dr. K.S Raju Arts and Science College',
      location: 'Andhra Pradesh',
      year: '2024',
      grade: '8.4'
    },
    {
      degree: 'B.Sc. in Computers',
      institution: 'Andhra University',
      location: 'Andhra Pradesh',
      year: '2022',
      grade: '7.0'
    },
    {
      degree: 'Intermediate',
      institution: 'S.V.K.P & P.V.Jr College',
      location: 'Andhra Pradesh',
      year: '2015',
      grade: '60%'
    },
    {
      degree: 'SSC',
      institution: 'Oxford English School',
      location: 'Andhra Pradesh',
      year: '2013',
      grade: '7.8'
    }
  ];

  return (
    <section className="py-20" id="education">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-primary/30 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-textPrimary">{edu.degree}</h3>
                <p className="text-secondary mt-1">{edu.institution}</p>
                <p className="text-textSecondary">
                  {edu.location} • {edu.year} • Grade: {edu.grade}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}