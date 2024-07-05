import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import SubmitButton from './SubmitButton';
import { useNavigate } from 'react-router-dom';

const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'first_name', headerName: 'First name', width: 150 },
    { field: 'last_name', headerName: 'Last name', width: 150 },
    {
        field: 'email',
        headerName: 'Email',
        width: 200,
    },
];
function StudentTable({ students }) {
    const navigate = useNavigate()
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <Typography variant='h3' sx={{ mb: 3, textAlign: 'center' }}>Student List</Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', pb: 2 }}>
                <SubmitButton
                    onClick={() => navigate('/students/student-add')}
                    text={'Add'}
                    type={'submit'}
                    style={{
                        width: '80px',
                        height: '40px',
                        mr:'20px',
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
            <DataGrid
                rows={students}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </Box >
    );
}
export default StudentTable