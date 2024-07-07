import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, get, } from "firebase/database";
import Table from '../../components/global/Table';
import { Auth_Data } from '../../constants/auth_constant';
import SubmitButton from '../../components/global/SubmitButton';
import { useNavigate } from 'react-router-dom';

const TeacherList = () => {
  const Teachercolumns = Auth_Data?.Teachercolumns
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
  const navigate = useNavigate()
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
      {Array?.isArray(teachers) && <Table SubmitButton={<SubmitButton
                    onClick={() => navigate('/teachers/teacher-add')}
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
                />} heading={'Teachers List'} columns={Teachercolumns} rows={teachers} />}
    </Box>
  )
}

export default TeacherList