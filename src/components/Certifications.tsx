import { motion } from 'framer-motion';

export default function Certifications() {
  const certifications = [
    {
      title: 'Full-stack Development',
      issuer: 'Reyan Soft & TNS IF',
      id: 'TC02017403'
    },
    {
      title: 'Salesforce Developer',
      issuer: 'Smart Internz',
      id: 'SISFVIPAD2023-69849'
    },
    {
      title: 'HTML, CSS and JavaScript',
      issuer: 'Pantech e Learning',
      id: 'PEL_PYMCINT_194'
    },
    {
      title: 'Data Structures and Algorithms using Java',
      issuer: 'Infosys Springboard',
      id: 'https://verify.onwingspan.com'
    }
  ];

  return (
    <section className="py-20" id="certifications">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-primary/30 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-textPrimary">{cert.title}</h3>
                <p className="text-secondary mt-1">{cert.issuer}</p>
                <p className="text-textSecondary text-sm mt-1">ID: {cert.id}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}