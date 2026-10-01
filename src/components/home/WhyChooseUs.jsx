import React from 'react';
import { Users, Cpu, Laptop, Briefcase, Award, TrendingUp } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { motion } from 'framer-motion';

export const WhyChooseUs = () => {
  const features = [
    {
      title: 'Experienced Faculty',
      description: 'Dedicated post-graduate and Ph.D qualified professors providing student-centric academic mentorship.',
      icon: Users,
      color: 'bg-blue-50 text-blue-900 border-blue-200'
    },
    {
      title: 'Modern Laboratories',
      description: 'High-speed networked computer labs with 150+ workstations and advanced physics/chemistry labs.',
      icon: Cpu,
      color: 'bg-emerald-50 text-emerald-900 border-emerald-200'
    },
    {
      title: 'Digital Learning',
      description: 'Smart classrooms, e-library N-LIST access, project presentations, and online portal support.',
      icon: Laptop,
      color: 'bg-purple-50 text-purple-900 border-purple-200'
    },
    {
      title: 'Industry Exposure',
      description: 'Regular industrial visits, corporate guest lectures, seminars, and live project work.',
      icon: Briefcase,
      color: 'bg-amber-50 text-amber-900 border-amber-200'
    },
    {
      title: 'Sports & Cultural Activities',
      description: 'Spacious sports grounds, indoor gymkhana, annual youth cultural carnival Tarang, and NSS/NCC units.',
      icon: Award,
      color: 'bg-rose-50 text-rose-900 border-rose-200'
    },
    {
      title: 'Career Development',
      description: 'Active Placement Cell offering resume workshops, aptitude coaching, and campus placement drives.',
      icon: TrendingUp,
      color: 'bg-teal-50 text-teal-900 border-teal-200'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#f8f9fa] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Institutional Strengths"
          title="Why Choose G.R. Patil College?"
          className="text-[#0f3b73]"
          subtitle="Empowering your academic journey through comprehensive infrastructure, expert mentorship, and industry-aligned skill building."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-[24px] p-7 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm ${item.color}`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-extrabold text-[#0f3b73] mb-3">{item.title}</h3>
                <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
