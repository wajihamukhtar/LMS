import React from 'react';
import { Box} from '@mui/material';
import RegistrationForm from '../../components/global/RegistrationForm';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate()
    return (
        <Box
         onClick={()=>{navigate('/students/student-add')}}
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
          <RegistrationForm />
        </Box>
      );
    }
export default Registration;