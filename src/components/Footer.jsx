const Footer = () => {
  return (
    <footer className="bg-primary/50 pt-20 pb-8 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-1 text-xl font-extrabold tracking-tighter text-white mb-4">
              BusinessCentres<span className="text-white/40">.</span>Asia
            </a>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              The all-in-one platform connecting international IT talent with opportunities across Asia. We handle visas, relocation, and everything in between.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Navigate</h4>
            <ul className="space-y-3">
              {['How It Works', 'Services', 'Countries', 'Roles', 'Success Stories'].map(item => (
                <li key={item}>
                  <a href={`#${item.split(' ')[0].toLowerCase()}`} className="text-sm text-text-muted hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Get Started</h4>
            <ul className="space-y-3">
              <li><a href="https://wa.me/6593752892" className="text-sm text-text-muted hover:text-white transition-colors">Submit Profile</a></li>
              <li><a href="https://wa.me/6593752892" className="text-sm text-text-muted hover:text-white transition-colors">Post a Job</a></li>
              <li><a href="https://wa.me/6593752892" className="text-sm text-text-muted hover:text-white transition-colors">Apply Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-3">
              <li><a href="https://wa.me/6593752892" className="text-sm text-text-muted hover:text-white transition-colors">WhatsApp</a></li>
              <li><a href="tel:+6593752892" className="text-sm text-text-muted hover:text-white transition-colors">+65 9375 2892</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
          <p>© 2026 BusinessCentres.Asia. All rights reserved.</p>
          <p>Singapore • Japan • South Korea • Vietnam • Thailand • Malaysia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
