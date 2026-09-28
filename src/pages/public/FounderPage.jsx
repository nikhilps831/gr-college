import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { FOUNDER_INFO } from '../../data/facultyData';
import { Quote, Target, Heart } from 'lucide-react';

export const FounderPage = () => {
  return (
    <>
      <Helmet>
        <title>Founder's Message | G.R. Patil College Dombivli</title>
      </Helmet>

      <div className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About', path: '/about' }, { label: "Founder's Desk" }]} />

          <SectionTitle badge="Visionary Leadership" title="From the Founder's Desk" />

          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-4 text-center">
              <img
                src={FOUNDER_INFO.photo}
                alt={FOUNDER_INFO.name}
                className="w-48 h-56 object-cover rounded-2xl mx-auto shadow-md border-4 border-white"
              />
              <h3 className="text-xl font-bold text-slate-900 mt-4">{FOUNDER_INFO.name}</h3>
              <p className="text-xs font-semibold text-blue-900">{FOUNDER_INFO.title}</p>
              <p className="text-[11px] text-slate-500 mt-1">{FOUNDER_INFO.organization}</p>
            </div>

            <div className="md:col-span-8 space-y-4">
              <Quote className="w-10 h-10 text-amber-500/40" />
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line italic font-serif">
                "{FOUNDER_INFO.message}"
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base">
                <Target className="w-5 h-5 text-blue-700" />
                <span>Our Founder's Vision</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">{FOUNDER_INFO.vision}</p>
            </div>

            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
                <Heart className="w-5 h-5 text-emerald-700" />
                <span>Our Founder's Mission</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">{FOUNDER_INFO.mission}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
