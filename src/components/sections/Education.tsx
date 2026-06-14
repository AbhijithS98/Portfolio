import { motion } from 'framer-motion';
import { educationData } from '../../data/education';
import { FiBookOpen } from 'react-icons/fi';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center gap-4">
            <span className="w-12 h-1 bg-indigo-500 rounded-full"></span>
            Education
          </h2>
          
          <div className="grid gap-8">
            {educationData.map((edu, idx) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center justify-between group"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-slate-800 rounded-xl text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <FiBookOpen size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <div className="text-slate-400 font-medium mb-2">{edu.institution}, {edu.location}</div>
                    <div className="inline-block px-3 py-1 bg-slate-800 rounded-lg text-sm font-semibold text-slate-300">
                      {edu.score}
                    </div>
                  </div>
                </div>
                
                <div className="text-slate-500 font-mono text-sm self-start md:self-auto bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
                  {edu.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
