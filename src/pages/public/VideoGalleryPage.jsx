import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Play, Video } from 'lucide-react';

export const VideoGalleryPage = () => {
  const videos = [
    { title: 'Degree Convocation Ceremony & Graduation Day', category: 'Convocation', duration: '12:45', thumbnail: 'https://www.grpatilcollegedombivli.in/assets/img/convocation-1.jpg' },
    { title: 'Annual Cultural Carnival Tarang Highlights', category: 'Cultural', duration: '08:30', thumbnail: 'https://www.grpatilcollegedombivli.in/assets/img/photo_gallery/Cultural%20Activities/full/guit.jpg' },
    { title: 'Computer & IT Department Industrial Visit Documentary', category: 'Academic', duration: '15:20', thumbnail: 'https://www.grpatilcollegedombivli.in/assets/img/industrial-visit-1.jpg' },
    { title: 'NSS Green Campus Plantation & Swachhta Campaign', category: 'NSS', duration: '06:15', thumbnail: 'https://www.grpatilcollegedombivli.in/assets/img/other-activity.jpg' }
  ];

  return (
    <>
      <Helmet>
        <title>Video Gallery | G.R. Patil College Dombivli</title>
      </Helmet>

      <div className="bg-slate-50 py-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Gallery', path: '/gallery' }, { label: 'Video Gallery' }]} />

          <SectionTitle
            badge="Campus Videos"
            title="Video Gallery & Event Highlights"
            subtitle="Watch highlights from degree convocations, annual fests, industrial tours, and student performances."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((vid, idx) => (
              <div
                key={idx}
                onClick={() => alert(`Playing video: ${vid.title}`)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-slate-900/90 text-white text-[11px] font-mono">
                    {vid.duration}
                  </span>
                </div>
                <div className="p-4">
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 text-[10px] font-bold uppercase">{vid.category}</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1">{vid.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
