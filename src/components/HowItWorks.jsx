import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const SectionHeader = ({ label, title, titleHighlight, subtitle }) => (
  <div className="text-center mb-16 px-4">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-semibold tracking-wide text-blue-400 mb-6 uppercase"
    >
      <span className="w-1 h-1 rounded-full bg-blue-400" />
      {label}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-6"
    >
      {title} <span className="text-slate-400 italic">{titleHighlight}</span>
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.2 }}
      className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-light"
    >
      {subtitle}
    </motion.p>
  </div>
);

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { num: '1', title: 'Apply Online', desc: 'Submit your profile, skills, and preferred countries. Our AI-powered matching system finds the best opportunities for you across Asia.' },
    { num: '2', title: 'We Match You', desc: 'Our talent specialists review your profile and connect you with verified employers looking for your exact skill set. Interview prep included.' },
    { num: '3', title: 'We Handle Logistics', desc: 'Visa applications, work permits, passport coordination, accommodation arrangements, and relocation support — all managed by our dedicated team.' },
    { num: '4', title: 'Start Working', desc: 'Arrive at your new workplace fully prepared. We provide ongoing support through our business centers across Asia for your entire tenure.' },
  ];

  return (
    <section id="how" className="pt-8 pb-16 lg:pt-16 lg:pb-24 relative bg-primary z-0">
      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        <SectionHeader 
          label="Process Overview" 
          title="From application to" 
          titleHighlight="your first day." 
          subtitle="From your first application to your first day at work — our team manages the entire process so you can focus on what matters: your career."
        />
        
        <div className="flex flex-col gap-4 mt-12 lg:mt-16">
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4, delay: i * 0.05 }}
                className={`glass-card border cursor-pointer transition-all duration-300 overflow-hidden ${
                  isActive ? "border-blue-500/30 bg-slate-800/80 shadow-[0_4px_20px_rgb(0,0,0,0.5)]" : "border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-800/40"
                }`}
                onClick={() => setActiveStep(i)}
              >
                <div className="p-6 md:p-8 flex items-center gap-6">
                  <div className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-xl font-mono transition-colors duration-300 ${
                    isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 border border-blue-400/20" : "bg-slate-800 border border-slate-700 text-slate-400"
                  }`}>
                    0{step.num}
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${isActive ? "text-white" : "text-slate-300"}`}>
                      {step.title}
                    </h3>
                    <div className="hidden md:flex text-slate-500 transition-transform duration-300 transform" style={{ rotate: isActive ? "0deg" : "180deg" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 15L12 9L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 ml-[4.5rem] md:ml-[5.5rem]">
                        <p className="text-sm md:text-base text-slate-400 leading-relaxed border-t border-slate-700/50 pt-4">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { SectionHeader, HowItWorks };
