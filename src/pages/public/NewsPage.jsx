import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { NEWS_ARTICLES } from '../../data/newsEventsData';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NewsPage = () => {
  return (
    <>
      <Helmet>
        <title>College News & Media | G.R. Patil College Dombivli</title>
      </Helmet>

      <div className="bg-slate-50 py-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'News & Media' }]} />

          <SectionTitle
            badge="Institutional News"
            title="Press Releases & Academic News"
            subtitle="Read latest news articles regarding placement records, university achievements, NSS campaigns, and student accolades."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEWS_ARTICLES.map((article) => (
              <div key={article.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-blue-900/90 text-blue-200 text-[10px] font-bold uppercase">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-blue-700" /> {article.publishDate}</span>
                      <span className="flex items-center gap-1"><User className="w-3 h-3 text-emerald-700" /> {article.author}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-2 border-t border-slate-100">
                  <Link
                    to={`/news/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-700 font-semibold"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
