
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 1. Entire Hero Background Image with Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2400" 
          alt="Elite Corporate Headquarters" 
          className="w-full h-full object-cover grayscale opacity-25 scale-105"
        />
        {/* Navy Gradient Overlays for Corporate Depth */}
        <div className="absolute inset-0 bg-[#0a192f]/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a192f]"></div>
      </div>

      {/* Subtle Background Glow - Updated to Blue */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-brand-blue/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          
          {/* Left Block: Value Proposition */}
          <div className="text-left lg:pr-12 py-12">
            <div className="reveal reveal-down inline-block px-4 py-1.5 mb-8 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-brand-blue text-[10px] font-bold tracking-[0.4em] uppercase">
              Global Standards of Care
            </div>
            <h1 className="reveal reveal-right text-5xl md:text-7xl lg:text-8xl font-comfortaa font-bold text-white mb-8 leading-[1.05] tracking-tight">
              Clinical <br/>
              <span className="text-brand-blue">Preeminence.</span>
            </h1>
            <p className="reveal reveal-up text-lg md:text-xl text-slate-300 mb-12 max-w-xl leading-relaxed font-light">
              Designing biological longevity for the global elite. Where surgical mastery meets institutional trust in a sovereign healthcare environment.
            </p>
            
            <div className="reveal reveal-up flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6" style={{ transitionDelay: '0.2s' }}>
              <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-brand-blue text-white font-bold text-xs rounded-full btn-hover-scale text-center font-comfortaa uppercase tracking-[0.2em] shadow-2xl shadow-brand-blue/30">
                Request Demo
              </Link>
              <button className="w-full sm:w-auto px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-xs rounded-full hover:bg-white hover:text-[#0a192f] transition-all flex items-center justify-center group font-comfortaa uppercase tracking-[0.2em]">
                <div className="w-6 h-6 bg-brand-blue rounded-full mr-3 flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                Watch Film
              </button>
            </div>
          </div>

          {/* Right Block: Subject Image */}
          <div className="relative h-full flex items-end justify-center lg:justify-end">
            <div className="reveal reveal-left relative w-full max-w-lg lg:max-w-xl">
              {/* Artistic Border/Aura around image - Updated to Blue */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 to-transparent rounded-[60px] blur-2xl opacity-50"></div>
              
              <div className="relative z-10 rounded-[60px] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://previews.123rf.com/images/asphoto777/asphoto7771902/asphoto777190200309/117278117-african-american-man-patient-in-dental-chair-dentist-office-and-doctor-practice-concept.jpg" 
                  alt="Elite Clinical Consultation" 
                  className="w-full h-auto object-cover"
                  style={{ 
                    maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
                  }}
                />
              </div>
              
              {/* Floating Performance Indicator */}
              <div className="reveal reveal-up absolute -bottom-6 -left-10 z-20 glass-card p-6 rounded-3xl hidden xl:block border-white/10 bg-[#0a192f]/80 backdrop-blur-xl" style={{ transitionDelay: '0.4s' }}>
                <div className="flex items-center space-x-5">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className={`w-10 h-10 rounded-full border-2 border-[#0a192f] bg-slate-800 flex items-center justify-center overflow-hidden`}>
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 73}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm tracking-tight">Tier-1 Support</p>
                    <p className="text-brand-blue text-[8px] uppercase tracking-widest font-extrabold">Concierge Always On</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Trust Strip */}
        <div className="reveal reveal-up mt-8 pt-10 border-t border-white/5">
          <p className="text-center text-[8px] uppercase tracking-[0.6em] text-white/30 mb-8 font-extrabold">Institutional Network & Accredited Partners</p>
          <div className="flex flex-wrap justify-around items-center gap-12 opacity-30 hover:opacity-100 transition-all duration-700 brightness-0 invert">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" className="h-4" alt="IBM" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Microsoft_logo_and_wordmark.svg" className="h-4" alt="Microsoft" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" className="h-4" alt="Netflix" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Apple_logo_grey.svg" className="h-4" alt="Apple" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Google_logo_%282015%29.svg" className="h-4" alt="Google" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
