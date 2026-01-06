
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-32 pb-16 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[150px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center space-x-3 mb-10 group">
              <div className="w-12 h-12 bg-white text-black font-bold rounded-2xl flex items-center justify-center text-xl transition-all group-hover:bg-brand-blue group-hover:text-white group-hover:rotate-6">D</div>
              <div className="flex flex-col">
                <span className="text-2xl font-comfortaa font-bold tracking-tight text-white uppercase">DEMO<span className="text-brand-blue">DENTAL</span></span>
                <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-brand-blue">Professional Dentist Demo</span>
              </div>
            </Link>
            <p className="text-white/40 max-w-sm mb-12 leading-relaxed text-lg font-light">
              Engineering biological harmony through institutional precision and elite craftsmanship. This application is a specialized clinical demo environment.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-brand-blue font-comfortaa font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Navigation</h5>
            <ul className="space-y-4 text-white/50 text-sm font-medium">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Vision</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Capability</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Clinicians</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-brand-blue font-comfortaa font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Support</h5>
            <ul className="space-y-4 text-white/50 text-sm font-medium">
              <li><Link to="/contact" className="hover:text-white transition-colors">Concierge</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certifications</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h5 className="text-brand-blue font-comfortaa font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Executive Updates</h5>
            <div className="p-1.5 bg-white/5 rounded-full border border-white/10 flex">
              <input type="email" placeholder="Corporate email" className="bg-transparent px-6 py-2 flex-1 focus:outline-none text-sm text-white" />
              <button className="bg-brand-blue text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/20 text-[9px] uppercase tracking-[0.5em] font-bold">
          <p>© 2024 Demo Dental Group - Professional Demo. All Rights Reserved.</p>
          <div className="flex space-x-12 mt-8 md:mt-0">
            <span>ISO 9001 Compliant</span>
            <span className="text-brand-blue font-black px-2 py-0.5 rounded bg-brand-blue/10">DEMO MODE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
