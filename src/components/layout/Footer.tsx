import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { socialsData } from '../../data/socials';
import { personalData } from '../../data/personal';
import { Link } from 'react-scroll';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gradient mb-2">{personalData.name}</h2>
          <p className="text-slate-400 max-w-sm">{personalData.heroTagline}</p>
        </div>
        
        <div className="flex gap-6">
          <a href={socialsData.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-indigo-600 rounded-full text-slate-300 hover:text-white transition-all transform hover:-translate-y-1">
            <FiGithub size={20} />
          </a>
          <a href={socialsData.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-indigo-600 rounded-full text-slate-300 hover:text-white transition-all transform hover:-translate-y-1">
            <FiLinkedin size={20} />
          </a>
          <a href={`mailto:${personalData.email}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-indigo-600 rounded-full text-slate-300 hover:text-white transition-all transform hover:-translate-y-1">
            <FiMail size={20} />
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        <p>&copy; {currentYear} {personalData.name}. All rights reserved.</p>
        <Link to="home" smooth={true} duration={500} className="hover:text-indigo-400 cursor-pointer transition-colors">
          Back to top &uarr;
        </Link>
      </div>
    </footer>
  );
};
