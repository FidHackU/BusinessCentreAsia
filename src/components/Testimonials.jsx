import { motion } from 'framer-motion';
import { SectionHeader } from './HowItWorks';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const reviews = [
    { name: 'Arjun R.', role: 'Full Stack Developer', path: 'India → Singapore', quote: "I applied on a Monday and had three interview calls by Thursday. Within 6 weeks, I was working in Singapore with my visa fully sorted. BusinessCentres.Asia literally handled everything.", initials: 'AR' },
    { name: 'Maria L.', role: 'Cloud Engineer', path: 'Philippines → Japan', quote: "The relocation support was incredible. From finding my apartment to setting up a bank account — I didn't have to worry about anything except doing my job well.", initials: 'ML' },
    { name: 'Tuan N.', role: 'Backend Developer', path: 'Vietnam → South Korea', quote: "As a developer from Vietnam, getting a work permit in South Korea seemed impossible. BusinessCentres.Asia made it happen in under 2 months. Game-changer.", initials: 'TN' },
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-primary relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader 
          label="Success Stories" 
          title="Trusted by" 
          titleHighlight="thousands" 
          subtitle="Don't just take our word for it — hear from IT professionals who've made the move."
        />

        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 mt-12 mb-16 pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative p-8 md:p-10 flex flex-col h-full bg-[#080b1c] rounded-3xl border border-white/[0.04] hover:bg-[#0a0e24] transition-all duration-300 snap-center min-w-[85vw] sm:min-w-[400px] md:min-w-0 overflow-hidden"
            >
              {/* Premium top accent border that expands on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Massive decorative quote mark */}
              <div className="absolute top-4 right-6 text-[8rem] font-serif leading-none text-white/[0.02] select-none pointer-events-none group-hover:text-accent/[0.05] transition-colors duration-500">
                &rdquo;
              </div>

              <div className="flex gap-1 text-accent mb-6 relative z-10">
                {[...Array(5)].map((_, j) => <FiStar key={j} className="fill-current w-4 h-4" />)}
              </div>
              
              <p className="text-text-secondary text-base leading-relaxed mb-10 flex-grow relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                "{review.quote}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 mt-auto border-t border-white/[0.05] relative z-10 group-hover:border-white/[0.1] transition-colors duration-300">
                <div className="w-11 h-11 rounded-full bg-[#12183a] border border-white/5 flex items-center justify-center text-xs font-bold text-white shadow-sm tracking-wider">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-0.5">{review.name}</h4>
                  <p className="text-xs text-text-muted">{review.role} <span className="text-accent/50 mx-1">•</span> {review.path}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Inside Testimonials context */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-10 md:p-16 rounded-[2rem] bg-[#0c1029] overflow-hidden text-center max-w-4xl mx-auto shadow-2xl"
        >
          {/* Top glowing line */}
          <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-accent shadow-[0_0_15px_rgba(249,115,22,0.7)]" />
          
          {/* Breathing Animated Background Glows (Hardware Accelerated CSS) */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent blur-[80px] rounded-full pointer-events-none z-0 animate-breathe transform-gpu" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-500 blur-[80px] rounded-full pointer-events-none z-0 animate-breathe transform-gpu" style={{ animationDelay: '1.5s', animationDuration: '7s' }} />
          
          <div className="relative z-10 mt-4">
            <h2 className="text-3xl md:text-[2.75rem] font-black mb-6 tracking-tight leading-tight">
              Your next career move <br className="hidden md:block"/>
              <span className="text-gradient">starts here</span>
            </h2>
            <p className="text-text-secondary text-base mb-10 max-w-xl mx-auto leading-relaxed">
              Submit your profile today — no fees, no commitment. Our team will reach out within 48 hours with matched opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/6593752892" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-gradient-accent text-white font-bold rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)] transition-all">
                Submit Your Profile &rarr;
              </a>
              <a href="https://wa.me/6593752892" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-[#060918] text-white font-bold rounded-full hover:bg-black/50 transition-all border border-transparent">
                Post a Job (Employers)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
