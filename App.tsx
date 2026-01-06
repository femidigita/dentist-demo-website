
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesTabs from './components/ServicesTabs';
import StatsSection from './components/StatsSection';
import TeamSlider from './components/TeamSlider';
import FAQSection from './components/FAQSection';
import TechShowcase from './components/TechShowcase';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import BookingCalendar from './components/BookingCalendar';
import ProcessSection from './components/ProcessSection';
import Testimonials from './components/Testimonials';
import SocialFloatingBar from './components/SocialFloatingBar';

// --- Page Header Component ---
const PageHeader: React.FC<{ title: string; subtitle: string; bgImage?: string }> = ({ title, subtitle, bgImage }) => (
  <header className="relative pt-64 pb-32 bg-black overflow-hidden">
    {bgImage && (
      <div className="absolute inset-0 opacity-40">
        <img src={bgImage} className="w-full h-full object-cover grayscale" alt="Background" />
      </div>
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <p className="reveal reveal-down text-brand-blue font-bold uppercase tracking-[0.6em] text-[10px] mb-4">{subtitle}</p>
      <h1 className="reveal reveal-up text-5xl md:text-7xl font-comfortaa font-bold text-white tracking-tight uppercase leading-[0.9]">{title}</h1>
    </div>
  </header>
);

// --- Home Page ---
const HomePage: React.FC = () => (
  <>
    <Hero />
    <ServicesTabs />
    <ProcessSection />
    <StatsSection />
    
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-5 reveal reveal-right">
          <h2 className="text-brand-blue font-comfortaa text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Immediate Intake</h2>
          <h3 className="text-4xl md:text-5xl font-comfortaa font-bold text-black mb-8">Secure Your Slot.</h3>
          <p className="text-slate-500 mb-10 leading-relaxed text-lg">
            Our surgical schedule operates on institutional priority. Select your preferred consultation window below for real-time verification.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
              </div>
              <span className="text-sm font-bold text-black uppercase tracking-widest">Instant Confirmation</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <BookingCalendar />
        </div>
      </div>
    </section>

    <TechShowcase />
    <Testimonials />
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 h-px bg-slate-100"></div>
    </div>
    <TeamSlider />
    <FAQSection />
  </>
);

// --- About Page ---
const AboutPage: React.FC = () => (
  <>
    <PageHeader 
      title="Our History" 
      subtitle="Legacy of Clinical Precision" 
      bgImage="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1600"
    />
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
        <div className="reveal reveal-right">
          <h2 className="text-4xl md:text-5xl font-comfortaa font-bold text-black mb-10 leading-tight">Institutional Excellence Since 1998.</h2>
          <p className="text-slate-500 mb-8 leading-relaxed text-lg font-light">
            Elite Dental Group evolved from a boutique restorative lab into a global leader in oral healthcare systemics. We operate at the intersection of medical biology and advanced materials science.
          </p>
          <p className="text-slate-400 mb-12 leading-relaxed italic">
            "We don't just repair teeth; we engineer biological resilience for those who shape the future."
          </p>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-brand-blue font-bold text-xs uppercase tracking-widest mb-3">Our Mission</h4>
              <p className="text-black text-sm font-medium leading-relaxed">Total biological harmony through surgical mastery.</p>
            </div>
            <div>
              <h4 className="text-brand-blue font-bold text-xs uppercase tracking-widest mb-3">Our Vision</h4>
              <p className="text-black text-sm font-medium leading-relaxed">The global benchmark for elite clinical results.</p>
            </div>
          </div>
        </div>
        <div className="relative reveal reveal-left">
          <div className="absolute -inset-10 bg-brand-blue/10 rounded-full blur-[120px]"></div>
          <div className="relative aspect-[3/4] rounded-[50px] overflow-hidden shadow-2xl border border-slate-100">
            <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" alt="About" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Philosophy Block */}
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="reveal reveal-down text-brand-blue font-comfortaa text-[10px] font-bold uppercase tracking-[0.5em] mb-12">Clinical Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-16 text-center">
          {[
            { title: 'Zero Tolerance', desc: 'No margins for error in structural restoration.' },
            { title: 'Bio-Sync', desc: 'Materials that integrate perfectly with bone and tissue.' },
            { title: 'Longevity', desc: 'Solutions designed for a minimum 50-year service life.' }
          ].map((item, idx) => (
            <div key={idx} className="reveal reveal-up">
              <div className="text-3xl font-comfortaa font-bold mb-4">{item.title}</div>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <StatsSection />
  </>
);

// --- Services Page ---
const ServicesPage: React.FC = () => (
  <>
    <PageHeader 
      title="Our Services" 
      subtitle="Verticals of Excellence" 
      bgImage="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1600"
    />
    <ServicesTabs />
    <TechShowcase />
    
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="aspect-square rounded-[60px] overflow-hidden reveal reveal-right">
             <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Lab" />
          </div>
          <div className="reveal reveal-left">
            <h2 className="text-4xl font-comfortaa font-bold text-black mb-8 uppercase tracking-tight">Onsite ISO-Certified Lab</h2>
            <p className="text-slate-500 mb-8 leading-relaxed text-lg">
              Every crown, bridge, and implant abutment is manufactured in our sterile onsite facility. This reduces turnaround time from weeks to hours and allows for real-time adjustments by the lead surgeon and master technician.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start space-x-6">
                <div className="text-brand-blue font-bold text-xl font-comfortaa">01</div>
                <div>
                  <h5 className="font-bold text-black mb-1 uppercase tracking-widest text-xs">Spectrophotometric Matching</h5>
                  <p className="text-slate-400 text-xs">Ensuring color accuracy within 0.1 Delta-E.</p>
                </div>
              </li>
              <li className="flex items-start space-x-6">
                <div className="text-brand-blue font-bold text-xl font-comfortaa">02</div>
                <div>
                  <h5 className="font-bold text-black mb-1 uppercase tracking-widest text-xs">Milled Titanium Bases</h5>
                  <p className="text-slate-400 text-xs">High-strength structural foundations for all restorations.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
);

// --- Team Page ---
const TeamPage: React.FC = () => (
  <>
    <PageHeader 
      title="Our Team" 
      subtitle="Expert Board of Clinicians" 
      bgImage="https://images.unsplash.com/photo-1590105577767-e21a1067899f?auto=format&fit=crop&q=80&w=1600"
    />
    <TeamSlider />
    
    <section className="py-32 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-6 text-center reveal reveal-up">
        <h2 className="text-3xl font-comfortaa font-bold text-black mb-12 uppercase tracking-tight">Global Fellowship</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
           <p className="text-slate-500 font-bold tracking-widest text-xs uppercase">American Board of Oral Surgery</p>
           <p className="text-slate-500 font-bold tracking-widest text-xs uppercase">European Dental Association</p>
           <p className="text-slate-500 font-bold tracking-widest text-xs uppercase">Intl Congress of Implantologists</p>
           <p className="text-slate-500 font-bold tracking-widest text-xs uppercase">Royal College of Surgeons</p>
        </div>
      </div>
    </section>
  </>
);

// --- Contact Page ---
const ContactPage: React.FC = () => (
  <>
    <PageHeader 
      title="Concierge" 
      subtitle="Initiate Your Oral Longevity" 
      bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600"
    />
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5 reveal reveal-right">
          <h2 className="text-4xl font-comfortaa font-bold text-black mb-10">Global Headquarters</h2>
          <div className="space-y-12 mb-16">
            {[
              { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', label: 'Main Office', value: '100 Madison Ave, Floor 45, NY 10022' },
              { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Direct Email', value: 'concierge@elitedental.com' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-blue rounded-2xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d={item.icon} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                </div>
                <div>
                  <h4 className="text-black font-bold mb-1 uppercase tracking-widest text-[10px]">{item.label}</h4>
                  <p className="text-slate-500 text-sm font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100">
            <h4 className="text-black font-bold mb-4 uppercase tracking-widest text-[10px]">Access Policy</h4>
            <p className="text-slate-400 text-xs leading-relaxed">Appointments are prioritized for institutional partners. New patient intake requires a clinical profile review by our executive board.</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="mb-10 reveal reveal-up">
            <h3 className="text-2xl font-comfortaa font-bold text-black mb-4 tracking-tight">Direct Scheduling</h3>
            <p className="text-slate-500 text-sm">Select your preferred window for a preliminary surgical assessment.</p>
          </div>
          <BookingCalendar />
        </div>
      </div>
    </section>
  </>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-brand-blue selection:text-white">
      <Navbar />
      <SocialFloatingBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        <Routes>
          <Route path="/contact" element={null} />
          <Route path="*" element={
            <section className="py-32 bg-white relative border-t border-slate-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-brand-blue/[0.02] pointer-events-none"></div>
              <div className="max-w-4xl mx-auto px-6 text-center reveal reveal-up">
                <h2 className="text-4xl md:text-5xl font-comfortaa font-bold text-black mb-10 tracking-tight">Define Your Oral Longevity.</h2>
                <Link to="/contact" className="inline-block px-14 py-5 bg-brand-blue text-white font-bold text-lg rounded-full btn-hover-scale shadow-2xl">
                  Start Your Consultation
                </Link>
              </div>
            </section>
          } />
        </Routes>
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;
