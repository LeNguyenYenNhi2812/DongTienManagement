import React from 'react';
import { User as UserIcon, Menu } from 'lucide-react';
import { Button } from './ui/Button';

interface HeaderProps {
  title: string;
  userName: string;
  onToggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, userName, onToggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button onClick={onToggleSidebar} className="text-gray-500 hover:text-gray-700 lg:hidden">
            <Menu size={24} />
        </button>
        <div className="bg-cyan-500 p-1.5 rounded text-white lg:hidden">
             <Menu size={20} />
        </div>
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold overflow-hidden">
             <img src="https://picsum.photos/32/32" alt="User" className="opacity-90" />
          </div>
          <span className="text-gray-700 font-medium hidden sm:block">{userName}</span>
        </div>
        <Button variant="primary" size="sm" className="hidden sm:flex">Đăng xuất</Button>
      </div>
    </header>
  );
};
