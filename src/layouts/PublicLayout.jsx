import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { TopBar } from '../components/common/TopBar';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';

export const PublicLayout = () => {
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
