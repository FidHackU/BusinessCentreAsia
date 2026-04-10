import { motion } from 'framer-motion';
import { SectionHeader } from './HowItWorks';

const Roles = () => {
  const roles = [
    { name: 'Frontend Developer' },
    { name: 'Backend Developer' },
    { name: 'Mobile Developer' },
    { name: 'Cloud Engineer' },
    { name: 'Cybersecurity Analyst' },
    { name: 'Data Scientist' },
    { name: 'AI / ML Engineer' },
    { name: 'DevOps Engineer' },
    { name: 'QA Engineer' },
    { name: 'Solutions Architect' },
    { name: 'Product Manager' },
    { name: 'UX/UI Designer' },
    { name: 'Database Administrator' },
    { name: 'Full Stack Developer' },
    { name: 'Network Engineer' },
    { name: 'IT Consultant' },
    { name: 'Site Reliability Eng.' },
    { name: 'Prompt Engineer' },
    { name: 'Penetration Tester' },
    { name: 'Blockchain Developer' },
    { name: 'Release Manager' },
    { name: 'Systems Administrator' },
    { name: 'Scrum Master' },
    { name: 'Business Analyst' },
    { name: 'iOS Developer' },
    { name: 'Android Developer' },
    { name: 'IoT Engineer' },
    { name: 'Tech Lead' },
    { name: 'Data Engineer' },
    { name: 'Machine Learning Eng.' },
    { name: 'Web3 Developer' },
    { name: 'Enterprise Architect' },
  ];

  // Split roles into four rows for an ultra-dense, impressive visual footprint
  const row1 = roles.slice(0, 8);
  const row2 = roles.slice(8, 16);
  const row3 = roles.slice(16, 24);
  const row4 = roles.slice(24, 32);

  const RoleTag = ({ role }) => (
    <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white text-sm font-medium flex items-center justify-center hover:bg-white hover:text-black transition-colors min-w-[200px] cursor-default whitespace-nowrap">
      {role.name}
    </div>
  );

  return (
    <section id="roles" className="pt-8 pb-16 lg:pt-12 lg:py-24 bg-primary relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader 
          label="Roles We Place" 
          title="We place top" 
          titleHighlight="IT talent." 
          subtitle="Whether you're a developer, consultant, or specialist — we have opportunities waiting for you."
        />

        {/* Marquee Wrapper with touch-pan-y to explicitly allow vertical scrolling on touch devices */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 w-full md:mx-auto md:max-w-6xl touch-pan-y"
        >
          {/* Subtle gradient fading masks on the edges to make it look smooth */}
          <div className="absolute top-0 bottom-0 left-0 w-8 md:w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-8 md:w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>

          {/* First Row (Scrolls Left) */}
          <div className="flex overflow-hidden gap-4 mb-4 select-none group touch-pan-y">
            <div className="flex shrink-0 min-w-full justify-around gap-4 animate-marquee group-hover:[animation-play-state:paused] pointer-events-auto">
              {row1.map((role, i) => <RoleTag key={`r1-${i}`} role={role} />)}
            </div>
            <div aria-hidden="true" className="flex shrink-0 min-w-full justify-around gap-4 animate-marquee group-hover:[animation-play-state:paused]">
              {row1.map((role, i) => <RoleTag key={`r1-dup-${i}`} role={role} />)}
            </div>
          </div>

          {/* Second Row (Scrolls Right) */}
          <div className="flex overflow-hidden gap-4 mb-4 select-none group touch-pan-y">
            <div className="flex shrink-0 min-w-full justify-around gap-4 animate-marquee-reverse group-hover:[animation-play-state:paused] pointer-events-auto">
              {row2.map((role, i) => <RoleTag key={`r2-${i}`} role={role} />)}
            </div>
            <div aria-hidden="true" className="flex shrink-0 min-w-full justify-around gap-4 animate-marquee-reverse group-hover:[animation-play-state:paused]">
              {row2.map((role, i) => <RoleTag key={`r2-dup-${i}`} role={role} />)}
            </div>
          </div>

          {/* Third Row (Scrolls Left) */}
          <div className="flex overflow-hidden gap-4 mb-4 select-none group touch-pan-y">
            <div className="flex shrink-0 min-w-full justify-around gap-4 animate-marquee group-hover:[animation-play-state:paused] pointer-events-auto" style={{ animationDuration: '40s' }}>
              {row3.map((role, i) => <RoleTag key={`r3-${i}`} role={role} />)}
            </div>
            <div aria-hidden="true" className="flex shrink-0 min-w-full justify-around gap-4 animate-marquee group-hover:[animation-play-state:paused]" style={{ animationDuration: '40s' }}>
              {row3.map((role, i) => <RoleTag key={`r3-dup-${i}`} role={role} />)}
            </div>
          </div>

          {/* Fourth Row (Scrolls Right) */}
          <div className="flex overflow-hidden gap-4 select-none group touch-pan-y">
            <div className="flex shrink-0 min-w-full justify-around gap-4 animate-marquee-reverse group-hover:[animation-play-state:paused] pointer-events-auto" style={{ animationDuration: '30s' }}>
              {row4.map((role, i) => <RoleTag key={`r4-${i}`} role={role} />)}
            </div>
            <div aria-hidden="true" className="flex shrink-0 min-w-full justify-around gap-4 animate-marquee-reverse group-hover:[animation-play-state:paused]" style={{ animationDuration: '30s' }}>
              {row4.map((role, i) => <RoleTag key={`r4-dup-${i}`} role={role} />)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roles;
