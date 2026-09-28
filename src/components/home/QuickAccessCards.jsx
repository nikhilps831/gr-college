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
    <div className="relative -mt-10 lg:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
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
                className="group block bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-slate-200/80 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-900 transition-colors">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-blue-900 group-hover:text-blue-700 pt-2 border-t border-slate-100">
                  <span>Explore Stream</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
