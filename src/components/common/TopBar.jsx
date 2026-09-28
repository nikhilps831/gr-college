import React, { useState } from 'react';
import { Phone, Mail, Award, ArrowRight, ShieldCheck, GraduationCap, Star } from 'lucide-react';
import { AdmissionModal } from './AdmissionModal';

export const TopBar = () => {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-[#020617] text-white text-xs border-b border-[#3B82F6]/30 overflow-hidden relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-between">
          {/* Left Section: Deep Blue to Dark Blue Gradient (#020617 -> #091533 -> #1E3A8A) */}
          <div className="flex-1 flex flex-wrap items-center gap-3 py-2 px-4 bg-gradient-to-r from-[#020617] via-[#0b1736] to-[#1E3A8A] text-slate-100">
            {/* Trust Badge with Soft Blue Accent Gradient */}
            <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#1E3A8A]/50 to-[#3B82F6]/30 border border-[#93C5FD]/50 text-[#93C5FD] px-3 py-0.5 rounded-full text-[11px] font-black tracking-wide uppercase shadow-sm">
              <Star className="w-3 h-3 text-[#93C5FD] fill-[#93C5FD]" />
              <span>M.S.P. MANDAL (REGD) ESTD. 1978</span>
            </div>

            <span className="hidden sm:inline text-[#3B82F6]/60">|</span>

            {/* Affiliation */}
            <div className="hidden sm:flex items-center gap-1.5 text-slate-200 text-[11px] font-semibold">
              <GraduationCap className="w-3.5 h-3.5 text-[#93C5FD]" />
              <span>Affiliated to <strong className="text-white font-bold">University of Mumbai</strong></span>
            </div>
          </div>

          {/* Right Ribbon Section: Dark Blue to Vivid Blue Gradient (#1E3A8A -> #2563EB -> #3B82F6) */}
          <div className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] text-white py-2 px-4 flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 md:border-l border-[#3B82F6]/40 shadow-lg">
            {/* Phone Helpline */}
            <a
              href="tel:9082629158"
              className="flex items-center gap-1.5 font-bold hover:text-[#93C5FD] transition-colors text-[11px] sm:text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#93C5FD]" />
              <span>+91 9082629158 / 9324142988</span>
            </a>

            {/* Official Email */}
            <a
              href="mailto:grpatilcollegedombivli@gmail.com"
              className="hidden lg:flex items-center gap-1.5 text-blue-100 hover:text-white transition-colors text-[11px]"
            >
              <Mail className="w-3.5 h-3.5 text-[#93C5FD]" />
              <span>grpatilcollegedombivli@gmail.com</span>
            </a>

            {/* Soft Blue to Vivid Blue CTA Gradient Button */}
            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#93C5FD] via-[#60A5FA] to-[#3B82F6] hover:from-white hover:to-[#93C5FD] text-[#020617] font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-lg hover:shadow-xl transition-all border border-white/50 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Admissions 2026</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Admission Modal Popup */}
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />
    </>
  );
};





