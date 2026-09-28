import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { FACILITIES } from '../../data/facilitiesData';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const FacilitiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Campus Infrastructure & Facilities | G.R. Patil College Dombivli</title>
        <meta name="description" content="Explore computer labs, science laboratories, central library, seminar auditorium, gymkhana, and canteen at G.R. Patil College." />
      </Helmet>

      <div className="bg-slate-50 py-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Campus Facilities' }]} />

          <SectionTitle
            badge="Campus Life"
            title="World-Class Academic Infrastructure"
            subtitle="Providing modern facilities, high-speed digital infrastructure, spacious reading halls, and sports grounds for student success."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((facility) => (
              <div key={facility.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {facility.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {facility.shortDescription}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      {facility.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-2 border-t border-slate-100">
                  <Link
                    to={`/campus/facilities/${facility.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold text-xs rounded-xl transition-colors"
                  >
                    <span>View Facility Specs</span>
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
