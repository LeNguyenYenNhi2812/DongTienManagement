import React, { useState, useEffect } from 'react';
import { PendingPayment } from '../../types';
import { TUITION_LIST_DATA } from '../../constants';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { CheckCircle, Printer, Search, FileText, RotateCcw } from 'lucide-react';

interface TuitionViewProps {
  pendingPayment: PendingPayment | null;
  onConfirmPayment: () => void;
}

export const TuitionView: React.FC<TuitionViewProps> = ({ pendingPayment, onConfirmPayment }) => {
  const [view, setView] = useState<'list' | 'detail'>('list');
  const [selectedPending, setSelectedPending] = useState<PendingPayment | null>(null);

  useEffect(() => {
    if (pendingPayment) {
      setSelectedPending(pendingPayment);
      setView('detail');
    }
  }, [pendingPayment]);

  const handleBackToList = () => {
      setView('list');
      setSelectedPending(null);
  };

  const handlePayFromList = (item: any) => {
    // Create a mock pending payment from list item
    const mockPayment: PendingPayment = {
        studentName: item.name,
        studentCode: item.code,
        className: item.class,
        totalAmount: item.amount,
        status: 'PENDING',
        details: [{ month: item.month, amount: item.amount }]
    };
    setSelectedPending(mockPayment);
    setView('detail');
  };

  if (view === 'list') {
      return (
          <div className="space-y-6">
             <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1 w-full">
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Tìm kiếm</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input 
                        type="text" 
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-cyan-500 focus:border-cyan-500 block w-full pl-10 p-2.5" 
                        placeholder="Tên, Mã HS..." 
                        />
                    </div>
                </div>
                <Select label="Lớp" options={[{value: 'all', label: 'Tất cả lớp'}]} containerClassName="w-full md:w-48" />
                <Select label="Trạng thái" options={[{value: 'all', label: 'Tất cả trạng thái'}]} containerClassName="w-full md:w-48" />
                <Select label="Tháng" options={[{value: 'current', label: 'Tháng hiện tại'}]} containerClassName="w-full md:w-48" />
             </div>

             <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-sm text-left text-gray-900">
                    <thead className="text-xs text-gray-700 uppercase bg-white border-b">
                        <tr>
                            <th className="px-6 py-4">Mã HS</th>
                            <th className="px-6 py-4">Họ tên</th>
                            <th className="px-6 py-4">Lớp</th>
                            <th className="px-6 py-4">Tháng</th>
                            <th className="px-6 py-4 text-right">Số tiền</th>
                            <th className="px-6 py-4 text-center">Trạng thái</th>
                            <th className="px-6 py-4 text-center">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TUITION_LIST_DATA.map((item) => (
                            <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium">{item.code}</td>
                                <td className="px-6 py-4">{item.name}</td>
                                <td className="px-6 py-4">{item.class}</td>
                                <td className="px-6 py-4">{item.month}</td>
                                <td className="px-6 py-4 text-right font-medium">{item.amount.toLocaleString()} đ</td>
                                <td className="px-6 py-4 text-center">
                                    {item.status === 'PAID' ? (
                                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded border border-green-200 flex items-center justify-center gap-1 w-fit mx-auto">
                                            <CheckCircle size={12} /> Đã thanh toán
                                        </span>
                                    ) : (
                                         <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded border border-red-200 flex items-center justify-center gap-1 w-fit mx-auto">
                                            <RotateCcw size={12} /> Chưa đóng
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    {item.status === 'UNPAID' ? (
                                        <Button size="sm" className="bg-cyan-400 hover:bg-cyan-500 mx-auto" onClick={() => handlePayFromList(item)}>
                                            Thu tiền
                                        </Button>
                                    ) : (
                                        <Button size="sm" variant="ghost" className="mx-auto">
                                            <Printer size={16} className="text-gray-500" />
                                        </Button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
          </div>
      );
  }

  // DETAIL VIEW
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
         <button onClick={handleBackToList} className="text-gray-500 hover:text-gray-700 font-medium flex items-center gap-1">
            ← Quay lại danh sách
         </button>
         <h2 className="text-xl font-bold text-gray-800">Chi tiết phiếu thu</h2>
      </div>
      
      {selectedPending ? (
        <div className="bg-white rounded-lg shadow-md border border-blue-200 overflow-hidden max-w-3xl mx-auto">
            <div className="bg-blue-50 p-4 border-b border-blue-100 flex justify-between items-center">
                <h3 className="font-bold text-blue-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                    Xác nhận thanh toán
                </h3>
                <span className="text-sm text-blue-600 bg-white px-2 py-1 rounded border border-blue-200">
                    Mã HS: {selectedPending.studentCode}
                </span>
            </div>
            <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider">Học sinh</p>
                        <p className="text-2xl font-bold text-gray-800 mt-1">{selectedPending.studentName}</p>
                    </div>
                     <div className="text-right">
                        <p className="text-sm text-gray-500 uppercase tracking-wider">Lớp đăng ký</p>
                        <p className="text-2xl font-bold text-cyan-600 mt-1">{selectedPending.className}</p>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                    <table className="w-full text-sm text-gray-900">
                        <thead>
                            <tr className="text-gray-500 border-b border-gray-200">
                                <th className="text-left pb-3 font-medium">Khoản thu</th>
                                <th className="text-right pb-3 font-medium">Số tiền</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {selectedPending.details.map((d, idx) => (
                                <tr key={idx}>
                                    <td className="py-3 text-gray-700">{d.month}</td>
                                    <td className="py-3 text-right font-medium text-gray-900">{d.amount.toLocaleString()} đ</td>
                                </tr>
                            ))}
                            <tr className="font-bold text-gray-900 text-lg">
                                <td className="py-4 pt-6">Tổng cộng</td>
                                <td className="py-4 pt-6 text-right text-cyan-600">{selectedPending.totalAmount.toLocaleString()} đ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                    <Button variant="ghost" onClick={handleBackToList}>Hủy bỏ</Button>
                    <Button variant="primary" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700" onClick={onConfirmPayment}>
                        <Printer size={16} /> In biên lai
                    </Button>
                    <Button variant="success" className="flex items-center gap-2 bg-green-600 hover:bg-green-700" onClick={() => { onConfirmPayment(); handleBackToList(); }}>
                        <CheckCircle size={16} /> Xác nhận đã thu
                    </Button>
                </div>
            </div>
        </div>
      ) : (
        <div>Error: No Data</div>
      )}
    </div>
  );
};