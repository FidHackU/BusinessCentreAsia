import { motion } from 'framer-motion';
import { SectionHeader } from './HowItWorks';
import { FiFileText, FiBriefcase, FiHome, FiTarget, FiMap, FiShield } from 'react-icons/fi';

const Services = () => {
  const services = [
    { icon: <FiFileText size={20} className="text-white" />, title: 'Visa & Work Permit', desc: 'Complete visa processing, work permit applications, and legal documentation handled by our immigration specialists.' },
    { icon: <FiBriefcase size={20} className="text-white" />, title: 'Workplace Setup', desc: 'Access to premium co-working spaces, business centers, and partner offices in every country we operate.' },
    { icon: <FiHome size={20} className="text-white" />, title: 'Accommodation', desc: 'We arrange housing — from temporary stays to long-term apartments — near your workplace.' },
    { icon: <FiTarget size={20} className="text-white" />, title: 'Job Matching', desc: 'AI-driven talent matching with 350+ verified tech companies aligning your skills and career goals.' },
    { icon: <FiMap size={20} className="text-white" />, title: 'Relocation Support', desc: 'Flight booking, airport pickup, city orientation, SIM cards, bank account setup.' },
    { icon: <FiShield size={20} className="text-white" />, title: 'Ongoing Support', desc: 'Dedicated case manager for your placement. Legal, HR, and career support available 24/7.' },
  ];

  return (
    <section id="services" className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-primary relative border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <SectionHeader 
          label="Our Services" 
          title="From visa to" 
          titleHighlight="first day" 
          subtitle="Our business centers across Asia handle everything — from paperwork to your first morning coffee."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-8 group relative overflow-hidden flex flex-col"
            >
              <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-lg font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed flex-grow">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
