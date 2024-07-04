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
import Teachers from '../screens/teachers';
import TeacherAllocation from '../screens/teachers/TeacherAllocation';
import TeacherList from '../screens/teachers/TeacherList';


export const routes = {
  login: '/',
  signup: '/signup',
  students: '/students/student-add',
  students_list: '/students/student-list',
  transfer_student: '/students/transfer-student',
  teachers: '/teachers/teacher-add',
  teachers_list: '/teachers/teachers-list',
  teacher_allocation: '/teachers/teacher-allocation',
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
    ],
  },
];
