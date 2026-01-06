
import React, { useState } from 'react';
import { SERVICES_DATA } from '../constants';

const ServicesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SERVICES_DATA[0].id);
  const activeContent = SERVICES_DATA.find(s => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-32 bg-[#fcfcfc] relative border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 reveal">
          <h2 className="text-brand-blue font-comfortaa text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Service Verticals</h2>
          <p className="text-4xl md:text-5xl font-comfortaa font-bold text-black">Precision Architecture.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Tab Navigation */}
          <div className="lg:col-span-4 flex flex-col space-y-4 reveal">
            {SERVICES_DATA.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`text-left px-8 py-6 rounded-3xl transition-all duration-300 font-comfortaa ${
                  activeTab === service.id
                    ? 'bg-black text-white shadow-xl'
                    : 'bg-white border border-slate-100 text-slate-500 hover:border-brand-blue/30'
                }`}
              >
                <span className="block text-[8px] uppercase tracking-[0.2em] font-bold mb-1 opacity-50">Unit {service.id.toUpperCase()}</span>
                <span className="text-lg font-bold">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 glass-card rounded-[40px] p-10 md:p-14 reveal">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-comfortaa font-bold text-black mb-6">{activeContent.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">{activeContent.description}</p>
                
                <ul className="space-y-4 mb-10">
                  {activeContent.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium text-slate-700">
                      <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center mr-4">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full sm:w-auto px-8 py-3 bg-brand-blue text-white rounded-full font-bold text-sm font-comfortaa btn-hover-scale">
                  Clinical Protocol
                </button>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/5] rounded-[32px] overflow-hidden border border-slate-100 shadow-sm">
                  <img 
                    src={activeContent.image} 
                    alt={activeContent.title}
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;
