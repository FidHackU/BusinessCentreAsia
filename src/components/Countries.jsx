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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {countries.map((country, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="glass-card p-6 flex items-center gap-5 hover:-translate-y-1 hover:border-accent/30 transition-all cursor-default"
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
