import MailIcon from '@mui/icons-material/Mail';
export const Auth_Data = {
  login: {
    text: 'LOGIN',
    checkbox_text: 'Remember me',
    reset_link: { text: 'click here?', href: '#' },
    button_text: 'Login',
    link: { text: 'Sign up', href: '/signup' },
    fields: [
      { type: 'email', label: 'Email:', place_holder: 'Enter your email' },
      {
        type: 'password',
        label: 'Password:',
        place_holder: 'Enter your password',
      },
    ],
  },
  signup: {
    text: 'SIGN UP',
    button_text: 'Sign Up',
    link: { text: 'Already have a profile?', href: '/' },
    fields: [
      {
        name: 'first_name',
        type: 'text',
        label: 'First name:',
        place_holder: 'Enter your first name',
      },
      {
        name: 'last_name',
        type: 'text',
        label: 'Last name:',
        place_holder: 'Enter your last name',
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email:',
        place_holder: 'Enter your email',
      },
      {
        name: 'password',
        type: 'password',
        label: 'Password:',
        place_holder: 'Enter your password',
      },
    ],
  },
  registration: {
    text: 'REGISTRATION FORM',
    redio: [{ text: 'Female', key: 'gender' }, { text: 'Male', key: 'gender' }],
    redio_text: 'Gender',
    button_text: 'Submit',
    fields: [
      { name: 'first_name', type: 'text', label: 'FirstName:', place_holder: 'Enter your firstname' },
      { name: 'last_name', type: 'text', label: 'LastName:', place_holder: 'Enter your lastname' },
      { name: 'email', type: 'email', label: 'Email:', place_holder: 'Enter your email' },

      {
        name: 'qualification',
        type: 'text',
        label: 'Qualification:',
        place_holder: 'Enter your qualification',
      },
    ],
  },
  navbar: {
    text: 'LOGIN',
    checkbox_text: 'Remember me',
    reset_link: { text: 'click here?', href: '#' },
    button_text: 'Login',
    link: { text: 'Sign up', href: '/signup' },
  },
  sidebarLinks: [
    {
      icon: <MailIcon />,
      text: 'Students',
      link: '#',
      sublinks: [
        {
          text: 'Student Registration',
          link: '/students/student-add',
        },
        {
          text: 'Student List',
          link: '/students/student-list',
        },
        {
          text: 'Transfer Students',
          link: '/students/transfer-student',
        },

      ],
    },
    {
      icon: <MailIcon />,
      text: 'Teachers',
      link: '#',
      sublinks: [
        {
          text: 'Teacher Registration',
          link: '/teachers/teacher-add',
        },
        {
          text: 'Teacher List',
          link: '/teachers/teachers-list',
        },
        {
          text: 'Teacher Allocation',
          link: '/teachers/teachers-allocation',
        },
      ],
    },
    {
      icon: <MailIcon />,
      text: 'Subjects',
      link: '#',
      sublinks: [
        {
          text: 'Teachers Registration',
          link: '/employee/dashboard/attendance/time-sheet',
        },
        {
          text: 'Teachers List',
          link: '/employee/dashboard/attendance/punch-requests',
        },
        {
          text: 'Teachers Allocation',
          link: '/employee/dashboard/attendance/punch-requests',
        },
      ],
    },
    {
      icon: <MailIcon />,
      text: 'Syllabus',
      link: '#',
      sublinks: [
        {
          text: 'Teachers Registration',
          link: '/employee/dashboard/attendance/time-sheet',
        },
        {
          text: 'Teachers List',
          link: '/employee/dashboard/attendance/punch-requests',
        },
      ],
    },
    {
      icon: <MailIcon />,
      text: 'School',
      link: '#',
      sublinks: [
        {
          text: 'sudents Registration',
          link: '/employee/dashboard/attendance/time-sheet',
        },
      ],
    },
    {
      icon: <MailIcon />,
      text: 'Class',
      link: '#',
      sublinks: [
        {
          text: 'Teachers Registration',
          link: '/employee/dashboard/attendance/time-sheet',
        },
        {
          text: 'Teachers List',
          link: '/employee/dashboard/attendance/punch-requests',
        },
      ],
    },
    {
      icon: <MailIcon />,
      text: 'Fees',
      link: '#',
      sublinks: [
        {
          text: 'Teachers Registration',
          link: '/employee/dashboard/attendance/time-sheet',
        },
        {
          text: 'Teachers List',
          link: '/employee/dashboard/attendance/punch-requests',
        },
        {
          text: 'Teachers Allocation',
          link: '/employee/dashboard/attendance/punch-requests',
        },
      ],
    },
    {
      icon: <MailIcon />,
      text: 'Admission',
      link: '#',
      sublinks: [
        {
          text: 'Teachers Registration',
          link: '/employee/dashboard/attendance/time-sheet',
        },
        {
          text: 'Teachers List',
          link: '/employee/dashboard/attendance/punch-requests',
        },
        {
          text: 'Teachers Allocation',
          link: '/employee/dashboard/attendance/punch-requests',
        },
      ],
    },
    {
      icon: <MailIcon />,
      text: 'Exam',
      link: '#',
      sublinks: [
        {
          text: 'Teachers Registration',
          link: '/employee/dashboard/attendance/time-sheet',
        },
        {
          text: 'Teachers List',
          link: '/employee/dashboard/attendance/punch-requests',
        },
        {
          text: 'Teachers Allocation',
          link: '/employee/dashboard/attendance/punch-requests',
        },
      ],
    },
  ]
};
