import { motion } from 'framer-motion';
import { SectionHeader } from './HowItWorks';

const Roles = () => {
  const roles = [
    { icon: '💻', name: 'Frontend Developer' },
    { icon: '⚙️', name: 'Backend Developer' },
    { icon: '📱', name: 'Mobile Developer' },
    { icon: '☁️', name: 'Cloud Engineer' },
    { icon: '🔐', name: 'Cybersecurity Analyst' },
    { icon: '📊', name: 'Data Scientist' },
    { icon: '🤖', name: 'AI / ML Engineer' },
    { icon: '🛠️', name: 'DevOps Engineer' },
    { icon: '🧪', name: 'QA Engineer' },
    { icon: '📐', name: 'Solutions Architect' },
    { icon: '📈', name: 'Product Manager' },
    { icon: '🎨', name: 'UX/UI Designer' },
    { icon: '🗄️', name: 'Database Administrator' },
    { icon: '🌐', name: 'Full Stack Developer' },
    { icon: '📡', name: 'Network Engineer' },
    { icon: '💼', name: 'IT Consultant' },
    { icon: '⚡', name: 'Site Reliability Eng.' },
    { icon: '🧠', name: 'Prompt Engineer' },
    { icon: '🛡️', name: 'Penetration Tester' },
    { icon: '⛓️', name: 'Blockchain Developer' },
    { icon: '📦', name: 'Release Manager' },
    { icon: '⚙️', name: 'Systems Administrator' },
    { icon: '📋', name: 'Scrum Master' },
    { icon: '📈', name: 'Business Analyst' },
    { icon: '📱', name: 'iOS Developer' },
    { icon: '🤖', name: 'Android Developer' },
    { icon: '🔌', name: 'IoT Engineer' },
    { icon: '💡', name: 'Tech Lead' },
    { icon: '📊', name: 'Data Engineer' },
    { icon: '🧮', name: 'Machine Learning Eng.' },
    { icon: '🧊', name: 'Web3 Developer' },
    { icon: '🖥️', name: 'Enterprise Architect' },
  ];

  // Split roles into four rows for an ultra-dense, impressive visual footprint
  const row1 = roles.slice(0, 8);
  const row2 = roles.slice(8, 16);
  const row3 = roles.slice(16, 24);
  const row4 = roles.slice(24, 32);

  const RoleTag = ({ role }) => (
    <div className="px-6 py-3.5 bg-[#080b1c] backdrop-blur-md border border-white/[0.04] rounded-full text-text-primary text-sm font-medium flex items-center gap-3 hover:border-accent/30 hover:-translate-y-1 hover:shadow-lg transition-all cursor-default relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity"></div>
      <span className="text-lg">{role.icon}</span>
      <span className="whitespace-nowrap">{role.name}</span>
    </div>
  );

  return (
    <section id="roles" className="py-16 lg:py-24 bg-primary relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader 
          label="Roles We Place" 
          title="We place top" 
          titleHighlight="IT talent" 
          subtitle="Whether you're a developer, consultant, or specialist — we have opportunities waiting for you across Asia."
        />

        {/* Marquee Wrapper with touch-pan-y to explicitly allow vertical scrolling on touch devices */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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
