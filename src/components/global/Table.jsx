import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';

const DownloadButton = ({ text, onClick }) => (
    <Button
        onClick={onClick}
        variant="contained"
        color="primary"
        style={{
            width: '100%',
            height: '40px',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: 500,
        }}
    >
        {text}
    </Button>
);

function Table({ columns, rows, heading, SubmitButton }) {
    const { pathname } = useLocation()

    const handleDownload = (params) => {
        const fileData = params.row.docBase64;
        if (fileData) {
            const link = document.createElement('a');
            link.href = fileData;
            link.download = 'syllabus.pdf';
            link.click();
        } else {
            console.log('No file data available');
        }
    };

    const renderDownloadButton = (params) => (
        params.row.docBase64 ? <DownloadButton text="Download PDF" onClick={() => handleDownload(params)} /> : null
    );

    const updatedColumns = [
        ...columns,
        {
            field: 'download',
            headerName: 'Download',
            width: 150,
            renderCell: renderDownloadButton,
        },
    ];
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <Typography variant='h3' sx={{ mb: 3, textAlign: 'center' }}>{heading}</Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', pb: 2 }}>
                {SubmitButton}
            </Box>
            <DataGrid
                rows={rows}
                columns={pathname?.includes('/syllabus/syllabus-list') ? updatedColumns : columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </Box>
    );
}

export default Table;
