import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, get, } from "firebase/database";
import StudentTable from '../../components/global/Table';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const db = getDatabase();
      const studentsRef = ref(db, 'students');
      try {
        const snapshot = await get(studentsRef);
        if (snapshot.exists()) {
          const studentsData = snapshot.val();
          const studentsArray = Object.keys(studentsData).map(key => ({
            id: key,
            ...studentsData[key]
          }));
          setStudents(studentsArray);
        } else {
          setStudents([]);
        }
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  console.log({ students })

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      gap: 4,
      backgroundColor: '	#F5F5F5',
      paddingTop: '20px'
    }}>

      {Array?.isArray(students) && <StudentTable students={students} />}
    </Box>
  )
}
export default StudentList