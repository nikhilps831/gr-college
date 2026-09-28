import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { PRINCIPAL_INFO } from '../../data/facultyData';
import { Award, BookOpen, GraduationCap, Quote, CheckCircle } from 'lucide-react';

export const PrincipalPage = () => {
  return (
    <>
      <Helmet>
        <title>Principal's Desk | G.R. Patil College Dombivli</title>
      </Helmet>

      <div className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About', path: '/about' }, { label: "Principal's Desk" }]} />

          <SectionTitle badge="Academic Leadership" title="From the Principal's Desk" />

          {/* Large Profile Section */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
            <div className="md:col-span-5 text-center">
              <img
                src={PRINCIPAL_INFO.photo}
                alt={PRINCIPAL_INFO.name}
                className="w-52 h-64 object-cover rounded-2xl mx-auto shadow-2xl border-4 border-amber-400/80"
              />
            </div>
            <div className="md:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
                Head of Institution
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">{PRINCIPAL_INFO.name}</h3>
              <p className="text-amber-400 font-bold text-sm">{PRINCIPAL_INFO.designation}</p>
              
              <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <p className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  <span>Qualifications: <strong>{PRINCIPAL_INFO.qualifications}</strong></span>
                </p>
                <p className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Experience: <strong>{PRINCIPAL_INFO.experience}</strong></span>
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Message */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <Quote className="w-8 h-8 text-blue-900" />
              <h3 className="text-lg font-bold text-slate-900">Principal's Address to Students & Parents</h3>
            </div>
            
            <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
              {PRINCIPAL_INFO.message}
            </p>

            {/* Academic Philosophy */}
            <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-600" /> Core Academic Philosophy
              </h4>
              <p className="text-xs text-slate-700 font-medium italic">
                "{PRINCIPAL_INFO.academicPhilosophy}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
