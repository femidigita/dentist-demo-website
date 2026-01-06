
import React, { useState } from 'react';

const BookingCalendar: React.FC<{ variant?: 'light' | 'dark' }> = ({ variant = 'light' }) => {
  const [selectedDate, setSelectedDate] = useState<number | null>(15);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const timeSlots = ["08:00 AM", "10:30 AM", "01:00 PM", "03:30 PM", "05:00 PM"];

  const isDark = variant === 'dark';

  return (
    <div className={`reveal reveal-up glass-card rounded-[40px] overflow-hidden border ${isDark ? 'bg-black/40 border-white/10' : 'bg-white border-slate-100 shadow-2xl'} p-8 md:p-12`}>
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Date Selection */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h4 className={`text-xl font-comfortaa font-bold ${isDark ? 'text-white' : 'text-black'}`}>October 2024</h4>
            <div className="flex space-x-2">
              <button className={`w-8 h-8 rounded-full border ${isDark ? 'border-white/10 text-white' : 'border-slate-200 text-slate-400'} flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
              </button>
              <button className={`w-8 h-8 rounded-full border ${isDark ? 'border-white/10 text-white' : 'border-slate-200 text-slate-400'} flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-2 text-center mb-4">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
              <span key={d} className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-slate-400'}`}>{d}</span>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {/* Empty padding for the start of the month if needed */}
            {[...Array(2)].map((_, i) => <div key={`pad-${i}`} />)}
            {days.map(day => (
              <button
                key={day}
                onClick={() => setSelectedDate(day)}
                className={`aspect-square flex items-center justify-center text-sm font-bold rounded-xl transition-all ${
                  selectedDate === day 
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30 scale-110' 
                    : isDark ? 'text-white/60 hover:bg-white/10' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div className="flex flex-col">
          <h4 className={`text-xl font-comfortaa font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>Available Slots</h4>
          <div className="space-y-3 flex-1">
            {timeSlots.map(time => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`w-full py-4 px-6 rounded-2xl border text-left transition-all font-medium flex justify-between items-center ${
                  selectedTime === time
                    ? 'border-brand-blue bg-brand-blue/10 text-brand-blue'
                    : isDark ? 'border-white/10 text-white/60 hover:border-brand-blue' : 'border-slate-100 text-slate-500 hover:border-brand-blue'
                }`}
              >
                <span>{time}</span>
                {selectedTime === time && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                )}
              </button>
            ))}
          </div>
          
          <button className={`mt-8 w-full py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs transition-all btn-hover-scale ${
            selectedDate && selectedTime 
              ? 'bg-brand-blue text-white' 
              : isDark ? 'bg-white/5 text-white/20 cursor-not-allowed' : 'bg-slate-100 text-slate-300 cursor-not-allowed'
          }`}>
            Confirm Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
