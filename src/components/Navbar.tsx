import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-navy-900/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/"
          className="text-xl font-display font-bold tracking-tight text-white flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue to-soft-violet flex items-center justify-center text-white text-sm">D</div>
          <span>Doyin Ayobami</span>
        </Link>
        
        <div className="hidden md:flex gap-10 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                isActive ? "text-electric-blue" : "text-cool-gray hover:text-white transition-colors"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-cool-gray"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={false}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        className={`fixed inset-0 bg-navy-900 z-40 flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300 ${isMenuOpen ? 'visible' : 'invisible'}`}
      >
        <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-3xl font-display font-bold text-white">Home</Link>
        {navItems.map((item) => (
          <Link 
            key={item.name}
            to={item.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-display font-bold text-white"
          >
            {item.name}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
}
