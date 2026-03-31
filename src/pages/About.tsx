import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-48 pb-32 px-6 md:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-navy-800 border border-white/10">
            <img 
              src="/Doyin.jpeg" 
              alt="Doyin Ayobami" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-electric-blue/20 rounded-full blur-3xl -z-10" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-10">About</h1>
          <p className="text-2xl text-white leading-relaxed mb-10 font-medium">
            I am a UI/UX designer focused on AI-integrated products, user psychology, and scalable design systems.
          </p>
          <p className="text-lg text-cool-gray leading-relaxed mb-12">
            My work blends human empathy with structured problem-solving to create intuitive and intelligent digital experiences. I believe that as we move into an AI-driven future, the role of design is to ensure technology remains human-centric, transparent, and accessible.
          </p>
          
          <div className="space-y-10">
            <div className="p-8 glass-card rounded-2xl">
              <h4 className="text-electric-blue font-bold uppercase tracking-widest text-xs mb-4">Focus Areas</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-soft-white">
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-electric-blue rounded-full" /> Product Thinking</li>
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-electric-blue rounded-full" /> UX Research</li>
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-electric-blue rounded-full" /> Design Systems</li>
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-electric-blue rounded-full" /> Interaction Design</li>
                <li className="flex items-center gap-3 md:col-span-2"><div className="w-1 h-1 bg-electric-blue rounded-full" /> AI-Aware Design Thinking</li>
              </ul>
            </div>

            <div className="p-8 glass-card rounded-2xl">
              <h4 className="text-soft-violet font-bold uppercase tracking-widest text-xs mb-4">Experience</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-bold">Senior Product Designer</h5>
                  <p className="text-xs text-cool-gray">Aura Design Studio • 2022 — Present</p>
                </div>
                <div>
                  <h5 className="text-white font-bold">UI/UX Designer</h5>
                  <p className="text-xs text-cool-gray">Studio X • 2020 — 2022</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
