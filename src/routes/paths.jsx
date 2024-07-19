// Auth
import Login from '../auth/login';
import Signup from '../auth/signup';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import { NavbarLayout } from '../layouts/NavbarLayout';
import { SidebarLayout } from '../layouts/SidebarLayout';

// Private
import Students from '../screens/students';
import StudentList from '../screens/students/StudentList';
import TransferStudent from '../screens/students/TransferStudent';
import SubjectList from '../screens/subjects/SubjectList';
import Subjects from '../screens/subjects';
import Syllabus from '../screens/syllabus';
import Teachers from '../screens/teachers';
import TeacherAllocation from '../screens/teachers/TeacherAllocation';
import TeacherList from '../screens/teachers/TeacherList';
import Admission from '../screens/admission/Admission';
import ClassForm from '../screens/class/ClassForm';
import ClassList from '../screens/class/ClassList';
import FeesStructure from '../screens/fees/FeeStructure';
import FeesVoucher from '../screens/fees/FeeVoucher';
import FeesSubmission from '../screens/fees/FeeSubmission';
import ExamSchedule from '../screens/exam/ExamSchedule';
import ResultScreen from '../screens/exam/ExamResult';
import SyllabusList from '../screens/syllabus/SyllabusList';
import ResetPassword from '../auth/resetpassword';

export const routes = {
  login: '/',
  signup: '/signup',
  resetpassword:'/resetpassword',
  students: '/students/student-add',
  students_list: '/students/student-list',
  transfer_student: '/students/transfer-student',

  teachers: '/teachers/teacher-add',
  teachers_list: '/teachers/teachers-list',
  teacher_allocation: '/teachers/teacher-allocation',

  subjects: '/subjects/subject-add',
  subjects_list: '/subjects/subjects-list',

  syllabus: '/syllabus/syllabus_form',
  syllabus_list: '/syllabus/syllabus-list',

  adimission: '/admission/admission',

  class: '/class/class-form',
  class_list: '/class/class-list',

  fee: '/class/class-form',
  fees_structure: '/fees/fee-structure',
  fees_voucher: '/fees/fee-voucher',
  fees_submission: '/fees/fee-submission',

  exam_schedule: '/exam/exam-schedule',
  exam_result: '/exam/exam-result',


  error: '*',
};

export const publicRoutes = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: routes.login,
        element: <Login />,
      },
      {
        path: routes.signup,
        element: <Signup />,
      },
      {
        path: routes.resetpassword,
        element: <ResetPassword />,
      },

      {
        path: routes.navbar,
        element: <NavbarLayout />,
      },
      {
        path: routes.sidebar,
        element: <SidebarLayout />,
      },
    ],
  },
];

export const privateRoutes = [
  {
    element: <DashboardLayout />,
    children: [
      // students routes
      {
        path: routes.students,
        element: <Students />,
      },
      {
        path: routes.students_list,
        element: <StudentList />,
      },
      {
        path: routes.transfer_student,
        element: <TransferStudent />,
      },
      // Teacher routes
      {
        path: routes.teachers,
        element: <Teachers />,
      },
      {
        path: routes.teachers_list,
        element: <TeacherList />,
      },
      {
        path: routes.teacher_allocation,
        element: <TeacherAllocation />,
      },
      {
        path: routes.subjects,
        element: <Subjects />,
      },
      {
        path: routes.subjects_list,
        element: <SubjectList />,
      },
      {
        path: routes.syllabus,
        element: <Syllabus />,
      },
      {
        path: routes.syllabus_list,
        element: <SyllabusList />,
      },
      {
        path: routes.adimission,
        element: <Admission />,
      },
      {
        path: routes.class,
        element: <ClassForm />,
      },
      {
        path: routes.class_list,
        element: <ClassList />,
      },

      {
        path: routes.fees_structure,
        element: <FeesStructure />,
      },
      {
        path: routes.fees_voucher,
        element: <FeesVoucher />,
      },
      {
        path: routes.fees_submission,
        element: <FeesSubmission />,
      },
      {
        path: routes.exam_schedule,
        element: <ExamSchedule />,
      },
      {
        path: routes.exam_result,
        element: <ResultScreen />,
      },

    ],
  },
];
