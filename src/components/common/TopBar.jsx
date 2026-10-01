import React, { useState } from 'react';
import { Phone, Mail, ArrowRight, GraduationCap, Star } from 'lucide-react';
import { AdmissionModal } from './AdmissionModal';

export const TopBar = () => {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-[#209d2e] text-white text-[11px] sm:text-xs relative z-50 py-2 sm:py-2.5">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 flex flex-col xl:flex-row items-center justify-between gap-2.5 xl:gap-0">

          {/* Left Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full xl:w-auto">
            {/* Trust Badge */}
            <div className="flex items-center gap-1.5 border border-white/80 px-2.5 sm:px-3 py-1 rounded-full text-white font-bold tracking-wide uppercase text-[9px] sm:text-[10px] md:text-[11px] whitespace-nowrap">
              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white" />
              <span>M.S.P. MANDAL (REGD) ESTD. 1978</span>
            </div>

            <span className="text-white/40 hidden sm:inline">|</span>

            {/* Affiliation */}
            <div className="flex items-center gap-1.5 text-white/95 font-medium text-[10px] sm:text-[11px] text-center">
              <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="whitespace-nowrap">Affiliated to <strong className="font-bold text-white">University of Mumbai</strong></span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-medium w-full xl:w-auto">
            {/* Phone Helpline */}
            <a href="tel:9082629158" className="flex items-center gap-1.5 hover:text-white/80 transition-colors text-[10px] sm:text-[11px]">
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white shrink-0" />
              <span className="whitespace-nowrap">+91 9082629158 / 9324142988</span>
            </a>

            {/* Official Email */}
            <a href="mailto:grpatilcollegedombivli@gmail.com" className="hidden lg:flex items-center gap-1.5 hover:text-white/80 transition-colors text-[10px] sm:text-[11px]">
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">grpatilcollegedombivli@gmail.com</span>
            </a>

            {/* CTA Button */}
            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="inline-flex items-center gap-1.5 bg-white text-[#8b1538] font-bold text-[10px] sm:text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer shrink-0 shadow-sm"
            >
              <span className="whitespace-nowrap">ADMISSIONS 2026</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />
    </>
  );
};
