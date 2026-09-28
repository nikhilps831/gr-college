import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, FileText, Calendar, Download, Award, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { COURSES } from '../../data/coursesData';
import { NOTICES } from '../../data/noticesData';
import { RESULTS } from '../../data/resultsData';
import { DOWNLOADS } from '../../data/downloadsData';

export const SearchBarModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const term = searchTerm.trim().toLowerCase();

  const matchedCourses = term
    ? COURSES.filter((c) => c.name.toLowerCase().includes(term) || c.shortName.toLowerCase().includes(term) || c.stream.toLowerCase().includes(term))
    : COURSES.slice(0, 3);

  const matchedNotices = term
    ? NOTICES.filter((n) => n.title.toLowerCase().includes(term) || n.category.toLowerCase().includes(term))
    : NOTICES.slice(0, 3);

  const matchedDownloads = term
    ? DOWNLOADS.filter((d) => d.title.toLowerCase().includes(term) || d.category.toLowerCase().includes(term))
    : [];

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/70 backdrop-blur-sm transition-opacity">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh] animate-fadeIn">
        {/* Search Input Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-700 shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search courses (e.g. B.Sc CS, BMS), notices, results, forms..."
            className="w-full bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 text-sm font-medium"
            autoFocus
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="p-1 text-slate-400 hover:text-slate-600 rounded">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="px-2.5 py-1 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-lg transition-colors">
            ESC
          </button>
        </div>

        {/* Search Results Content */}
        <div className="p-4 overflow-y-auto space-y-6 custom-scrollbar">
          {/* Courses Section */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span>Courses & Programs ({matchedCourses.length})</span>
            </div>
            {matchedCourses.length > 0 ? (
              <div className="space-y-1.5">
                {matchedCourses.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => handleSelect(`/academics/course/${course.slug}`)}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-blue-50 border border-slate-100 hover:border-blue-200 flex items-center justify-between group transition-all"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-900">{course.name}</h4>
                      <p className="text-xs text-slate-500">{course.category} • {course.duration}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-700 transition-colors" />
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic">No matching courses found.</p>
            )}
          </div>

          {/* Notices Section */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5 text-amber-600" />
              <span>Notices & Announcements</span>
            </div>
            {matchedNotices.length > 0 ? (
              <div className="space-y-1.5">
                {matchedNotices.map((notice) => (
                  <button
                    key={notice.id}
                    onClick={() => handleSelect('/notices')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-amber-50 border border-slate-100 hover:border-amber-200 flex items-center justify-between group transition-all"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 group-hover:text-amber-900 line-clamp-1">{notice.title}</h4>
                      <p className="text-xs text-slate-500">{notice.category} • Published {notice.publishDate}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-700 transition-colors" />
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic">No matching notices found.</p>
            )}
          </div>

          {/* Downloads Section */}
          {matchedDownloads.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                <Download className="w-3.5 h-3.5 text-emerald-600" />
                <span>Downloadable Documents</span>
              </div>
              <div className="space-y-1.5">
                {matchedDownloads.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => handleSelect('/downloads')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 flex items-center justify-between group transition-all"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 group-hover:text-emerald-900 line-clamp-1">{doc.title}</h4>
                      <p className="text-xs text-slate-500">{doc.category} • {doc.fileType} ({doc.fileSize})</p>
                    </div>
                    <Download className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-500">
          Tip: Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-[10px] font-mono">ESC</kbd> to close search.
        </div>
      </div>
    </div>
  );
};
