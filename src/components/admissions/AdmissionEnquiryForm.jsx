import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { enquiryService } from '../../services/enquiryService';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const enquirySchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  mobile: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Enter a valid email address'),
  programType: z.string().min(1, 'Please select program type'),
  course: z.string().min(1, 'Please select course of interest'),
  hscPercentage: z.string().min(1, 'Please enter your 12th / SSC percentage'),
  city: z.string().min(2, 'Please enter your city/location'),
  message: z.string().optional()
});

export const AdmissionEnquiryForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: '',
      mobile: '',
      email: '',
      programType: 'Undergraduate',
      course: 'B.Sc Computer Science',
      hscPercentage: '',
      city: 'Dombivli',
      message: ''
    }
  });

  const onSubmit = async (data) => {
    try {
      setServerError(null);
      await enquiryService.submitEnquiry(data);
      setIsSubmitted(true);
      reset();
    } catch (err) {
      setServerError(err.message || 'Failed to submit enquiry. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
      <div className="mb-6">
        <span className="px-3 py-1 rounded-full bg-red-50 text-red-900 text-xs font-bold uppercase tracking-wider">
          Direct Admission Inquiry 2026-27
        </span>
        <h3 className="text-xl font-bold text-slate-900 mt-2">Submit Online Admission Enquiry</h3>
        <p className="text-xs text-slate-500 mt-1">Our admission counselor will contact you with fee details and seat availability.</p>
      </div>

      {isSubmitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3 animate-fadeIn">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-bold text-emerald-950">Enquiry Submitted Successfully!</h4>
          <p className="text-xs text-emerald-800 max-w-sm mx-auto leading-relaxed">
            Thank you for expressing interest in G.R. Patil College. Our admission desk will reach out to your mobile number shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-slate-800 font-bold text-xs rounded-xl shadow transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-xs font-medium">
          {serverError && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{serverError}</span>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="block text-slate-700 font-bold mb-1">Full Student Name *</label>
            <input
              type="text"
              {...register('fullName')}
              placeholder="e.g. Rahul Patil"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-red-700 focus:bg-white text-slate-800 text-xs font-medium"
            />
            {errors.fullName && <p className="text-[11px] text-rose-600 mt-1">{errors.fullName.message}</p>}
          </div>

          {/* Mobile & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-bold mb-1">Mobile Number *</label>
              <input
                type="tel"
                {...register('mobile')}
                placeholder="10-digit Mobile"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-red-700 focus:bg-white text-slate-800 text-xs font-medium"
              />
              {errors.mobile && <p className="text-[11px] text-rose-600 mt-1">{errors.mobile.message}</p>}
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Email Address *</label>
              <input
                type="email"
                {...register('email')}
                placeholder="student@example.com"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-red-700 focus:bg-white text-slate-800 text-xs font-medium"
              />
              {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email.message}</p>}
            </div>
          </div>

          {/* Program & Course */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-bold mb-1">Program Type *</label>
              <select
                {...register('programType')}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-red-700 focus:bg-white text-slate-800 text-xs font-medium"
              >
                <option value="Undergraduate">Undergraduate (UG Degree)</option>
                <option value="Postgraduate">Postgraduate (PG Master)</option>
                <option value="Junior College">Junior College (XI / XII)</option>
              </select>
              {errors.programType && <p className="text-[11px] text-rose-600 mt-1">{errors.programType.message}</p>}
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Course of Interest *</label>
              <select
                {...register('course')}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-red-700 focus:bg-white text-slate-800 text-xs font-medium"
              >
                <option value="B.Sc Computer Science">B.Sc Computer Science</option>
                <option value="B.Sc Information Technology">B.Sc Information Technology</option>
                <option value="Bachelor of Management Studies (BMS)">Bachelor of Management Studies (BMS)</option>
                <option value="B.Com (Accounting & Finance - BAF)">B.Com (Accounting & Finance - BAF)</option>
                <option value="B.Com (Banking & Insurance - BBI)">B.Com (Banking & Insurance - BBI)</option>
                <option value="B.Com (General)">B.Com (General)</option>
                <option value="BAMMC Media & Mass Comm">BAMMC (Mass Media)</option>
                <option value="B.Sc Hospitality Studies">B.Sc Hospitality Studies</option>
                <option value="M.Sc Computer Science">M.Sc Computer Science</option>
                <option value="M.Sc Information Technology">M.Sc Information Technology</option>
                <option value="XI Science (PCMB/IT/CS)">XI Science (HSC)</option>
                <option value="XI Commerce">XI Commerce (HSC)</option>
              </select>
              {errors.course && <p className="text-[11px] text-rose-600 mt-1">{errors.course.message}</p>}
            </div>
          </div>

          {/* Marks & City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-bold mb-1">12th / SSC Percentage (%) *</label>
              <input
                type="text"
                {...register('hscPercentage')}
                placeholder="e.g. 78.5%"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-red-700 focus:bg-white text-slate-800 text-xs font-medium"
              />
              {errors.hscPercentage && <p className="text-[11px] text-rose-600 mt-1">{errors.hscPercentage.message}</p>}
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Current City / Location *</label>
              <input
                type="text"
                {...register('city')}
                placeholder="e.g. Dombivli East, Kalyan"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-red-700 focus:bg-white text-slate-800 text-xs font-medium"
              />
              {errors.city && <p className="text-[11px] text-rose-600 mt-1">{errors.city.message}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-slate-700 font-bold mb-1">Query / Additional Remarks</label>
            <textarea
              rows={3}
              {...register('message')}
              placeholder="Ask about fee installment, bus route, cutoff..."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-red-700 focus:bg-white text-slate-800 text-xs font-medium"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#FFF9F0] hover:bg-white disabled:bg-red-400 text-slate-800 font-bold text-xs rounded-xl shadow-md transition-colors"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Admission Enquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
