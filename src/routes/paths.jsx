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


export const routes = {
  login: '/',
  signup: '/signup',
  students: '/students',
  students_list: '/students/student-list',
  transfer_student: '/students/transfer-student',
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
        element: <NavbarLayout/>,
      },
      {
        path: routes.sidebar,
        element: <SidebarLayout/>,
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
    ],
  },
];
