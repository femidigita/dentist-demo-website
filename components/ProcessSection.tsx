
import React from 'react';
import { JOURNEY_DATA } from '../constants';

const ProcessSection: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 reveal reveal-up">
          <h2 className="text-brand-blue font-comfortaa text-[10px] font-bold uppercase tracking-[0.5em] mb-4 text-center">Protocol</h2>
          <p className="text-4xl md:text-5xl font-comfortaa font-bold text-black text-center">The Executive Journey.</p>
        </div>

        <div className="relative">
          {/* Background Line */}
          <div className="absolute top-[45px] left-0 w-full h-px bg-slate-100 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
            {JOURNEY_DATA.map((item, idx) => (
              <div key={idx} className={`reveal ${idx % 2 === 0 ? 'reveal-left' : 'reveal-right'} group`}>
                <div className="w-20 h-20 bg-white border border-slate-100 rounded-3xl flex items-center justify-center text-2xl font-comfortaa font-bold text-brand-blue shadow-sm mb-10 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 group-hover:scale-110">
                  {item.step}
                </div>
                <h4 className="text-xl font-comfortaa font-bold text-black mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
