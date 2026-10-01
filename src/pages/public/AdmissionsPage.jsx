import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { AdmissionEnquiryForm } from '../../components/admissions/AdmissionEnquiryForm';
import { CheckCircle2, Calendar, FileText, ArrowRight, Sparkles, BookOpen, GraduationCap, School } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdmissionsPage = () => {
  const steps = [
    { number: '01', title: 'Select Course', description: 'Choose your desired stream across B.Sc, BMS, B.Com, M.Sc or HSC Junior College.' },
    { number: '02', title: 'Check Eligibility', description: 'Ensure minimum percentage and subject prerequisite criteria are fulfilled.' },
    { number: '03', title: 'Prepare Documents', description: 'Gather 10th/12th marksheets, leaving certificate, photos, and ID proof.' },
    { number: '04', title: 'Submit Application', description: 'Complete University of Mumbai pre-admission registration and college application form.' },
    { number: '05', title: 'Document Verification', description: 'Visit college admission counter for physical document verification.' },
    { number: '06', title: 'Admission Confirmation', description: 'Pay fees via online/offline mode to secure your seat allocation.' }
  ];

  const requiredDocuments = [
    'Original 10th & 12th HSC Marksheet + 3 Attested Photocopies',
    'Original School / Junior College Leaving Certificate (LC)',
    'Aadhar Card Photocopy & Passport Size Photographs (4 Copies)',
    'Cast Certificate & Validity Certificate (if applying under reserved category)',
    'University of Mumbai Pre-Admission Online Enrolment Application Form Copy',
    'Migration Certificate (for students coming from Other Boards/States)',
    'Gap Certificate Affidavit (if applicable for gap years)'
  ];

  const importantDates = [
    { event: 'Commencement of Pre-Admission Online Registration', date: '25th May 2026', status: 'Active' },
    { event: 'Submission of Physical Forms at College Desk', date: '10th June - 30th June 2026', status: 'Ongoing' },
    { event: 'Display of First Merit List (University Portal)', date: '05th July 2026', status: 'Upcoming' },
    { event: 'Verification of Documents & Fee Payment for 1st Merit List', date: '06th July - 10th July 2026', status: 'Upcoming' },
    { event: 'Commencement of FY Degree Classes & Orientation', date: '15th July 2026', status: 'Upcoming' }
  ];

  return (
    <>
      <Helmet>
        <title>Admissions 2026-27 | G.R. Patil College Dombivli</title>
        <meta name="description" content="Apply for UG, PG, and Junior College Admissions 2026-27 at G.R. Patil College of Arts, Science & Commerce, Dombivli." />
      </Helmet>

      {/* Premium Hero Banner */}
      <div className="bg-[#FFF9F0] py-12 sm:py-16 relative overflow-hidden border-b border-slate-200/60">
        {/* Decorative background blurs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e5322c] rounded-full blur-[120px] opacity-[0.04] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0f3b73] rounded-full blur-[100px] opacity-[0.05] translate-y-1/2 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Admissions 2026-27' }]} />
          
          <div className="max-w-3xl space-y-5 mt-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-[#e5322c]/20 text-[#e5322c] text-[11px] font-black uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-[#e39b1b]" /> Admissions Open Academic Year 2026-27
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0f3b73] tracking-tight leading-[1.15]">
              Begin Your Future at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5322c] to-[#ff6b66]">G.R. Patil College</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-2xl">
              Transparent, merit-based admission process for Undergraduate degrees, Postgraduate Master courses, and HSC Junior College streams.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Admission Stream Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-[#0f3b73]/5 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0f3b73] to-[#e5322c] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-14 h-14 rounded-2xl bg-slate-50 text-[#0f3b73] group-hover:bg-[#0f3b73] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0f3b73] mb-3">Undergraduate Admissions</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
                Direct & Merit Admissions for B.Sc CS, B.Sc IT, BMS, BAF, BBI, B.Com, BAMMC.
              </p>
              <Link to="/academics/undergraduate" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#e5322c] group-hover:text-[#c42520] transition-colors mt-auto">
                <span>Explore UG Programs</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-[#0f3b73]/5 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0f3b73] to-[#e5322c] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-14 h-14 rounded-2xl bg-slate-50 text-[#0f3b73] group-hover:bg-[#0f3b73] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0f3b73] mb-3">Postgraduate Admissions</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
                M.Sc Computer Science & M.Sc IT admissions based on B.Sc degree merit scores.
              </p>
              <Link to="/academics/postgraduate" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#e5322c] group-hover:text-[#c42520] transition-colors mt-auto">
                <span>Explore PG Masters</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-[#0f3b73]/5 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0f3b73] to-[#e5322c] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-14 h-14 rounded-2xl bg-slate-50 text-[#0f3b73] group-hover:bg-[#0f3b73] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                <School className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0f3b73] mb-3">Junior College Admissions</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
                XI & XII Science (PCMB / IT / CS Bifocal) & Commerce stream online admissions.
              </p>
              <Link to="/academics/junior-college" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#e5322c] group-hover:text-[#c42520] transition-colors mt-auto">
                <span>Explore Junior College</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Admission Process Timeline */}
          <div>
            <SectionTitle badge="Step-by-Step Guide" title="Admission Process Workflow" subtitle="Follow these simple steps to complete your enrollment at G.R. Patil College without any hassle." />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#e5322c]/40 transition-all duration-300 relative overflow-hidden">
                  {/* Huge background number */}
                  <span className="text-8xl font-black text-slate-50 absolute -bottom-4 -right-4 group-hover:text-[#e5322c]/[0.03] transition-colors duration-500 pointer-events-none z-0">
                    {step.number}
                  </span>
                  
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-[#e5322c]/10 text-[#0f3b73] group-hover:text-[#e5322c] flex items-center justify-center font-black text-lg transition-colors duration-300 relative z-10 mb-5">
                    {idx + 1}
                  </div>
                  <h4 className="text-lg font-extrabold text-[#0f3b73] relative z-10 mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed relative z-10">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form & Documents Section Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Required Documents & Dates */}
            <div id="documents" className="lg:col-span-5 space-y-8">
              
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-xl font-extrabold text-[#0f3b73] flex items-center gap-2.5 pb-4 border-b border-slate-100">
                  <FileText className="w-6 h-6 text-[#e5322c]" /> Checklist of Required Documents
                </h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Keep photocopies and original documents ready:</p>
                
                <ul className="space-y-4">
                  {requiredDocuments.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Important Dates */}
              <div id="important-dates" className="bg-[#0f3b73] p-8 rounded-3xl shadow-xl relative overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>
                
                <h3 className="text-xl font-extrabold text-white flex items-center gap-2.5 pb-6 border-b border-white/10 mb-6 relative z-10">
                  <Calendar className="w-6 h-6 text-[#e39b1b]" /> Important Admission Schedule
                </h3>
                
                <div className="space-y-4 relative z-10">
                  {importantDates.map((item, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-black text-[#e39b1b]">{item.date}</span>
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                          item.status === 'Active' ? 'bg-emerald-500/20 text-emerald-300' :
                          item.status === 'Ongoing' ? 'bg-amber-500/20 text-amber-300' :
                          'bg-slate-500/20 text-slate-300'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-sm text-slate-200 font-medium leading-snug">{item.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Admission Form Component */}
            <div id="enquiry-form" className="lg:col-span-7">
              <AdmissionEnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
