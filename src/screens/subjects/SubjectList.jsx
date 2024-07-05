import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, get, } from "firebase/database";
import SubjectTable from '../../components/global/SubjectTable';

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const db = getDatabase();
      const subjectRef = ref(db, 'subjects');
      try {
        const snapshot = await get(subjectRef);
        if (snapshot.exists()) {
          const subjectData = snapshot.val();
          const subjectArray = Object.keys(subjectData).map(key => ({
            id: key,
            ...subjectData[key]
          }));
          setSubjects(subjectArray);
        } else {
          setSubjects([]);
        }
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchSubjects();
  }, []);

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

      {Array?.isArray(subjects) && <SubjectTable subjects={subjects} />}
    </Box>
  )
}
export default SubjectList