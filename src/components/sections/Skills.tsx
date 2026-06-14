import { motion } from 'framer-motion';
import { skillsData } from '../../data/skills';

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center gap-4">
            <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
            Technical Expertise
          </h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillsData.map((category, idx) => (
              <motion.div key={idx} variants={itemVariants} className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  {category.category}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 text-sm font-medium border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
