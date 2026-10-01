import React from 'react';
import { Link } from 'react-router-dom';
import { NEWS_ARTICLES, UPCOMING_EVENTS } from '../../data/newsEventsData';
import { SectionTitle } from '../common/SectionTitle';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

export const NewsEventsHome = () => {
  const latestNews = NEWS_ARTICLES.slice(0, 2);
  const nextEvents = UPCOMING_EVENTS.slice(0, 2);

  return (
    <section className="py-16 lg:py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Campus Life & Updates"
          title="Latest News & Upcoming Events"
          subtitle="Stay updated with academic achievements, technical symposiums, sports meets, and cultural fests at G.R. Patil College."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Campus News */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <h3 className="text-xl font-extrabold text-[#0f3b73] flex items-center gap-2">
                <span className="w-2.5 h-6 bg-[#209d2e] rounded-full inline-block" />
                Recent News & Press Coverage
              </h3>
              <Link to="/news" className="text-xs font-bold text-[#0f3b73] hover:text-[#e5322c] flex items-center gap-1 transition-colors">
                <span>View All News</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {latestNews.map((item) => (
                <div key={item.id} className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col sm:flex-row gap-5 hover:-translate-y-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full sm:w-44 h-36 object-cover rounded-[16px] shrink-0"
                  />
                  <div className="space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 font-bold tracking-wide">
                        <span className="px-2.5 py-1 rounded-md bg-[#0f3b73]/10 text-[#0f3b73]">{item.category}</span>
                        <span>• {item.publishDate}</span>
                      </div>
                      <h4 className="text-[15px] font-extrabold text-[#0f3b73] hover:text-[#e5322c] transition-colors mt-2 line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-[13px] text-slate-500 line-clamp-2 mt-1.5 leading-relaxed font-medium">
                        {item.summary}
                      </p>
                    </div>
                    <Link
                      to={`/news/${item.slug}`}
                      className="text-xs font-bold text-[#e5322c] hover:text-[#8b1538] flex items-center gap-1 mt-2 transition-colors"
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
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <h3 className="text-xl font-extrabold text-[#0f3b73] flex items-center gap-2">
                <span className="w-2.5 h-6 bg-[#e5322c] rounded-full inline-block" />
                Upcoming Campus Events
              </h3>
              <Link to="/events" className="text-xs font-bold text-[#0f3b73] hover:text-[#e5322c] flex items-center gap-1 transition-colors">
                <span>View Event Calendar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {nextEvents.map((evt) => (
                <div key={evt.id} className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] transition-all duration-300 space-y-4 hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="px-3 py-1 rounded-md bg-[#e65c00]/10 text-[#e65c00] border border-[#e65c00]/20 text-[10px] font-bold uppercase tracking-wider">
                        {evt.category}
                      </span>
                      <h4 className="text-[15px] font-extrabold text-[#0f3b73] hover:text-[#e65c00] transition-colors mt-3 line-clamp-2">
                        {evt.title}
                      </h4>
                    </div>
                    <div className="bg-[#f8f9fa] border border-gray-200 text-[#0f3b73] rounded-2xl px-4 py-3 text-center shrink-0 shadow-sm">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Oct / Nov</span>
                      <span className="text-xl font-black leading-none mt-1 block">{evt.date.split('-')[2]}</span>
                    </div>
                  </div>

                  <p className="text-[13px] text-slate-500 line-clamp-2 leading-relaxed font-medium">
                    {evt.description}
                  </p>

                  <div className="pt-3 mt-1 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-500 font-bold">
                    <div className="flex items-center gap-1.5 truncate">
                      <MapPin className="w-4 h-4 text-[#e5322c] shrink-0" />
                      <span className="truncate">{evt.venue}</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <Users className="w-4 h-4 text-[#209d2e] shrink-0" />
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
