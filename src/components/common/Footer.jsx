import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#FFF9F0] text-slate-600 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative Swooping Curves Background Graphic (mirrored from header) */}
      <div className="absolute inset-x-0 top-0 h-48 pointer-events-none" aria-hidden="true">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'scaleY(-1)' }}
        >
          {/* Main orange swooping curve */}
          <path
            d="M0,120 C200,60 400,30 600,80 C800,130 1000,90 1200,60 L1440,40 L1440,200 L0,200 Z"
            fill="#E39B1B"
            opacity="0.07"
          />
          {/* Secondary green swooping curve */}
          <path
            d="M0,160 C300,100 500,70 750,100 C1000,130 1200,70 1440,50 L1440,200 L0,200 Z"
            fill="#8FB622"
            opacity="0.08"
          />
          {/* Thin accent orange line sweep */}
          <path
            d="M0,140 C250,80 500,55 700,90 C900,125 1100,80 1440,55"
            fill="none"
            stroke="#E39B1B"
            strokeWidth="2"
            opacity="0.15"
          />
          {/* Thin accent green line sweep */}
          <path
            d="M0,170 C350,110 600,85 800,110 C1050,140 1250,85 1440,65"
            fill="none"
            stroke="#8FB622"
            strokeWidth="2"
            opacity="0.15"
          />
          {/* Subtle top-left orange arc */}
          <path
            d="M0,50 C150,20 350,10 550,40 C750,70 900,55 1050,35 L1050,35"
            fill="none"
            stroke="#E39B1B"
            strokeWidth="1.5"
            opacity="0.1"
          />
          {/* Faint wide gradient fill */}
          <path
            d="M0,80 C200,30 450,15 650,50 C850,85 1000,60 1150,40 L1440,25 L1440,200 L0,200 Z"
            fill="url(#footerGradientSweep)"
            opacity="0.04"
          />
          <defs>
            <linearGradient id="footerGradientSweep" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E39B1B" />
              <stop offset="50%" stopColor="#d4a830" />
              <stop offset="100%" stopColor="#8FB622" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Institutional Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo/grpclogo.png"
                alt="G.R. Patil College Logo"
                className="h-14 w-auto object-contain shrink-0"
              />
              <div>
                <h3 className="font-extrabold text-slate-800 text-base tracking-tight">G.R. PATIL COLLEGE</h3>
                <p className="text-xs text-slate-500 font-medium">Arts, Science & Commerce</p>
                <p className="text-[10px] text-emerald-400 uppercase font-bold tracking-widest mt-0.5">BMS & Junior College</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Empowering students with academic excellence, modern skill sets, and holistic values in Sonarpada, Dombivli. Affiliated to University of Mumbai and approved by Govt. of Maharashtra.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9F0] text-[#e5322c] border border-[#e5322c]/60 text-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#e5322c]" />
                Affiliated to University of Mumbai
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-slate-800 font-bold text-sm uppercase tracking-wider border-l-2 border-amber-400 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-[#E39B1B] transition-colors flex items-center gap-1.5">
                  <span className="text-[#E39B1B]">›</span> About College
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-[#E39B1B] transition-colors flex items-center gap-1.5">
                  <span className="text-[#E39B1B]">›</span> Academics & Programs
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-[#E39B1B] transition-colors flex items-center gap-1.5">
                  <span className="text-[#E39B1B]">›</span> Admissions 2026-27
                </Link>
              </li>
              <li>
                <Link to="/notices" className="hover:text-[#E39B1B] transition-colors flex items-center gap-1.5">
                  <span className="text-[#E39B1B]">›</span> Latest Notices & Circulars
                </Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-[#E39B1B] transition-colors flex items-center gap-1.5">
                  <span className="text-[#E39B1B]">›</span> Examination Results
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="hover:text-[#E39B1B] transition-colors flex items-center gap-1.5">
                  <span className="text-[#E39B1B]">›</span> Downloads & Forms
                </Link>
              </li>
              <li>
                <Link to="/naac-iqac" className="hover:text-[#E39B1B] transition-colors flex items-center gap-1.5">
                  <span className="text-[#E39B1B]">›</span> NAAC / IQAC Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-slate-800 font-bold text-sm uppercase tracking-wider border-l-2 border-emerald-400 pl-2">
              Academic Streams
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/academics/course/bsc-computer-science" className="hover:text-emerald-400 transition-colors">
                  • B.Sc Computer Science
                </Link>
              </li>
              <li>
                <Link to="/academics/course/bsc-information-technology" className="hover:text-emerald-400 transition-colors">
                  • B.Sc Information Technology
                </Link>
              </li>
              <li>
                <Link to="/academics/course/bachelor-of-management-studies" className="hover:text-emerald-400 transition-colors">
                  • Bachelor of Management Studies (BMS)
                </Link>
              </li>
              <li>
                <Link to="/academics/course/bcom-accounting-and-finance" className="hover:text-emerald-400 transition-colors">
                  • B.Com (Accounting & Finance - BAF)
                </Link>
              </li>
              <li>
                <Link to="/academics/course/bachelor-of-commerce" className="hover:text-emerald-400 transition-colors">
                  • B.Com (General)
                </Link>
              </li>
              <li>
                <Link to="/academics/course/msc-computer-science" className="hover:text-emerald-400 transition-colors">
                  • M.Sc Computer Science / M.Sc IT
                </Link>
              </li>
              <li>
                <Link to="/academics/junior-college" className="hover:text-emerald-400 transition-colors">
                  • Junior College (Science & Commerce)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Hours */}
          <div className="space-y-3">
            <h4 className="text-slate-800 font-bold text-sm uppercase tracking-wider border-l-2 border-[#e5322c] pl-2">
              Campus Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e5322c] shrink-0 mt-0.5" />
                <span>
                  G.R. Patil College Campus, Opposite Sonarpada Ground, Manpada Road, Sonarpada, Dombivli (East), Maharashtra - 421204
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e5322c] shrink-0" />
                <a href="tel:+912512401122" className="hover:text-slate-800 transition-colors">
                  0251-2401122 / 2401133
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#e5322c] shrink-0" />
                <a href="mailto:info@grpatilcollegedombivli.in" className="hover:text-slate-800 transition-colors">
                  info@grpatilcollegedombivli.in
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#E39B1B] shrink-0" />
                <span>Office Hours: 09:00 AM - 05:00 PM (Mon - Sat)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center md:text-left">
            © 2026 <span className="text-slate-700 font-semibold">G.R. Patil College of Arts, Science & Commerce</span>. All rights reserved. Affiliated to University of Mumbai.
          </p>

          {/* <div className="flex items-center gap-4 text-slate-500">
            <Link to="/students" className="hover:text-slate-700">Student Portal</Link>
            <span>•</span>
            <Link to="/naac-iqac/iqac" className="hover:text-slate-700">IQAC</Link>
            <span>•</span>
            <Link to="/admin/login" className="hover:text-[#E39B1B] transition-colors font-medium">Admin CMS Login</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
