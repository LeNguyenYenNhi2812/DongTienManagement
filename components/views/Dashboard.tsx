import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, BookOpen, DollarSign, TrendingUp, AlertCircle, Sparkles } from 'lucide-react';

const data = [
  { name: 'Thg 8', revenue: 4000, students: 24 },
  { name: 'Thg 9', revenue: 3000, students: 18 },
  { name: 'Thg 10', revenue: 2000, students: 35 },
  { name: 'Thg 11', revenue: 2780, students: 40 },
  { name: 'Thg 12', revenue: 1890, students: 45 },
  { name: 'Thg 1', revenue: 2390, students: 38 },
  { name: 'Thg 2', revenue: 3490, students: 52 },
];

export const Dashboard: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const StatCard = ({ title, value, icon: Icon, color, textColor = "text-gray-800" }: any) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
        <h3 className={`text-2xl font-bold ${textColor}`}>{value}</h3>
      </div>
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Tổng học sinh" value="216" icon={Users} color="bg-blue-500" />
        <StatCard title="Lớp đang mở" value="12" icon={BookOpen} color="bg-green-100" textColor="text-gray-800" />
        <StatCard title="Doanh thu tháng" value="72M" icon={DollarSign} color="bg-yellow-100" textColor="text-gray-800" />
        <StatCard title="Học phí nợ" value="8.5M" icon={AlertCircle} color="bg-red-50" textColor="text-red-600" />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Charts */}
        <div className="lg:col-span-2 space-y-6">
            {/* Revenue Chart */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">Biểu đồ doanh thu</h3>
                    <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded-md px-3 py-1.5 focus:ring-2 focus:ring-cyan-500 outline-none cursor-pointer hover:border-gray-400 transition-colors">
                        <option>6 tháng qua</option>
                        <option>3 tháng qua</option>
                        <option>1 năm qua</option>
                    </select>
                </div>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} tickLine={false} axisLine={false} />
                        <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} tickLine={false} axisLine={false} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            itemStyle={{ color: '#374151' }}
                            cursor={{ fill: '#f3f4f6' }}
                        />
                        <Legend />
                        <Bar dataKey="revenue" name="Doanh thu (Triệu VNĐ)" fill="#60a5fa" radius={[4, 4, 0, 0]} barSize={40} />
                    </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Students Chart */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">Số lượng học sinh mới</h3>
                    <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded-md px-3 py-1.5 focus:ring-2 focus:ring-cyan-500 outline-none cursor-pointer hover:border-gray-400 transition-colors">
                        <option>6 tháng qua</option>
                        <option>3 tháng qua</option>
                    </select>
                </div>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} tickLine={false} axisLine={false} />
                        <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} tickLine={false} axisLine={false} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            itemStyle={{ color: '#374151' }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="students" name="Học sinh" stroke="#eab308" strokeWidth={3} dot={{ r: 4, fill: '#eab308', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                    </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>

        {/* Right Column: AI Analysis */}
        <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 h-full sticky top-6">
                <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                    Phân tích AI
                </h3>
                
                <div className="space-y-6">
                    <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
                        <div className="flex items-center gap-2 mb-3 text-indigo-700 font-bold">
                            <Sparkles size={18} className="text-indigo-500" /> 
                            <span>Nhận xét</span>
                        </div>
                        <p className="text-indigo-900 text-sm leading-relaxed bg-white/50 p-3 rounded-lg">
                            Doanh thu tháng 10 tăng trưởng <span className="font-bold text-indigo-600">15%</span> so với tháng trước nhờ lượng học sinh mới đăng ký lớp 9 tăng đột biến.
                        </p>
                    </div>

                    <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                        <div className="flex items-center gap-2 mb-3 text-red-700 font-bold">
                            <AlertCircle size={18} className="text-red-500" /> 
                            <span>Cảnh báo</span>
                        </div>
                        <p className="text-red-900 text-sm leading-relaxed bg-white/50 p-3 rounded-lg">
                            Có <span className="font-bold text-red-600">5 học sinh</span> khối 8 chưa đóng học phí quá 2 tháng. Cần nhắc nhở phụ huynh.
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                        Xem chi tiết báo cáo
                    </button>
                    <p className="text-xs text-gray-400 text-center mt-3">Cập nhật 5 phút trước</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};