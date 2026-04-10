import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import Services from './components/Services';
import Countries from './components/Countries';
import Roles from './components/Roles';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary font-sans text-text-primary overflow-x-hidden selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <Countries />
        <Roles />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
