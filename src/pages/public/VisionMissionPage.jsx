import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Target, Heart, ShieldCheck, CheckCircle2, Award, Sparkles } from 'lucide-react';

export const VisionMissionPage = () => {
  return (
    <>
      <Helmet>
        <title>Vision & Mission | G.R. Patil College Dombivli</title>
      </Helmet>

      <div className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About', path: '/about' }, { label: 'Vision & Mission' }]} />

          <SectionTitle badge="Institutional Purpose" title="Vision, Mission & Core Values" />

          <div className="space-y-8">
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-3xl p-8 border border-blue-900 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                To emerge as a premier higher educational institution in the region, recognized for academic excellence, digital skill development, research initiatives, and producing ethical, responsible global citizens.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>To impart quality education across Arts, Science, Commerce, and Management disciplines affiliated to the University of Mumbai.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>To bridge the gap between academic learning and corporate industry requirements through practical skill training.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>To foster environmental sustainability, community development, sportsmanship, and cultural heritage among students.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
