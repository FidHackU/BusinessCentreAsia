import { motion } from 'framer-motion';
import { SectionHeader } from './HowItWorks';
import { FiFileText, FiBriefcase, FiHome, FiTarget, FiMap, FiShield } from 'react-icons/fi';

const Services = () => {
  const services = [
    { icon: <FiFileText size={24} className="text-accent" />, title: 'Visa & Work Permit', desc: 'Complete visa processing, work permit applications, and legal documentation handled by our immigration specialists.' },
    { icon: <FiBriefcase size={24} className="text-accent" />, title: 'Workplace Setup', desc: 'Access to premium co-working spaces, business centers, and partner offices in every country we operate.' },
    { icon: <FiHome size={24} className="text-accent" />, title: 'Accommodation', desc: 'We arrange housing — from temporary stays to long-term apartments — near your workplace.' },
    { icon: <FiTarget size={24} className="text-accent" />, title: 'Job Matching', desc: 'AI-driven talent matching with 350+ verified tech companies aligning your skills and career goals.' },
    { icon: <FiMap size={24} className="text-accent" />, title: 'Relocation Support', desc: 'Flight booking, airport pickup, city orientation, SIM cards, bank account setup.' },
    { icon: <FiShield size={24} className="text-accent" />, title: 'Ongoing Support', desc: 'Dedicated case manager for your placement. Legal, HR, and career support available 24/7.' },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-primary relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader 
          label="Our Services" 
          title="From visa to" 
          titleHighlight="first day" 
          subtitle="Our business centers across Asia handle everything — from paperwork to your first morning coffee."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-6 mt-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
              <div className="w-14 h-14 rounded-xl bg-accent-subtle flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <motion.div 
                  className="relative z-10"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  {service.icon}
                </motion.div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed flex-grow">
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
