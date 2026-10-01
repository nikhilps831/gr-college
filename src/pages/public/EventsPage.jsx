import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { UPCOMING_EVENTS } from '../../data/newsEventsData';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EventsPage = () => {
  return (
    <>
      <Helmet>
        <title>Campus Events & Activities | G.R. Patil College Dombivli</title>
      </Helmet>

      <div className="bg-slate-50 py-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Events' }]} />

          <SectionTitle
            badge="Campus Life"
            title="Upcoming Events & Fest Schedule"
            subtitle="Participate in IT hackathons, corporate summits, annual sports tournaments, and cultural carnivals."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {UPCOMING_EVENTS.map((evt) => (
              <div key={evt.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img src={evt.image} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#FFF9F0]/80 text-[#E39B1B] text-[10px] font-bold uppercase">
                      {evt.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-red-900">
                      <Calendar className="w-4 h-4 text-red-700" />
                      <span>{evt.date} ({evt.time})</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-red-900 transition-colors">
                      {evt.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {evt.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-red-700 shrink-0" />
                        <span className="truncate">{evt.venue}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span className="truncate">{evt.organizer}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-2 border-t border-slate-100">
                  <button
                    onClick={() => alert(`Registration interest logged for ${evt.title}!`)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 bg-[#FFF9F0] hover:bg-white text-slate-800 font-bold text-xs rounded-xl transition-colors"
                  >
                    <span>Register / Participate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
