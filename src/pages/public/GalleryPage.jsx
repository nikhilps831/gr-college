import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { GALLERY_ITEMS, GALLERY_ALBUMS } from '../../data/galleryData';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';

export const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Infrastructure', 'Academic', 'Cultural', 'Sports', 'Events', 'NSS & NCC'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <>
      <Helmet>
        <title>Campus Photo Gallery | G.R. Patil College Dombivli</title>
      </Helmet>

      <div className="bg-slate-50 py-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Campus Gallery' }]} />

          <SectionTitle
            badge="Visual Journey"
            title="Life at G.R. Patil College"
            subtitle="Explore snapshots of campus infrastructure, student cultural events, sports meets, and academic activities."
          />

          {/* Featured Albums */}
          <div className="mb-10">
            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-red-700" /> Featured Photo Albums
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {GALLERY_ALBUMS.map((alb) => (
                <div key={alb.id} className="relative h-36 rounded-2xl overflow-hidden shadow group border border-slate-200 cursor-pointer">
                  <img src={alb.cover} alt={alb.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFF9F0]/80 via-transparent to-transparent p-3 flex flex-col justify-end">
                    <h4 className="text-xs font-bold text-slate-800 leading-tight">{alb.title}</h4>
                    <span className="text-[10px] text-[#E39B1B] font-semibold">{alb.count} Photos</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8 bg-white p-3 rounded-2xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#FFF9F0] text-slate-800 shadow'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImage(item)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#FFF9F0]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-slate-800">
                    <ZoomIn className="w-8 h-8" />
                  </div>
                  <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded bg-[#FFF9F0]/80 text-[#E39B1B] text-[10px] font-bold">
                    {item.category}
                  </span>
                </div>
                <div className="p-3">
                  <h4 className="text-xs font-bold text-slate-800 line-clamp-1">{item.title}</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-[#FFF9F0]/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 p-2 text-slate-600 hover:text-slate-800 bg-white/80 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl w-full bg-[#FFF9F0] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl space-y-4 p-4 text-center">
            <img src={lightboxImage.image} alt={lightboxImage.title} className="max-h-[70vh] w-auto mx-auto rounded-2xl object-contain" />
            <div>
              <h3 className="text-base font-bold text-slate-800">{lightboxImage.title}</h3>
              <p className="text-xs text-slate-500 mt-1">{lightboxImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
