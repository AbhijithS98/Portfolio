import { motion } from 'framer-motion';
import { personalData } from '../../data/personal';
import { socialsData } from '../../data/socials';
import { FiGithub, FiLinkedin, FiDownload, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 md:px-12 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block px-4 py-2 rounded-full glass border-indigo-500/30 text-indigo-300 text-sm font-semibold max-w-fit">
            Hello, I'm
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            {personalData.name}
            <span className="block text-gradient mt-2">{personalData.title}</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
            {personalData.heroTagline}
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-indigo-500/30 cursor-pointer transform hover:-translate-y-1"
            >
              View Projects
            </Link>

            <a
              href="/ABHIJITH_S.pdf"
              target="_blank"
              download
              className="px-8 py-4 glass hover:bg-slate-800 text-white rounded-lg font-medium transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-1"
            >
              <FiDownload /> Resume
            </a>
          </div>

          <div className="flex gap-6 mt-6 items-center">
            <div className="h-px bg-slate-700 flex-1"></div>
            <a href={socialsData.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <FiGithub size={24} />
            </a>
            <a href={socialsData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <FiLinkedin size={24} />
            </a>
            <a href={`mailto:${personalData.email}`} className="text-slate-400 hover:text-white transition-colors">
              <FiMail size={24} />
            </a>
            <div className="h-px bg-slate-700 flex-1"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-72 h-72 md:w-96 md:h-96"
        >
          <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 border-dashed animate-spin-slow"></div>
          <div className="absolute inset-4 rounded-full bg-slate-800 overflow-hidden shadow-2xl shadow-indigo-500/20 z-10 flex items-center justify-center border border-slate-700">
            {/* Fallback avatar if image missing */}
            <img
              src="/profesional_portrait.png"
              alt={personalData.name}
              // Added object-[65%_center] to shift the image and center the face. 
              // Feel free to tweak the '65%' value to perfectly align your specific photo!
              className="w-full h-full object-cover object-[30%_center]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://ui-avatars.com/api/?name=Abhijith+S&background=random&size=512";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
