import React, { useState } from 'react';
import { X, Send, GraduationCap, CheckCircle2, Phone, Mail, Sparkles } from 'lucide-react';

export const AdmissionModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: 'BMS',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#FFF9F0]/80 backdrop-blur-sm animate-fadeIn" onClick={onClose}>
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-6 relative overflow-hidden">
          {/* Decorative background shapes */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white opacity-10 rounded-full blur-xl pointer-events-none"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/20 transition-colors z-[60] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-3 relative z-10">
            <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white font-extrabold text-[10px] uppercase px-3 py-1 rounded-full tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" /> Admission Open 2026-27
            </span>
          </div>
          <h3 className="text-2xl font-black tracking-tight text-white flex items-center gap-2.5 relative z-10">
            <GraduationCap className="w-7 h-7 text-white" />
            Online Admission Inquiry
          </h3>
          <p className="text-[13px] font-medium text-white/90 mt-1.5 relative z-10">
            G.R. Patil College of Arts, Science & Commerce
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Application Submitted!</h4>
              <p className="text-sm text-slate-600 mt-2 max-w-xs">
                Thank you, <strong>{formData.fullName || 'Student'}</strong>! Our admission counseling desk will call you shortly at <strong>{formData.phone}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Select Course / Program <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                >
                  <optgroup label="Degree Courses (University of Mumbai)">
                    <option value="BMS">BMS - Bachelor of Management Studies</option>
                    <option value="BAF">BAF - B.Com (Accounting & Finance)</option>
                    <option value="BSc IT">B.Sc. (Information Technology)</option>
                    <option value="BSc CS">B.Sc. (Computer Science)</option>
                    <option value="BCom">B.Com (General)</option>
                    <option value="BA">B.A. (Bachelor of Arts)</option>
                    <option value="MSc IT">M.Sc. (Information Technology)</option>
                    <option value="MCom">M.Com (Advanced Accountancy)</option>
                  </optgroup>
                  <optgroup label="Junior College (HSC Board)">
                    <option value="XI Science">XI Science</option>
                    <option value="XII Science">XII Science</option>
                    <option value="XI Commerce">XI Commerce</option>
                    <option value="XII Commerce">XII Commerce</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Query or Message (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ask any question regarding fee structure, eligibility, or documentation..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <div className="text-[11px] text-slate-500 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-orange-500" />
                  <span>Helpline: +91 9082629158</span>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-[13px] rounded-xl shadow-[0_4px_15px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)] transition-all flex items-center gap-2 -translate-y-0.5"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
