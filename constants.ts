import { Student, ScheduleItem, ClassGroup } from './types';

export const MOCK_STUDENTS: Student[] = [
  {
    id: '1',
    studentCode: '20130098',
    lastName: 'Lê Huỳnh Nhất',
    firstName: 'Thái',
    school: 'TQT',
    phoneParent: '0909876678',
    phoneStudent: '',
    policyCode: '1',
    policyStatus: 'Bình thường',
    classification: '0',
    classId: '9T(C3-C5)',
  },
  {
    id: '2',
    studentCode: '22129432',
    lastName: 'Tôn Nữ Mai',
    firstName: 'Anh',
    school: 'THPT Bình Tân',
    phoneParent: '0909876543',
    phoneStudent: '0909876987',
    policyCode: '0',
    policyStatus: 'Bình thường',
    classification: '0',
    classId: '9A(T3-T5)',
  },
   {
    id: '3',
    studentCode: '20130112',
    lastName: 'Nguyễn Văn',
    firstName: 'Bình',
    school: 'THCS Hoa Lư',
    phoneParent: '0912345678',
    phoneStudent: '',
    policyCode: '1',
    policyStatus: 'Giảm 10%',
    classification: '1',
    classId: '8T(T3-T5_2)',
  },
];

export const SCHEDULE_DATA: ScheduleItem[] = [
  { id: 1, subject: 'Toán', classCode: '8T(T3-T5_2)', session: 'Tối', dayOfWeek: 'Thứ 3\nThứ 5', time: '18:00 - 20:30\n18:00 - 20:30' },
  { id: 2, subject: 'Tiếng anh', classCode: '8A(S4-S6_3)', session: 'Sáng', dayOfWeek: 'Thứ 4\nThứ 6', time: '7:30 - 10:00\n7:30 - 10:00' },
  { id: 3, subject: 'Tiếng anh', classCode: '8A(S4-S6_2)', session: 'Tối', dayOfWeek: 'Thứ 3\nThứ 5', time: '7:30 - 10:00\n7:30 - 10:00' },
  { id: 4, subject: 'Ngữ văn', classCode: '8V(T2-T6_2)', session: 'Tối', dayOfWeek: 'Thứ 2\nThứ 6', time: '18:00 - 20:30\n18:00 - 20:30' },
  { id: 5, subject: 'KHTN', classCode: 'KHTN', session: 'Tối', dayOfWeek: 'Thứ 7', time: '18:00 - 20:30' },
];

export const CLASSES: ClassGroup[] = [
  { id: '1', name: '9T(C3-C5)', description: 'C3: 14h - 16h30, C5: 14h - 16h30', tuitionFee: 600000, days: [] },
  { id: '2', name: '9A(T3-T5)', description: 'T3: 18h - 20h30, T5: 18h - 19h30', tuitionFee: 650000, days: [] },
  { id: '3', name: '8T(T3-T5_2)', description: 'T3: 18h - 20h30', tuitionFee: 500000, days: [] },
];

export const TUITION_LIST_DATA = [
  { id: '1', code: '22129432', name: 'Tôn Nữ Mai Anh', class: 'Toán 8', month: '10/2025', amount: 600000, status: 'UNPAID' },
  { id: '2', code: '20130098', name: 'Lê Huỳnh Nhất Thái', class: 'Toán 9', month: '10/2023', amount: 600000, status: 'PAID' },
  { id: '3', code: '20130112', name: 'Nguyễn Văn Bình', class: 'Lý 9', month: '10/2025', amount: 500000, status: 'UNPAID' },
  { id: '4', code: '20130456', name: 'Trần Thị C', class: 'Hóa 8', month: '09/2025', amount: 550000, status: 'PAID' },
];
