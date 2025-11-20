export enum UserRole {
  ADMIN = 'ADMIN',
  STAFF = 'STAFF',
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
}

export interface Student {
  id: string;
  studentCode: string; // Mã học sinh
  lastName: string; // Họ
  firstName: string; // Tên
  school: string; // Trường
  phoneParent: string; // SĐT PH
  phoneStudent: string; // SĐT HS
  policyCode: string; // Mã chính sách
  policyStatus: string; // Chính sách (Bình thường, Giảm giá...)
  reason?: string; // Lí do
  classification: string; // Phân loại (LL)
  note?: string; // Ghi chú
  classId?: string; // Lớp đang học
}

export interface ClassGroup {
  id: string;
  name: string; // e.g., 9T(C3-C5)
  description: string; // e.g., C3: 14h-16h30...
  tuitionFee: number;
  days: string[]; // e.g., ["25/09/2025", "25/02/2026"]
}

export interface ScheduleItem {
  id: number;
  subject: string; // Môn học (A)
  classCode: string; // Mã lớp (B)
  session: 'Sáng' | 'Chiều' | 'Tối'; // Ca (C)
  dayOfWeek: string; // Thứ (D)
  time: string; // Giờ (E)
}

export interface PendingPayment {
  studentName: string;
  studentCode: string;
  className: string;
  totalAmount: number;
  details: { month: string; amount: number }[];
  status: 'PENDING' | 'PAID';
}
