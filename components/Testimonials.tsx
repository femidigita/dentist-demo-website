
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a192f] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 reveal reveal-up text-center">
          <h2 className="text-brand-blue font-comfortaa text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Institutional Trust</h2>
          <p className="text-4xl md:text-5xl font-comfortaa font-bold text-white">Success Stories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div key={idx} className="reveal reveal-up glass-card bg-white/5 border-white/10 p-12 rounded-[40px] flex flex-col justify-between hover:bg-white/10 transition-all duration-500">
              <div>
                <div className="text-brand-blue mb-8">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.89543 10.9124 7 12.017 7H19.017C20.1216 7 21.017 7.89543 21.017 9V15C21.017 17.2091 19.2261 19 17.017 19H14.017V21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017C-0.535282 13 -1.017 12.5523 -1.017 12V9C-1.017 7.89543 -0.121573 7 0.983002 7H8.017C9.12157 7 10.017 7.89543 10.017 9V15C10.017 17.2091 8.22614 19 6.017 19H3.017V21H3.017Z" /></svg>
                </div>
                <p className="text-white/80 text-lg leading-relaxed font-light italic mb-10">
                  "{item.quote}"
                </p>
              </div>
              <div>
                <div className="w-8 h-0.5 bg-brand-blue mb-4"></div>
                <h5 className="text-white font-bold text-sm mb-1">{item.author}</h5>
                <p className="text-brand-blue text-[9px] uppercase tracking-widest font-bold">
                  {item.position} <span className="text-white/20 mx-2">|</span> {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
