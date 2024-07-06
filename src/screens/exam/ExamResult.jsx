import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { get, getDatabase, ref } from 'firebase/database';

const grades = ['A+', 'A', 'B', 'C', 'D', 'E'];

const ResultScreen = () => {
    const [classResults, setClassResults] = useState({});
    const classes = Array.from({ length: 10 }, (_, i) => i + 1); // Array [1, 2, 3, ..., 10]

    useEffect(() => {
        const fetchResults = async () => {
            const db = getDatabase();
            const resultsByClass = {};

            for (let i = 0; i < classes.length; i++) {
                const classNum = classes[i];
                const classRef = ref(db, `results/class_${classNum}`);
                
                try {
                    const snapshot = await get(classRef);
                    if (snapshot.exists()) {
                        const resultsData = snapshot.val();
                        resultsByClass[classNum] = Object.keys(resultsData).map(key => ({
                            id: key,
                            ...resultsData[key]
                        }));
                    } else {
                        resultsByClass[classNum] = [];
                    }
                } catch (error) {
                    console.error(`Error fetching results for class ${classNum}:`, error);
                    resultsByClass[classNum] = [];
                }
            }

            setClassResults(resultsByClass);
        };

        fetchResults();
    }, [classes]);

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
               Exam Results
            </Typography>
            {classes.map(classNum => (
                <Box key={classNum} sx={{ width: '80%', marginBottom: '20px' }}>
                    <Typography variant="h4" sx={{ marginBottom: 2 }}>
                        Class {classNum} Results
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead sx={{ backgroundColor: '#f0f0f0' }}>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Student Name</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Roll Number</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Grade</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {classResults[classNum]?.map((student, index) => (
                                    <TableRow key={student.id}>
                                        <TableCell align="center">{student.first_name}</TableCell>
                                        <TableCell align="center">{student.id}</TableCell>
                                        <TableCell align="center">{grades[index % grades.length]}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            ))}
        </Box>
    );
}

export default ResultScreen;
