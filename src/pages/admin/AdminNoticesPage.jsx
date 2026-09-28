import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { noticeService } from '../../services/noticeService';
import { Plus, Trash2, Edit, X, Bell, FileText } from 'lucide-react';

export const AdminNoticesPage = () => {
  const [notices, setNotices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Admission',
    summary: '',
    expiryDate: '2026-12-31',
    pdfUrl: '#',
    fileSize: '1.2 MB'
  });

  useEffect(() => {
    loadNotices();
  }, []);

  const loadNotices = async () => {
    const data = await noticeService.getAllNotices();
    setNotices(data);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await noticeService.createNotice(formData);
    setIsModalOpen(false);
    loadNotices();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this official notice?')) {
      await noticeService.deleteNotice(id);
      loadNotices();
    }
  };

  return (
    <>
      <Helmet>
        <title>Notices Management | Admin CMS</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">Notices & Official Circulars</h2>
            <p className="text-xs text-slate-500">Publish and manage official college notifications.</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-900 text-white text-xs font-bold rounded-xl"
          >
            <Plus className="w-4 h-4" /> Add Notice
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-900 text-white font-bold uppercase text-[11px]">
              <tr>
                <th className="p-3">Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">Published Date</th>
                <th className="p-3">File Size</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {notices.map((n) => (
                <tr key={n.id} className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900 max-w-xs truncate">{n.title}</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-bold">{n.category}</span></td>
                  <td className="p-3 text-slate-500">{n.publishDate}</td>
                  <td className="p-3 font-medium">{n.fileSize}</td>
                  <td className="p-3 text-right">
                    <button onClick={() => handleDelete(n.id)} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg">
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
                <h3 className="text-sm font-bold text-slate-900">Publish New Notice</h3>
                <button onClick={() => setIsModalOpen(false)}><X className="w-5 h-5 text-slate-500" /></button>
              </div>

              <form onSubmit={handleSave} className="space-y-3 text-xs font-medium">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Notice Title</label>
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
                      <option value="Admission">Admission</option>
                      <option value="Examination">Examination</option>
                      <option value="Academic">Academic</option>
                      <option value="General">General</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Expiry Date</label>
                    <input
                      type="date"
                      value={formData.expiryDate}
                      onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                      className="w-full p-2 bg-slate-50 border rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Summary Description</label>
                  <textarea
                    rows={3}
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    required
                    className="w-full p-2 bg-slate-50 border rounded-xl"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-slate-200 rounded-xl">Cancel</button>
                  <button type="submit" className="px-5 py-2 bg-blue-900 text-white font-bold rounded-xl">Publish Notice</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
