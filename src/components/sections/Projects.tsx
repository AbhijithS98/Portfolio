import { motion } from 'framer-motion';
import { projectsData, minorProjectsData } from '../../data/projects';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold flex items-center gap-4 mb-4">
                <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
                Featured Projects
              </h2>
              <p className="text-slate-400 max-w-lg">
                Showcasing my best work in building scalable and performant web applications.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            {projectsData.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative grid md:grid-cols-12 gap-8 items-center"
              >
                {/* Project Image */}
                <div className={`md:col-span-7 relative rounded-2xl overflow-hidden shadow-2xl ${idx % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6'}`}>
                  <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover md:aspect-[16/10] transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80";
                    }}
                  />
                </div>
                
                {/* Project Content */}
                <div className={`md:col-span-6 relative z-20 ${idx % 2 === 0 ? 'md:col-start-7 md:text-right' : 'md:col-start-1 md:text-left'} md:-mt-12`}>
                  <p className="text-indigo-400 font-mono text-sm mb-2">{project.type}</p>
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300 mb-6 font-medium">{project.subtitle} • {project.date}</p>
                  
                  <div className="glass-card p-6 md:p-8 rounded-2xl shadow-xl mb-6 text-slate-300 text-sm md:text-base">
                    <p className="mb-4">{project.description}</p>
                    <ul className={`space-y-2 text-sm ${idx % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="text-indigo-500 mt-1">▹</span>
                          <span className={`${idx % 2 === 0 ? 'md:text-right' : ''}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`flex flex-wrap gap-3 mb-8 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="font-mono text-xs text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`flex items-center gap-6 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                        <FiGithub size={24} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                        <FiExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-24">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
              Other Noteworthy Projects
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {minorProjectsData.map((project, idx) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl flex flex-col h-full group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <FiFolder size={32} className="text-indigo-500 group-hover:text-indigo-400 transition-colors" />
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2">
                      <FiGithub size={20} />
                    </a>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
                    <span className="text-xs font-bold px-2 py-1 bg-indigo-500/10 rounded text-indigo-400 mr-2">
                      {project.date}
                    </span>
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="text-xs font-mono text-slate-500 px-1 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
