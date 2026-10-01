import React, { useState } from 'react';
import { Bell, X, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NOTICES } from '../../data/noticesData';

export const FloatingUpdates = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Take top 3 notices for the floating preview
  const latestUpdates = NOTICES ? NOTICES.slice(0, 3) : [];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[90]">
      {/* Popover */}
      {isOpen && (
        <div className="absolute bottom-14 sm:bottom-16 right-0 w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn origin-bottom-right transition-all">
          <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white p-4 flex items-center justify-between">
            <h3 className="font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300" />
              Latest Updates
            </h3>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-3 bg-slate-50">
            {latestUpdates.map(update => (
              <Link 
                to="/notices" 
                key={update.id} 
                onClick={() => setIsOpen(false)}
                className="block p-3 mb-2 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-red-200 hover:shadow-md transition-all group"
              >
                <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider">{update.category || 'Update'}</span>
                <p className="text-xs font-semibold text-slate-800 mt-1 group-hover:text-red-700 transition-colors line-clamp-2">{update.title}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[10px] text-slate-500">{update.publishDate}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
            
            <Link 
              to="/notices" 
              onClick={() => setIsOpen(false)}
              className="block text-center text-xs font-bold text-red-600 hover:text-red-700 mt-2 py-2 border border-red-100 rounded-lg bg-red-50 hover:bg-red-100 transition-colors"
            >
              View All Updates
            </Link>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#0f3b73] hover:bg-[#1a4b8a] text-white p-3.5 sm:p-4 rounded-full shadow-[0_4px_15px_rgba(15,59,115,0.4)] hover:shadow-[0_6px_20px_rgba(15,59,115,0.6)] transition-all flex items-center justify-center relative group"
        aria-label="Latest Updates"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 border-2 border-[#0f3b73]"></span>
        </span>
        {isOpen ? <X className="w-6 h-6" /> : <Bell className="w-6 h-6 group-hover:scale-110 transition-transform" />}
      </button>
    </div>
  );
};
