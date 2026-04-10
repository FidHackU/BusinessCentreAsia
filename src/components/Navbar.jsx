import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#how' },
    { name: 'Services', href: '#services' },
    { name: 'Countries', href: '#countries' },
    { name: 'Roles', href: '#roles' },
    { name: 'Success Stories', href: '#testimonials' },
  ];

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
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled && !isOpen ? 'bg-primary/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-1.5 text-xl font-extrabold tracking-tighter text-white z-[1001] relative">
            BusinessCentres<span className="text-white/40">.</span>Asia
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/6593752892"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-white text-black font-semibold text-sm rounded transition-colors hover:bg-gray-200"
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
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
            className="fixed inset-0 z-[999] bg-primary/95 flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl font-semibold text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/6593752892"
              target="_blank"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 + 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 px-8 py-3 bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors"
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
