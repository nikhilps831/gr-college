import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Institutional Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-900 p-2.5 flex items-center justify-center text-amber-400 border border-blue-600/50 shadow-md">
                <GraduationCap className="w-full h-full" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base tracking-tight">G.R. PATIL COLLEGE</h3>
                <p className="text-xs text-slate-400 font-medium">Arts, Science & Commerce</p>
                <p className="text-[10px] text-emerald-400 uppercase font-bold tracking-widest mt-0.5">BMS & Junior College</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering students with academic excellence, modern skill sets, and holistic values in Sonarpada, Dombivli. Affiliated to University of Mumbai and approved by Govt. of Maharashtra.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-blue-400 border border-blue-900/60 text-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Affiliated to University of Mumbai
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-amber-400 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">›</span> About College
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">›</span> Academics & Programs
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">›</span> Admissions 2026-27
                </Link>
              </li>
              <li>
                <Link to="/notices" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">›</span> Latest Notices & Circulars
                </Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">›</span> Examination Results
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">›</span> Downloads & Forms
                </Link>
              </li>
              <li>
                <Link to="/naac-iqac" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">›</span> NAAC / IQAC Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-emerald-400 pl-2">
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
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-blue-400 pl-2">
              Campus Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  G.R. Patil College Campus, Opposite Sonarpada Ground, Manpada Road, Sonarpada, Dombivli (East), Maharashtra - 421204
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+912512401122" className="hover:text-white transition-colors">
                  0251-2401122 / 2401133
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:info@grpatilcollegedombivli.in" className="hover:text-white transition-colors">
                  info@grpatilcollegedombivli.in
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Office Hours: 09:00 AM - 05:00 PM (Mon - Sat)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            © 2026 <span className="text-slate-200 font-semibold">G.R. Patil College of Arts, Science & Commerce</span>. All rights reserved. Affiliated to University of Mumbai.
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <Link to="/students" className="hover:text-slate-200">Student Portal</Link>
            <span>•</span>
            <Link to="/naac-iqac/iqac" className="hover:text-slate-200">IQAC</Link>
            <span>•</span>
            <Link to="/admin/login" className="hover:text-amber-400 transition-colors font-medium">Admin CMS Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
