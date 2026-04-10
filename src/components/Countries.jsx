import { motion } from 'framer-motion';
import { SectionHeader } from './HowItWorks';

const Countries = () => {
  const countries = [
    { flag: '🇸🇬', name: 'Singapore', desc: "Southeast Asia's tech hub" },
    { flag: '🇯🇵', name: 'Japan', desc: "Innovation & enterprise tech" },
    { flag: '🇰🇷', name: 'South Korea', desc: "Semiconductors & AI frontier" },
    { flag: '🇻🇳', name: 'Vietnam', desc: "Fastest-growing dev ecosystem" },
    { flag: '🇹🇭', name: 'Thailand', desc: "Digital economy rising" },
    { flag: '🇲🇾', name: 'Malaysia', desc: "Regional shared services center" },
  ];

  return (
    <section id="countries" className="py-16 lg:py-24 bg-secondary border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader 
          label="Countries" 
          title="Opportunities across" 
          titleHighlight="Asia" 
          subtitle="We connect talent with employers in the fastest-growing tech markets across the continent."
        />

        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 sm:gap-6 mb-16 pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3 sm:pb-0">
          {countries.map((country, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card p-6 flex flex-shrink-0 items-center gap-5 hover:-translate-y-1 hover:border-accent/30 transition-all cursor-default snap-center w-[85vw] sm:w-auto sm:min-w-0"
            >
              <span className="text-4xl">{country.flag}</span>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{country.name}</h3>
                <p className="text-sm text-text-muted">{country.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
