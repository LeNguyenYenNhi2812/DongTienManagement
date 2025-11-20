import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { CLASSES } from '../../constants';
import { PendingPayment } from '../../types';
import { Calendar, ArrowRight, XCircle, Printer } from 'lucide-react';

interface RegistrationProps {
  onPaymentRequest: (payment: PendingPayment) => void;
}

export const Registration: React.FC<RegistrationProps> = ({ onPaymentRequest }) => {
  // State for form
  const [studentCode] = useState('22129432'); // Mock auto-gen
  const [lastName, setLastName] = useState('Tôn Nữ Mai');
  const [firstName, setFirstName] = useState('Anh');
  const [selectedClassId, setSelectedClassId] = useState<string>('1');
  
  // Derived state
  const selectedClass = CLASSES.find(c => c.id === selectedClassId) || CLASSES[0];
  
  const handleSave = () => {
    alert("Đã lưu thông tin học sinh thành công!");
  };

  const handlePayment = () => {
    // Prepare pending payment data
    const paymentData: PendingPayment = {
      studentName: `${lastName} ${firstName}`,
      studentCode: studentCode,
      className: selectedClass.name,
      totalAmount: 3500000, // Mock sum
      status: 'PENDING',
      details: [
        { month: 'Tháng 10', amount: selectedClass.tuitionFee },
        { month: 'Tháng 11', amount: selectedClass.tuitionFee + 50000 },
        { month: 'Tháng 12', amount: selectedClass.tuitionFee + 100000 },
        { month: 'Tháng 1', amount: selectedClass.tuitionFee },
        { month: 'Tháng 2', amount: selectedClass.tuitionFee },
      ]
    };
    onPaymentRequest(paymentData);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
            {/* LEFT COLUMN: Student Info */}
            <div className="space-y-5">
                <Input label="Mã học sinh" value={studentCode} disabled className="bg-white" />
                
                <Input label="Học phí tháng trước:" placeholder="T1: 1 000 000 R 19/09/2025 CK3" className="h-20" />

                <Input label="Họ" value={lastName} onChange={e => setLastName(e.target.value)} />
                
                <Input label="Tên" value={firstName} onChange={e => setFirstName(e.target.value)} />
                
                <Input label="Ngày đầu học" type="date" defaultValue="2025-10-11" />
                
                <Input label="Mã trường" value="BTân" />
                
                <Input label="Tên trường" value="THPT Bình Tân" />

                <div className="grid grid-cols-2 gap-4">
                     <Input label="SĐT PH" value="0909876543" />
                     <Input label="Ba" value="" className="bg-gray-100 text-center" readOnly disabled placeholder="Ba v" />
                </div>

                <Input label="SĐT HS" value="0909876987" />
                
                <div className="grid grid-cols-2 gap-4">
                    <Input label="Mã chính sách" value="0" />
                    <Input label="Chính sách" value="Bình thường" />
                </div>

                <Input label="Lí do (chính sách)" placeholder="Bình thường" />
                
                <Input label="Phân loại (LL)" value="0" />
                
                <Input label="Ghi chú" placeholder="Bình thường" />

                <div className="pt-4">
                    <Button variant="secondary" className="bg-gray-400 text-white hover:bg-gray-500">Xóa HS</Button>
                </div>
            </div>

            {/* RIGHT COLUMN: Class & Schedule Info */}
            <div className="space-y-6">
                 {/* Row 1: Lop, Ghi danh */}
                 <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="mb-1 text-sm font-medium text-gray-700 block">Lớp</label>
                        <Select 
                            options={CLASSES.map(c => ({ value: c.id, label: c.name }))}
                            value={selectedClassId}
                            onChange={(e) => setSelectedClassId(e.target.value)}
                        />
                    </div>
                    <div className="w-1/3">
                        <label className="mb-1 text-sm font-medium text-gray-700 block">&nbsp;</label>
                        <Select options={[{value: 'ghidanh', label: 'Ghi danh'}]} />
                    </div>
                 </div>

                 {/* Row 2: Buoi hoc */}
                 <div>
                    <label className="mb-1 text-sm font-medium text-gray-700 block">Buổi học:</label>
                    <div className="text-sm text-gray-600 py-2">
                        {selectedClass.description.split(',').map((part, i) => (
                            <div key={i}>{part.trim()}</div>
                        ))}
                    </div>
                 </div>

                 {/* Row 3: Thoi luong, Chiet khau */}
                 <div className="flex gap-4 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-700">Thời lượng</span>
                        <span className="text-sm text-gray-900">2.5 giờ</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <span className="text-sm font-medium text-gray-700">Chiết khấu</span>
                         <Select options={[{value: '10', label: '10%'}]} containerClassName="w-24" />
                    </div>
                 </div>

                 {/* Row 4: So buoi them */}
                 <div className="flex items-center justify-end gap-2">
                    <span className="text-sm font-medium text-gray-700">Số buổi thêm:</span>
                    <Input type="number" className="w-full" containerClassName="w-48" defaultValue={0} />
                 </div>

                 {/* Row 5: Ngay hoc Range */}
                 <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700 w-20">Ngày học</span>
                    <div className="flex-1 flex items-center gap-2">
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="h-4 w-4 text-gray-400" />
                            </div>
                            <input type="text" className="pl-9 pr-6 py-2 bg-white border border-gray-300 rounded w-full text-sm" value="2025-09-25" readOnly />
                            <XCircle className="h-3 w-3 text-gray-300 absolute right-2 top-2.5 cursor-pointer" />
                        </div>
                        <ArrowRight className="text-gray-400 h-4 w-4" />
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Calendar className="h-4 w-4 text-gray-400" />
                            </div>
                            <input type="text" className="pl-9 pr-6 py-2 bg-white border border-gray-300 rounded w-full text-sm" value="2026-02-25" readOnly />
                             <XCircle className="h-3 w-3 text-gray-300 absolute right-2 top-2.5 cursor-pointer" />
                        </div>
                    </div>
                 </div>

                 {/* Row 6: Tuition Table */}
                 <div className="overflow-x-auto border border-gray-200 rounded mt-2">
                    <table className="w-full text-xs text-center">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-2 border-r px-2">LỚP</th>
                                <th className="py-2 border-r px-2">THÁNG 9</th>
                                <th className="py-2 border-r px-2">THÁNG 10</th>
                                <th className="py-2 border-r px-2">THÁNG 11</th>
                                <th className="py-2 border-r px-2">THÁNG 12</th>
                                <th className="py-2 border-r px-2">THÁNG 1</th>
                                <th className="py-2 px-2">THÁNG 2</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            <tr>
                                <td className="py-3 border-r font-medium">{selectedClass.name}</td>
                                <td className="py-3 border-r">600 000</td>
                                <td className="py-3 border-r">600 000</td>
                                <td className="py-3 border-r">600 000</td>
                                <td className="py-3 border-r">600 000</td>
                                <td className="py-3 border-r">600 000</td>
                                <td className="py-3">600 000</td>
                            </tr>
                        </tbody>
                    </table>
                 </div>
                 
                 {/* Row 7: Actions */}
                 <div className="pt-6 flex flex-wrap justify-between items-center gap-4">
                    <div className="flex gap-2">
                        <Button variant="secondary" className="bg-gray-400 text-white hover:bg-gray-500">Xóa lịch</Button>
                        <Button variant="ghost" className="border border-gray-300"><Printer size={18}/></Button>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="success" className="bg-green-500 hover:bg-green-600">Thêm lịch học</Button>
                        <Button variant="success" className="bg-green-500 hover:bg-green-600" onClick={handleSave}>Lưu lịch</Button>
                        <Button variant="primary" className="bg-cyan-400 hover:bg-cyan-500" onClick={handlePayment}>
                            <span className="mr-1">💳</span> Thanh toán
                        </Button>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  );
};