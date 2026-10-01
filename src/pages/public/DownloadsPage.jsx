import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { downloadService } from '../../services/downloadService';
import { LoadingSkeleton } from '../../components/common/LoadingSkeleton';
import { EmptyState } from '../../components/common/EmptyState';
import { FileText, Download, Search, FileCode } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export const DownloadsPage = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'All';
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Examination', 'Timetable', 'Academic', 'Admission', 'University', 'Forms', 'Policies', 'NAAC/IQAC'];

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    downloadService
      .filterDownloads({ category: selectedCategory, search: searchTerm })
      .then((data) => {
        if (isMounted) {
          setDownloads(data);
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
        <title>Downloads & Form Center | G.R. Patil College Dombivli</title>
      </Helmet>

      <div className="bg-slate-50 py-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Downloads & Forms' }]} />

          <SectionTitle
            badge="Resource Center"
            title="Download Academic Forms & Documents"
            subtitle="Access official university enrolment forms, railway concession forms, timetable sheets, policy handbooks, and IQAC files."
          />

          {/* Filters & Search */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#FFF9F0] text-slate-800 shadow'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search document name..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:border-red-700 font-medium"
              />
            </div>
          </div>

          {/* Downloads Cards Grid */}
          {loading ? (
            <LoadingSkeleton count={4} />
          ) : downloads.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {downloads.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-900 border border-red-200 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 overflow-hidden">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold uppercase">
                        {doc.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 truncate leading-snug">{doc.title}</h4>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {doc.fileType} • {doc.fileSize} • Published {doc.publishedDate}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => alert(`Downloading document: ${doc.title}`)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#FFF9F0] hover:bg-white text-slate-800 font-bold text-xs rounded-xl shadow transition-colors shrink-0"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState title="No Documents Found" description="No files match your search query." />
          )}
        </div>
      </div>
    </>
  );
};
