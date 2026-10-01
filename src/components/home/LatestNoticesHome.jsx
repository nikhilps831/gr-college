import React from 'react';
import { Link } from 'react-router-dom';
import { NOTICES } from '../../data/noticesData';
import { FileText, Bell, Download, ArrowRight, Calendar, Sparkles } from 'lucide-react';

export const LatestNoticesHome = () => {
  const latestNotices = NOTICES.slice(0, 4);

  return (
    <section className="py-16 bg-[#ffcccc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-black">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#e65c00] border border-[#e65c00]/20 text-xs font-bold uppercase tracking-wider mb-2">
              <Bell className="w-3.5 h-3.5" /> Official Announcements
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Latest Notices & Circulars</h2>
          </div>
          <Link
            to="/notices"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#e5322c] hover:text-black bg-white border border-gray-200 hover:border-[#8b1538]/20 px-5 py-3 rounded-[12px] shadow-sm transition-colors w-fit"
          >
            <span>View All Notices Archive</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {latestNotices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white border border-gray-100 hover:border-gray-200 rounded-[24px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] flex flex-col justify-between group transition-all hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#209d2e]/10 text-[#209d2e] border border-[#209d2e]/20 text-[10px] font-bold uppercase tracking-wider">
                    {notice.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {notice.isNew && (
                      <span className="px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-600 border border-rose-500/20 text-[10px] font-bold uppercase flex items-center gap-1 animate-pulse">
                        <Sparkles className="w-3 h-3" /> NEW
                      </span>
                    )}
                    <span className="text-[11px] text-slate-400 font-bold flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {notice.publishDate}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#e5322c] transition-colors leading-snug">
                  {notice.title}
                </h3>

                <p className="text-[13px] font-medium text-slate-500 line-clamp-2 leading-relaxed">
                  {notice.summary}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1 text-[11px] font-bold">
                  <FileText className="w-3.5 h-3.5 text-[#209d2e]" /> {notice.fileSize}
                </span>
                <Link
                  to="/notices"
                  className="inline-flex items-center gap-1 text-[#e5322c] hover:text-[#8b1538] font-extrabold"
                >
                  <span>Download PDF</span>
                  <Download className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
