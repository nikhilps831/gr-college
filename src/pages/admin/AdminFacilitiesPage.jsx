import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FACILITIES } from '../../data/facilitiesData';
import { Building, Edit } from 'lucide-react';

export const AdminFacilitiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Facilities Management | Admin CMS</title>
      </Helmet>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">Campus Facilities & Specs</h2>
          <p className="text-xs text-slate-500">Update laboratory specifications, equipment details, and photos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((f) => (
            <div key={f.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <img src={f.image} alt={f.name} className="w-full h-36 object-cover rounded-xl" />
              <h4 className="text-sm font-bold text-slate-900">{f.name}</h4>
              <p className="text-xs text-slate-500 line-clamp-2">{f.shortDescription}</p>
              <button onClick={() => alert(`Editing facility specs for ${f.name}`)} className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5">
                <Edit className="w-3.5 h-3.5 text-red-700" /> Edit Facility Specs
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
