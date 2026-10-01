import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { COURSES } from '../../data/coursesData';
import { Link, useSearchParams } from 'react-router-dom';
import { BookOpen, Clock, GraduationCap, ArrowRight, Search, Filter } from 'lucide-react';

export const AcademicsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Undergraduate', 'Postgraduate', 'Junior College'];

  const filteredCourses = COURSES.filter((c) => {
    const matchCat = selectedCategory === 'All' || c.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchSearch = !searchTerm || c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.shortName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <Helmet>
        <title>Academic Programs | G.R. Patil College Dombivli</title>
        <meta name="description" content="Explore UG degree programs (B.Sc CS, B.Sc IT, BMS, BAF, BBI, B.Com, BAMMC), PG masters, and Junior College Science & Commerce." />
      </Helmet>

      <div className="bg-slate-50 py-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Academics & Courses' }]} />

          <SectionTitle
            badge="Academic Offerings"
            title="Comprehensive Courses & Degree Programs"
            subtitle="Affiliated to University of Mumbai & MSBSHSE. Designed to build career competence, practical skills, and intellectual growth."
          />

          {/* Filter & Search Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSearchParams(cat === 'All' ? {} : { category: cat });
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#FFF9F0] text-slate-800 shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search course name..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:border-red-700 font-medium"
              />
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-red-300"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={course.featuredImage}
                      alt={course.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#FFF9F0]/80 backdrop-blur-md text-[#E39B1B] text-[10px] font-bold uppercase tracking-wider">
                      {course.category} • {course.stream}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-red-700" />
                      <span>{course.duration}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-red-900 transition-colors line-clamp-1">
                      {course.name}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {course.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">
                    Seat Intake: {course.intake}
                  </span>
                  <Link
                    to={`/academics/course/${course.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-900 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3.5 py-2 rounded-xl transition-colors"
                  >
                    <span>Course Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
