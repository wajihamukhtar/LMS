import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, MenuItem } from '@mui/material';

const paymentMethods = [
  { label: 'Credit Card', value: 'credit_card' },
  { label: 'Debit Card', value: 'debit_card' },
  { label: 'Net Banking', value: 'net_banking' },
  { label: 'UPI', value: 'upi' },
];

const FeesSubmission = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const fee = location.state?.fee || {};

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  if (!location.state) {
    navigate('/'); // Redirect to home if no state is present
    
  }

  return (
    <Box sx={{ padding: 4, maxWidth: 600, margin: '0 auto', backgroundColor: '#fff', borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h2" component="h1" sx={{ marginBottom: 4 }}>
        Payment for {fee.className}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Class"
          variant="outlined"
          fullWidth
          value={fee.className}
          disabled
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Amount"
          variant="outlined"
          fullWidth
          value={fee.monthlyFees}
          disabled
          sx={{ marginBottom: 2 }}
        />
        <TextField
          select
          label="Payment Method"
          variant="outlined"
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        >
          {paymentMethods.map((method) => (
            <MenuItem key={method.value} value={method.value}>
              {method.label}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit Payment
        </Button>
      </form>
    </Box>
  );
};

export default FeesSubmission;
