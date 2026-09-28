import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { NAAC_DOCUMENTS } from '../../data/naacData';
import { Award, FileText, Download, CheckCircle2, ShieldCheck, Calendar, BookOpen, UserCheck } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export const NaacIqacPage = ({ subSection = 'iqac' }) => {
  const [activeTab, setActiveTab] = useState(subSection);
  const navigate = useNavigate();

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    if (tabKey === 'iqac') navigate('/naac-iqac/iqac');
    else if (tabKey === 'aqar') navigate('/naac-iqac/aqar');
    else if (tabKey === 'best-practices') navigate('/naac-iqac/best-practices');
    else if (tabKey === 'sss') navigate('/naac-iqac/sss');
    else if (tabKey === 'distinctiveness') navigate('/naac-iqac/institutional-distinctiveness');
    else if (tabKey === 'calendar') navigate('/naac-iqac/academic-calendar');
  };

  const tabs = [
    { key: 'iqac', label: 'IQAC Overview' },
    { key: 'aqar', label: 'AQAR Reports' },
    { key: 'best-practices', label: 'Best Practices' },
    { key: 'sss', label: 'Student Satisfaction Survey (SSS)' },
    { key: 'distinctiveness', label: 'Institutional Distinctiveness' },
    { key: 'calendar', label: 'Academic Calendar' }
  ];

  return (
    <>
      <Helmet>
        <title>NAAC / IQAC Quality Portal | G.R. Patil College Dombivli</title>
      </Helmet>

      <div className="bg-slate-50 py-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'NAAC / IQAC Portal' }]} />

          <SectionTitle
            badge="Quality Assurance"
            title="Internal Quality Assurance Cell (IQAC)"
            subtitle="Promoting institutional quality culture, academic audits, continuous evaluation, and governance transparency."
          />

          {/* Subpage Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8 bg-white p-3 rounded-2xl border border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.key
                    ? 'bg-blue-900 text-white shadow'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: IQAC OVERVIEW */}
          {activeTab === 'iqac' && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8 animate-fadeIn">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">{NAAC_DOCUMENTS.iqacOverview.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{NAAC_DOCUMENTS.iqacOverview.description}</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-base font-bold text-slate-900">Key IQAC Objectives</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {NAAC_DOCUMENTS.iqacOverview.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Composition Table */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900">IQAC Committee Composition</h4>
                <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-slate-900 text-white font-bold uppercase text-[11px]">
                      <tr>
                        <th className="p-3">Role / Category</th>
                        <th className="p-3">Designation & Name</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {NAAC_DOCUMENTS.iqacOverview.composition.map((c, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3 font-semibold text-blue-900">{c.role}</td>
                          <td className="p-3 text-slate-800">{c.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: AQAR REPORTS */}
          {activeTab === 'aqar' && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-slate-900">Annual Quality Assurance Reports (AQAR)</h3>
              <p className="text-xs text-slate-500">Document cards of official AQAR submissions to NAAC:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {NAAC_DOCUMENTS.aqarReports.map((aq, idx) => (
                  <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase">
                        {aq.status}
                      </span>
                      <h4 className="text-base font-bold text-slate-900">AQAR {aq.year} Report</h4>
                      <p className="text-xs text-slate-500">Submitted: {aq.date} • {aq.fileSize}</p>
                    </div>

                    <div className="flex flex-col gap-2 shrink-0">
                      <button
                        onClick={() => alert(`Opening AQAR ${aq.year} PDF Report`)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-xl transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" /> View PDF
                      </button>
                      <button
                        onClick={() => alert(`Downloading AQAR ${aq.year} Report`)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" /> Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: BEST PRACTICES */}
          {activeTab === 'best-practices' && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-slate-900">Institutional Best Practices</h3>
              <div className="space-y-6">
                {NAAC_DOCUMENTS.bestPractices.map((bp) => (
                  <div key={bp.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <h4 className="text-base font-bold text-blue-900">{bp.title}</h4>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p><strong>Objectives:</strong> {bp.objective}</p>
                      <p><strong>Context:</strong> {bp.context}</p>
                      <p className="p-3 bg-emerald-50 text-emerald-900 rounded-xl border border-emerald-200">
                        <strong>Evidence of Success:</strong> {bp.evidence}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SSS */}
          {activeTab === 'sss' && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-slate-900">{NAAC_DOCUMENTS.sss.title}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{NAAC_DOCUMENTS.sss.summary}</p>

              <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-amber-900 uppercase">Overall Satisfaction Score</span>
                  <div className="text-3xl font-black text-slate-900 mt-1">{NAAC_DOCUMENTS.sss.score}</div>
                </div>
                <button
                  onClick={() => alert('Downloading SSS Full Analysis Report')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow transition-colors"
                >
                  <Download className="w-4 h-4" /> Download SSS Report PDF
                </button>
              </div>
            </div>
          )}

          {/* TAB 5: DISTINCTIVENESS */}
          {activeTab === 'distinctiveness' && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
              <h3 className="text-xl font-bold text-slate-900">{NAAC_DOCUMENTS.institutionalDistinctiveness.title}</h3>
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {NAAC_DOCUMENTS.institutionalDistinctiveness.details}
              </p>
            </div>
          )}

          {/* TAB 6: ACADEMIC CALENDAR */}
          {activeTab === 'calendar' && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-slate-900">Academic Calendar 2026-27</h3>
              <div className="space-y-3">
                {NAAC_DOCUMENTS.academicCalendar.map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-4">
                    <div className="px-3 py-1.5 bg-blue-900 text-white text-xs font-bold rounded-lg shrink-0">
                      {item.month}
                    </div>
                    <p className="text-xs font-medium text-slate-800">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
