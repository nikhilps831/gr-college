import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { enquiryService } from '../../services/enquiryService';
import { Phone, Mail, CheckCircle2, Clock } from 'lucide-react';

export const AdminEnquiriesPage = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    loadEnquiries();
  }, []);

  const loadEnquiries = async () => {
    const data = await enquiryService.getEnquiries();
    setEnquiries(data);
  };

  const handleStatusChange = async (id, newStatus) => {
    await enquiryService.updateEnquiryStatus(id, newStatus);
    loadEnquiries();
  };

  return (
    <>
      <Helmet>
        <title>Admission Enquiries | Admin CMS</title>
      </Helmet>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">Student Admission Enquiries</h2>
          <p className="text-xs text-slate-500">Track and respond to incoming applicant inquiries for AY 2026-27.</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#FFF9F0] text-slate-800 font-bold uppercase text-[11px]">
                <tr>
                  <th className="p-3">Applicant Name</th>
                  <th className="p-3">Course Interest</th>
                  <th className="p-3">Contact Info</th>
                  <th className="p-3">12th % / City</th>
                  <th className="p-3">Query Message</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {enquiries.map((e) => (
                  <tr key={e.id} className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">{e.fullName}</td>
                    <td className="p-3 text-red-900 font-semibold">{e.course}</td>
                    <td className="p-3 space-y-0.5">
                      <p className="font-bold flex items-center gap-1 text-slate-800"><Phone className="w-3 h-3 text-emerald-600" /> {e.mobile}</p>
                      <p className="text-[11px] text-slate-500 flex items-center gap-1"><Mail className="w-3 h-3 text-red-600" /> {e.email}</p>
                    </td>
                    <td className="p-3 font-medium">{e.hscPercentage} ({e.city})</td>
                    <td className="p-3 text-slate-600 max-w-xs">{e.message || 'No specific remark.'}</td>
                    <td className="p-3">
                      <select
                        value={e.status}
                        onChange={(evt) => handleStatusChange(e.id, evt.target.value)}
                        className={`px-2 py-1 rounded text-xs font-bold outline-none ${
                          e.status === 'Resolved'
                            ? 'bg-emerald-100 text-emerald-800'
                            : e.status === 'Contacted'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Resolved">Resolved</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
