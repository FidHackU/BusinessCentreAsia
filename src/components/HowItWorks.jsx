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
    <section id="how" className="py-16 lg:py-24 relative bg-secondary border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader 
          label="How It Works" 
          title="From application to" 
          titleHighlight="your first day" 
          subtitle="Our team manages the entire process so you can focus on what matters: your career."
        />
        
        <div className="relative mt-20">
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-accent to-border z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-primary border-2 border-accent rounded-full flex items-center justify-center text-xl font-black text-accent mb-6 relative">
                  {step.num}
                  <div className="absolute -inset-1.5 border border-accent/20 rounded-full" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { SectionHeader, HowItWorks };
