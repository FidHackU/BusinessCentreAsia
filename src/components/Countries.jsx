import { motion } from 'framer-motion';
import { SectionHeader } from './HowItWorks';

const Countries = () => {
  const countries = [
    { image: '/images/city_singapore_1775828593209.png', name: 'Singapore', code: 'SG', status: "Southeast Asia's tech hub", metrics: "1.2k+ Placements" },
    { image: '/images/city_japan_1775828608883.png', name: 'Japan', code: 'JP', status: "Innovation & enterprise tech", metrics: "800+ Placements" },
    { image: '/images/city_korea_1775828624765.png', name: 'South Korea', code: 'KR', status: "Semiconductors & AI frontier", metrics: "200+ Placements" },
    { image: '/images/city_vietnam_1775828652434.png', name: 'Vietnam', code: 'VN', status: "Fastest-growing dev ecosystem", metrics: "150+ Placements" },
    { image: '/images/city_thailand_1775828671185.png', name: 'Thailand', code: 'TH', status: "Digital economy rising", metrics: "100+ Placements" },
    { image: '/images/city_malaysia_1775828690274.png', name: 'Malaysia', code: 'MY', status: "Regional shared services center", metrics: "200+ Placements" },
  ];

  return (
    <section id="countries" className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-primary relative overflow-hidden border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        
        <SectionHeader 
          label="Our Reach" 
          title="Opportunities" 
          titleHighlight="across Asia." 
          subtitle="We connect talent with employers in the fastest-growing tech markets across the continent."
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-4 md:gap-6 mb-20 mt-12 lg:mt-16 pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:pb-0 w-[calc(100%+3rem)] md:w-full"
        >
          {countries.map((country, i) => (
            <div
              key={i}
              className="glass-card p-6 flex flex-col justify-end h-[350px] w-[85vw] max-w-[320px] md:w-auto md:max-w-none snap-center shrink-0 group cursor-default relative overflow-hidden border-slate-700/50 block"
            >
              <img src={country.image} alt={country.name} className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
              
              <div className="relative z-10 w-full mb-auto flex justify-between items-start opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-sm font-bold text-slate-400 bg-slate-900/80 px-3 py-1 rounded backdrop-blur-sm">{country.code}</span>
                <div className="text-xs font-bold bg-blue-500/20 border border-blue-500/50 px-2 py-1 rounded text-blue-400 backdrop-blur-sm">{country.metrics}</div>
              </div>

              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-serif text-white text-3xl mb-2">{country.name}</h4>
                <p className="text-sm text-slate-400">{country.status}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Countries;
