import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { resultService } from '../../services/resultService';
import { LoadingSkeleton } from '../../components/common/LoadingSkeleton';
import { EmptyState } from '../../components/common/EmptyState';
import { Award, Download, Calendar, Search, FileText } from 'lucide-react';

export const ResultsPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [academicYear, setAcademicYear] = useState('All');
  const [program, setProgram] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    resultService
      .filterResults({ academicYear, program, search: searchTerm })
      .then((data) => {
        if (isMounted) {
          setResults(data);
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [academicYear, program, searchTerm]);

  return (
    <>
      <Helmet>
        <title>Examination Results Portal | G.R. Patil College Dombivli</title>
      </Helmet>

      <div className="bg-slate-50 py-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Examination Results' }]} />

          <SectionTitle
            badge="Academic Evaluation"
            title="University & College Examination Results"
            subtitle="Search and download official grade cards and merit result statements by academic year and class."
          />

          {/* Filters Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Academic Year</label>
              <select
                value={academicYear}
                onChange={(e) => setAcademicYear(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium outline-none"
              >
                <option value="All">All Years</option>
                <option value="2024-25">2024-25</option>
                <option value="2023-24">2023-24</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Program Stream</label>
              <select
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium outline-none"
              >
                <option value="All">All Programs</option>
                <option value="Undergraduate">Undergraduate (UG)</option>
                <option value="Postgraduate">Postgraduate (PG)</option>
                <option value="Junior College">Junior College (HSC)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Search Class / Title</label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="e.g. FY B.Sc CS..."
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium outline-none"
                />
              </div>
            </div>
          </div>

          {/* Results Table */}
          {loading ? (
            <LoadingSkeleton count={3} />
          ) : results.length > 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-[#FFF9F0] text-slate-800 font-bold uppercase text-[11px]">
                    <tr>
                      <th className="p-4">Examination Title</th>
                      <th className="p-4">Academic Year</th>
                      <th className="p-4">Program / Class</th>
                      <th className="p-4">Declared Date</th>
                      <th className="p-4 text-right">Download Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {results.map((res) => (
                      <tr key={res.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">{res.title}</td>
                        <td className="p-4 text-red-900 font-semibold">{res.academicYear}</td>
                        <td className="p-4">
                          <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-bold text-[11px]">
                            {res.class} ({res.semester})
                          </span>
                        </td>
                        <td className="p-4 text-slate-500 font-medium">{res.declaredDate}</td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => alert(`Downloading result sheet: ${res.title}`)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FFF9F0] hover:bg-white text-slate-800 font-bold rounded-xl text-xs transition-colors"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>PDF ({res.fileSize})</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <EmptyState title="No Results Found" description="No exam results match your filter criteria." />
          )}
        </div>
      </div>
    </>
  );
};
