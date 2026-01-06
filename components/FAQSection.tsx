
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';

const FAQItemComponent: React.FC<{ item: typeof FAQ_DATA[0] }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left hover:text-brand-blue transition-colors group"
      >
        <span className="text-xl font-comfortaa font-bold text-black group-hover:text-brand-blue transition-colors pr-8">
          {item.question}
        </span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 transition-all duration-300 ${isOpen ? 'bg-black text-white rotate-180 border-black' : 'bg-transparent text-slate-400'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-8' : 'max-h-0'}`}>
        <p className="text-slate-500 leading-relaxed max-w-3xl">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section className="py-32 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center reveal">
          <h2 className="text-brand-blue font-comfortaa text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Support & Inquiry</h2>
          <p className="text-4xl md:text-5xl font-comfortaa font-bold text-black">Common Queries.</p>
        </div>
        
        <div className="reveal">
          {FAQ_DATA.map((item, idx) => (
            <FAQItemComponent key={idx} item={item} />
          ))}
        </div>

        <div className="mt-20 p-10 bg-slate-50 rounded-[40px] text-center reveal">
          <p className="text-slate-500 font-light mb-6">Can't find what you're looking for?</p>
          <button className="px-10 py-4 bg-black text-white font-bold rounded-full btn-hover-scale font-comfortaa uppercase tracking-widest text-[10px]">
            Contact Executive Concierge
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
