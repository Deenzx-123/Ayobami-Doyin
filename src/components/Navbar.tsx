import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

useEffect(() => {
  setIsMenuOpen(false);
}, [location]);

useEffect(() => {
  document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  return () => { document.body.style.overflow = ''; };
}, [isMenuOpen]);

  const navItems = [
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

 return (
  <>
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
          className="md:hidden p-2 text-white"
        >
          <Menu size={24} />
        </button>
      </div>
    </nav>

    {/* Backdrop */}
    {isMenuOpen && (
      <div 
        className="fixed inset-0 z-[100] bg-black/50 md:hidden"
        onClick={() => setIsMenuOpen(false)}
      />
    )}

    {/* Sidebar */}
    <div className={`fixed top-0 right-0 h-full w-72 z-[200] bg-navy-900 border-l border-white/10 flex flex-col pt-24 px-8 gap-8 md:hidden transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      
      {/* Close button inside sidebar */}
      <button 
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-5 right-5 p-2 text-cool-gray hover:text-white"
      >
        <X size={24} />
      </button>

      <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-display font-bold text-white hover:text-electric-blue transition-colors">Home</Link>
      {navItems.map((item) => (
        <Link 
          key={item.name}
          to={item.path}
          onClick={() => setIsMenuOpen(false)}
          className="text-xl font-display font-bold text-white hover:text-electric-blue transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </div>
  </>
);
}
