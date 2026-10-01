import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="flex items-center text-xs text-slate-500 font-medium py-3 px-4 bg-slate-100/70 border-b border-slate-200/80 mb-6 rounded-lg">
      <Link to="/" className="flex items-center gap-1 hover:text-[#e5322c] transition-colors">
        <Home className="w-3.5 h-3.5 text-slate-500" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500 mx-1 shrink-0" />
          {item.path ? (
            <Link to={item.path} className="hover:text-[#e5322c] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#0f3b73] font-semibold truncate max-w-xs">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
