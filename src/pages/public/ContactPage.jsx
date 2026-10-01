import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionTitle } from '../../components/common/SectionTitle';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { enquiryService } from '../../services/enquiryService';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Loader2, Building2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Enter a valid email address'),
  mobile: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

export const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    await enquiryService.submitContactMessage(data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | G.R. Patil College Dombivli</title>
      </Helmet>

      <div className="bg-slate-50 py-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />

          <SectionTitle
            badge="Get In Touch"
            title="Contact G.R. Patil College"
            subtitle="We are here to assist prospective students, parents, alumni, and official inquiries. Reach out to our campus office."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Contact Cards & Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-slate-900 border-l-4 border-red-900 pl-3">Campus Information</h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900">Campus Address</h4>
                      <p className="text-slate-600 mt-0.5 leading-relaxed">
                        G.R. Patil College Campus, Opposite Sonarpada Ground, Manpada Road, Sonarpada, Dombivli (East), Thane District, Maharashtra - 421204
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900">Telephone Lines</h4>
                      <p className="text-slate-600 mt-0.5">0251-2401122 / 2401133</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900">Official Email</h4>
                      <p className="text-slate-600 mt-0.5">info@grpatilcollegedombivli.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900">Office Working Hours</h4>
                      <p className="text-slate-600 mt-0.5">Monday to Saturday: 09:00 AM - 05:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Placeholder Frame */}
              <div className="bg-[#FFF9F0] text-slate-800 p-6 rounded-3xl border border-slate-800 shadow-md space-y-3">
                <div className="flex items-center gap-2 text-[#E39B1B] font-bold text-sm">
                  <Building2 className="w-4 h-4" /> Location & Map
                </div>
                <div className="w-full h-48 bg-white rounded-2xl flex items-center justify-center text-slate-500 text-xs font-medium text-center p-4 border border-slate-700">
                  📍 Google Maps Directions to G.R. Patil College, Sonarpada, Dombivli East
                </div>
              </div>
              <div className="bg-[#FFF9F0] text-slate-800 p-6 rounded-3xl border border-slate-800 shadow-md space-y-3">
  <div className="flex items-center gap-2 text-[#E39B1B] font-bold text-sm">
    <Building2 className="w-4 h-4" />
    Location & Map
  </div>

  <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-700">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4469.534591859174!2d73.1005279!3d19.197380499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795c4c593268b%3A0xa1a93171bc454d6e!2sG.R.PATIL%20COLLEGE%20OF%20ARTS%2CSCIENCE%2CCOMMERCE%20SONARPADA%20DOMBIVLI!5e1!3m2!1sen!2sin!4v1790654455379!5m2!1sen!2sin"
      className="w-full h-full"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      title="G.R. Patil College Location Map"
    />
  </div>
</div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Send Us a Direct Message</h3>
                <p className="text-xs text-slate-500 mb-6">Fill out the form below and our administrative team will respond promptly.</p>

                {isSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-bold text-emerald-950">Message Sent!</h4>
                    <p className="text-xs text-emerald-800">Thank you for getting in touch. We will respond to your email soon.</p>
                    <button onClick={() => setIsSubmitted(false)} className="px-4 py-2 bg-emerald-700 text-slate-800 font-bold text-xs rounded-xl">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-xs font-medium">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        {...register('name')}
                        placeholder="e.g. Priyesh Patil"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-red-700 text-xs"
                      />
                      {errors.name && <p className="text-[11px] text-rose-600 mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-700 font-bold mb-1">Email Address *</label>
                        <input
                          type="email"
                          {...register('email')}
                          placeholder="email@example.com"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-red-700 text-xs"
                        />
                        {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email.message}</p>}
                      </div>

                      <div>
                        <label className="block text-slate-700 font-bold mb-1">Mobile Number *</label>
                        <input
                          type="tel"
                          {...register('mobile')}
                          placeholder="10-digit Mobile"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-red-700 text-xs"
                        />
                        {errors.mobile && <p className="text-[11px] text-rose-600 mt-1">{errors.mobile.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Subject *</label>
                      <input
                        type="text"
                        {...register('subject')}
                        placeholder="e.g. Railway Concession Inquiry"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-red-700 text-xs"
                      />
                      {errors.subject && <p className="text-[11px] text-rose-600 mt-1">{errors.subject.message}</p>}
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Your Message *</label>
                      <textarea
                        rows={4}
                        {...register('message')}
                        placeholder="Type your message here..."
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-red-700 text-xs"
                      />
                      {errors.message && <p className="text-[11px] text-rose-600 mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#FFF9F0] hover:bg-white disabled:bg-red-400 text-slate-800 font-bold text-xs rounded-xl shadow-md transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
