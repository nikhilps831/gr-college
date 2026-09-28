import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  BookOpen,
  Bell,
  Calendar,
  Award,
  Download,
  Image,
  MessageSquare,
  Mail,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import { COURSES } from '../../data/coursesData';
import { NOTICES } from '../../data/noticesData';
import { UPCOMING_EVENTS } from '../../data/newsEventsData';
import { RESULTS } from '../../data/resultsData';
import { DOWNLOADS } from '../../data/downloadsData';
import { GALLERY_ALBUMS } from '../../data/galleryData';
import { MOCK_ENQUIRIES, MOCK_CONTACT_MESSAGES } from '../../data/enquiriesData';

export const AdminDashboardPage = () => {
  const statCards = [
    { title: 'Total Courses', count: COURSES.length, icon: BookOpen, color: 'bg-blue-500 text-white' },
    { title: 'Active Notices', count: NOTICES.length, icon: Bell, color: 'bg-amber-500 text-white' },
    { title: 'Upcoming Events', count: UPCOMING_EVENTS.length, icon: Calendar, color: 'bg-purple-500 text-white' },
    { title: 'Published Results', count: RESULTS.length, icon: Award, color: 'bg-emerald-500 text-white' },
    { title: 'Downloads Catalog', count: DOWNLOADS.length, icon: Download, color: 'bg-teal-500 text-white' },
    { title: 'Gallery Albums', count: GALLERY_ALBUMS.length, icon: Image, color: 'bg-indigo-500 text-white' },
    { title: 'Admission Enquiries', count: MOCK_ENQUIRIES.length, icon: MessageSquare, color: 'bg-rose-500 text-white' },
    { title: 'Contact Messages', count: MOCK_CONTACT_MESSAGES.length, icon: Mail, color: 'bg-slate-700 text-white' }
  ];

  // Chart Data Preparation
  const enquiriesChartData = [
    { month: 'Jun', UG: 45, PG: 12, HSC: 30 },
    { month: 'Jul', UG: 85, PG: 24, HSC: 65 },
    { month: 'Aug', UG: 60, PG: 18, HSC: 40 },
    { month: 'Sep', UG: 95, PG: 32, HSC: 70 }
  ];

  const streamDistributionData = [
    { name: 'Computer Science & IT', value: 4 },
    { name: 'Commerce & BAF/BBI', value: 3 },
    { name: 'Management (BMS)', value: 1 },
    { name: 'Junior College Science/Commerce', value: 2 },
    { name: 'Arts & Media', value: 1 }
  ];

  const COLORS = ['#1e40af', '#059669', '#d97706', '#7c3aed', '#dc2626'];

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | G.R. Patil College</title>
      </Helmet>

      <div className="space-y-8">
        {/* Header summary */}
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Dashboard Analytics & Overview</h2>
          <p className="text-xs text-slate-500">Real-time stats for course management, notices, enquiries and academic files.</p>
        </div>

        {/* 8 Statistic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-500">{stat.title}</p>
                  <p className="text-2xl font-black text-slate-900 mt-1">{stat.count}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center shadow`}>
                  <IconComp className="w-6 h-6" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Recharts Data Visualization Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Bar Chart: Enquiries Trend */}
          <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Admission Enquiries Growth (2026)</h3>
                <p className="text-[11px] text-slate-500">Monthly breakdown across Undergraduate, Postgraduate & HSC</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 text-xs font-bold flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> +24% Growth
              </span>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={enquiriesChartData}>
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="UG" fill="#1e40af" radius={[4, 4, 0, 0]} name="Undergraduate" />
                  <Bar dataKey="HSC" fill="#059669" radius={[4, 4, 0, 0]} name="Junior College" />
                  <Bar dataKey="PG" fill="#d97706" radius={[4, 4, 0, 0]} name="Postgraduate" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart: Course Distribution */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-900">Course Distribution by Stream</h3>
            <div className="h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={streamDistributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {streamDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-1.5 text-[11px] text-slate-600">
              {streamDistributionData.map((s, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: COLORS[idx] }} />
                    <span className="truncate">{s.name}</span>
                  </span>
                  <span className="font-bold text-slate-900">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Enquiries Activity */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <h3 className="text-sm font-bold text-slate-900">Recent Student Admission Enquiries</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-900 text-white font-bold uppercase text-[11px]">
                <tr>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Course</th>
                  <th className="p-3">Mobile / Email</th>
                  <th className="p-3">Marks %</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {MOCK_ENQUIRIES.map((enq) => (
                  <tr key={enq.id} className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">{enq.fullName}</td>
                    <td className="p-3 text-blue-900 font-semibold">{enq.course}</td>
                    <td className="p-3 text-slate-600">{enq.mobile} • {enq.email}</td>
                    <td className="p-3 font-bold text-slate-800">{enq.hscPercentage}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200 text-[10px] font-bold">
                        {enq.status}
                      </span>
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
