import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-24 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5">
      <div className="flex flex-col gap-2">
        <Link to="/" className="text-xl font-display font-bold tracking-tight text-white">Doyin Ayobami</Link>
        <p className="text-sm text-cool-gray">Product Designer focused on bringig dreams to reality.</p>
      </div>
      <p className="text-xs text-cool-gray/50">© 2024 Doyin Ayobami. Designed for the future.</p>
      <div className="flex gap-10 text-sm font-medium text-cool-gray">
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">Dribbble</a>
      </div>
    </footer>
  );
}
