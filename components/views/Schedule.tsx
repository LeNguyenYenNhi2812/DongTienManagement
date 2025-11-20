import React from 'react';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { Search, FileDown } from 'lucide-react';
import { SCHEDULE_DATA } from '../../constants';

export const Schedule: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-end">
         <Select 
            label="Nhóm lớp" 
            options={[{value: 'khoi8', label: 'kHỐI 8'}]} 
            containerClassName="w-full md:w-48"
            className="bg-gray-200 border-none"
        />
         <Select 
            label="Lớp" 
            options={[{value: 'lop', label: 'Lớp'}]} 
            containerClassName="w-full md:w-48"
            className="bg-gray-200 border-none"
        />
        <div className="flex-1"></div>
        <Button variant="primary" className="bg-cyan-400 hover:bg-cyan-500 border-none">
           <Search className="w-4 h-4 mr-2" /> Tìm
        </Button>
        <Button variant="success" className="bg-green-400 hover:bg-green-500 border-none">
           <FileDown className="w-4 h-4 mr-2" /> Xuất Excel
        </Button>
      </div>

      {/* Schedule Card/Table */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden relative">
         {/* Header Blue Line */}
         <div className="h-1 bg-blue-500 w-full"></div>
         
         <div className="text-center py-4">
            <h2 className="text-lg font-semibold text-gray-500 uppercase tracking-wide">Thời khóa biểu</h2>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="bg-gray-50 border-b border-gray-200">
                   <th className="p-3 w-12 text-center text-gray-400 font-medium"></th>
                   <th className="p-3 text-center text-gray-400 font-medium border-r border-gray-100">A</th>
                   <th className="p-3 text-center text-gray-400 font-medium border-r border-gray-100">B</th>
                   <th className="p-3 text-center text-gray-400 font-medium border-r border-gray-100">C</th>
                   <th className="p-3 text-center text-gray-400 font-medium border-r border-gray-100">D</th>
                   <th className="p-3 text-center text-gray-400 font-medium">E</th>
                 </tr>
                 <tr className="border-b border-gray-200">
                   <th className="p-4 text-center text-gray-400 font-medium w-12 bg-gray-50 border-r border-gray-100">1</th>
                   <th className="p-4 font-bold text-gray-800 text-lg border-r border-gray-100">Môn học</th>
                   <th className="p-4 font-bold text-gray-800 text-lg border-r border-gray-100">Mã lớp</th>
                   <th className="p-4 font-bold text-gray-800 text-lg border-r border-gray-100">Ca</th>
                   <th className="p-4 font-bold text-gray-800 text-lg border-r border-gray-100">Thứ</th>
                   <th className="p-4 font-bold text-gray-800 text-lg">Giờ</th>
                 </tr>
               </thead>
               <tbody>
                  {SCHEDULE_DATA.map((item, index) => (
                     <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="p-4 text-center text-gray-400 font-medium bg-gray-50 border-r border-gray-100">{index + 2}</td>
                        <td className="p-4 text-gray-700 text-lg border-r border-gray-100">{item.subject}</td>
                        <td className="p-4 text-gray-600 text-lg border-r border-gray-100">{item.classCode}</td>
                        <td className="p-4 text-gray-600 text-lg border-r border-gray-100 whitespace-pre-line">{item.session}</td>
                        <td className="p-4 text-gray-600 text-lg border-r border-gray-100 whitespace-pre-line">{item.dayOfWeek}</td>
                        <td className="p-4 text-gray-600 text-lg whitespace-pre-line">{item.time}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>

         {/* Footer Actions */}
         <div className="p-6 border-t border-gray-100 bg-white flex justify-end">
            <Button variant="success" className="px-8 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all">Thêm mới</Button>
         </div>
      </div>
    </div>
  );
};