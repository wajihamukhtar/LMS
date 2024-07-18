// src/pages/SetNewPassword.js

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import InputField from '../../components/global/InputField';
import SubmitButton from '../../components/global/SubmitButton';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { confirmPasswordReset, getAuth } from 'firebase/auth';

const SetNewPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get('oobCode');
  
  const auth = getAuth();

  const handleSetNewPassword = async (e) => {
    e.preventDefault();
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setMessage('Password has been reset successfully.');
      setTimeout(() => navigate('/login'), 3000); // Redirect to login after 3 seconds
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <Box component="form" onSubmit={handleSetNewPassword} sx={{ maxWidth: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>Set New Password</Typography>
      {message && <Typography sx={{ color: 'green' }}>{message}</Typography>}
      {error && <Typography sx={{ color: 'red' }}>{error}</Typography>}
      <InputField
        label="New Password"
        type="password"
        name="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Enter New Password"
      />
      <SubmitButton text={'Set New Password'}
        type={'submit'}
        style={{
          width: '100%',
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
  );
};

export default SetNewPassword

