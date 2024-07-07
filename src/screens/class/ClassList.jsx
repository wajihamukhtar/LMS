import { Box, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, get, } from "firebase/database";
import { Auth_Data } from '../../constants/auth_constant';
import SubmitButton from '../../components/global/SubmitButton';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/global/Table';

const ClassList = () => {
  const Classcolumns = Auth_Data?.Classcolumns
  const [classListData, setClassListData] = useState([]);
  useEffect(() => {
    const fetchClassList = async () => {
      const db = getDatabase();
      const admissionRef = ref(db, 'classlist');
      try {
        const snapshot = await get(admissionRef);
        if (snapshot.exists()) {
          const admissionData = snapshot.val();
          const admissionArray = Object.keys(admissionData).map(key => ({
            id: key,
            ...admissionData[key]
          }));
          setClassListData(admissionArray);
        } else {
          setClassListData([]);
        }
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchClassList();
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
      {Array?.isArray(classListData) && <Table SubmitButton={<SubmitButton
        onClick={() => navigate('/class/class-form')}
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
      />} heading={'Class List'} rows={classListData} columns={Classcolumns} />}

    </Box>
  )
}
export default ClassList