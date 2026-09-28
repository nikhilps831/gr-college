import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { downloadService } from '../../services/downloadService';
import { Plus, Trash2, X } from 'lucide-react';

export const AdminDownloadsPage = () => {
  const [downloads, setDownloads] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Forms',
    academicYear: '2026-27',
    fileType: 'PDF',
    fileSize: '500 KB',
    downloadUrl: '#'
  });

  useEffect(() => {
    loadDownloads();
  }, []);

  const loadDownloads = async () => {
    const data = await downloadService.getAllDownloads();
    setDownloads(data);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await downloadService.createDownload(formData);
    setIsModalOpen(false);
    loadDownloads();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this download resource?')) {
      await downloadService.deleteDownload(id);
      loadDownloads();
    }
  };

  return (
    <>
      <Helmet>
        <title>Downloads Management | Admin CMS</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">Download Resource Management</h2>
            <p className="text-xs text-slate-500">Upload and categorize forms, syllabi, timetables, and policies.</p>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-900 text-white text-xs font-bold rounded-xl">
            <Plus className="w-4 h-4" /> Upload Document
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-900 text-white font-bold uppercase text-[11px]">
              <tr>
                <th className="p-3">Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">File Type</th>
                <th className="p-3">Published Date</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {downloads.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">{d.title}</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-bold">{d.category}</span></td>
                  <td className="p-3 font-medium">{d.fileType} ({d.fileSize})</td>
                  <td className="p-3 text-slate-500">{d.publishedDate}</td>
                  <td className="p-3 text-right">
                    <button onClick={() => handleDelete(d.id)} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg">
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
                <h3 className="text-sm font-bold text-slate-900">Upload New Resource Document</h3>
                <button onClick={() => setIsModalOpen(false)}><X className="w-5 h-5 text-slate-500" /></button>
              </div>

              <form onSubmit={handleSave} className="space-y-3 text-xs font-medium">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Document Title</label>
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
                    <label className="block text-slate-700 font-bold mb-1">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full p-2 bg-slate-50 border rounded-xl"
                    >
                      <option value="Forms">Forms</option>
                      <option value="Timetable">Timetable</option>
                      <option value="Examination">Examination</option>
                      <option value="Academic">Academic</option>
                      <option value="Admission">Admission</option>
                      <option value="University">University</option>
                      <option value="Policies">Policies</option>
                      <option value="NAAC/IQAC">NAAC/IQAC</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">File Format</label>
                    <select
                      value={formData.fileType}
                      onChange={(e) => setFormData({ ...formData, fileType: e.target.value })}
                      className="w-full p-2 bg-slate-50 border rounded-xl"
                    >
                      <option value="PDF">PDF</option>
                      <option value="DOCX">DOCX</option>
                      <option value="XLSX">XLSX</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-slate-200 rounded-xl">Cancel</button>
                  <button type="submit" className="px-5 py-2 bg-blue-900 text-white font-bold rounded-xl">Save Document</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
