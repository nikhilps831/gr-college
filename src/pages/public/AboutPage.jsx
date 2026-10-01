import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, ShieldCheck, Target, Heart, CheckCircle2, UserCheck, ArrowRight } from 'lucide-react';

export const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About G.R. Patil College | Arts, Science & Commerce Dombivli</title>
        <meta
          name="description"
          content="Learn about G.R. Patil College of Arts, Science & Commerce, BMS & Junior College at Sonarpada, Dombivli. Affiliated to University of Mumbai."
        />
      </Helmet>

      <div className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About College' }]} />

          <SectionTitle
            badge="Institutional Overview"
            title="G.R. Patil College of Arts, Science & Commerce"
            subtitle="Dedicated to fostering academic excellence, technical empowerment, and ethical values in suburban Thane district."
          />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Affiliated to University of Mumbai</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                G.R. Patil College was established under the aegis of the G.R. Patil Educational Trust with the noble mission of delivering accessible, high-quality higher education to youth in Sonarpada, Dombivli, and surrounding regions.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                The college offers a comprehensive range of undergraduate degree courses including B.Sc Computer Science, B.Sc Information Technology, BMS, BAF, BBI, B.Com, BAMMC, B.Sc Hospitality Studies, postgraduate M.Sc programs, and Junior College HSC Science and Commerce streams.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-red-700" />
                  <span>University of Mumbai Affiliation</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <Award className="w-5 h-5 text-amber-600" />
                  <span>Govt. of Maharashtra Approved</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000"
                alt="College Library and Students"
                className="rounded-2xl shadow-xl border-4 border-slate-100 object-cover w-full h-[380px]"
              />
            </div>
          </div>

          {/* Sub-pages Navigation Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/about/founder"
              className="p-6 bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-300 rounded-2xl shadow-sm hover:shadow-md transition-all group"
            >
              <h4 className="text-base font-bold text-slate-900 group-hover:text-red-900">Founder's Vision</h4>
              <p className="text-xs text-slate-600 mt-2 line-clamp-2">Inspirational words from Shri G. R. Patil, Founder President.</p>
              <div className="mt-4 text-xs font-bold text-red-900 flex items-center gap-1">
                <span>Read Message</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              to="/about/principal"
              className="p-6 bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-300 rounded-2xl shadow-sm hover:shadow-md transition-all group"
            >
              <h4 className="text-base font-bold text-slate-900 group-hover:text-red-900">Principal's Desk</h4>
              <p className="text-xs text-slate-600 mt-2 line-clamp-2">Academic leadership message from Dr. Standard Authority.</p>
              <div className="mt-4 text-xs font-bold text-red-900 flex items-center gap-1">
                <span>View Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              to="/about/management"
              className="p-6 bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-300 rounded-2xl shadow-sm hover:shadow-md transition-all group"
            >
              <h4 className="text-base font-bold text-slate-900 group-hover:text-red-900">Management & Trust</h4>
              <p className="text-xs text-slate-600 mt-2 line-clamp-2">Trustee profiles and institutional governance structure.</p>
              <div className="mt-4 text-xs font-bold text-red-900 flex items-center gap-1">
                <span>Meet Leaders</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              to="/about/vision-mission"
              className="p-6 bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-300 rounded-2xl shadow-sm hover:shadow-md transition-all group"
            >
              <h4 className="text-base font-bold text-slate-900 group-hover:text-red-900">Vision & Mission</h4>
              <p className="text-xs text-slate-600 mt-2 line-clamp-2">Our core values, educational objectives and goals.</p>
              <div className="mt-4 text-xs font-bold text-red-900 flex items-center gap-1">
                <span>Explore Values</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
