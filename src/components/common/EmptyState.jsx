import React from 'react';
import { FolderOpen } from 'lucide-react';

export const EmptyState = ({
  title = 'No records found',
  description = 'There are currently no items available matching your criteria.',
  icon: Icon = FolderOpen,
  actionText,
  onAction
}) => {
  return (
    <div className="bg-white rounded-2xl p-10 border border-slate-200 text-center shadow-sm max-w-md mx-auto my-8 space-y-3">
      <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
      <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">{description}</p>
      {actionText && onAction && (
        <button
          onClick={onAction}
          className="mt-2 px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold rounded-lg shadow transition-colors"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};
