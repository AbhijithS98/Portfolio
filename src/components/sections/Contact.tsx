import { motion } from 'framer-motion';
import { personalData } from '../../data/personal';
import { socialsData } from '../../data/socials';
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block px-4 py-2 rounded-full glass border-indigo-500/30 text-indigo-300 text-sm font-semibold mb-6">
            What's Next?
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Get In Touch</h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <a href={`mailto:${personalData.email}`} className="glass-card p-8 rounded-2xl flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <FiMail size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Email Me</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{personalData.email}</p>
              </div>
            </a>
            
            <div className="glass-card p-8 rounded-2xl flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <FiMapPin size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{personalData.location}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-8">
            <a href={socialsData.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all">
              <FiGithub size={32} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={socialsData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all">
              <FiLinkedin size={32} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          
          <div className="mt-16">
            <a 
              href={`mailto:${personalData.email}`} 
              className="inline-block px-10 py-5 bg-transparent border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white rounded-lg font-medium transition-all text-lg cursor-pointer"
            >
              Say Hello
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
