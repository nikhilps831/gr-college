import React from 'react';
import { Link } from 'react-router-dom';
import { NEWS_ARTICLES, UPCOMING_EVENTS } from '../../data/newsEventsData';
import { SectionTitle } from '../common/SectionTitle';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

export const NewsEventsHome = () => {
  const latestNews = NEWS_ARTICLES.slice(0, 2);
  const nextEvents = UPCOMING_EVENTS.slice(0, 2);

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Campus Life & Updates"
          title="Latest News & Upcoming Events"
          subtitle="Stay updated with academic achievements, technical symposiums, sports meets, and cultural fests at G.R. Patil College."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Campus News */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-blue-900 rounded-full inline-block" />
                Recent News & Press Coverage
              </h3>
              <Link to="/news" className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1">
                <span>View All News</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {latestNews.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full sm:w-40 h-32 object-cover rounded-xl shrink-0"
                  />
                  <div className="space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                        <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-bold">{item.category}</span>
                        <span>• {item.publishDate}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 hover:text-blue-900 transition-colors mt-1 line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                    <Link
                      to={`/news/${item.slug}`}
                      className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1 mt-2"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Upcoming Events */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-amber-500 rounded-full inline-block" />
                Upcoming Campus Events
              </h3>
              <Link to="/events" className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1">
                <span>View Event Calendar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {nextEvents.map((evt) => (
                <div key={evt.id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="px-2.5 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200 text-[10px] font-bold uppercase tracking-wider">
                        {evt.category}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 hover:text-blue-900 transition-colors mt-2">
                        {evt.title}
                      </h4>
                    </div>
                    <div className="bg-slate-900 text-white rounded-xl px-3 py-2 text-center shrink-0 border border-slate-700">
                      <span className="text-xs uppercase font-bold text-amber-400 block">Oct / Nov</span>
                      <span className="text-lg font-black leading-none">{evt.date.split('-')[2]}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {evt.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5 truncate">
                      <MapPin className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                      <span className="truncate">{evt.venue}</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <Users className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span className="truncate">{evt.organizer}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
