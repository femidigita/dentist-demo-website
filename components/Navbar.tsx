
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const isDarkSection = !isScrolled && !isMenuOpen && (location.pathname === '/');

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-8'
      } ${isMenuOpen ? 'bg-[#0a192f]' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group z-[110]">
            <div className={`w-10 h-10 font-bold rounded-xl flex items-center justify-center text-lg transition-all group-hover:rotate-6 ${
              isDarkSection || isMenuOpen ? 'bg-brand-blue text-white' : 'bg-[#0a192f] text-white group-hover:bg-brand-blue'
            }`}>
              D
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-comfortaa font-bold tracking-tight uppercase transition-colors ${
                isDarkSection || isMenuOpen ? 'text-white' : 'text-[#0a192f]'
              }`}>
                DEMO<span className="text-brand-blue">DENTAL</span>
              </span>
              <span className="text-[7px] font-bold uppercase tracking-[0.4em] text-brand-blue">
                Professional Dentist Demo
              </span>
            </div>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10 text-xs font-bold uppercase tracking-[0.2em] font-comfortaa">
            <Link to="/services" className={`transition-all hover:text-brand-blue ${
              isDarkSection ? 'text-white/70 hover:text-white' : location.pathname === '/services' ? 'text-brand-blue' : 'text-slate-500'
            }`}>Services</Link>
            <Link to="/about" className={`transition-all hover:text-brand-blue ${
              isDarkSection ? 'text-white/70 hover:text-white' : location.pathname === '/about' ? 'text-brand-blue' : 'text-slate-500'
            }`}>About</Link>
            <Link to="/team" className={`transition-all hover:text-brand-blue ${
              isDarkSection ? 'text-white/70 hover:text-white' : location.pathname === '/team' ? 'text-brand-blue' : 'text-slate-500'
            }`}>Team</Link>
            <div className="flex items-center space-x-4">
              <span className={`text-[8px] font-black px-2 py-1 rounded bg-brand-blue/10 border border-brand-blue/20 ${isDarkSection ? 'text-brand-blue' : 'text-brand-blue'}`}>ACTIVE</span>
              <Link to="/contact" className={`px-6 py-2.5 font-bold rounded-full btn-hover-scale ${
                isDarkSection ? 'bg-brand-blue text-white' : 'bg-[#0a192f] text-white hover:bg-brand-blue'
              }`}>
                Book Now
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-[110] p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute block w-full h-0.5 transition-all duration-300 transform ${
                isMenuOpen ? 'rotate-45 top-2 bg-brand-blue' : 'top-0 ' + (isDarkSection ? 'bg-white' : 'bg-[#0a192f]')
              }`}></span>
              <span className={`absolute block w-full h-0.5 transition-all duration-300 top-2 ${
                isMenuOpen ? 'opacity-0 bg-brand-blue' : 'opacity-100 ' + (isDarkSection ? 'bg-white' : 'bg-[#0a192f]')
              }`}></span>
              <span className={`absolute block w-full h-0.5 transition-all duration-300 transform ${
                isMenuOpen ? '-rotate-45 top-2 bg-brand-blue' : 'top-4 ' + (isDarkSection ? 'bg-white' : 'bg-[#0a192f]')
              }`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] bg-[#0a192f] transition-all duration-500 flex flex-col items-center justify-center p-6 md:hidden ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="absolute inset-0 z-0 opacity-10">
           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-blue rounded-full blur-[100px]"></div>
           <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center space-y-8 text-center">
          <Link to="/services" className="text-2xl font-comfortaa font-bold text-white uppercase tracking-[0.3em] hover:text-brand-blue transition-colors">Services</Link>
          <Link to="/about" className="text-2xl font-comfortaa font-bold text-white uppercase tracking-[0.3em] hover:text-brand-blue transition-colors">About</Link>
          <Link to="/team" className="text-2xl font-comfortaa font-bold text-white uppercase tracking-[0.3em] hover:text-brand-blue transition-colors">Team</Link>
          <Link to="/contact" className="mt-6 px-12 py-4 bg-brand-blue text-white font-bold rounded-full text-sm uppercase tracking-[0.2em] font-comfortaa">
            Book Appointment
          </Link>
        </div>

        <div className="absolute bottom-12 left-0 w-full text-center px-6">
           <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold">Elite Dental Group Demo Access</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
