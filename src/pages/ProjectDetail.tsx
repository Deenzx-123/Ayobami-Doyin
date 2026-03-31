import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, X, Maximize2 } from 'lucide-react';
import Markdown from 'react-markdown';
import { PROJECTS } from '../constants';

export default function ProjectDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const project = PROJECTS.find(p => p.id === id);

  // Prevent scrolling when overlay is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  if (!project) {
    return (
      <div className="pt-48 pb-32 px-6 text-center">
        <h1 className="text-4xl font-display font-bold mb-8">Project not found</h1>
        <Link to="/work" className="text-electric-blue font-bold">Back to Work</Link>
      </div>
    );
  }

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="pt-24 pb-20 px-6 md:px-24 max-w-7xl mx-auto">
        <Link to="/work" className="inline-flex items-center gap-2 text-cool-gray hover:text-white transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Work
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-xs font-bold text-electric-blue uppercase tracking-widest mb-4 block">{project.category}</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">{project.title}</h1>
          <p className="text-2xl md:text-3xl text-cool-gray leading-relaxed max-w-4xl font-medium">
            {project.positioning}
          </p>
        </motion.div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-24 max-w-7xl mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-[3rem] overflow-hidden border border-white/10 relative group cursor-zoom-in"
          onClick={() => setSelectedImage(project.image)}
        >
          <img src={project.image} alt={project.title} className="h-auto object-contain object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
              <Maximize2 className="text-white" size={24} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Case Study Content */}
      <section className="px-6 md:px-24 max-w-7xl mx-auto mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Sidebar Meta */}
          <div className="md:col-span-4 space-y-12">
            <div>
              <h4 className="text-xs font-bold text-cool-gray uppercase tracking-widest mb-4">Role</h4>
              <p className="text-white font-medium">{project.role}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-cool-gray uppercase tracking-widest mb-4">Year</h4>
              <p className="text-white font-medium">{project.year}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-cool-gray uppercase tracking-widest mb-4">Services</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-cool-gray">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 space-y-32">
            {/* Overview & Problem */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-white">Overview</h2>
                <div className="text-lg text-cool-gray leading-relaxed prose prose-invert max-w-none">
                  <Markdown>{project.description}</Markdown>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-white">The Problem</h2>
                <div className="text-lg text-cool-gray leading-relaxed prose prose-invert max-w-none">
                  <Markdown>{project.problem}</Markdown>
                </div>
              </div>
            </div>

            {/* Strategy */}
            <div className="p-12 glass-card rounded-[2.5rem] space-y-8">
              <h2 className="text-3xl font-display font-bold text-white">Strategy</h2>
              <p className="text-xl text-soft-white leading-relaxed italic">"{project.strategy}"</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/5">
                {project.process.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 size={20} className="text-electric-blue mt-1 flex-shrink-0" />
                    <p className="text-sm text-cool-gray">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="space-y-16">
              <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-white">The Solution</h2>
                <div className="text-lg text-cool-gray leading-relaxed prose prose-invert max-w-none">
                  <Markdown>{project.solution}</Markdown>
                </div>
              </div>
            </div>

            {/* Mockup Flows */}
            {project.flows && project.flows.length > 0 && (
              <div className="space-y-24">
                <div className="space-y-6">
                  <h2 className="text-3xl font-display font-bold text-white">User Flows & Mockups</h2>
                  <p className="text-lg text-cool-gray max-w-2xl">
                    A detailed look at the core user journeys and the high-fidelity interfaces designed to support them.
                  </p>
                </div>
                
                <div className="space-y-32">
                  {project.flows.map((flow, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="space-y-10"
                    >
                      <div className="max-w-2xl">
                        <h3 className="text-2xl font-display font-bold text-white mb-4">{flow.title}</h3>
                        <div className="text-cool-gray leading-relaxed prose prose-invert max-w-none">
                          <Markdown>{flow.description}</Markdown>
                        </div>
                      </div>
                      <div 
                        className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-navy-800 shadow-2xl relative group cursor-zoom-in"
                        onClick={() => setSelectedImage(flow.image)}
                      >
                        <img 
                          src={flow.image} 
                          alt={flow.title} 
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                          referrerPolicy="no-referrer" 
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
                            <Maximize2 className="text-white" size={24} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Design System */}
            {project.designSystem && project.designSystem.length > 0 && (
              <div className="space-y-12">
                <h2 className="text-3xl font-display font-bold text-white">Design System Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.designSystem.map((item, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-electric-blue/30 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-electric-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <CheckCircle2 size={20} className="text-electric-blue" />
                      </div>
                      <div className="text-white font-medium prose prose-invert prose-sm">
                        <Markdown>{item}</Markdown>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Impact & Reflection */}
            <div className="p-12 bg-gradient-to-br from-electric-blue/10 to-soft-violet/10 border border-electric-blue/20 rounded-[2.5rem] space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-display font-bold text-white">Impact & Reflection</h2>
                <p className="text-xl text-white font-bold">{project.impact}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/10">
                {project.keyLearnings && project.keyLearnings.length > 0 && (
                  <div className="space-y-6">
                    <h4 className="text-xs font-bold text-cool-gray uppercase tracking-widest">Key Learnings</h4>
                    <div className="space-y-4 prose prose-invert prose-sm">
                      <ul className="list-none p-0 m-0 space-y-4">
                        {project.keyLearnings.map((learning, i) => (
                          <li key={i} className="flex items-start gap-3 text-cool-gray leading-relaxed p-0 m-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue mt-2 flex-shrink-0" />
                            <Markdown>{learning}</Markdown>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {project.futureImprovements && project.futureImprovements.length > 0 && (
                  <div className="space-y-6">
                    <h4 className="text-xs font-bold text-cool-gray uppercase tracking-widest">Future Improvements</h4>
                    <div className="space-y-4 prose prose-invert prose-sm">
                      <ul className="list-none p-0 m-0 space-y-4">
                        {project.futureImprovements.map((improvement, i) => (
                          <li key={i} className="flex items-start gap-3 text-cool-gray leading-relaxed p-0 m-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-soft-violet mt-2 flex-shrink-0" />
                            <Markdown>{improvement}</Markdown>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Demo */}
{project.videoUrl && (
  <div className="space-y-10 px-6 md:px-24 max-w-7xl mx-auto mb-32">
    <div className="space-y-4">
      <h2 className="text-3xl font-display font-bold text-white">Prototype Demo</h2>
      <p className="text-lg text-cool-gray">See the product in motion.</p>
    </div>
    <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${project.videoUrl}`}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
)}

      {/* Next Project CTA */}
      <section className="py-32 bg-navy-800 text-center">
        <h4 className="text-xs font-bold text-cool-gray uppercase tracking-widest mb-8">Next Project</h4>
        <Link to="/work" className="text-4xl md:text-6xl font-display font-bold text-white hover:text-electric-blue transition-colors flex items-center justify-center gap-6 group">
          Explore More Work <ArrowRight size={48} className="group-hover:translate-x-4 transition-transform" />
        </Link>
      </section>

      {/* Image Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-navy-950/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
