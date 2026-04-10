import { motion } from 'framer-motion';
import { SectionHeader } from './HowItWorks';

const Countries = () => {
  const countries = [
    { flag: '🇸🇬', name: 'Singapore', status: "Southeast Asia's tech hub" },
    { flag: '🇯🇵', name: 'Japan', status: "Innovation & enterprise tech" },
    { flag: '🇰🇷', name: 'South Korea', status: "Semiconductors & AI frontier" },
    { flag: '🇻🇳', name: 'Vietnam', status: "Fastest-growing dev ecosystem" },
    { flag: '🇹🇭', name: 'Thailand', status: "Digital economy rising" },
    { flag: '🇲🇾', name: 'Malaysia', status: "Regional shared services center" },
  ];

  return (
    <section id="countries" className="py-16 lg:py-24 bg-secondary border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader 
          label="Our Reach" 
          title="We operate in" 
          titleHighlight="6 tech hubs" 
          subtitle="We connect talent with employers in the fastest-growing tech markets across the continent."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {countries.map((country, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-card p-6 flex items-center gap-5 group cursor-default shadow-lg"
            >
              <motion.span 
                className="text-4xl filter drop-shadow-md"
                whileHover={{ rotate: [-5, 5, -5, 0], scale: 1.15 }}
                transition={{ duration: 0.4 }}
              >
                {country.flag}
              </motion.span>
              <div>
                <h4 className="font-bold text-white text-lg group-hover:text-accent transition-colors duration-300">{country.name}</h4>
                <p className="text-sm text-text-muted">{country.status}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
