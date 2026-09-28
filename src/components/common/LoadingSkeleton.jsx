import React from 'react';

export const LoadingSkeleton = ({ count = 3, type = 'card' }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="h-44 bg-slate-200 rounded-xl w-full" />
          <div className="h-4 bg-slate-200 rounded w-3/4" />
          <div className="h-3 bg-slate-200 rounded w-1/2" />
          <div className="space-y-2 pt-2">
            <div className="h-3 bg-slate-100 rounded w-full" />
            <div className="h-3 bg-slate-100 rounded w-5/6" />
          </div>
        </div>
      ))}
    </div>
  );
};
