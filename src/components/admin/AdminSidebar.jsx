import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Bell,
  Newspaper,
  Calendar,
  Award,
  Download,
  Image,
  Building,
  MessageSquare,
  Settings,
  LogOut,
  GraduationCap,
  X
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export const AdminSidebar = ({ isMobileOpen, onCloseMobile }) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navItems = [
    { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Courses Management', path: '/admin/courses', icon: BookOpen },
    { label: 'Notices & Circulars', path: '/admin/notices', icon: Bell },
    { label: 'News & Media', path: '/admin/news', icon: Newspaper },
    { label: 'Events Management', path: '/admin/events', icon: Calendar },
    { label: 'Results Management', path: '/admin/results', icon: Award },
    { label: 'Downloads & Forms', path: '/admin/downloads', icon: Download },
    { label: 'Gallery Albums', path: '/admin/gallery', icon: Image },
    { label: 'Facilities', path: '/admin/facilities', icon: Building },
    { label: 'Admission Enquiries', path: '/admin/enquiries', icon: MessageSquare },
    { label: 'System Settings', path: '/admin/settings', icon: Settings }
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-slate-900 text-slate-300 w-64 border-r border-slate-800">
      {/* Header */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-amber-400 font-bold shadow-md">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xs font-black text-white uppercase tracking-wider">GRP COLLEGE</h2>
            <p className="text-[10px] text-amber-400 font-semibold">Admin CMS Panel</p>
          </div>
        </div>
        {onCloseMobile && (
          <button onClick={onCloseMobile} className="lg:hidden p-1 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation List */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto custom-scrollbar text-xs font-medium">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onCloseMobile}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white font-bold shadow-md'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`
              }
            >
              <IconComponent className="w-4 h-4 shrink-0" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* User Info & Logout Footer */}
      <div className="p-3 border-t border-slate-800 bg-slate-950/60 space-y-2">
        <div className="px-2 py-1.5 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-900 text-blue-200 border border-blue-700 flex items-center justify-center text-xs font-bold">
            {user?.name?.charAt(0) || 'A'}
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold text-white truncate">{user?.name || 'Admin User'}</p>
            <p className="text-[10px] text-slate-400 truncate">{user?.role || 'Administrator'}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/30 text-xs font-bold rounded-lg transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Logout Session</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block shrink-0 h-screen sticky top-0">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onCloseMobile} />
          <div className="relative z-10">{sidebarContent}</div>
        </div>
      )}
    </>
  );
};
