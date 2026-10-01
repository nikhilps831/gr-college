import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { newsService } from '../../services/newsService';
import { Plus, Trash2, X, Newspaper } from 'lucide-react';

export const AdminNewsPage = () => {
  const [news, setNews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Achievement',
    author: 'College Media Cell',
    summary: '',
    content: '',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  });

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    const data = await newsService.getAllNews();
    setNews(data);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await newsService.createNews(formData);
    setIsModalOpen(false);
    loadNews();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this news article?')) {
      await newsService.deleteNews(id);
      loadNews();
    }
  };

  return (
    <>
      <Helmet>
        <title>News & Media Management | Admin CMS</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">News Articles & Press Coverage</h2>
            <p className="text-xs text-slate-500">Manage news stories and student achievements.</p>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FFF9F0] text-slate-800 text-xs font-bold rounded-xl">
            <Plus className="w-4 h-4" /> Post News Story
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {news.map((n) => (
            <div key={n.id} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="px-2 py-0.5 rounded bg-red-50 text-red-900 text-[10px] font-bold">{n.category}</span>
                <h4 className="text-sm font-bold text-slate-900 leading-tight">{n.title}</h4>
                <p className="text-[11px] text-slate-500">{n.publishDate} • By {n.author}</p>
              </div>
              <button onClick={() => handleDelete(n.id)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg shrink-0">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-[#FFF9F0]/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white max-w-lg w-full rounded-3xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b">
                <h3 className="text-sm font-bold text-slate-900">Create News Article</h3>
                <button onClick={() => setIsModalOpen(false)}><X className="w-5 h-5 text-slate-500" /></button>
              </div>

              <form onSubmit={handleSave} className="space-y-3 text-xs font-medium">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Article Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    className="w-full p-2 bg-slate-50 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Category</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-2 bg-slate-50 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Summary</label>
                  <textarea
                    rows={2}
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    required
                    className="w-full p-2 bg-slate-50 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Full Content</label>
                  <textarea
                    rows={4}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    required
                    className="w-full p-2 bg-slate-50 border rounded-xl"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-slate-200 rounded-xl">Cancel</button>
                  <button type="submit" className="px-5 py-2 bg-[#FFF9F0] text-slate-800 font-bold rounded-xl">Publish Story</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
