import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24 px-6">
      
      {/* Premium Destination Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img src="/images/city_singapore_1775828593209.png" className="w-full h-full object-cover object-center opacity-40 mix-blend-screen" alt="Asian Tech Metropolis" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-semibold tracking-wide text-blue-400 mb-8 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Now Placing Talent Across 12 Asian Countries
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-medium tracking-tight mb-6 leading-[1.05] text-white shadow-sm">
            Your Career in Asia, <br className="hidden md:block" />
            <span className="text-slate-400 italic">We Handle Everything.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-light">
            From visa processing to workplace setup — we connect international IT professionals with top opportunities in Singapore and across Asia. You focus on your skills, we take care of the rest.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full lg:w-auto">
            <a href="https://wa.me/6593752892" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-medium rounded hover:bg-blue-500 transition-all duration-300 flex justify-center items-center shadow-lg shadow-blue-500/20">
              Get Started — It's Free &rarr;
            </a>
            <a href="#how" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded hover:bg-white/5 transition-all duration-300 flex justify-center items-center">
              See How It Works
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap lg:grid lg:grid-cols-3 gap-x-8 gap-y-6 sm:gap-12 mt-4 text-center lg:text-left">
            {[
              { number: '2.5k+', label: 'Executives Placed' },
              { number: '98%', label: 'Work Pass Approval' },
              { number: '350+', label: 'Enterprise Partners' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + (i * 0.1), duration: 0.6 }}
                className="flex flex-col"
              >
                <div className="text-3xl font-bold tracking-tight text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
