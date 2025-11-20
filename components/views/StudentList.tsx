import React from 'react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { Search, FileDown, Eye, Pencil, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { MOCK_STUDENTS } from '../../constants';

export const StudentList: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1 w-full">
           <label className="text-xs font-medium text-gray-500 mb-1 block">Tìm học sinh</label>
           <div className="relative">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               <Search className="h-4 w-4 text-gray-400" />
             </div>
             <input 
               type="text" 
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-cyan-500 focus:border-cyan-500 block w-full pl-10 p-2.5" 
               placeholder="Tìm theo tên, SĐT, mã lớp.." 
             />
           </div>
        </div>
        <Select 
            label="Nhóm lớp" 
            options={[{value: 'all', label: 'Nhóm lớp'}]} 
            containerClassName="w-full md:w-48"
            className="bg-gray-200 border-none"
        />
         <Select 
            label="Lớp" 
            options={[{value: 'all', label: 'Lớp'}]} 
            containerClassName="w-full md:w-48"
            className="bg-gray-200 border-none"
        />
        <Button variant="primary" className="w-full md:w-auto px-6 bg-cyan-400 hover:bg-cyan-500 border-none">
           <Search className="w-4 h-4 mr-2" /> Tìm
        </Button>
         <Button variant="success" className="w-full md:w-auto px-6 bg-green-500 hover:bg-green-600 border-none">
           <FileDown className="w-4 h-4 mr-2" /> Xuất Excel
        </Button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs text-gray-700 uppercase bg-white border-b">
              <tr>
                <th className="px-4 py-4">Mã</th>
                <th className="px-4 py-4">Họ</th>
                <th className="px-4 py-4">Tên</th>
                <th className="px-4 py-4">Trường</th>
                <th className="px-4 py-4">SĐT</th>
                <th className="px-4 py-4 text-center">Mã chính sách</th>
                <th className="px-4 py-4">Chính sách</th>
                <th className="px-4 py-4 text-center">LL</th>
                <th className="px-4 py-4">Lớp</th>
                <th className="px-4 py-4 text-center">View</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_STUDENTS.map((student) => (
                <tr key={student.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium text-gray-900">{student.studentCode}</td>
                  <td className="px-4 py-4">{student.lastName}</td>
                  <td className="px-4 py-4 font-medium text-gray-900">{student.firstName}</td>
                  <td className="px-4 py-4">{student.school}</td>
                  <td className="px-4 py-4">{student.phoneParent}</td>
                  <td className="px-4 py-4 text-center">{student.policyCode}</td>
                  <td className="px-4 py-4">{student.policyStatus}</td>
                  <td className="px-4 py-4 text-center">{student.classification}</td>
                  <td className="px-4 py-4">{student.classId}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-gray-500 hover:text-blue-600"><Eye size={18} /></button>
                      <button className="text-gray-500 hover:text-green-600"><Pencil size={18} /></button>
                      <button className="text-gray-500 hover:text-red-600"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
               {/* Filling mock rows to look like screenshot */}
               {[...Array(3)].map((_, i) => (
                 <tr key={`mock-${i}`} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium text-gray-900">20130098</td>
                  <td className="px-4 py-4">Lê Huỳnh Nhất</td>
                  <td className="px-4 py-4 font-medium text-gray-900">Thái</td>
                  <td className="px-4 py-4">TQT</td>
                  <td className="px-4 py-4">0909876678</td>
                  <td className="px-4 py-4 text-center">1</td>
                  <td className="px-4 py-4">Bình thường</td>
                  <td className="px-4 py-4 text-center">0</td>
                  <td className="px-4 py-4">9T(C3-C5)</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-gray-500 hover:text-blue-600"><Eye size={18} /></button>
                      <button className="text-gray-500 hover:text-green-600"><Pencil size={18} /></button>
                      <button className="text-gray-500 hover:text-red-600"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
               ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t">
           <div className="flex gap-2">
             <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50 text-gray-600" disabled><ChevronLeft size={16}/></button>
             
             {/* Active Page - High Contrast */}
             <button className="w-8 h-8 flex items-center justify-center rounded bg-cyan-500 text-white font-bold shadow-sm">1</button>
             
             {/* Inactive Pages */}
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 font-medium transition-colors">2</button>
             
             <span className="w-8 h-8 flex items-center justify-center text-gray-500 font-medium">...</span>
             
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 font-medium transition-colors">9</button>
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 font-medium transition-colors">10</button>
             
             <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 hover:bg-gray-200 text-gray-600"><ChevronRight size={16}/></button>
           </div>
           <div className="text-sm text-gray-600 font-medium">
             Tổng cộng: 6 học sinh
           </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex gap-4 flex-wrap">
         <Button variant="secondary" className="bg-gray-500 text-white hover:bg-gray-600">Xóa HS Lớp 12</Button>
         <Button variant="secondary" className="bg-gray-500 text-white hover:bg-gray-600">Xóa HS (Mới đăng kí)</Button>
         <Button variant="secondary" className="bg-gray-500 text-white hover:bg-gray-600">Xóa trường</Button>
         <Button variant="secondary" className="bg-gray-500 text-white hover:bg-gray-600">Xóa giáo viên</Button>
         <div className="flex-1"></div>
         <Button variant="success" className="px-8 bg-green-500 text-white">Thêm mới</Button>
      </div>
    </div>
  );
};