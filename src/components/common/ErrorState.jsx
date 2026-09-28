import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export const ErrorState = ({
  title = 'Something went wrong',
  message = 'Failed to load content. Please check your network connection and try again.',
  onRetry
}) => {
  return (
    <div className="bg-rose-50 rounded-2xl p-8 border border-rose-200 text-center shadow-sm max-w-md mx-auto my-8 space-y-3">
      <div className="w-14 h-14 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
        <AlertTriangle className="w-7 h-7" />
      </div>
      <h3 className="text-base font-bold text-rose-900">{title}</h3>
      <p className="text-xs text-rose-700 leading-relaxed">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg shadow transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Retry Loading</span>
        </button>
      )}
    </div>
  );
};
