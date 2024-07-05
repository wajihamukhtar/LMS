import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { get, getDatabase, ref } from 'firebase/database';
const grades = [
    'A+', 'A', 'B', 'C', 'D', 'E'
];

const ResultScreen = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const db = getDatabase();
            const studentsRef = ref(db, 'students');
            try {
                const snapshot = await get(studentsRef);
                if (snapshot.exists()) {
                    const studentsData = snapshot.val();
                    const studentsArray = Object.keys(studentsData).map(key => ({
                        id: key,
                        ...studentsData[key]
                    }));
                    setStudents(studentsArray);
                } else {
                    setStudents([]);
                }
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);
    console.log(students, 'exam')
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: '#F5F5F5',
        }}>
            <Typography variant="h2" component="h1" sx={{ marginBottom: 4 }}>
                Student Results
            </Typography>
            <TableContainer component={Paper} sx={{ maxWidth: '80%' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Student Name</TableCell>
                            <TableCell>Roll Number</TableCell>
                            <TableCell>Grade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students?.map((result, index) => (
                            <TableRow key={result.id}>
                                <TableCell>{result.first_name}</TableCell>
                                <TableCell>{result.id}</TableCell>
                                <TableCell>{grades[index]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
export default ResultScreen;
