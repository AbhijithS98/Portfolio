import { motion } from 'framer-motion';
import { aboutData } from '../../data/about';

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
            <span className="w-12 h-1 bg-indigo-500 rounded-full"></span>
            About Me
          </h2>
          
          <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full"></div>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed relative z-10">
              {aboutData.summary}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-700/50">
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">1+</h4>
                <p className="text-slate-400 text-sm uppercase tracking-wider">Years Exp.</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">MERN</h4>
                <p className="text-slate-400 text-sm uppercase tracking-wider">Stack Expert</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">AWS</h4>
                <p className="text-slate-400 text-sm uppercase tracking-wider">Cloud Native</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">10k+</h4>
                <p className="text-slate-400 text-sm uppercase tracking-wider">Data Ops/Day</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
