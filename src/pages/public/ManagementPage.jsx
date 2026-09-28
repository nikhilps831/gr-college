import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { MANAGEMENT_TRUST } from '../../data/facultyData';
import { ShieldCheck, UserCheck } from 'lucide-react';

export const ManagementPage = () => {
  return (
    <>
      <Helmet>
        <title>Management & Trust | G.R. Patil College Dombivli</title>
      </Helmet>

      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About', path: '/about' }, { label: 'Management & Trust' }]} />

          <SectionTitle badge="Institutional Governance" title="G.R. Patil Educational Trust" subtitle="Governing body dedicated to providing vision, strategic growth, and educational excellence." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MANAGEMENT_TRUST.map((member, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center font-bold text-lg">
                    {member.name.charAt(4) || 'M'}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                    <p className="text-xs font-semibold text-blue-800">{member.role}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-medium">{member.qualification}</p>
                <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
