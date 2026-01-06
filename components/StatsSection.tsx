
import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../constants';

const Counter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.1 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <div ref={ref} className="text-6xl md:text-7xl font-comfortaa font-bold text-white tracking-tighter mb-2">
      {count}<span className="text-brand-blue">{suffix}</span>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {STATS.map((stat, idx) => (
            <div key={idx} className="reveal text-center md:text-left">
              <div className="w-12 h-0.5 bg-brand-blue mb-8"></div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-white/40 text-[9px] uppercase tracking-[0.5em] font-bold font-comfortaa">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
