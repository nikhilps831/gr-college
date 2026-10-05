import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, ChevronDown, Phone, MapPin, Home, GraduationCap, ArrowRight } from 'lucide-react';
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
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <>
      {/* Top Announcement Marquee */}
      <div className="bg-gradient-to-r from-[#0a2850] via-[#0f3b73] to-[#0a2850] text-white relative z-50 border-b border-white/10 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center overflow-hidden">
          <div className="flex items-center gap-2 bg-[#e5322c] text-white font-black px-3 py-1 rounded-sm text-[11px] uppercase tracking-widest shrink-0 mr-4 shadow-[0_0_10px_rgba(229,50,44,0.4)] z-10 relative">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Latest Updates
          </div>
          
          {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
          <marquee className="text-[13.5px] font-bold tracking-wide text-white/90 drop-shadow-sm flex items-center" scrollamount="5" onMouseOver={(e) => e.target.stop()} onMouseOut={(e) => e.target.start()}>
            <span className="inline-block mr-16 hover:text-white transition-colors cursor-pointer">
              <span className="text-[#e39b1b] mr-2">🌟</span> 
              Admissions Open for Academic Year 2026-27 for Junior College & Degree Courses (B.Sc, BMS, B.Com, BAF, M.Sc, M.Com). <span className="text-[#e39b1b] underline underline-offset-2 ml-1">Apply Now!</span>
            </span>
            <span className="inline-block mr-16 hover:text-white transition-colors cursor-pointer">
              <span className="text-emerald-400 mr-2">📅</span> 
              Form Submission Date Extended. Check the admissions portal for more details.
            </span>
            <span className="inline-block mr-16 hover:text-white transition-colors cursor-pointer">
              <span className="text-[#93c5fd] mr-2">🏆</span> 
              Congratulations to our students for outstanding results in the University Examinations!
            </span>
          </marquee>
        </div>
      </div>

      {/* Main Header Section */}
      <div className="bg-white pt-4 pb-12 sm:pb-14 lg:pb-16 px-4 sm:px-6 lg:px-8 relative z-40 overflow-hidden">
        {/* Decorative Swooping Curves Background Graphic */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg
            className="absolute bottom-0 left-0 w-full h-full"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main orange swooping curve - left to center */}
            <path
              d="M0,120 C200,60 400,30 600,80 C800,130 1000,90 1200,60 L1440,40 L1440,200 L0,200 Z"
              fill="#E39B1B"
              opacity="0.07"
            />
            {/* Secondary green swooping curve - center to right */}
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
            {/* Top-left subtle orange arc */}
            <path
              d="M0,50 C150,20 350,10 550,40 C750,70 900,55 1050,35 L1050,35"
              fill="none"
              stroke="#E39B1B"
              strokeWidth="1.5"
              opacity="0.1"
            />
            {/* Faint wide orange fill at top-left */}
            <path
              d="M0,80 C200,30 450,15 650,50 C850,85 1000,60 1150,40 L1440,25 L1440,200 L0,200 Z"
              fill="url(#headerGradientSweep)"
              opacity="0.04"
            />
            <defs>
              <linearGradient id="headerGradientSweep" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E39B1B" />
                <stop offset="50%" stopColor="#d4a830" />
                <stop offset="100%" stopColor="#8FB622" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-6 relative z-10">
          {/* Logo & Official Title */}
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src="/images/logo/grpclogo.png"
              alt="G.R. Patil College Logo"
              className="h-16 md:h-20 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-[10px] md:text-[11px] font-bold text-[#e65c00] tracking-wide uppercase">
                M.S.P. MANDAL (REGD), MUMBAI, (THANE), ESTD. 1978
              </span>
              <h1 className="text-2xl md:text-3xl font-black text-[#0f3b73] tracking-tight leading-none mt-1">
                G.R. PATIL COLLEGE
              </h1>
              <span className="text-[11px] md:text-sm font-bold text-[#0f3b73] tracking-wide mt-1">
                OF ARTS, SCIENCE & COMMERCE, BMS & JUNIOR COLLEGE DOMBIVLI
              </span>
              <span className="text-[10px] md:text-[11px] font-bold text-[#2563eb] tracking-widest uppercase mt-0.5">
                AFFILIATED TO UNIVERSITY OF MUMBAI
              </span>
            </div>
          </Link>

          {/* Right Header Contact & Info Box */}
          <div className="hidden xl:flex items-center gap-6">




            {/* Campus Location */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-50 text-[#e65c00] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Campus Location</span>
                <span className="text-sm font-bold text-[#0f3b73]">Sonarpada, Dombivli (East)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zero-height wrapper to position the floating nav exactly on the seam */}
      <div className="relative w-full h-0 z-50">
        <div className={`transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 w-full  translate-y-0' : 'absolute left-0 right-0 w-full xl:px-8 transform -translate-y-1/2'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
            <nav className={`bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-between xl:justify-start border border-gray-100 p-2 ${isSticky ? 'rounded-2xl' : 'rounded-[36px]'}`}>

              {/* Desktop Sticky Logo */}
              <Link
                to="/"
                className={`hidden xl:flex items-center gap-2 transition-all duration-500 overflow-hidden whitespace-nowrap ${isSticky ? 'max-w-[300px] opacity-100 ml-4 mr-2' : 'max-w-0 opacity-0 mx-0'
                  }`}
              >
                <img
                  src="/images/logo/grpclogo.png"
                  alt="Logo"
                  className="h-9 w-auto object-contain shrink-0"
                />
                <span className="text-[14px] font-black text-[#0f3b73] tracking-tight leading-none">
                  G.R. PATIL COLLEGE
                </span>
              </Link>

              {/* Mobile Menu Toggle & Mobile Logo */}
              <div className="flex items-center gap-1 xl:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="p-3 text-[#0f3b73] hover:bg-gray-50 rounded-full transition-colors"
                >
                  <Menu className="w-6 h-6" />
                </button>
                <Link to="/" className="flex items-center gap-2 pr-2">
                  <img
                    src="/images/logo/grpclogo.png"
                    alt="Logo"
                    className="h-8 w-auto object-contain"
                  />
                  <span className="text-[14px] sm:text-[16px] font-black text-[#0f3b73] tracking-tight leading-none">
                    G.R. PATIL COLLEGE
                  </span>
                </Link>
              </div>

              {/* Desktop Links */}
              <div className="hidden xl:flex items-center flex-1 justify-evenly px-4 font-bold text-[#0f3b73] text-[13px]">
                {[
                  {
                    name: 'About',
                    subItems: [
                      { name: 'About Institute', path: '/about', font: 'font-extrabold' },
                      { name: "Founder's Message", path: '/about/founder' },
                      { name: 'Management', path: '/about/management' },
                      { name: "Principal's Desk", path: '/about/principal' },
                      { name: 'Vision & Mission', path: '/about/vision-mission' },
                    ],
                    width: 'w-56'
                  },
                  {
                    name: 'Academics',
                    subItems: [
                      { name: 'All Courses Directory', path: '/academics', font: 'font-extrabold border-b border-gray-100 pb-2 mb-1' },
                      { name: 'UG Courses (B.Sc / BMS / BAF / B.Com)', path: '/academics/undergraduate' },
                      { name: 'PG Courses (M.Sc / M.Com)', path: '/academics/postgraduate' },
                      { name: 'Junior College (XI / XII Science & Comm)', path: '/academics/junior-college' },
                    ],
                    width: 'w-72'
                  },
                  {
                    name: 'Facilities',
                    subItems: [
                      { name: 'Science Lab', path: '/campus/facilities/science-laboratory' },
                      { name: 'Computer Lab', path: '/campus/facilities/computer-laboratory' },
                      { name: 'Central Library', path: '/campus/facilities/library' },
                      { name: 'Conference Hall', path: '/campus/facilities/conference-hall' },
                      { name: 'Sports & Gymkhana', path: '/campus/facilities/sports-and-gymkhana' },
                      { name: 'Canteen & Cafeteria', path: '/campus/facilities/canteen' },
                    ],
                    width: 'w-56'
                  },
                  {
                    name: 'Admission',
                    onClick: () => setIsAdmissionModalOpen(true),
                    subItems: []
                  },
                  {
                    name: 'Gallery',
                    subItems: [
                      { name: 'Image Gallery', path: '/gallery' },
                      { name: 'Video Gallery', path: '/gallery/video' },
                    ],
                    width: 'w-48'
                  },
                  {
                    name: 'NAAC',
                    subItems: [
                      { name: 'IQAC Portal', path: '/naac-iqac/iqac', font: 'font-extrabold' },
                      { name: 'AQAR Reports', path: '/naac-iqac/aqar' },
                      { name: 'Best Practices', path: '/naac-iqac/best-practices' },
                      { name: 'SSS Report', path: '/naac-iqac/sss' },
                      { name: 'Distinctiveness', path: '/naac-iqac/institutional-distinctiveness' },
                      { name: 'Academic Calendar', path: '/naac-iqac/academic-calendar' },
                    ],
                    width: 'w-60'
                  },
                ].map((item) => (
                  <div key={item.name} className="relative group h-full flex items-center">
                    <button
                      onClick={item.onClick}
                      className="flex items-center gap-1 px-3 py-4 hover:text-[#e5322c] transition-colors"
                    >
                      {item.name}
                      {item.subItems.length > 0 && (
                        <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                      )}
                    </button>
                    {item.subItems.length > 0 && (
                      <div className="absolute top-[100%] left-0 pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                        <div className={`bg-white shadow-[0_10px_40px_rgb(0,0,0,0.1)] rounded-xl border border-gray-100 py-2 ${item.width}`}>
                          {item.subItems.map((sub, idx) => (
                            <Link
                              key={idx}
                              to={sub.path}
                              className={`block px-5 py-2.5 hover:bg-slate-50 hover:text-[#e5322c] transition-colors ${sub.font || 'font-semibold text-slate-700'}`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* <Link to="/careers" className="px-3 py-2 hover:text-[#e65c00] transition-colors">Careers</Link> */}
                <Link to="/downloads" className="px-3 py-2 hover:text-[#e65c00] transition-colors">Downloads</Link>
                <Link to="/contact" className="hidden xl:block font-bold text-[#0f3b73] text-[13px] px-2 py-2 hover:text-[#e65c00] transition-colors">
                  Contact
                </Link>
              </div>

              {/* Right Side Buttons */}
              <div className="flex items-center gap-3 pr-1">
                <Link to="/results" className="hidden xl:flex items-center gap-2 border-[#e5322c] border-1 text-[#0f3b73] px-5 py-3 rounded-[24px] font-bold text-[12px] hover:opacity-90 transition-opacity shadow-sm uppercase tracking-wide">
                  <GraduationCap className="w-4 h-4" />
                  <span>Results 2024-25</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="w-10 h-10 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center hover:bg-[#dbeafe] transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <MobileDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <SearchBarModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <AdmissionModal isOpen={isAdmissionModalOpen} onClose={() => setIsAdmissionModalOpen(false)} />
    </>
  );
};

