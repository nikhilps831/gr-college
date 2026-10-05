import React from 'react';
import { BookOpen, Sparkles, Award, ArrowRight, Book, FlaskConical, Users, GraduationCap, Building2, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="relative bg-white pt-24 xl:pt-32 pb-48 xl:pb-64 overflow-hidden">
      {/* Background Image & Overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat xl:bg-right"
        style={{ backgroundImage: `url('/images/sliders/home-slider-2.jpg')` }}
      />
      {/* White gradient fading to transparent on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent/10" />

      {/* Decorative Dots Pattern */}
      <div className="absolute top-[20%] left-[2%] opacity-40">
        <svg width="80" height="80" viewBox="0 0 100 100" className="fill-[#93c5fd]">
          {Array.from({ length: 4 }).map((_, i) => (
            Array.from({ length: 8 }).map((_, j) => (
              <circle key={`left-${i}-${j}`} cx={10 + j * 12} cy={10 + i * 12} r="2.5" />
            ))
          ))}
        </svg>
      </div>
      <div className="absolute top-[30%] right-[2%] opacity-50 hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 100 100" className="fill-[#93c5fd]">
          {Array.from({ length: 6 }).map((_, i) => (
            Array.from({ length: 5 }).map((_, j) => (
              <circle key={`right-${i}-${j}`} cx={10 + j * 15} cy={10 + i * 15} r="2.5" />
            ))
          ))}
        </svg>
      </div>

      {/* Abstract Shapes (Corner Swooshes) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-green-500 to-green-600 rounded-full blur-[80px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-500 to-orange-400 rounded-full blur-[100px] opacity-20 translate-x-1/3 translate-y-1/3"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl">


          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-2"
          >
            <span className="text-[#0f3b73]">G.R. PATIL </span>
            <span className="text-[#0f3b73]">COLLEGE</span>
          </motion.h1>

          {/* Programs Line */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-[#e5322c] font-extrabold text-base md:text-xl lg:text-2xl tracking-wide mb-6 uppercase"
          >
            Post Graduate <span className="text-gray-400 font-light mx-1 md:mx-2">/</span>
            Graduate <span className="text-gray-400 font-light mx-1 md:mx-2">/</span>
            Junior College <span className="text-gray-400 font-light mx-1 md:mx-2">/</span>
            School
          </motion.h2>

          {/* Subheading */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl font-black text-[#0f3b73] mb-6"
          >
            BMS & JUNIOR COLLEGE DOMBIVLI <span className="text-[#0f3b73] font-bold">(ESTD. 1978)</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[#334155] font-semibold text-sm md:text-base max-w-2xl mb-10 leading-relaxed"
          >
            Knowledge is Power. Providing quality higher education, professional vocational
            programs, digital laboratory infrastructure, and holistic development in Sonarpada,
            Dombivli.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link to="/academics" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#e5322c] text-white font-bold text-sm shadow-[0_4px_15px_rgba(235,116,36,0.3)] hover:bg-[#d6661c] hover:-translate-y-0.5 transition-all w-full sm:w-auto">
              <BookOpen className="w-4 h-4" />
              <span>Explore Academic Programs</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link to="/admissions" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-[#e5322c] border-2 text-[#e5322c] font-bold text-sm  hover:-translate-y-0.5 transition-all w-full sm:w-auto">
              <GraduationCap className="w-4 h-4" />
              <span>Admissions 2026-27</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        </div>
      </div>



    </div>
  );
};
