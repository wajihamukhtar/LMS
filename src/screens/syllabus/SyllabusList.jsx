import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, get, } from "firebase/database";
import Table from '../../components/global/Table';
import { Auth_Data } from '../../constants/auth_constant';
import SubmitButton from '../../components/global/SubmitButton';
import { useNavigate } from 'react-router-dom';

const SyllabusList = () => {
  const [syllabus, setsyllabus] = useState([]);
  const Syllabuscolumns = Auth_Data?.Syllabuscolumns
  useEffect(() => {
    const fetchsyllabus = async () => {
      const db = getDatabase();
      const syllabusRef = ref(db, 'syllabus');
      try {
        const snapshot = await get(syllabusRef);
        if (snapshot.exists()) {
          const syllabusData = snapshot.val();
          const syllabusArray = Object.keys(syllabusData).map(key => ({
            id: key,
            ...syllabusData[key]
          }));
          setsyllabus(syllabusArray);
        } else {
          setsyllabus([]);
        }
      } catch (error) {
        console.error('Error fetching syllabus:', error);
      }
    };

    fetchsyllabus();
  }, []);
  const navigate = useNavigate()

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

      {Array?.isArray(syllabus) && <Table SubmitButton={<SubmitButton
        onClick={() => navigate('/syllabus/syllabus_form')}
        text={'Add'}
        type={'submit'}
        style={{
          width: '80px',
          height: '40px',
          mr: '20px',
          border: '1px solid #FAFAFA',
          borderRadius: '10px',
          fontSize: '16px',
          fontWeight: 500,
          color: '#fff !important',
          backgroundColor: '#008000',
          '&:hover': {
            backgroundColor: '#008000'
          }
        }}
      />} heading={'Syllabus List'} columns={Syllabuscolumns} rows={syllabus} />}
    </Box>
  )
}
export default SyllabusList