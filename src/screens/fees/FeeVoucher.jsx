import { Box, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Auth_Data } from '../../constants/auth_constant';
import { useNavigate } from 'react-router-dom';

const FeesVoucher = () => {
  const [feesData, setFeesData] = useState([]);
  
  useEffect(() => {
    setTimeout(() => {
      setFeesData(Auth_Data?.mockFeesData);
    }, 1000);
  }, []);
  const navigate=useNavigate()
  const handlePayNow = (fee) => {
    navigate('/fees/fee-submission');
  };
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      gap: 4,
      backgroundColor: '#F5F5F5',
      paddingTop: '20px'
    }}>
      <Typography variant="h2" component="h1" sx={{ marginBottom: 4 }}>
        Fees Voucher
      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        width: '80%',
      }}>
        {feesData.map((fee, index) => (
          <Box key={index} sx={{
            width: '100%',
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mb: 3,
          }}>
            <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
              Fee Voucher - {fee.className}
            </Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingX: 2,
            }}>
              <Typography variant="body1">Class:</Typography>
              <Typography variant="body1">{fee.className}</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingX: 2,
            }}>
              <Typography variant="body1">Monthly Fee:</Typography>
              <Typography variant="body1">{fee.monthlyFees}</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingX: 2,
            }}>
              <Typography variant="body1">Yearly Fee:</Typography>
              <Typography variant="body1">{fee.yearlyFees}</Typography>
            </Box>
            <Button onClick={handlePayNow} variant="contained" color="primary" sx={{ mt: 2, alignSelf: 'center' }}>
              Pay Now
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default FeesVoucher;
