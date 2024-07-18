import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import InputField from '../../components/global/InputField';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../components/global/SubmitButton';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
import { onAuthChange } from '../firebaseMethods';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthChange((authUser) => {
      setUser(authUser);
      if (!authUser) {
        navigate('/resetpassword');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const auth = getAuth();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent. Please check your inbox.');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <Box component="form" onSubmit={handleResetPassword} sx={{ maxWidth: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>Reset Password</Typography>
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
      <SubmitButton text={'Send Reset Email'}
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



