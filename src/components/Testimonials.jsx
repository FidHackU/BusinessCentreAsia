import { motion } from 'framer-motion';
import { SectionHeader } from './HowItWorks';

const Testimonials = () => {
  const reviews = [
    { name: 'Arjun R.', role: 'Senior Developer', path: 'India → SG', quote: "The process was seamless. I applied on Monday and was working in Singapore within 6 weeks. Complete operational clarity.", image: '/images/avatar_arjun_1775828161560.png' },
    { name: 'Maria L.', role: 'Cloud Architect', path: 'PH → JP', quote: "High-tier relocation protocol. Everything from apartment sourcing to banking was handled without my intervention.", image: '/images/avatar_maria_1775828178652.png' },
    { name: 'Tuan N.', role: 'Backend Engineer', path: 'VN → KR', quote: "Navigating South Korean work permits was fully abstracted by their team. A remarkably efficient, professional service.", image: '/images/avatar_tuan_1775828196266.png' },
  ];

  return (
    <section id="testimonials" className="pt-8 pb-16 lg:pt-12 lg:pb-32 bg-primary relative overflow-hidden border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <SectionHeader 
          label="Success Stories" 
          title="Trusted by thousands of" 
          titleHighlight="IT professionals." 
          subtitle="Don't just take our word for it — hear from IT professionals who've made the move."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-24">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ease: [0.16, 1, 0.3, 1], delay: i * 0.1, duration: 0.6 }}
              className="glass-card p-8 flex flex-col h-full bg-slate-900/50 group border-slate-700/50 shadow-lg"
            >
              <div className="absolute top-4 right-6 text-[6rem] font-serif leading-none text-blue-500/10 opacity-50 select-none pointer-events-none group-hover:text-blue-500/20 transition-all duration-700">
                &rdquo;
              </div>

              <p className="text-slate-300 text-base leading-relaxed mb-10 flex-grow relative z-10 font-normal group-hover:text-white transition-colors duration-300">
                "{review.quote}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 mt-auto border-t border-slate-700 relative z-10">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full border border-slate-600 shadow-md object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div>
                  <h4 className="font-bold text-sm text-white mb-0.5">{review.name}</h4>
                  <p className="text-xs font-mono text-slate-400">{review.role} <span className="mx-1 opacity-20">/</span> <span className="text-blue-400">{review.path}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
          className="relative max-w-4xl mx-auto p-12 md:p-16 rounded-2xl border border-slate-700/50 bg-slate-800/50 overflow-hidden text-center shadow-2xl"
        >
          {/* Stark minimalist visual grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
          
          {/* Subtle blue ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4 tracking-tight text-white">
              Your next career move starts here. <br className="hidden md:block"/> We'll take care of everything else.
            </h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg font-light">
              Submit your profile today — no fees, no commitment. Our team will reach out within 48 hours with matched opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/6593752892" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors rounded shadow-lg shadow-blue-500/20">
                Submit Your Profile &rarr;
              </a>
              <a href="https://hilarious-faun-fc89ae.netlify.app/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-900 border border-slate-700 text-white font-medium hover:bg-slate-800 transition-colors rounded">
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
