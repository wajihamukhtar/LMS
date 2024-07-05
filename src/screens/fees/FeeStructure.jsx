import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Auth_Data } from '../../constants/auth_constant';

const FeesStructure = () => {
  const [feesData, setFeesData] = useState([]);
  const mockdata = Auth_Data?.FeesStructure || [];
  useEffect(() => {
    setTimeout(() => {
      setFeesData(Auth_Data?.mockFeesData);
    }, 1000);
  }, []);

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
        Fees Structure
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
            padding: 2,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}>
            <Typography variant="body1">{fee.className}</Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              paddingX: 2,
              color:'#008000'
            }}>
              <Typography variant="body1">Monthly Fee:</Typography>
              <Typography variant="body1">Rs:{fee.monthlyFees}</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              paddingX: 2,
            }}>
              <Typography variant="body1">Yearly Fee:</Typography>
              <Typography variant="body1">Rs:{fee.yearlyFees}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default FeesStructure;

