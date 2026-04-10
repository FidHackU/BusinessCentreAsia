import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-32 pb-24 px-6">
      {/* Background Orbs */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-accent/15 blur-[80px] rounded-full animate-float pointer-events-none" />
      <div className="absolute -bottom-12 -left-24 w-[400px] h-[400px] bg-indigo-500/10 blur-[80px] rounded-full animate-float pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '10s' }} />
      
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_50%_50%,black_30%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-subtle border border-accent/20 rounded-full text-sm font-medium text-accent mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            Now placing talent across 6 countries
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            <span className="block">Your next</span>
            <span className="block text-gradient">career in Asia</span>
            <span className="block">starts here.</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            From visa processing to workplace setup — we connect international IT professionals with top opportunities in Singapore and across Asia. You focus on your skills, we take care of the rest.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
            <a href="https://wa.me/6593752892" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-gradient-accent text-white font-semibold rounded-full hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(249,115,22,0.3)] transition-all duration-300 flex justify-center items-center gap-2">
              Get Started — It's Free &rarr;
            </a>
            <a href="#how" className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md border border-border text-white font-semibold rounded-full hover:bg-accent-subtle hover:border-accent/30 transition-all duration-300 flex justify-center items-center">
              See How It Works
            </a>
          </div>

          {/* Stats */}
          <div className="flex justify-center lg:justify-start gap-8 sm:gap-12">
            {[
              { number: '2,500+', label: 'Professionals Placed' },
              { number: '98%', label: 'Visa Approval Rate', isAccent: true },
              { number: '350+', label: 'Partner Companies' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1), duration: 0.6 }}
                className="flex flex-col"
              >
                <span className="text-3xl sm:text-4xl font-bold tracking-tight">
                  <span className={stat.isAccent ? 'text-accent' : 'text-white'}>{stat.number.replace('%', '')}</span>
                  {stat.number.includes('%') && <span className="text-accent">%</span>}
                </span>
                <span className="text-xs sm:text-sm text-text-muted mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Content / Visual abstract map */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="hidden lg:flex justify-center items-center relative"
        >
          <div className="w-[450px] h-[450px] relative">
            <div className="absolute inset-0 rounded-full border border-border/50 animate-spin-slow bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.1)_0%,transparent_60%),radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.1)_0%,transparent_60%)]" />
            <div className="absolute inset-[15%] rounded-full border border-border/30" />
            <div className="absolute inset-[35%] rounded-full border border-border/20" />
            
            {/* Pins */}
            {[
              { top: '20%', right: '5%', label: 'Singapore', delay: '0s' },
              { top: '10%', left: '10%', label: 'Japan', delay: '1s' },
              { bottom: '30%', right: '-5%', label: 'South Korea', delay: '2s' },
              { bottom: '15%', left: '5%', label: 'Vietnam', delay: '3s' },
            ].map((pin, i) => (
              <div 
                key={i}
                className="absolute px-4 py-2 bg-primary/80 backdrop-blur-md border border-border rounded-xl text-sm font-medium flex items-center gap-2 z-20 animate-float"
                style={{ top: pin.top, right: pin.right, left: pin.left, bottom: pin.bottom, animationDelay: pin.delay }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
                {pin.label}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
