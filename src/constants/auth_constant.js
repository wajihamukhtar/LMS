import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ClassIcon from '@mui/icons-material/Class';
import SubjectIcon from '@mui/icons-material/Subject';
import PaymentIcon from '@mui/icons-material/Payment';
import Person3Icon from '@mui/icons-material/Person3';
import MenuBookIcon from '@mui/icons-material/MenuBook';
export const Auth_Data = {
  login: {
    text: 'LOGIN',
    checkbox_text: 'Remember me',
    reset_link: { text: 'click here?', href: '#' },
    button_text: 'Login',
    link: { text: 'Sign up', href: '/signup',reset:'/resetpassword' },
    fields: [
      { type: 'email', label: 'Email:', place_holder: 'Enter your email' },
      {
        type: 'password',
        label: 'Password:',
        place_holder: 'Enter your password',
      },
    ],
  },
  reset: {
    text: 'RESETPASSWORD',
    button_text: 'Send Current Email',
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
        name: 'class',
        type: 'number',
        label: 'Class:',
        place_holder: 'Enter your classname',
      },
    ],
  },
  subjectAdd: {
    text: 'Subject Add',
    redio: [{ text: 'GeneralSciece', key: 'gender' }, { text: 'Pre-Engineering', key: 'gender' }],
    redio_text: 'Select Group',
    button_text: 'ADD',
    fields: [
      { name: 'subject_name', type: 'text', label: 'Subject Name:', place_holder: 'Enter your subjectname' },
      { name: 'class', type: 'number', label: 'Class:', place_holder: 'Enter your class' },
    ],
  },
  syllabustAdd: {
    text: 'Syllabus Add',
    button_text: 'ADD',
    fields: [
      { name: 'subject_name', type: 'text', label: 'Subject Name:', place_holder: 'Enter your subjectname' },
      { name: 'class', type: 'number', label: 'Class:', place_holder: 'Enter your class' },
    ],
  },
  admission: {
    text: 'ADMISSION FORM',
    redio: [{ text: 'Female', key: 'gender' }, { text: 'Male', key: 'gender' }],
    redio_text: 'Gender',
    button_text: 'Submit',
    fields: [
      { name: 'first_name', type: 'text', label: 'FirstName:', place_holder: 'Enter your firstname' },
      { name: 'last_name', type: 'text', label: 'LastName:', place_holder: 'Enter your lastname' },
      { name: 'email', type: 'email', label: 'Email:', place_holder: 'Enter your email' },
      { name: 'phonenum', type: 'number', label: 'PhoneNumber:', place_holder: 'Enter your phone number' },
      { name: 'date_of_birth', type: 'number', label: 'Date Of Birth:', place_holder: 'Enter your date of birth' },
      {
        name: 'qualification',
        type: 'text',
        label: 'Qualification:',
        place_holder: 'Enter your qualification',
      },
    ],
  },
  Studentcolumns: [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'first_name', headerName: 'First name', width: 150 },
    { field: 'last_name', headerName: 'Last name', width: 150 },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
  ],
  Teachercolumns: [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'first_name', headerName: 'First name', width: 150 },
    { field: 'last_name', headerName: 'Last name', width: 150 },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
  ],
  Subjectcolumns: [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'subject_name', headerName: 'Subject Name', width: 150 },
    { field: 'class', headerName: 'Class', width: 150 },
    {
      field: 'group',
      headerName: 'Group',
      width: 200,
    },
  ],
  Syllabuscolumns: [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'subject_name', headerName: 'Subject Name', width: 150 },
    { field: 'class', headerName: 'Class', width: 150 },
  ],
  Classcolumns: [
    { field: 'id', headerName: 'ID', width: 240 },
    { field: 'first_name', headerName: 'First Name', width: 150 },
    { field: 'last_name', headerName: 'Last Name', width: 150 },
    { field: 'father_name', headerName: 'Father Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'class', headerName: 'Class', width: 150 },
    {
      field: 'group',
      headerName: 'Group',
      width: 200,
    },
  ],
 
  mockFeesData: [
    { className: "Class 1", monthlyFees: 500, yearlyFees: 6000 },
    { className: "Class 2", monthlyFees: 600, yearlyFees: 7200 },
    { className: "Class 3", monthlyFees: 700, yearlyFees: 8400 },
    { className: "Class 4", monthlyFees: 800, yearlyFees: 9600 },
    { className: "Class 5", monthlyFees: 900, yearlyFees: 10800 },
    { className: "Class 6", monthlyFees: 1000, yearlyFees: 12000 },
    { className: "Class 7", monthlyFees: 1100, yearlyFees: 13200 },
    { className: "Class 8", monthlyFees: 1200, yearlyFees: 14400 },
    { className: "Class 9", monthlyFees: 1300, yearlyFees: 15600 },
    { className: "Class 10", monthlyFees: 1400, yearlyFees: 16800 },
  ]
  ,
  mockExamData: [
    { id: 1, paperName: "Class 1 - Mathematics", date: "2024-08-15", startTime: "09:00 AM", endTime: "12:00 PM" },
    { id: 2, paperName: "Class 1 - English", date: "2024-08-16", startTime: "10:00 AM", endTime: "01:00 PM" },
    { id: 3, paperName: "Class 2 - Science", date: "2024-08-17", startTime: "09:30 AM", endTime: "12:30 PM" },
    { id: 4, paperName: "Class 2 - History", date: "2024-08-18", startTime: "11:00 AM", endTime: "02:00 PM" },
    { id: 5, paperName: "Class 3 - Geography", date: "2024-08-19", startTime: "01:00 PM", endTime: "04:00 PM" },
    { id: 6, paperName: "Class 3 - Physics", date: "2024-08-20", startTime: "02:00 PM", endTime: "05:00 PM" },
    { id: 7, paperName: "Class 4 - Chemistry", date: "2024-08-21", startTime: "03:00 PM", endTime: "06:00 PM" },
    { id: 8, paperName: "Class 5 - Mathematics", date: "2024-08-22", startTime: "09:00 AM", endTime: "12:00 PM" },
    { id: 9, paperName: "Class 5 - English", date: "2024-08-23", startTime: "10:00 AM", endTime: "01:00 PM" },
    { id: 10, paperName: "Class 6 - Science", date: "2024-08-24", startTime: "09:30 AM", endTime: "12:30 PM" },
    { id: 11, paperName: "Class 6 - History", date: "2024-08-25", startTime: "11:00 AM", endTime: "02:00 PM" },
    { id: 12, paperName: "Class 7 - Geography", date: "2024-08-26", startTime: "01:00 PM", endTime: "04:00 PM" },
    { id: 13, paperName: "Class 7 - Physics", date: "2024-08-27", startTime: "02:00 PM", endTime: "05:00 PM" },
    { id: 14, paperName: "Class 8 - Chemistry", date: "2024-08-28", startTime: "03:00 PM", endTime: "06:00 PM" },
    { id: 15, paperName: "Class 9 - Mathematics", date: "2024-08-29", startTime: "09:00 AM", endTime: "12:00 PM" },
    { id: 16, paperName: "Class 9 - English", date: "2024-08-30", startTime: "10:00 AM", endTime: "01:00 PM" },
    { id: 17, paperName: "Class 10 - Science", date: "2024-08-31", startTime: "09:30 AM", endTime: "12:30 PM" },
    { id: 18, paperName: "Class 10 - History", date: "2024-09-01", startTime: "11:00 AM", endTime: "02:00 PM" },
    { id: 19, paperName: "Class 10 - Geography", date: "2024-09-02", startTime: "01:00 PM", endTime: "04:00 PM" },
    { id: 20, paperName: "Class 10 - Physics", date: "2024-09-03", startTime: "02:00 PM", endTime: "05:00 PM" },
  ],
  paymentMethods: [
    { label: 'Credit Card', value: 'credit_card' },
    { label: 'Debit Card', value: 'debit_card' },
    { label: 'Net Banking', value: 'net_banking' },
    { label: 'UPI', value: 'upi' },
  ],

  sidebarLinks: [
    {
      icon: <PersonIcon/>,
      text: 'Students',
      link: '#',
      sublinks: [
        {
          text: 'StudentRegistration',
          link: '/students/student-add',
        },
        {
          text: 'StudentList',
          link: '/students/student-list',
        },
        // {
        //   text: 'TransferStudents',
        //   link: '/students/transfer-student',
        // },

      ],
    },
    {
      icon: <Person3Icon />,
      text: 'Teachers',
      link: '#',
      sublinks: [
        {
          text: 'TeacherRegistration',
          link: '/teachers/teacher-add',
        },
        {
          text: 'TeacherList',
          link: '/teachers/teachers-list',
        },
        // {
        //   text: 'TeacherAllocation',
        //   link: '/teachers/teachers-allocation',
        // },
      ],
    },
    {
      icon: <SubjectIcon />,
      text: 'Subjects',
      link: '#',
      sublinks: [
        {
          text: 'Subjects Add',
          link: '/subjects/subject-add',
        },
        {
          text: 'Subject List',
          link: '/subjects/subjects-list',
        },
      ],
    },
    {
      icon: <AutoStoriesIcon/>,
      text: 'Syllabus',
      link: '#',
      sublinks: [
        {
          text: 'Syllabus Form',
          link: '/syllabus/syllabus_form',
        },
        {
          text: 'Syllabus List',
          link: '/syllabus/syllabus-list',
        },
      ],
    },
    {
      icon: <SchoolIcon />,
      text: 'School',
      link: '#',
      sublinks: [
        {
          text: 'Student Registration',
          link: '/students/student-add',
        },
        {
          text: 'Teacher Registration',
          link: '/teachers/teacher-add',
        },
      ],
    },
    {
      icon: <ClassIcon />,
      text: 'Class',
      link: '#',
      sublinks: [
        {
          text: 'Class Form',
          link: '/class/class-form',
        },
        {
          text: 'Class List',
          link: '/class/class-list',
        },
      ],
    },
    {
      icon: <PaymentIcon/>,
      text: 'Fees',
      link: '#',
      sublinks: [
        {
          text: 'Fee Structure',
          link: '/fees/fee-structure',
        },

        {
          text: 'Fee Voucher',
          link: '/fees/fee-voucher',
        },
        {
          text: 'Fee Submission',
          link: '/fees/fee-submission',
        },
      ],
    },
    {
      icon: <CastForEducationIcon />,
      text: 'Admission',
      link: '#',
      sublinks: [
        {
          text: 'Admission Form',
          link: '/admission/admission',
        },
      ],
    },
    {
      icon: <MenuBookIcon />,
      text: 'Exam',
      link: '#',
      sublinks: [
        {
          text: 'Exam Schedule',
          link: '/exam/exam-schedule',
        },
        {
          text: 'Exam Result',
          link: '/exam/exam-result',
        },
      ],
    },
  ]
};
