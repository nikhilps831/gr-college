import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Award, Users, CheckCircle2, Send, GraduationCap } from 'lucide-react';

export const AlumniPage = () => {
  const [registered, setRegistered] = useState(false);

  return (
    <>
      <Helmet>
        <title>Alumni Association | G.R. Patil College Dombivli</title>
      </Helmet>

      <div className="bg-slate-50 py-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Alumni Association' }]} />

          <SectionTitle
            badge="Network & Connect"
            title="G.R. Patil College Alumni Association"
            subtitle="Reconnect with your alma mater, mentor junior students, participate in alumni meets, and network with fellow professionals."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6">
              <img
                src="https://www.grpatilcollegedombivli.in/assets/img/convocation-1.jpg"
                alt="Alumni Convocation"
                className="w-full h-80 object-cover rounded-3xl shadow-lg border border-slate-200"
              />

              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="text-lg font-bold text-slate-900">About Our Alumni Network</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our alumni work in leading IT MNCs, financial organizations, media houses, government institutions, and entrepreneurial ventures. The G.R. Patil College Alumni Association organizes annual alumni reunions, guest lectures, student career guidance sessions, and placement mentorship drives.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl space-y-4">
                <h3 className="text-base font-bold text-slate-900">Alumni Registration Form</h3>
                <p className="text-xs text-slate-500">Register to join the official G.R. Patil College Alumni Directory.</p>

                {registered ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="text-sm font-bold text-emerald-950">Registration Successful!</h4>
                    <p className="text-xs text-emerald-800">Welcome to the Alumni Network. You will receive updates about upcoming alumni meets.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setRegistered(true);
                    }}
                    className="space-y-3 text-xs font-medium"
                  >
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Full Name *</label>
                      <input type="text" required placeholder="e.g. Amit Patil" className="w-full p-2.5 bg-slate-50 border rounded-xl" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-700 font-bold mb-1">Passing Year *</label>
                        <input type="text" required placeholder="e.g. 2023" className="w-full p-2.5 bg-slate-50 border rounded-xl" />
                      </div>
                      <div>
                        <label className="block text-slate-700 font-bold mb-1">Passed Course *</label>
                        <input type="text" required placeholder="e.g. B.Sc CS" className="w-full p-2.5 bg-slate-50 border rounded-xl" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Current Organization / Designation</label>
                      <input type="text" placeholder="e.g. Software Engineer at TCS" className="w-full p-2.5 bg-slate-50 border rounded-xl" />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Mobile Number *</label>
                      <input type="tel" required placeholder="10-digit mobile" className="w-full p-2.5 bg-slate-50 border rounded-xl" />
                    </div>

                    <button type="submit" className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> Register as Alumni
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
