import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../../data/coursesData';
import { SectionTitle } from '../common/SectionTitle';
import { Clock, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AcademicTabs = () => {
  const [activeTab, setActiveTab] = useState('Undergraduate');

  const tabs = [
    { key: 'Undergraduate', label: 'Undergraduate Degrees' },
    { key: 'Postgraduate', label: 'Postgraduate Masters' },
    { key: 'Junior College', label: 'Junior College (HSC)' }
  ];

  const filteredCourses = COURSES.filter((c) => c.category === activeTab);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Programs Offered"
          title="Explore Academic Opportunities"
          subtitle="Discover university degree and junior college programs tailored to launch successful careers in science, technology, management, and commerce."
        />

        {/* Tab Navigation Controls */}
        <div className="flex justify-center mb-12 w-full px-2">
          <div className="inline-flex flex-wrap justify-center bg-white p-2 rounded-[20px] border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-6 py-3 rounded-[14px] font-bold text-[13px] tracking-wide transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-[#e5322c] text-white shadow-[0_8px_20px_rgb(229,50,44,0.3)] -translate-y-0.5'
                    : 'bg-transparent text-slate-500 hover:text-[#0f3b73] hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-[#0f3b73]/10 hover:-translate-y-1.5"
              >
                <div>
                  {/* Featured Card Banner */}
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={course.featuredImage}
                      alt={course.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] bg-white/95 backdrop-blur-md text-[#0f3b73] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      <GraduationCap className="w-3.5 h-3.5 text-[#e5322c]" />
                      <span>{course.stream}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-bold tracking-wide">
                      <Clock className="w-3.5 h-3.5 text-[#209d2e]" />
                      <span>{course.duration}</span>
                    </div>

                    <h3 className="text-[17px] font-extrabold text-[#0f3b73] group-hover:text-[#e5322c] transition-colors line-clamp-1">
                      {course.name}
                    </h3>

                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed line-clamp-3">
                      {course.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0 mt-2 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    Intake: {course.intake} seats
                  </span>
                  <Link
                    to={`/academics/course/${course.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f3b73] hover:text-white bg-slate-50 hover:bg-[#0f3b73] px-4 py-2 rounded-[12px] transition-colors border border-gray-100 hover:border-[#0f3b73]"
                  >
                    <span>View Course</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Programs CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/academics"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[16px] bg-[#e5322c] hover:bg-[#c92722] text-white text-[13px] font-bold shadow-[0_8px_30px_rgb(229,50,44,0.2)] transition-colors"
          >
            <span>View All Detailed Syllabi & Electives</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
