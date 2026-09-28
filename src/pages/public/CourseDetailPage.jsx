import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { courseService } from '../../services/courseService';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { LoadingSkeleton } from '../../components/common/LoadingSkeleton';
import { ErrorState } from '../../components/common/ErrorState';
import { BookOpen, Clock, Award, Users, CheckCircle2, Download, Send, HelpCircle, ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { COURSES } from '../../data/coursesData';

export const CourseDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);
    courseService
      .getCourseBySlug(slug)
      .then((data) => {
        if (isMounted) {
          setCourse(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'Course details unavailable');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <LoadingSkeleton count={1} />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ErrorState title="Course Not Found" message={error || 'The requested course does not exist.'} onRetry={() => navigate('/academics')} />
      </div>
    );
  }

  const relatedCourses = COURSES.filter((c) => c.category === course.category && c.id !== course.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${course.name} | G.R. Patil College Dombivli`}</title>
        <meta name="description" content={course.shortDescription} />
      </Helmet>

      {/* Course Hero Banner */}
      <div className="bg-slate-950 text-white relative py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Academics', path: '/academics' }, { label: course.shortName }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-900/80 text-blue-300 border border-blue-700 text-xs font-bold uppercase tracking-wider">
                  {course.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-900/80 text-emerald-300 border border-emerald-700 text-xs font-bold uppercase tracking-wider">
                  {course.stream}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">{course.name}</h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">{course.shortDescription}</p>

              {/* Key Specs Row */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Duration</span>
                  <span className="font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" /> {course.duration}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Seat Intake</span>
                  <span className="font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <Users className="w-3.5 h-3.5 text-amber-400" /> {course.intake} Seats
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Affiliation</span>
                  <span className="font-bold text-white flex items-center gap-1.5 mt-0.5 truncate">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> {course.affiliation}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Tuition Fees</span>
                  <span className="font-bold text-amber-300 flex items-center gap-1.5 mt-0.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" /> {course.feesPerYear}
                  </span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Enquire Now</span>
                </Link>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Brochure for ${course.name} downloaded successfully!`);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-colors"
                >
                  <Download className="w-4 h-4 text-blue-400" />
                  <span>Download Syllabus Brochure</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <img
                src={course.featuredImage}
                alt={course.name}
                className="w-full h-72 lg:h-80 object-cover rounded-2xl border-4 border-slate-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Details */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Main Details */}
            <div className="lg:col-span-8 space-y-10">
              {/* Overview */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-900 pl-3">Program Overview</h2>
                <p className="text-sm text-slate-700 leading-relaxed">{course.overview}</p>
              </div>

              {/* Eligibility */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Eligibility Criteria
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{course.eligibility}</p>
              </div>

              {/* Curriculum */}
              {course.curriculum && course.curriculum.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 border-l-4 border-amber-500 pl-3">Curriculum Structure & Modules</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {course.curriculum.map((sem, idx) => (
                      <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
                        <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider">{sem.semester}</h4>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {sem.subjects.map((sub, sIdx) => (
                            <li key={sIdx} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Career Opportunities */}
              {course.careerOpportunities && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 border-l-4 border-emerald-500 pl-3">Career Opportunities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.careerOpportunities.map((op, idx) => (
                      <div key={idx} className="p-3 bg-emerald-50/50 border border-emerald-200 rounded-xl text-xs font-semibold text-slate-800 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{op}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {course.faqs && course.faqs.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 border-l-4 border-indigo-500 pl-3">Frequently Asked Questions</h3>
                  <div className="space-y-2">
                    {course.faqs.map((faq, idx) => (
                      <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                          className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between font-semibold text-xs sm:text-sm text-slate-800"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeFaq === idx ? 'rotate-180 text-blue-700' : ''}`} />
                        </button>
                        {activeFaq === idx && (
                          <div className="p-4 bg-white text-xs text-slate-600 border-t border-slate-200 leading-relaxed">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar CTA & Related Courses */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl space-y-4 border border-slate-800">
                <h4 className="text-base font-bold text-amber-400">Ready to Enroll?</h4>
                <p className="text-xs text-slate-300">Submit your admission inquiry for Academic Year 2026-27 to secure your seat.</p>
                <Link
                  to="/admissions"
                  className="w-full block text-center py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-colors"
                >
                  Start Admission Process
                </Link>
              </div>

              {relatedCourses.length > 0 && (
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Related Courses</h4>
                  <div className="space-y-3">
                    {relatedCourses.map((rc) => (
                      <Link
                        key={rc.id}
                        to={`/academics/course/${rc.slug}`}
                        className="block p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow transition-all group"
                      >
                        <h5 className="text-xs font-bold text-slate-800 group-hover:text-blue-900">{rc.name}</h5>
                        <p className="text-[10px] text-slate-500 mt-1">{rc.duration}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
