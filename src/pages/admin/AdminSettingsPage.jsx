import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Save, ShieldCheck } from 'lucide-react';

export const AdminSettingsPage = () => {
  return (
    <>
      <Helmet>
        <title>CMS Settings | G.R. Patil College</title>
      </Helmet>

      <div className="space-y-6 max-w-4xl">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">System & Portal Settings</h2>
          <p className="text-xs text-slate-500">Configure global metadata, admission year flags, and admin credentials.</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-xs font-medium">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 border-b pb-2">Institutional Configuration</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-bold mb-1">College Name</label>
                <input type="text" defaultValue="G.R. Patil College of Arts, Science & Commerce" className="w-full p-2 bg-slate-50 border rounded-xl" />
              </div>
              <div>
                <label className="block text-slate-700 font-bold mb-1">Active Academic Year</label>
                <input type="text" defaultValue="2026-27" className="w-full p-2 bg-slate-50 border rounded-xl" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Official Email</label>
                <input type="email" defaultValue="info@grpatilcollegedombivli.in" className="w-full p-2 bg-slate-50 border rounded-xl" />
              </div>
              <div>
                <label className="block text-slate-700 font-bold mb-1">Phone Number</label>
                <input type="text" defaultValue="0251-2401122" className="w-full p-2 bg-slate-50 border rounded-xl" />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t flex justify-end">
            <button
              onClick={() => alert('CMS settings saved successfully!')}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-900 text-white font-bold text-xs rounded-xl shadow"
            >
              <Save className="w-4 h-4" /> Save Settings
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
