import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, Github, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-48 pb-32 px-6 md:px-24 max-w-7xl mx-auto">
      <div className="bg-navy-800 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden border border-white/5">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-10 tracking-tight">
            Let’s Build the Future of <span className="text-gradient">Intelligent Products.</span>
          </h1>
          <p className="text-cool-gray text-xl md:text-2xl mb-14 max-w-3xl mx-auto leading-relaxed">
            I'm currently accepting new freelance projects and full-time opportunities. Let's build something amazing together.
          </p>
          <a 
            href="mailto:hello@aura.design" 
            className="inline-flex items-center gap-4 px-12 py-6 bg-electric-blue text-white rounded-[2rem] font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-electric-blue/20 group"
          >
            Send an Email <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex justify-center gap-8 mt-20">
            <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-cool-gray hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-cool-gray hover:text-white">
              <Instagram size={24} />
            </a>
            <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-cool-gray hover:text-white">
              <Github size={24} />
            </a>
          </div>
        </motion.div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-violet/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="p-10 glass-card rounded-[2rem]">
          <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center text-electric-blue mb-6">
            <Mail size={20} />
          </div>
          <h3 className="font-display font-bold text-white mb-3 text-xl">Email</h3>
          <p className="text-cool-gray text-lg">hello@aura.design</p>
        </div>
        <div className="p-10 glass-card rounded-[2rem]">
          <div className="w-10 h-10 rounded-xl bg-soft-violet/10 flex items-center justify-center text-soft-violet mb-6">
            <Linkedin size={20} />
          </div>
          <h3 className="font-display font-bold text-white mb-3 text-xl">LinkedIn</h3>
          <p className="text-cool-gray text-lg">/in/doyinayobami</p>
        </div>
        <div className="p-10 glass-card rounded-[2rem]">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
            <Github size={20} />
          </div>
          <h3 className="font-display font-bold text-white mb-3 text-xl">Github</h3>
          <p className="text-cool-gray text-lg">@doyin_ayobami</p>
        </div>
      </div>
    </div>
  );
}
