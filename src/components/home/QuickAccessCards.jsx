import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, School, ClipboardCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const QuickAccessCards = () => {
  const cards = [
    {
      title: 'Undergraduate Courses',
      description: 'B.Sc CS, B.Sc IT, BMS, BAF, BBI, B.Com, BAMMC & Hospitality Studies degree programs.',
      icon: BookOpen,
      link: '/academics/undergraduate',
      color: 'from-blue-600 to-indigo-700',
      badge: 'UG Degrees'
    },
    {
      title: 'Postgraduate Courses',
      description: 'Master of Science (M.Sc) in Computer Science & Information Technology.',
      icon: GraduationCap,
      link: '/academics/postgraduate',
      color: 'from-indigo-600 to-purple-700',
      badge: 'PG Masters'
    },
    {
      title: 'Junior College',
      description: '11th & 12th Standard Science (PCMB/CS/IT) and Commerce Streams.',
      icon: School,
      link: '/academics/junior-college',
      color: 'from-emerald-600 to-teal-700',
      badge: 'HSC Board'
    },
    {
      title: 'Admissions 2026-27',
      description: 'Online application guidelines, eligibility criteria, document list, & enquiry.',
      icon: ClipboardCheck,
      link: '/admissions',
      color: 'from-amber-500 to-orange-600',
      badge: 'Open Now'
    }
  ];

  return (
    <div className="relative -mt-24 md:-mt-32 lg:-mt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 mb-16 lg:mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {cards.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link
                to={card.link}
                className="group block bg-white rounded-[24px] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] border border-gray-100/80 transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col justify-between overflow-hidden relative"
              >
                {/* Subtle top gradient glow on hover */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-slate-50 text-slate-500 group-hover:bg-[#0f3b73]/5 group-hover:text-[#0f3b73] transition-colors duration-300">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0f3b73]  transition-colors duration-300 mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">
                    {card.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[13px] font-bold text-[#0f3b73] group-hover:text-[#0f3b73] transition-colors duration-300">
                  <span>Explore Stream</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
