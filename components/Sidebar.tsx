import React from 'react';
import { LayoutDashboard, UserPlus, Users, Calendar, BadgeDollarSign, LogOut, Menu } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isCollapsed?: boolean;
  toggleSidebar?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate, isCollapsed = false }) => {
  const navItems = [
    { id: 'dashboard', label: 'Tổng quan', icon: LayoutDashboard },
    { id: 'registration', label: 'Đăng kí học sinh', icon: UserPlus },
    { id: 'student-list', label: 'Danh sách học sinh', icon: Users },
    { id: 'schedule', label: 'Thời khóa biểu', icon: Calendar },
    { id: 'tuition', label: 'Thu học phí', icon: BadgeDollarSign },
  ];

  return (
    <div className={`bg-white h-screen border-r border-gray-200 flex flex-col transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} sticky top-0 left-0 z-20`}>
      {/* Logo Area */}
      <div className="h-20 flex items-center justify-center border-b border-gray-100 p-4">
        {!isCollapsed ? (
            <div className="text-center">
                <div className="flex flex-col items-center">
                   <span className="text-yellow-500 text-3xl font-bold leading-none">☀</span>
                   <span className="text-blue-900 text-xl font-bold uppercase mt-1">Đồng Tiến</span>
                   <span className="text-yellow-500 text-[0.6rem] tracking-widest uppercase">Education</span>
                </div>
            </div>
        ) : (
             <span className="text-yellow-500 text-3xl font-bold">☀</span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
              currentPage === item.id
                ? 'bg-cyan-50 text-cyan-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <item.icon className={`h-5 w-5 ${isCollapsed ? 'mx-auto' : 'mr-3'}`} />
            {!isCollapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
         <button
            className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-lg text-red-600 hover:bg-red-50 transition-colors`}
          >
            <LogOut className={`h-5 w-5 ${isCollapsed ? 'mx-auto' : 'mr-3'}`} />
            {!isCollapsed && <span>Đăng xuất</span>}
          </button>
      </div>
    </div>
  );
};
