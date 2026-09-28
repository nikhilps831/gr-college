import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { facilityService } from '../../services/facilityService';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { LoadingSkeleton } from '../../components/common/LoadingSkeleton';
import { ErrorState } from '../../components/common/ErrorState';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { FACILITIES } from '../../data/facilitiesData';

export const FacilityDetailPage = () => {
  const { slug } = useParams();
  const [facility, setFacility] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    facilityService
      .getFacilityBySlug(slug)
      .then((data) => {
        setFacility(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Facility details not found');
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="max-w-5xl mx-auto py-12"><LoadingSkeleton count={1} /></div>;
  if (error || !facility) return <div className="max-w-4xl mx-auto py-12"><ErrorState title="Facility Not Found" message={error} /></div>;

  const related = FACILITIES.filter((f) => f.id !== facility.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${facility.name} | G.R. Patil College Dombivli`}</title>
      </Helmet>

      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Campus Facilities', path: '/campus/facilities' }, { label: facility.name }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-6">
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-80 sm:h-96 object-cover rounded-3xl shadow-lg border-4 border-slate-100"
              />

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{facility.name}</h1>
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{facility.description}</p>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="text-base font-bold text-slate-900">Key Features & Technical Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {facility.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase">Other Campus Facilities</h4>
                <div className="space-y-3">
                  {related.map((f) => (
                    <Link
                      key={f.id}
                      to={`/campus/facilities/${f.slug}`}
                      className="block p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-all group"
                    >
                      <h5 className="text-xs font-bold text-slate-800 group-hover:text-blue-900">{f.name}</h5>
                      <p className="text-[10px] text-slate-500 line-clamp-1 mt-1">{f.shortDescription}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
