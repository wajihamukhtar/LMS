import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import InputField from '../../components/global/InputField';
import SubmitButton from '../../components/global/SubmitButton';
import {Resetpassword } from '../firebaseMethods';
import { Auth_Data } from '../../constants/auth_constant';

const ResetPassword = () => {
  const { text, button_text} =
  Auth_Data?.reset || {};
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await Resetpassword(email);
      setMessage('Password reset email sent. Please check your inbox.');
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <Box component="form" onSubmit={handleResetPassword} sx={{ maxWidth: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>{text}</Typography>
      {message && <Typography sx={{ color: 'green' }}>{message}</Typography>}
      {error && <Typography sx={{ color: 'red' }}>{error}</Typography>}
      <InputField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <SubmitButton text={button_text}
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
export default ResetPassword;



