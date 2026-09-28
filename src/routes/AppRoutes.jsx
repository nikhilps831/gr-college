import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';
import { AdminLayout } from '../layouts/AdminLayout';
import { ProtectedAdminRoute } from './ProtectedAdminRoute';

// Public Pages
import { HomePage } from '../pages/public/HomePage';
import { AboutPage } from '../pages/public/AboutPage';
import { FounderPage } from '../pages/public/FounderPage';
import { ManagementPage } from '../pages/public/ManagementPage';
import { PrincipalPage } from '../pages/public/PrincipalPage';
import { VisionMissionPage } from '../pages/public/VisionMissionPage';
import { AcademicsPage } from '../pages/public/AcademicsPage';
import { CourseDetailPage } from '../pages/public/CourseDetailPage';
import { AdmissionsPage } from '../pages/public/AdmissionsPage';
import { FacilitiesPage } from '../pages/public/FacilitiesPage';
import { FacilityDetailPage } from '../pages/public/FacilityDetailPage';
import { GalleryPage } from '../pages/public/GalleryPage';
import { VideoGalleryPage } from '../pages/public/VideoGalleryPage';
import { EventsPage } from '../pages/public/EventsPage';
import { NewsPage } from '../pages/public/NewsPage';
import { NewsDetailPage } from '../pages/public/NewsDetailPage';
import { NaacIqacPage } from '../pages/public/NaacIqacPage';
import { StudentsPage } from '../pages/public/StudentsPage';
import { NoticesPage } from '../pages/public/NoticesPage';
import { ResultsPage } from '../pages/public/ResultsPage';
import { DownloadsPage } from '../pages/public/DownloadsPage';
import { CareersPage } from '../pages/public/CareersPage';
import { AlumniPage } from '../pages/public/AlumniPage';
import { ContactPage } from '../pages/public/ContactPage';
import { NotFoundPage } from '../pages/public/NotFoundPage';

// Admin Pages
import { AdminLoginPage } from '../pages/admin/AdminLoginPage';
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage';
import { AdminCoursesPage } from '../pages/admin/AdminCoursesPage';
import { AdminNoticesPage } from '../pages/admin/AdminNoticesPage';
import { AdminNewsPage } from '../pages/admin/AdminNewsPage';
import { AdminEventsPage } from '../pages/admin/AdminEventsPage';
import { AdminResultsPage } from '../pages/admin/AdminResultsPage';
import { AdminDownloadsPage } from '../pages/admin/AdminDownloadsPage';
import { AdminGalleryPage } from '../pages/admin/AdminGalleryPage';
import { AdminFacilitiesPage } from '../pages/admin/AdminFacilitiesPage';
import { AdminEnquiriesPage } from '../pages/admin/AdminEnquiriesPage';
import { AdminSettingsPage } from '../pages/admin/AdminSettingsPage';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes Wrapped in PublicLayout */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        
        {/* About Sub-routes */}
        <Route path="about" element={<AboutPage />} />
        <Route path="about/founder" element={<FounderPage />} />
        <Route path="about/management" element={<ManagementPage />} />
        <Route path="about/principal" element={<PrincipalPage />} />
        <Route path="about/vision-mission" element={<VisionMissionPage />} />

        {/* Academics Sub-routes */}
        <Route path="academics" element={<AcademicsPage />} />
        <Route path="academics/undergraduate" element={<AcademicsPage />} />
        <Route path="academics/postgraduate" element={<AcademicsPage />} />
        <Route path="academics/junior-college" element={<AcademicsPage />} />
        <Route path="academics/course/:slug" element={<CourseDetailPage />} />

        {/* Admissions Sub-routes */}
        <Route path="admissions" element={<AdmissionsPage />} />
        <Route path="admissions/undergraduate" element={<AdmissionsPage />} />
        <Route path="admissions/postgraduate" element={<AdmissionsPage />} />
        <Route path="admissions/junior-college" element={<AdmissionsPage />} />

        {/* Campus & Facilities Sub-routes */}
        <Route path="campus" element={<FacilitiesPage />} />
        <Route path="campus/facilities" element={<FacilitiesPage />} />
        <Route path="campus/facilities/:slug" element={<FacilityDetailPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="gallery/video" element={<VideoGalleryPage />} />

        {/* News & Events */}
        <Route path="events" element={<EventsPage />} />
        <Route path="events/:slug" element={<EventsPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="news/:slug" element={<NewsDetailPage />} />

        {/* NAAC / IQAC Portal Sub-routes */}
        <Route path="naac-iqac" element={<NaacIqacPage subSection="iqac" />} />
        <Route path="naac-iqac/iqac" element={<NaacIqacPage subSection="iqac" />} />
        <Route path="naac-iqac/aqar" element={<NaacIqacPage subSection="aqar" />} />
        <Route path="naac-iqac/best-practices" element={<NaacIqacPage subSection="best-practices" />} />
        <Route path="naac-iqac/sss" element={<NaacIqacPage subSection="sss" />} />
        <Route path="naac-iqac/institutional-distinctiveness" element={<NaacIqacPage subSection="distinctiveness" />} />
        <Route path="naac-iqac/academic-calendar" element={<NaacIqacPage subSection="calendar" />} />

        {/* Student & Auxiliary Pages */}
        <Route path="students" element={<StudentsPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="downloads" element={<DownloadsPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="alumni" element={<AlumniPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* 404 Catch-all */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Admin Login Route */}
      <Route path="/admin/login" element={<AdminLoginPage />} />

      {/* Protected Admin CMS Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedAdminRoute>
            <AdminLayout />
          </ProtectedAdminRoute>
        }
      >
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboardPage />} />
        <Route path="courses" element={<AdminCoursesPage />} />
        <Route path="notices" element={<AdminNoticesPage />} />
        <Route path="news" element={<AdminNewsPage />} />
        <Route path="events" element={<AdminEventsPage />} />
        <Route path="results" element={<AdminResultsPage />} />
        <Route path="downloads" element={<AdminDownloadsPage />} />
        <Route path="gallery" element={<AdminGalleryPage />} />
        <Route path="facilities" element={<AdminFacilitiesPage />} />
        <Route path="enquiries" element={<AdminEnquiriesPage />} />
        <Route path="settings" element={<AdminSettingsPage />} />
      </Route>
    </Routes>
  );
};
