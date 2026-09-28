import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Briefcase, Send, CheckCircle2, Building, Mail, Phone } from 'lucide-react';

export const CareersPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const openPositions = [
    { title: 'Assistant Professor - Computer Science / IT', department: 'Degree College', qualification: 'M.Sc (CS/IT) / MCA / NET or SET qualified', type: 'Full-Time' },
    { title: 'Assistant Professor - Commerce & Accounting', department: 'Degree College', qualification: 'M.Com / M.B.A. / Ph.D / NET / SET', type: 'Full-Time' },
    { title: 'Junior College Teacher - Physics & Chemistry', department: 'Junior College (HSC)', qualification: 'M.Sc., B.Ed.', type: 'Full-Time' },
    { title: 'System Administrator & Lab Assistant', department: 'Computer Department', qualification: 'B.Sc IT / CS / Hardware Networking Diploma', type: 'Full-Time' }
  ];

  return (
    <>
      <Helmet>
        <title>Careers & Vacancies | G.R. Patil College Dombivli</title>
      </Helmet>

      <div className="bg-slate-50 py-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Careers' }]} />

          <SectionTitle
            badge="Join Our Faculty Team"
            title="Career Opportunities at G.R. Patil College"
            subtitle="We welcome dedicated educators, researchers, and administrative personnel to contribute to academic excellence in Dombivli."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Openings List */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-l-4 border-red-600 pl-3">Current Academic & Staff Vacancies</h3>

              <div className="space-y-4">
                {openPositions.map((pos, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded bg-red-50 text-red-700 text-[10px] font-bold uppercase">{pos.department}</span>
                      <span className="text-[11px] text-slate-500 font-semibold">{pos.type}</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{pos.title}</h4>
                    <p className="text-xs text-slate-600"><strong>Qualification:</strong> {pos.qualification}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Upload / Application Form */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl space-y-4">
                <h3 className="text-base font-bold text-slate-900">Apply for Faculty / Staff Role</h3>
                <p className="text-xs text-slate-500">Submit your application directly to the college recruitment committee.</p>

                {submitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="text-sm font-bold text-emerald-950">Resume Submitted!</h4>
                    <p className="text-xs text-emerald-800">Our administrative desk will contact shortlisted candidates.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-3 text-xs font-medium"
                  >
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Full Name *</label>
                      <input type="text" required placeholder="e.g. Dr. Suresh Kulkarni" className="w-full p-2.5 bg-slate-50 border rounded-xl" />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Email Address *</label>
                      <input type="email" required placeholder="email@domain.com" className="w-full p-2.5 bg-slate-50 border rounded-xl" />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Mobile Number *</label>
                      <input type="tel" required placeholder="10-digit mobile" className="w-full p-2.5 bg-slate-50 border rounded-xl" />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Position Applied For *</label>
                      <select className="w-full p-2.5 bg-slate-50 border rounded-xl">
                        <option>Assistant Professor - Computer Science / IT</option>
                        <option>Assistant Professor - Commerce & Accounting</option>
                        <option>Junior College Teacher - Physics & Chemistry</option>
                        <option>System Administrator & Lab Assistant</option>
                        <option>Administrative Staff / Clerk</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Brief Cover Message / Experience</label>
                      <textarea rows={3} placeholder="Mention total years of teaching experience..." className="w-full p-2.5 bg-slate-50 border rounded-xl" />
                    </div>

                    <button type="submit" className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> Submit Resume Application
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
