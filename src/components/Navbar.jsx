import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#how' },
    { name: 'Services', href: '#services' },
    { name: 'Countries', href: '#countries' },
    { name: 'Roles', href: '#roles' },
    { name: 'Success Stories', href: '#testimonials' },
  ];

  // Lock body scroll when mobile menu is open, and auto-close on desktop resize
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-primary/95 backdrop-blur-xl border-b border-border/50 py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-1.5 text-xl font-extrabold tracking-tight z-[1001] relative">
            <span>Business</span>
            <span className="text-accent">Centres</span>
            <span className="text-accent text-2xl leading-none">.</span>
            <span>Asia</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
            <a
              href="https://wa.me/6593752892"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-accent text-white font-semibold text-sm rounded-full transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
            >
              Apply Now &rarr;
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-[1001] p-2 flex flex-col gap-[5px]"
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-[2px] rounded-full bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-[2px] rounded-full bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] rounded-full bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay (Portaled logically outside nav stacking context) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[999] bg-primary flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.1 }}
                className="text-2xl font-semibold text-white/90 hover:text-accent transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/6593752892"
              target="_blank"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 + 0.1 }}
              className="mt-4 px-8 py-4 bg-gradient-accent text-white font-bold text-lg rounded-full shadow-[0_0_30px_rgba(249,115,22,0.3)]"
            >
              Apply Now &rarr;
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
