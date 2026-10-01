import React from 'react';

export const SectionTitle = ({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false
}) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass} mb-12`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border ${light
              ? 'bg-amber-400/10 text-[#E39B1B] border-amber-400/30'
              : 'bg-[#e5322c]/10 text-[#e5322c] border-[#e5322c]/20'
            }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${light ? 'text-slate-800' : 'text-[#0f3b73]'
          }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base max-w-2xl leading-relaxed ${light ? 'text-slate-600' : 'text-slate-600'
            }`}
        >
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1.5 bg-gradient-to-r from-[#0f3b73] via-[#0f3b73] to-[#e5322c] rounded-full mt-4" />
    </div>
  );
};
