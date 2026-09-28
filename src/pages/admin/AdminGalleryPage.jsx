import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GALLERY_ALBUMS, GALLERY_ITEMS } from '../../data/galleryData';
import { Plus, Image as ImageIcon } from 'lucide-react';

export const AdminGalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Gallery Management | Admin CMS</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">Gallery & Media Manager</h2>
            <p className="text-xs text-slate-500">Organize event photo albums and campus infrastructure photography.</p>
          </div>
          <button onClick={() => alert('New album creation modal launched!')} className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-900 text-white text-xs font-bold rounded-xl">
            <Plus className="w-4 h-4" /> Create Album
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_ALBUMS.map((alb) => (
            <div key={alb.id} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <img src={alb.cover} alt={alb.title} className="w-full h-36 object-cover rounded-xl" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">{alb.title}</h4>
                <p className="text-xs text-slate-500">{alb.count} Photos</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
