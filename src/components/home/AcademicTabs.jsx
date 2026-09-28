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
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === tab.key
                  ? 'bg-blue-900 text-white shadow-lg shadow-blue-900/20 scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
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
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-blue-300"
              >
                <div>
                  {/* Featured Card Banner */}
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={course.featuredImage}
                      alt={course.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>{course.stream}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-blue-700" />
                      <span>{course.duration}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-1">
                      {course.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {course.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-5 pt-0 mt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">
                    Intake: {course.intake} seats
                  </span>
                  <Link
                    to={`/academics/course/${course.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
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
        <div className="mt-12 text-center">
          <Link
            to="/academics"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-md transition-colors"
          >
            <span>View All Detailed Syllabi & Electives</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </div>
    </section>
  );
};
