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

      {/* Admissions Hero Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-14 border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Admissions 2026-27' }]} />
          
          <div className="max-w-3xl space-y-4 mt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Admissions Open Academic Year 2026-27
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Begin Your Future at G.R. Patil College
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Transparent, merit-based admission process for Undergraduate degrees, Postgraduate Master courses, and HSC Junior College streams.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Admission Stream Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 border border-blue-200 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Undergraduate Admissions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct & Merit Admissions for B.Sc CS, B.Sc IT, BMS, BAF, BBI, B.Com, BAMMC.
              </p>
              <Link to="/academics/undergraduate" className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 pt-2">
                <span>View UG Programs</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-900 border border-purple-200 flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Postgraduate Admissions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                M.Sc Computer Science & M.Sc IT admissions based on B.Sc degree merit scores.
              </p>
              <Link to="/academics/postgraduate" className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 pt-2">
                <span>View PG Masters</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 flex items-center justify-center">
                <School className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Junior College Admissions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                XI & XII Science (PCMB / IT / CS Bifocal) & Commerce stream online admissions.
              </p>
              <Link to="/academics/junior-college" className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 pt-2">
                <span>View Junior College</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Admission Process Timeline */}
          <div>
            <SectionTitle badge="Step-by-Step Guide" title="Admission Process Workflow" subtitle="Follow these simple steps to complete your enrollment at G.R. Patil College." />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden space-y-2">
                  <span className="text-4xl font-black text-slate-200 absolute top-4 right-4">{step.number}</span>
                  <h4 className="text-base font-bold text-slate-900 relative z-10">{step.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed relative z-10">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form & Documents Section Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Required Documents */}
            <div id="documents" className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-700" /> Checklist of Required Documents
                </h3>
                <p className="text-xs text-slate-500">Keep photocopies and original documents ready during desk verification:</p>
                
                <ul className="space-y-3 text-xs text-slate-700">
                  {requiredDocuments.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Important Dates */}
              <div id="important-dates" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-amber-600" /> Important Admission Schedule
                </h3>
                <div className="space-y-3">
                  {importantDates.map((item, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-900">{item.date}</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase">{item.status}</span>
                      </div>
                      <p className="text-xs text-slate-700 font-medium">{item.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Admission Form */}
            <div id="enquiry-form" className="lg:col-span-7">
              <AdmissionEnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
