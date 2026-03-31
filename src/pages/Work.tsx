import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';

export default function Work() {
  return (
    <div className="pt-48 pb-32 px-6 md:px-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24"
      >
        <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-10 tracking-tight">Selected Work</h1>
        <p className="text-xl md:text-2xl text-cool-gray max-w-3xl leading-relaxed">
          A collection of intelligent digital products, focusing on AI integration, scalable systems, and human-centric logic.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group glass-card rounded-[2.5rem] overflow-hidden glow-hover"
          >
            <Link to={`/work/${project.id}`}>
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-60" />
              </div>
              
              <div className="p-10 md:p-12">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold text-electric-blue uppercase tracking-widest mb-3 block">{project.category}</span>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <p className="text-cool-gray text-lg leading-relaxed mb-10">{project.positioning}</p>
                <div className="flex items-center justify-between pt-10 border-t border-white/5">
                  <div className="flex gap-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/5 text-cool-gray">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-electric-blue group-hover:bg-electric-blue group-hover:text-white transition-all">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
