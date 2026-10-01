import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, BookOpen, AlertCircle } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found (404) | G.R. Patil College Dombivli</title>
      </Helmet>

      <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl max-w-lg w-full text-center space-y-6">
          <div className="w-20 h-20 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mx-auto border border-rose-200">
            <AlertCircle className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-4xl font-black text-slate-900 tracking-tight">404</span>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Page Not Found</h1>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
              The page you are looking for might have been moved, renamed, or is temporarily unavailable.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFF9F0] hover:bg-white text-slate-800 font-bold text-xs rounded-xl shadow transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Go Home</span>
            </Link>
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl border border-slate-300 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-red-900" />
              <span>Explore Courses</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
