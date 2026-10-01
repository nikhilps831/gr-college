import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { courseService } from '../../services/courseService';
import { Plus, Edit, Trash2, Eye, X, Check, Search, BookOpen } from 'lucide-react';

export const AdminCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    shortName: '',
    category: 'Undergraduate',
    stream: 'Science',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    feesPerYear: '₹30,000 / year',
    shortDescription: '',
    overview: '',
    eligibility: '',
    featuredImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
  });

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const data = await courseService.getAllCourses();
    setCourses(data);
  };

  const handleOpenModal = (courseToEdit = null) => {
    if (courseToEdit) {
      setEditingCourse(courseToEdit);
      setFormData({ ...courseToEdit });
    } else {
      setEditingCourse(null);
      setFormData({
        name: '',
        shortName: '',
        category: 'Undergraduate',
        stream: 'Science',
        duration: '3 Years (6 Semesters)',
        intake: 60,
        feesPerYear: '₹30,000 / year',
        shortDescription: '',
        overview: '',
        eligibility: '',
        featuredImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
      });
    }
    setIsModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (editingCourse) {
      await courseService.updateCourse(editingCourse.id, formData);
    } else {
      await courseService.createCourse(formData);
    }
    setIsModalOpen(false);
    loadCourses();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this course record?')) {
      await courseService.deleteCourse(id);
      loadCourses();
    }
  };

  const filtered = courses.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <Helmet>
        <title>Course Management | Admin CMS</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">Academic Course Management</h2>
            <p className="text-xs text-slate-500">Create, edit syllabus, intake capacity, and eligibility criteria.</p>
          </div>

          <button
            onClick={() => handleOpenModal()}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FFF9F0] hover:bg-white text-slate-800 text-xs font-bold rounded-xl shadow transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Course</span>
          </button>
        </div>

        {/* Search */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm max-w-sm">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search courses..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#FFF9F0] text-slate-800 font-bold uppercase text-[11px]">
                <tr>
                  <th className="p-3">Course Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Intake</th>
                  <th className="p-3">Fees / Year</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filtered.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">{c.name}</td>
                    <td className="p-3 text-red-900 font-semibold">{c.category}</td>
                    <td className="p-3">{c.duration}</td>
                    <td className="p-3 font-bold">{c.intake} seats</td>
                    <td className="p-3 text-emerald-700 font-semibold">{c.feesPerYear}</td>
                    <td className="p-3 text-right space-x-2">
                      <button
                        onClick={() => handleOpenModal(c)}
                        className="p-1.5 text-red-700 hover:bg-red-50 rounded-lg"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(c.id)}
                        className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add/Edit Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-[#FFF9F0]/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white max-w-2xl w-full rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
              <div className="p-4 bg-[#FFF9F0] text-slate-800 flex items-center justify-between">
                <h3 className="text-sm font-bold">{editingCourse ? 'Edit Course Details' : 'Add New Course'}</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-500 hover:text-slate-800">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSave} className="p-6 space-y-4 text-xs font-medium overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Course Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full p-2 bg-slate-50 border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Short Code Name</label>
                    <input
                      type="text"
                      value={formData.shortName}
                      onChange={(e) => setFormData({ ...formData, shortName: e.target.value })}
                      required
                      placeholder="e.g. B.Sc CS"
                      className="w-full p-2 bg-slate-50 border rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full p-2 bg-slate-50 border rounded-xl"
                    >
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Postgraduate">Postgraduate</option>
                      <option value="Junior College">Junior College</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Stream</label>
                    <input
                      type="text"
                      value={formData.stream}
                      onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                      className="w-full p-2 bg-slate-50 border rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Duration</label>
                    <input
                      type="text"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className="w-full p-2 bg-slate-50 border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Seat Intake</label>
                    <input
                      type="number"
                      value={formData.intake}
                      onChange={(e) => setFormData({ ...formData, intake: Number(e.target.value) })}
                      className="w-full p-2 bg-slate-50 border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Annual Fee</label>
                    <input
                      type="text"
                      value={formData.feesPerYear}
                      onChange={(e) => setFormData({ ...formData, feesPerYear: e.target.value })}
                      className="w-full p-2 bg-slate-50 border rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Short Summary Description</label>
                  <textarea
                    rows={2}
                    value={formData.shortDescription}
                    onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                    className="w-full p-2 bg-slate-50 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Eligibility Criteria</label>
                  <textarea
                    rows={2}
                    value={formData.eligibility}
                    onChange={(e) => setFormData({ ...formData, eligibility: e.target.value })}
                    className="w-full p-2 bg-slate-50 border rounded-xl"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-slate-200 text-slate-700 font-bold rounded-xl"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="px-5 py-2 bg-[#FFF9F0] text-slate-800 font-bold rounded-xl">
                    Save Course Record
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
