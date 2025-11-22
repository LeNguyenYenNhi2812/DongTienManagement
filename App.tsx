import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/views/Dashboard';
import { Registration } from './components/views/Registration';
import { StudentList } from './components/views/StudentList';
import { Schedule } from './components/views/Schedule';
import { TuitionView } from './components/views/TuitionView';
import { AIChat } from './components/AIChat';
import { PendingPayment } from './types';
import Logo from './asset/logo.png';
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState(false);
  
  // Shared State for Payment Workflow
  const [pendingPayment, setPendingPayment] = useState<PendingPayment | null>(null);

  // Login State Mock
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handlePaymentRequest = (payment: PendingPayment) => {
    setPendingPayment(payment);
    setCurrentPage('tuition');
  };

  const handleConfirmPayment = () => {
    setPendingPayment(null);
    alert("Thanh toán thành công!");
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case 'dashboard': return 'Tổng quan';
      case 'registration': return 'Đăng kí học sinh';
      case 'student-list': return 'Danh sách học sinh';
      case 'schedule': return 'Thời khóa biểu';
      case 'tuition': return 'Thu học phí';
      default: return 'Đồng Tiến Education';
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'registration': return <Registration onPaymentRequest={handlePaymentRequest} />;
      case 'student-list': return <StudentList />;
      case 'schedule': return <Schedule />;
      case 'tuition': return <TuitionView pendingPayment={pendingPayment} onConfirmPayment={handleConfirmPayment} />;
      default: return <Dashboard />;
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
           <div className="text-center mb-8">
               <div className="flex justify-center mb-4">
                <img src = {Logo} alt="Đồng Tiến Education" className="w-24 h-auto" loading="lazy" decoding="async" />
               </div>
               <h1 className="text-2xl font-bold text-blue-900 uppercase">Đồng Tiến Education</h1>
               <p className="text-gray-500 text-sm mt-2">Hệ thống quản lý giáo dục</p>
           </div>
           <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-4">
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tên đăng nhập/Email</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-cyan-400 outline-none" />
              </div>
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
                  <input type="password" className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-cyan-400 outline-none" />
              </div>
              <button type="submit" className="w-full bg-cyan-500 text-white font-bold py-3 rounded-lg hover:bg-cyan-600 transition-colors">
                  Đăng nhập
              </button>
           </form>
           <div className="mt-4 text-center">
               <a href="#" className="text-sm text-blue-600 hover:underline">Quên mật khẩu?</a>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#f3f4f6]">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpenMobile && (
         <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={() => setIsSidebarOpenMobile(false)}></div>
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static h-full z-30 transition-transform transform lg:translate-x-0 ${isSidebarOpenMobile ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar 
            currentPage={currentPage} 
            onNavigate={(page) => { setCurrentPage(page); setIsSidebarOpenMobile(false); }} 
            isCollapsed={isSidebarCollapsed}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header 
            title={getPageTitle()} 
            userName="nhi" 
            onToggleSidebar={() => setIsSidebarOpenMobile(!isSidebarOpenMobile)}
        />
        
        <main className="flex-1 p-6 overflow-y-auto">
          {renderContent()}
        </main>
      </div>

      <AIChat context={`Current Page: ${currentPage}`} />
    </div>
  );
};

export default App;