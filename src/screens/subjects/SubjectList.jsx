import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, get, } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import { Auth_Data } from '../../constants/auth_constant';
import SubmitButton from '../../components/global/SubmitButton';
import Table from '../../components/global/Table';

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);
const Subjectcolumns=Auth_Data?.Subjectcolumns
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

      {Array?.isArray(subjects) && <Table SubmitButton={<SubmitButton
                    onClick={() => navigate('')}
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
                />} heading={'Students List'} columns={Subjectcolumns} rows={subjects} />}
    </Box>
  )
}
export default SubjectList