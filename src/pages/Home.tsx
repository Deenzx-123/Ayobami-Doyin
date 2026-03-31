import { motion } from 'motion/react';
import { ArrowRight, Cpu, Layout, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

export default function Home() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="pb-48 px-6 md:px-24 max-w-7xl mx-auto relative overflow-hidden">
        <div className="max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-xs font-semibold mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-blue"></span>
            </span>
            Designing Your Thougts to Perfection
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-bold text-white tracking-tight leading-[1.05] mb-10"
          >
            Crafting <span className="text-gradient">Scalable Products</span> with a Human Touch.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-cool-gray leading-relaxed mb-14 max-w-3xl"
          >
            I design easy-to-use apps and websites by organizing complex ideas into a clear, friendly experience for the person using them.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            <Link to="/work" className="px-10 py-5 bg-electric-blue text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-electric-blue/20 flex items-center gap-3 group">
              View Selected Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-10 py-5 bg-navy-800 text-white border border-white/10 rounded-2xl font-bold hover:bg-navy-700 transition-all">
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Neural-inspired background pattern (minimal) */}
        <div className="absolute top-0 right-0 -z-10 opacity-20 pointer-events-none">
          <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="300" r="299.5" stroke="url(#paint0_radial)" strokeOpacity="0.5"/>
            <circle cx="300" cy="300" r="199.5" stroke="url(#paint1_radial)" strokeOpacity="0.3"/>
            <defs>
              <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 300) rotate(90) scale(300)">
                <stop stopColor="#3B82F6"/>
                <stop offset="1" stopColor="#3B82F6" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 300) rotate(90) scale(200)">
                <stop stopColor="#8B5CF6"/>
                <stop offset="1" stopColor="#8B5CF6" stopOpacity="0"/>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-32 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Selected Work</h2>
            <p className="text-cool-gray max-w-xl text-lg">Focused on product logic, structured thinking, and AI-integrated systems.</p>
          </div>
          <Link to="/work" className="text-electric-blue font-bold flex items-center gap-2 hover:gap-3 transition-all text-lg">
            All Case Studies <ArrowRight size={22} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.slice(0, 2).map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card rounded-[2rem] overflow-hidden glow-hover"
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
                
                <div className="p-10">
                  <span className="text-xs font-bold text-electric-blue uppercase tracking-widest mb-3 block">{project.category}</span>
                  <h3 className="text-3xl font-display font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-cool-gray leading-relaxed mb-8 text-lg">{project.positioning}</p>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-white/5">
                    <div className="flex gap-3">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-cool-gray">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-electric-blue group-hover:translate-x-2 transition-transform">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-10 glass-card rounded-[2rem]">
            <div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center text-electric-blue mb-8">
              <Lightbulb size={24} />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-6">Product Thinking</h3>
            <ul className="space-y-4 text-cool-gray">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-electric-blue" /> UX Research</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-electric-blue" /> Wireframing</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-electric-blue" /> Prototyping</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-electric-blue" /> Usability Testing</li>
            </ul>
          </div>

          <div className="p-10 glass-card rounded-[2rem]">
            <div className="w-12 h-12 rounded-xl bg-soft-violet/10 flex items-center justify-center text-soft-violet mb-8">
              <Layout size={24} />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-6">Design</h3>
            <ul className="space-y-4 text-cool-gray">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-soft-violet" /> Figma</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-soft-violet" /> Responsive Design</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-soft-violet" /> Design Systems</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-soft-violet" /> Interaction Design</li>
            </ul>
          </div>

          <div className="p-10 glass-card rounded-[2rem]">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-8">
              <Cpu size={24} />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-6">AI & Systems</h3>
            <ul className="space-y-4 text-cool-gray">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white" /> Human-AI Interaction</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white" /> Prompt-aware UX</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white" /> Data-informed decisions</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white" /> Scalable architecture</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
