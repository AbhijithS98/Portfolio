import { motion } from 'framer-motion';
import { certificationsData } from '../../data/certifications';
import { FiAward } from 'react-icons/fi';

export const Certifications = () => {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center gap-4">
            <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
            Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certificationsData.map((cert, idx) => (
              <motion.div 
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all"
              >
                <div className="absolute -right-8 -top-8 text-slate-800/50 group-hover:text-indigo-500/10 transition-colors duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
                  <FiAward size={120} />
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center mb-6">
                    <FiAward size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{cert.name}</h3>
                  <p className="text-slate-400 mb-4">{cert.organization}</p>
                  
                  <div className="text-sm font-mono text-slate-500 bg-slate-900/50 inline-block px-3 py-1 rounded-md">
                    {cert.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
