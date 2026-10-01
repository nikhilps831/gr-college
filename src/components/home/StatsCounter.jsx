import React from 'react';
import { Users, Award, BookOpen, Building2 } from 'lucide-react';

export const StatsCounter = () => {
  const stats = [
    { value: '3,500+', label: 'Active Students Enrolled', icon: Users },
    { value: '15+', label: 'Academic Degree Programs', icon: BookOpen },
    { value: '50+', label: 'Experienced Faculty Members', icon: Award },
    { value: '94%', label: 'University Examination Pass Rate', icon: Building2 }
  ];

  return (
    <section className="bg-[#ffcccc] py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div key={idx} className="text-center space-y-3 bg-white p-6 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-[#e5322c]/10 text-[#e5322c] flex items-center justify-center mx-auto">
                  <IconComp className="w-7 h-7" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">{stat.value}</div>
                <div className="text-[13px] font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
