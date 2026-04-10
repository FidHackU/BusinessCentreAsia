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
  ];

  return (
    <section id="roles" className="py-24 bg-primary relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader 
          label="Roles We Place" 
          title="We place top" 
          titleHighlight="IT talent" 
          subtitle="Whether you're a developer, consultant, or specialist — we have opportunities waiting for you across Asia."
        />

        <div className="flex flex-wrap justify-center gap-4 mt-12 max-w-5xl mx-auto">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="px-6 py-3 bg-secondary/80 backdrop-blur-md border border-border rounded-full text-text-primary text-sm font-medium flex items-center gap-2 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg transition-all cursor-default"
            >
              <span className="text-base">{role.icon}</span>
              {role.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roles;
