import React from 'react';
import { Link } from 'react-router-dom';
import { NOTICES } from '../../data/noticesData';
import { FileText, Bell, Download, ArrowRight, Calendar, Sparkles } from 'lucide-react';

export const LatestNoticesHome = () => {
  const latestNotices = NOTICES.slice(0, 4);

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-2">
              <Bell className="w-3.5 h-3.5" /> Official Announcements
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Latest Notices & Circulars</h2>
          </div>
          <Link
            to="/notices"
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 bg-slate-800 hover:bg-slate-700 px-4 py-2.5 rounded-xl border border-slate-700 transition-colors w-fit"
          >
            <span>View All Notices Archive</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {latestNotices.map((notice) => (
            <div
              key={notice.id}
              className="bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 shadow-lg flex flex-col justify-between group transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800/60 text-[10px] font-bold uppercase tracking-wider">
                    {notice.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {notice.isNew && (
                      <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] font-bold uppercase flex items-center gap-1 animate-pulse">
                        <Sparkles className="w-3 h-3" /> NEW
                      </span>
                    )}
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {notice.publishDate}
                    </span>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {notice.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {notice.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                  <FileText className="w-3.5 h-3.5 text-blue-400" /> {notice.fileSize}
                </span>
                <Link
                  to="/notices"
                  className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold"
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
