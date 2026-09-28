import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { newsService } from '../../services/newsService';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { LoadingSkeleton } from '../../components/common/LoadingSkeleton';
import { ErrorState } from '../../components/common/ErrorState';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export const NewsDetailPage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    newsService
      .getNewsBySlug(slug)
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Article not found');
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="max-w-4xl mx-auto py-12"><LoadingSkeleton count={1} /></div>;
  if (error || !article) return <div className="max-w-4xl mx-auto py-12"><ErrorState title="Article Not Found" message={error} /></div>;

  return (
    <>
      <Helmet>
        <title>{`${article.title} | G.R. Patil College Dombivli`}</title>
      </Helmet>

      <div className="bg-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb items={[{ label: 'News', path: '/news' }, { label: article.title }]} />

          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase">
              {article.category}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">{article.title}</h1>
            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-blue-700" /> {article.publishDate}</span>
              <span className="flex items-center gap-1"><User className="w-4 h-4 text-emerald-700" /> {article.author}</span>
            </div>
          </div>

          <img src={article.image} alt={article.title} className="w-full h-80 sm:h-[420px] object-cover rounded-3xl shadow-lg border border-slate-200" />

          <div className="text-sm text-slate-700 leading-relaxed space-y-4 pt-4 whitespace-pre-line font-medium">
            {article.content}
          </div>

          <div className="pt-8 border-t border-slate-200">
            <Link to="/news" className="inline-flex items-center gap-2 text-xs font-bold text-blue-900 hover:text-blue-700">
              <ArrowLeft className="w-4 h-4" /> Back to All News
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
