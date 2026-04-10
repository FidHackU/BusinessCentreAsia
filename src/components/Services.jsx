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
    <section id="services" className="pt-8 pb-16 lg:pt-16 lg:pb-32 bg-primary relative border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full overflow-hidden md:overflow-visible">
        
        <SectionHeader 
          label="Our Services" 
          title="From visa to" 
          titleHighlight="first day" 
          subtitle="Our business centers across Asia handle everything — from paperwork to your first morning coffee."
        />

        {/* Mobile Swipe Container / Desktop Grid */}
        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-4 md:gap-6 mt-12 lg:mt-16 pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:pb-0 w-[calc(100%+3rem)] md:w-full">
          
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-6 md:p-8 group relative overflow-hidden flex flex-col w-[85vw] max-w-[320px] md:w-auto md:max-w-none snap-center shrink-0 bg-slate-900/50 border-slate-700/50"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <div className="text-blue-400 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow font-light">
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
