import { motion } from 'framer-motion';

const SectionHeader = ({ label, title, titleHighlight, subtitle }) => (
  <div className="text-center mb-16">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent mb-4"
    >
      <span className="w-8 h-0.5 bg-gradient-accent rounded-full" />
      {label}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
    >
      {title} <span className="text-gradient pb-1">{titleHighlight}</span>
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.2 }}
      className="text-lg text-text-secondary max-w-2xl mx-auto"
    >
      {subtitle}
    </motion.p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    { num: '1', title: 'Apply Online', desc: 'Submit your profile, skills, and preferred countries. Our AI-powered matching system finds the best opportunities.' },
    { num: '2', title: 'We Match You', desc: 'Our talent specialists review your profile and connect you with verified employers looking for your exact skill set.' },
    { num: '3', title: 'We Handle Logistics', desc: 'Visa applications, work permits, accommodation arrangements, and relocation support — all managed by us.' },
    { num: '4', title: 'Start Working', desc: 'Arrive at your new workplace fully prepared. We provide ongoing support through our business centers.' },
  ];

  return (
    <section id="how" className="pt-8 pb-16 lg:pt-12 lg:pb-24 relative bg-secondary border-t border-border">
      <div className="max-w-[900px] mx-auto px-6">
        <SectionHeader 
          label="How It Works" 
          title="From application to" 
          titleHighlight="your first day" 
          subtitle="Our team manages the entire process so you can focus on what matters: your career."
        />
        
        <div className="flex flex-col gap-8 mt-16">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col md:flex-row items-start md:items-center gap-8 group"
            >
              <div className="shrink-0 w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-2xl font-mono text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                0{step.num}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-base text-text-muted leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { SectionHeader, HowItWorks };
