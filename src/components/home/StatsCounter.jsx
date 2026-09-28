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
    <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-14 border-y border-blue-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div key={idx} className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 text-amber-400 border border-amber-400/30 flex items-center justify-center mx-auto shadow-inner">
                  <IconComp className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">{stat.value}</div>
                <div className="text-xs sm:text-sm font-medium text-slate-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
