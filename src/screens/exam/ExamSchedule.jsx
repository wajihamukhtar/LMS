import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Auth_Data } from '../../constants/auth_constant';

const ExamSchedule = () => {
  const [examSchedule, setExamSchedule] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setExamSchedule(Auth_Data?.mockExamData || []);
    }, 1000);
  }, []);

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      padding: '20px',
      backgroundColor: '#F5F5F5',
    }}>
      <Typography variant="h2" component="h1" sx={{ marginBottom: 4 }}>
        Exam Schedule
      </Typography>
      <Box sx={{
        width: '100%',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}>
        {examSchedule.map((exam) => (
          <Box
            key={exam.id}
            sx={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '16px',
              boxShadow: 1,
              backgroundColor: '#fff',
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
              {exam.paperName}
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', marginBottom: 1 }}>
              Date: {exam.date}
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', marginBottom: 1 }}>
              Start Time: {exam.startTime} | End Time: {exam.endTime}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => console.log(`Clicked on ${exam.paperName} details`)}
            >
              View Details
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ExamSchedule;


