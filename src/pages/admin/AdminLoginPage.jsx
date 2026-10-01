import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { GraduationCap, Lock, Mail, ArrowRight, AlertCircle, ShieldCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const AdminLoginPage = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(username, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin CMS Login | G.R. Patil College</title>
      </Helmet>

      <div className="min-h-screen bg-[#FFF9F0] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#FFF9F0] border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-whiter from-red-600 to-indigo-900 text-[#E39B1B] border border-red-500/50 flex items-center justify-center mx-auto shadow-lg">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">G.R. PATIL COLLEGE</h1>
            <p className="text-xs font-semibold text-[#E39B1B] uppercase tracking-widest">Admin CMS Control Panel</p>
          </div>

          {error && (
            <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium">
            <div>
              <label className="block text-slate-600 font-bold mb-1">Username / Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full pl-9 pr-3 py-2.5 bg-[#FFF9F0] border border-slate-800 text-slate-800 rounded-xl outline-none focus:border-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-600 font-bold mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2.5 bg-[#FFF9F0] border border-slate-800 text-slate-800 rounded-xl outline-none focus:border-red-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-red-600 hover:bg-red-500 text-slate-800 font-bold text-xs rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>{loading ? 'Authenticating...' : 'Sign In to Admin Dashboard'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Credentials Info */}
          <div className="p-3 bg-[#FFF9F0] rounded-xl border border-slate-800 text-[11px] text-slate-500 space-y-1 text-center">
            <p className="font-bold text-slate-600 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E39B1B]" /> Demo Admin Access
            </p>
            <p>Username: <code className="text-[#E39B1B]">admin</code> | Password: <code className="text-[#E39B1B]">admin123</code></p>
          </div>
        </div>
      </div>
    </>
  );
};
