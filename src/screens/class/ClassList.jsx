import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, get, } from "firebase/database";
import AdmissionTable from '../../components/global/AdmissionTable';

const ClassList = () => {
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    const fetchClassList = async () => {
        const db = getDatabase();
        const admissionRef = ref(db, 'classlist');
        try {
          const snapshot = await get(admissionRef);
          if (snapshot.exists()) {
            const classListData = snapshot.val();
            setClassList(Object.values(classListData));
          } else {
            setClassList([]);
          }
        } catch (error) {
          console.error('Error fetching class list:', error);
        }
      };
  
      fetchClassList();
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
      {Array?.isArray(classList) && <AdmissionTable classList={classList}/>}
    </Box>
  )
}
export default ClassList