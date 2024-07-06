import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import SubmitButton from './SubmitButton';
import { useNavigate } from 'react-router-dom';

const columns = [
    { field: 'id', headerName: 'ID',  width: 240},
    { field: 'first_name', headerName: 'First Name', width: 150 },
    { field: 'last_name', headerName: 'Last Name', width: 150 },
    { field: 'father_name', headerName: 'Father Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'class', headerName: 'Class', width: 150 },
    {
        field: 'group',
        headerName: 'Group',
        width:200,
    },
];
function AdmissionList({classList}) {
    const navigate = useNavigate()
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <Typography variant='h1' sx={{ mb: 3, textAlign: 'center' }}>Class Admission List</Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', pb: 2 }}>
                <SubmitButton
                    onClick={() => navigate('/admission/admission')}
                    text={'Add'}
                    type={'submit'}
                    style={{
                        width: '80px',
                        mr:'20px',
                        height: '40px',
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
                />
            </Box>
            <Box component="ol">
        {classList.map((student, index) => (
          <Typography variant='p' sx={{paddingBottom:'6px'}} component={'li'} key={index}>{student.first_name}{student.last_name}- {student.email}-{student.date_of_birth} </Typography>
        ))}
      </Box>
        </Box >
    );
}
export default AdmissionList;