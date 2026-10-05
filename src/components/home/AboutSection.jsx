import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, UserCheck, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Official Welcome Banner Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <img
                src="/images/sliders/slider2.jpg"
                alt="G.R. Patil College Campus & Students"
                className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 bg-white text-slate-900 p-5 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 max-w-xs space-y-1">
              <div className="flex items-center gap-2 text-[#e5322c] font-black text-xl tracking-tight">
                <Award className="w-6 h-6 text-[#209d2e]" />
                <span>ESTD. 1978</span>
              </div>
              <p className="text-xs font-bold text-[#0f3b73]">Mumbra Shikshan Prasarak Mandal</p>
              <p className="text-[11px] font-medium text-slate-500">Running 16 Schools, 4 Junior Colleges & 3 Degree Colleges.</p>
            </div>
          </motion.div>

          {/* Right Column: Official Welcome Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e5322c]/10 text-[#e5322c] border border-[#e5322c]/20 text-[10px] font-bold uppercase tracking-wider mb-3">
                Welcome to M.S.P. Mandal
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f3b73] tracking-tight leading-tight">
                G.R. Patil College of Arts, Science & Commerce, Dombivli
              </h2>
            </div>

            <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
              Mumbra Shikshan Prasarak Mandal, Dombivli, an educational institution was established in the year 1978 & was registered under Bombay Public Trust Act, 1950 & Societies Registration Act, 1960.
            </p>

            <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
              The Trust runs 16 Schools (Primary and Secondary), 4 Junior Colleges, 3 Degree Colleges located at Mumbra, Dombivli and Titwala, and one Technical College. G.R. Patil College is committed to enlightening society by providing quality knowledge and enriching social values.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2.5 text-slate-700 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#209d2e] shrink-0" />
                <span>Affiliated to University of Mumbai</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#209d2e] shrink-0" />
                <span>Industrial Visits & Educational Tours</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#209d2e] shrink-0" />
                <span>Audio Visual Tools & Seminars</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#209d2e] shrink-0" />
                <span>Vocational & Professional Programs</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-5 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[14px] bg-[#e5322c] hover:bg-[#c92722] text-white font-bold text-xs shadow-md transition-colors"
              >
                <span>Read Full History</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about/principal"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[14px] bg-white hover:bg-slate-50 text-[#0f3b73] font-bold text-xs border border-[#209d2e] transition-colors shadow-sm"
              >
                <UserCheck className="w-4 h-4 text-[#0f3b73]" />
                <span>Principal's Desk</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
