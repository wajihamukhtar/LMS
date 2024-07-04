import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TeacherTable from '../../components/global/TeacherTable'
import theme from '../../theme'
import { getDatabase, ref, get, } from "firebase/database";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const db = getDatabase();
      const teachersRef = ref(db, 'teachers');
      try {
        const snapshot = await get(teachersRef);
        if (snapshot.exists()) {
          const teachersData = snapshot.val();
          const teachersArray = Object.keys(teachersData).map(key => ({
            id: key,
            ...teachersData[key]
          }));
          setTeachers(teachersArray);
        } else {
          setTeachers([]);
        }
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    fetchTeachers();
  }, []);

  console.log({ teachers })
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
      {Array?.isArray(teachers) && <TeacherTable teachers={teachers} />}
    </Box>
  )
}

export default TeacherList