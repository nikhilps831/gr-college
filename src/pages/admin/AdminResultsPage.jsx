import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { resultService } from '../../services/resultService';
import { Plus, Trash2, X } from 'lucide-react';

export const AdminResultsPage = () => {
  const [results, setResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    academicYear: '2024-25',
    program: 'Undergraduate',
    class: 'FY B.Sc CS',
    semester: 'Semester I',
    pdfUrl: '#',
    fileSize: '1.5 MB'
  });

  useEffect(() => {
    loadResults();
  }, []);

  const loadResults = async () => {
    const data = await resultService.getAllResults();
    setResults(data);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await resultService.createResult(formData);
    setIsModalOpen(false);
    loadResults();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this examination result?')) {
      await resultService.deleteResult(id);
      loadResults();
    }
  };

  return (
    <>
      <Helmet>
        <title>Results Management | Admin CMS</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">Examination Results Portal</h2>
            <p className="text-xs text-slate-500">Publish semester grade sheets and board result gazettes.</p>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-900 text-white text-xs font-bold rounded-xl">
            <Plus className="w-4 h-4" /> Publish Result PDF
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-900 text-white font-bold uppercase text-[11px]">
              <tr>
                <th className="p-3">Title</th>
                <th className="p-3">Year</th>
                <th className="p-3">Class</th>
                <th className="p-3">Declared Date</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {results.map((r) => (
                <tr key={r.id} className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">{r.title}</td>
                  <td className="p-3 text-blue-900 font-semibold">{r.academicYear}</td>
                  <td className="p-3 font-medium">{r.class} ({r.semester})</td>
                  <td className="p-3 text-slate-500">{r.declaredDate}</td>
                  <td className="p-3 text-right">
                    <button onClick={() => handleDelete(r.id)} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white max-w-lg w-full rounded-3xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b">
                <h3 className="text-sm font-bold text-slate-900">Publish New Exam Result</h3>
                <button onClick={() => setIsModalOpen(false)}><X className="w-5 h-5 text-slate-500" /></button>
              </div>

              <form onSubmit={handleSave} className="space-y-3 text-xs font-medium">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Result Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    className="w-full p-2 bg-slate-50 border rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Academic Year</label>
                    <input
                      type="text"
                      value={formData.academicYear}
                      onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                      required
                      className="w-full p-2 bg-slate-50 border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Class / Semester</label>
                    <input
                      type="text"
                      value={formData.class}
                      onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                      required
                      className="w-full p-2 bg-slate-50 border rounded-xl"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-slate-200 rounded-xl">Cancel</button>
                  <button type="submit" className="px-5 py-2 bg-blue-900 text-white font-bold rounded-xl">Publish Result</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
