import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import SubmitButton from './SubmitButton';
import { useNavigate } from 'react-router-dom';


function AdmissionList({ classList }) {
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
                        mr: '20px',
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

        </Box >
    );
}
export default AdmissionList;