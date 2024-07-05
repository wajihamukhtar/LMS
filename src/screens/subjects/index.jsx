import React, { useState } from 'react';
import { Box, } from '@mui/material';
import SubjectAdd from '../../components/global/SubjectAdd';
const Registration = () => {
    return (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            gap: 4,
          }}
        >
       <SubjectAdd/>
        </Box>
      );
    }
export default Registration;