import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Award, ArrowRight, CheckCircle } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Exact Banner Image from Official Site: assets/img/1920x800/home-slider-2.jpg */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://www.grpatilcollegedombivli.in/assets/img/1920x800/home-slider-2.jpg')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-[#0d2b45]/90" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center md:text-left z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-900/80 border border-red-500/50 text-white text-xs font-bold tracking-wide backdrop-blur-md">
              <Award className="w-4 h-4 text-amber-400" />
              <span>M.S.P. MANDAL (REGD) • Affiliated to University of Mumbai</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              G.R. PATIL COLLEGE <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-amber-300 to-amber-400">
                ARTS, SCIENCE & COMMERCE
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl font-bold text-amber-300 tracking-wide">
              BMS & JUNIOR COLLEGE DOMBIVLI (ESTD. 1978)
            </h2>

            <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed font-medium">
              Knowledge is Power. Providing quality higher education, professional vocational programs, digital laboratory infrastructure, and holistic development in Sonarpada, Dombivli.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Link
                to="/academics"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-lg shadow-red-900/50 hover:scale-105 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Academic Programs</span>
              </Link>
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-lg hover:scale-105 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Admissions 2026-27</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Card with Official Founder Slogan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="bg-[#0d2b45]/90 border border-slate-700 rounded-2xl p-6 shadow-2xl space-y-4 text-center">
              <img
                src="https://www.grpatilcollegedombivli.in/assets/img/GRPatilSir.jpg"
                alt="Shikshan Maharishi Shri G.R. Patil Sir"
                className="w-28 h-32 object-cover rounded-2xl mx-auto border-2 border-amber-400 shadow-md"
              />
              <div className="space-y-1">
                <h4 className="font-extrabold text-amber-300 text-sm">Shikshan Maharishi Shri G.R. Patil</h4>
                <p className="text-[11px] text-slate-300 font-semibold">Founder, G.R. Patil Institutions</p>
              </div>

              <div className="p-3 bg-red-950/60 rounded-xl border border-red-800">
                <p className="text-xs font-serif italic text-white">"Complete the Task Undertaken"</p>
              </div>

              <Link
                to="/admissions"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow transition-all"
              >
                <span>Online Admission Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
