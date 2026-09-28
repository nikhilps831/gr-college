import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, ChevronDown, Phone, MapPin, Flame, ArrowRight, Sparkles } from 'lucide-react';
import { MobileDrawer } from './MobileDrawer';
import { SearchBarModal } from './SearchBarModal';
import { AdmissionModal } from './AdmissionModal';

export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 90);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* College Main Header Section (Clean White Background) */}
      <div className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo & Official Title */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <img
              src="https://www.grpatilcollegedombivli.in/assets/img/grpclogo.png"
              alt="G.R. Patil College Logo"
              className="h-14 sm:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-[11px] font-bold text-red-600 uppercase tracking-widest">
                M.S.P. MANDAL (REGD), MUMBRA (THANE). ESTD. 1978
              </span>
              <h1 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight leading-none group-hover:text-[#003366] transition-colors mt-0.5">
                G.R. PATIL COLLEGE
              </h1>
              <span className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mt-0.5">
                OF ARTS, SCIENCE & COMMERCE, BMS & JUNIOR COLLEGE DOMBIVLI
              </span>
              <span className="text-[10px] font-bold text-[#003366] uppercase tracking-widest mt-0.5">
                Affiliated to University of Mumbai
              </span>
            </div>
          </Link>

          {/* Right Header Contact & Info Box */}
          <div className="hidden lg:flex items-center gap-6 text-xs text-slate-600">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-blue-50 text-[#003366] border border-blue-100 flex items-center justify-center font-bold">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-bold text-slate-400 uppercase">Admission Contact</span>
                <a href="tel:9082629158" className="font-extrabold text-slate-900 hover:text-red-600 transition-colors">
                  +91 9082629158 / 9324142988
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-red-50 text-red-600 border border-red-100 flex items-center justify-center font-bold">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-bold text-slate-400 uppercase">Campus Location</span>
                <span className="font-bold text-slate-800">Sonarpada, Dombivli (East)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Main Navigation Bar - Deep Blue & Dark Blue Gradients (#020617 -> #1E3A8A) */}
      <header
        className={`w-full bg-gradient-to-r from-[#020617] via-[#091533] to-[#1E3A8A] text-white transition-all duration-300 z-40 ${isSticky ? 'sticky top-0 shadow-2xl bg-[#020617]/95 backdrop-blur-md border-b border-[#3B82F6]/40' : ''
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-13">
            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 font-bold text-[11px] uppercase tracking-wider text-slate-100">
              <Link
                to="/"
                className={`px-3 py-2.5 rounded-md transition-all ${isActive('/') && location.pathname === '/'
                    ? 'bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] text-white shadow-md border border-[#93C5FD]/30'
                    : 'hover:bg-gradient-to-r hover:from-[#1E3A8A]/90 hover:to-[#3B82F6]/80 hover:text-[#93C5FD]'
                  }`}
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 px-3 py-2.5 rounded-md hover:bg-gradient-to-r hover:from-[#1E3A8A]/90 hover:to-[#3B82F6]/80 hover:text-[#93C5FD] transition-all">
                  <span>About</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200 py-2 z-50">
                  <Link to="/about" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A] font-bold">About Institute</Link>
                  <Link to="/about/founder" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">Founder's Message</Link>
                  <Link to="/about/management" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">Management</Link>
                  <Link to="/about/principal" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">Principal's Desk</Link>
                  <Link to="/about/vision-mission" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">Vision & Mission</Link>
                </div>
              </div>

              {/* Academics Dropdown */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 px-3 py-2.5 rounded-md hover:bg-gradient-to-r hover:from-[#1E3A8A]/90 hover:to-[#3B82F6]/80 hover:text-[#93C5FD] transition-all">
                  <span>Academics</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200 py-2 z-50">
                  <Link to="/academics" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A] font-bold border-b">All Courses Directory</Link>
                  <Link to="/academics/undergraduate" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">UG Courses (B.Sc / BMS / BAF / B.Com)</Link>
                  <Link to="/academics/postgraduate" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">PG Courses (M.Sc / M.Com)</Link>
                  <Link to="/academics/junior-college" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">Junior College (XI / XII Science & Comm)</Link>
                </div>
              </div>

              {/* Facilities Dropdown */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 px-3 py-2.5 rounded-md hover:bg-gradient-to-r hover:from-[#1E3A8A]/90 hover:to-[#3B82F6]/80 hover:text-[#93C5FD] transition-all">
                  <span>Facilities</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200 py-2 z-50">
                  <Link to="/campus/facilities/science-laboratory" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">Science Lab</Link>
                  <Link to="/campus/facilities/computer-laboratory" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">Computer Lab</Link>
                  <Link to="/campus/facilities/library" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">Central Library</Link>
                  <Link to="/campus/facilities/conference-hall" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">Conference Hall</Link>
                  <Link to="/campus/facilities/sports-and-gymkhana" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">Sports & Gymkhana</Link>
                  <Link to="/campus/facilities/canteen" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">Canteen & Cafeteria</Link>
                </div>
              </div>

              <button
                onClick={() => setIsAdmissionModalOpen(true)}
                className="px-3 py-2.5 rounded-md hover:bg-gradient-to-r hover:from-[#1E3A8A]/90 hover:to-[#3B82F6]/80 hover:text-[#93C5FD] transition-all cursor-pointer text-left uppercase"
              >
                Admission
              </button>

              {/* Gallery Dropdown */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 px-3 py-2.5 rounded-md hover:bg-gradient-to-r hover:from-[#1E3A8A]/90 hover:to-[#3B82F6]/80 hover:text-[#93C5FD] transition-all">
                  <span>Gallery</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-48 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200 py-2 z-50">
                  <Link to="/gallery" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">Image Gallery</Link>
                  <Link to="/gallery/video" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">Video Gallery</Link>
                </div>
              </div>

              {/* NAAC Dropdown */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 px-3 py-2.5 rounded-md hover:bg-gradient-to-r hover:from-[#1E3A8A]/90 hover:to-[#3B82F6]/80 hover:text-[#93C5FD] transition-all">
                  <span>NAAC</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block w-60 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200 py-2 z-50">
                  <Link to="/naac-iqac/iqac" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A] font-bold">IQAC Portal</Link>
                  <Link to="/naac-iqac/aqar" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">AQAR Reports</Link>
                  <Link to="/naac-iqac/best-practices" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">Best Practices</Link>
                  <Link to="/naac-iqac/sss" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">SSS Report</Link>
                  <Link to="/naac-iqac/institutional-distinctiveness" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">Distinctiveness</Link>
                  <Link to="/naac-iqac/academic-calendar" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#1E3A8A]">Academic Calendar</Link>
                </div>
              </div>

              <Link to="/careers" className="px-3 py-2.5 rounded-md hover:bg-gradient-to-r hover:from-[#1E3A8A]/90 hover:to-[#3B82F6]/80 hover:text-[#93C5FD] transition-all">
                Careers
              </Link>
              <Link to="/downloads" className="px-3 py-2.5 rounded-md hover:bg-gradient-to-r hover:from-[#1E3A8A]/90 hover:to-[#3B82F6]/80 hover:text-[#93C5FD] transition-all">
                Downloads
              </Link>
              <Link to="/alumni" className="px-3 py-2.5 rounded-md hover:bg-gradient-to-r hover:from-[#1E3A8A]/90 hover:to-[#3B82F6]/80 hover:text-[#93C5FD] transition-all">
                Alumni
              </Link>
              <Link to="/results" className="px-3 py-2.5 rounded-md bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white font-extrabold transition-all border border-[#93C5FD]/30 shadow-sm">
                Results 2024-25
              </Link>
              <Link to="/contact" className="px-3 py-2.5 rounded-md hover:bg-gradient-to-r hover:from-[#1E3A8A]/90 hover:to-[#3B82F6]/80 hover:text-[#93C5FD] transition-all">
                Contact
              </Link>
            </nav>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:bg-[#1E3A8A] rounded-lg transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4 text-[#93C5FD]" />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="xl:hidden p-2 text-white hover:bg-[#1E3A8A] rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Announcement Section (Positioned Directly Below Navbar with Gradient & Marquee) */}
      <div className="bg-gradient-to-r from-[#020617] via-[#09132d] to-[#020617] text-slate-100 border-b border-[#1E3A8A] text-xs py-2 px-4 shadow-sm relative z-30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider shrink-0 shadow-md border border-[#93C5FD]/40">
            <Flame className="w-3 h-3 text-[#93C5FD] animate-pulse" />
            <span>Latest Announcements</span>
          </div>
          <div className="overflow-hidden relative flex-1 text-xs font-medium text-slate-200">
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="6"
              className="py-0.5 cursor-pointer"
              onMouseOver={(e) => e.target.stop && e.target.stop()}
              onMouseOut={(e) => e.target.start && e.target.start()}
            >
              <span className="inline-flex items-center gap-6">
                <Link to="/results" className="hover:text-[#93C5FD] transition-colors inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6]"></span>
                  <span>Results of Academic Year 2024-25 Announced — Check Grade Cards Online!</span>
                </Link>
                <span className="text-slate-600">★</span>
                <button
                  onClick={() => setIsAdmissionModalOpen(true)}
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-[#93C5FD] font-bold cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-ping"></span>
                  <span>Admissions Open 2026-27 (BMS, BAF, B.Sc IT, B.Com, XI & XII Science/Commerce) — Apply Online Now!</span>
                </button>
                <span className="text-slate-600">★</span>
                <Link to="/notices" className="hover:text-[#93C5FD] transition-colors inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#93C5FD]"></span>
                  <span>Degree & Junior College Convocation & Annual Sports Registration Notice</span>
                </Link>
                <span className="text-slate-600">★</span>
                <Link to="/academics" className="hover:text-[#93C5FD] transition-colors inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>University of Mumbai Examination Hall Ticket & Schedule Published</span>
                </Link>
              </span>
            </marquee>
          </div>
        </div>
      </div>

      {/* Mobile Drawer & Search / Admission Modals */}
      <MobileDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <SearchBarModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <AdmissionModal isOpen={isAdmissionModalOpen} onClose={() => setIsAdmissionModalOpen(false)} />
    </>
  );
};

