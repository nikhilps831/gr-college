import React from 'react';
import { Menu, Bell, ExternalLink, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdminHeader = ({ onOpenMobileSidebar, title = 'Dashboard Overview' }) => {
  return (
    <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3.5 flex items-center justify-between sticky top-0 z-30 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileSidebar}
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">{title}</h1>
          <p className="text-[11px] text-slate-500 hidden sm:block">G.R. Patil College Content Management System</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link
          to="/"
          target="_blank"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg border border-slate-300 transition-colors"
          title="View live website in new tab"
        >
          <ExternalLink className="w-3.5 h-3.5 text-blue-700" />
          <span className="hidden sm:inline">View Public Website</span>
        </Link>

        <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-blue-900 text-white font-bold flex items-center justify-center text-xs shadow">
            AD
          </div>
          <div className="hidden md:block text-left text-xs">
            <p className="font-bold text-slate-800 leading-tight">Admin User</p>
            <p className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> System Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
