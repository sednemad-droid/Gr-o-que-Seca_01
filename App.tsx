
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <Benefits />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
