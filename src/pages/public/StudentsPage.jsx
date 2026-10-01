import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Link } from 'react-router-dom';
import { Bell, Award, Download, Calendar, BookOpen, Clock, FileText, ArrowRight } from 'lucide-react';

export const StudentsPage = () => {
  const studentCards = [
    { title: 'Notices & Circulars', path: '/notices', icon: Bell, desc: 'Latest university announcements, holiday notices & exam schedules.', color: 'bg-amber-50 border-amber-200 text-amber-900' },
    { title: 'Exam Results Portal', path: '/results', icon: Award, desc: 'View regular and ATKT semester exam grade cards.', color: 'bg-red-50 border-red-200 text-red-900' },
    { title: 'Downloads & Forms', path: '/downloads', icon: Download, desc: 'Railway concession forms, library passes & syllabus PDFs.', color: 'bg-emerald-50 border-emerald-200 text-emerald-900' },
    { title: 'Lecture Timetables', path: '/downloads?cat=Timetable', icon: Clock, desc: 'Download class wise weekly timetables for UG/PG/HSC.', color: 'bg-purple-50 border-purple-200 text-purple-900' },
    { title: 'Academic Calendar', path: '/naac-iqac/academic-calendar', icon: Calendar, desc: 'Term start dates, examination windows & holiday schedule.', color: 'bg-rose-50 border-rose-200 text-rose-900' },
    { title: 'Campus Events & Fests', path: '/events', icon: BookOpen, desc: 'TechVision IT fest, Tarang cultural carnival & sports trials.', color: 'bg-teal-50 border-teal-200 text-teal-900' }
  ];

  return (
    <>
      <Helmet>
        <title>Student Corner & Services | G.R. Patil College Dombivli</title>
      </Helmet>

      <div className="bg-slate-50 py-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Student Portal' }]} />

          <SectionTitle
            badge="Student Hub"
            title="Essential Student Corner & Services"
            subtitle="Quickly access examination timetables, results, railway concession forms, notices, and academic calendars."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <Link
                  key={idx}
                  to={card.path}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${card.color}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-900 transition-colors mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-bold text-red-900 flex items-center gap-1 group-hover:text-red-700">
                    <span>Access Portal</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
