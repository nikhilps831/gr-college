import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { noticeService } from '../../services/noticeService';
import { LoadingSkeleton } from '../../components/common/LoadingSkeleton';
import { EmptyState } from '../../components/common/EmptyState';
import { FileText, Download, Calendar, Search, Bell, Sparkles } from 'lucide-react';

export const NoticesPage = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Admission', 'Examination', 'Academic', 'General'];

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    noticeService
      .filterNotices({ category: selectedCategory, search: searchTerm })
      .then((data) => {
        if (isMounted) {
          setNotices(data);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [selectedCategory, searchTerm]);

  return (
    <>
      <Helmet>
        <title>Latest Notices & Circulars | G.R. Patil College Dombivli</title>
      </Helmet>

      <div className="bg-slate-50 py-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Notices & Circulars' }]} />

          <SectionTitle
            badge="Official Notifications"
            title="College Notices & Circular Archive"
            subtitle="Official notifications regarding admission dates, Mumbai University exam timetables, scholarships, and campus events."
          />

          {/* Filters & Search */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-900 text-white shadow'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search notice title..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:border-blue-700 font-medium"
              />
            </div>
          </div>

          {/* Notices Grid */}
          {loading ? (
            <LoadingSkeleton count={4} />
          ) : notices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {notices.map((notice) => (
                <div
                  key={notice.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200 text-[10px] font-bold uppercase">
                        {notice.category}
                      </span>
                      <div className="flex items-center gap-2">
                        {notice.isNew && (
                          <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 text-[10px] font-bold uppercase flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-rose-600" /> NEW
                          </span>
                        )}
                        <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                          <Calendar className="w-3 h-3 text-blue-700" /> {notice.publishDate}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">{notice.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{notice.summary}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 flex items-center gap-1">
                      <FileText className="w-4 h-4 text-blue-700" /> {notice.fileSize} PDF
                    </span>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Downloading official notice document: ${notice.title}`);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState title="No Notices Found" description="There are no active notices matching your selected category or search query." />
          )}
        </div>
      </div>
    </>
  );
};
