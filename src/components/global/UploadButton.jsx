import React, { useState } from 'react';
import { Button } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const UploadButton = ({ type, accept, handleFileChange }) => {



    return (
        <Button
            variant="contained"
            component="label"
            startIcon={<UploadFileIcon />}
        >
            Upload PDF
            <input
                type={type}
                hidden
                accept={accept}
                onChange={handleFileChange}
            />
        </Button>
    );
};

export default UploadButton;
