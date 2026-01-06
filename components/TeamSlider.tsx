
import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const TeamSlider: React.FC = () => {
  return (
    <section id="team" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 reveal">
          <h2 className="text-brand-blue font-comfortaa text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Board Council</h2>
          <p className="text-4xl md:text-5xl font-comfortaa font-bold text-black">Elite Clinicians.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="reveal group relative bg-slate-50 rounded-[40px] p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100">
              <div className="relative mb-8 aspect-square rounded-[32px] overflow-hidden bg-white border border-slate-100 flex items-center justify-center transition-all duration-500 group-hover:scale-95">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}&backgroundColor=0066FF`;
                  }}
                />
              </div>
              
              <h4 className="text-2xl font-comfortaa font-bold text-black mb-1">{member.name}</h4>
              <p className="text-brand-blue text-[9px] font-bold uppercase tracking-[0.3em] mb-4">{member.role}</p>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                {member.bio}
              </p>

              <div className="flex space-x-5 pt-4 border-t border-slate-100">
                <a href={member.socials.linkedin} className="text-slate-300 hover:text-brand-blue transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;
