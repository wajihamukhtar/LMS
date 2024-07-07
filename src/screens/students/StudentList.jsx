import { Box} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, get, } from "firebase/database";
import Table from '../../components/global/Table';
import SubmitButton from '../../components/global/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { Auth_Data } from '../../constants/auth_constant';

const StudentList = () => {
  const Studentcolumns=Auth_Data?.Studentcolumns
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
      {Array?.isArray(students) && <Table SubmitButton={<SubmitButton
                    onClick={() => navigate('/students/student-add')}
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
                />} heading={'Students List'} columns={Studentcolumns} rows={students} />}
    </Box>
  )
}
export default StudentList