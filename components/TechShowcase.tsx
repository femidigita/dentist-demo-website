
import React from 'react';
import { TECH_DATA } from '../constants';

const TechShowcase: React.FC = () => {
  return (
    <section className="py-32 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
          <div className="max-w-2xl">
            <h2 className="text-brand-blue font-comfortaa text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Innovation Pillar</h2>
            <p className="text-4xl md:text-5xl font-comfortaa font-bold text-black">Technological Sovereignty.</p>
          </div>
          <p className="text-slate-500 max-w-sm mb-2 text-sm leading-relaxed">
            We invest millions annually into proprietary clinical hardware and software to ensure results that are physically impossible in standard environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECH_DATA.map((tech, idx) => (
            <div key={idx} className="reveal group relative bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={tech.image} 
                  alt={tech.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-comfortaa font-bold text-black mb-4">{tech.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {tech.description}
                </p>
                <div className="w-12 h-1 bg-brand-blue/20 rounded-full group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
