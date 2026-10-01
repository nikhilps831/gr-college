import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, GraduationCap, Phone, Mail, Award, Lock } from 'lucide-react';

export const MobileDrawer = ({ isOpen, onClose }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  if (!isOpen) return null;

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-[#FFF9F0]/60 backdrop-blur-sm transition-opacity" onClick={onClose} />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto animate-slideIn">
        {/* Header */}
        <div className="p-4 bg-[#FFF9F0] text-slate-800 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-[#E39B1B] font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-tight leading-tight">G.R. PATIL COLLEGE</h2>
              <p className="text-[10px] text-red-300">Dombivli • Affiliated to MU</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="px-4 py-4 space-y-1 text-sm font-medium text-slate-700 flex-1 overflow-y-auto custom-scrollbar">
          <Link to="/" onClick={onClose} className="block px-3 py-2.5 rounded-lg hover:bg-red-50 hover:text-red-900 font-semibold">
            Home
          </Link>

          {/* About */}
          <div>
            <button
              onClick={() => toggleSubmenu('about')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 text-slate-800 font-semibold"
            >
              <span>About</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === 'about' ? 'rotate-180 text-red-700' : ''}`} />
            </button>
            {openSubmenu === 'about' && (
              <div className="pl-4 py-1 space-y-1 border-l-2 border-red-200 ml-3">
                <Link to="/about" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">About College</Link>
                <Link to="/about/founder" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Founder</Link>
                <Link to="/about/management" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Management</Link>
                <Link to="/about/principal" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Principal's Desk</Link>
                <Link to="/about/vision-mission" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Vision & Mission</Link>
              </div>
            )}
          </div>

          {/* Academics */}
          <div>
            <button
              onClick={() => toggleSubmenu('academics')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 text-slate-800 font-semibold"
            >
              <span>Academics</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === 'academics' ? 'rotate-180 text-red-700' : ''}`} />
            </button>
            {openSubmenu === 'academics' && (
              <div className="pl-4 py-1 space-y-1 border-l-2 border-red-200 ml-3">
                <Link to="/academics/undergraduate" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Undergraduate</Link>
                <Link to="/academics/postgraduate" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Postgraduate</Link>
                <Link to="/academics/junior-college" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Junior College</Link>
              </div>
            )}
          </div>

          {/* Admissions */}
          <div>
            <button
              onClick={() => toggleSubmenu('admissions')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 text-slate-800 font-semibold"
            >
              <span>Admissions</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === 'admissions' ? 'rotate-180 text-red-700' : ''}`} />
            </button>
            {openSubmenu === 'admissions' && (
              <div className="pl-4 py-1 space-y-1 border-l-2 border-red-200 ml-3">
                <Link to="/admissions" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Admission Process</Link>
                <Link to="/admissions#eligibility" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Eligibility</Link>
                <Link to="/admissions#documents" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Documents</Link>
                <Link to="/admissions#important-dates" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Important Dates</Link>
                <Link to="/admissions#enquiry-form" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Enquiry Form</Link>
              </div>
            )}
          </div>

          {/* Campus */}
          <div>
            <button
              onClick={() => toggleSubmenu('campus')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 text-slate-800 font-semibold"
            >
              <span>Campus</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === 'campus' ? 'rotate-180 text-red-700' : ''}`} />
            </button>
            {openSubmenu === 'campus' && (
              <div className="pl-4 py-1 space-y-1 border-l-2 border-red-200 ml-3">
                <Link to="/campus/facilities" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Facilities</Link>
                <Link to="/gallery" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Gallery</Link>
                <Link to="/events" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Events</Link>
              </div>
            )}
          </div>

          {/* NAAC / IQAC */}
          <div>
            <button
              onClick={() => toggleSubmenu('naac')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 text-slate-800 font-semibold"
            >
              <span>NAAC / IQAC</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === 'naac' ? 'rotate-180 text-red-700' : ''}`} />
            </button>
            {openSubmenu === 'naac' && (
              <div className="pl-4 py-1 space-y-1 border-l-2 border-red-200 ml-3">
                <Link to="/naac-iqac/iqac" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">IQAC</Link>
                <Link to="/naac-iqac/aqar" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">AQAR</Link>
                <Link to="/naac-iqac/best-practices" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Best Practices</Link>
                <Link to="/naac-iqac/sss" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">SSS</Link>
                <Link to="/naac-iqac/institutional-distinctiveness" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Institutional Distinctiveness</Link>
                <Link to="/naac-iqac/academic-calendar" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Academic Calendar</Link>
              </div>
            )}
          </div>

          {/* Students */}
          <div>
            <button
              onClick={() => toggleSubmenu('students')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 text-slate-800 font-semibold"
            >
              <span>Students</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === 'students' ? 'rotate-180 text-red-700' : ''}`} />
            </button>
            {openSubmenu === 'students' && (
              <div className="pl-4 py-1 space-y-1 border-l-2 border-red-200 ml-3">
                <Link to="/notices" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Notices</Link>
                <Link to="/results" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Results</Link>
                <Link to="/downloads" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900">Downloads & Forms</Link>
                <Link to="/downloads#timetable" onClick={onClose} className="block py-1.5 px-2 text-xs text-slate-600 hover:text-red-900 font-medium">Timetable</Link>
              </div>
            )}
          </div>

          <Link to="/contact" onClick={onClose} className="block px-3 py-2.5 rounded-lg hover:bg-red-50 hover:text-red-900 font-semibold">
            Contact
          </Link>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3">
          <Link
            to="/admissions"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm py-2.5 rounded-xl shadow-md transition-colors"
          >
            Admissions 2026-27
          </Link>

          <Link
            to="/admin/login"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 bg-[#FFF9F0] text-slate-700 text-xs py-2 rounded-lg hover:bg-white transition-colors"
          >
            <Lock className="w-3.5 h-3.5" /> Staff / Admin CMS Login
          </Link>
        </div>
      </div>
    </div>
  );
};
