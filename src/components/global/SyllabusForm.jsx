import React, { useEffect, useState } from 'react';
import { Box, FormControlLabel, Radio, Typography, RadioGroup, FormControl, FormLabel, Button } from '@mui/material';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import { useNavigate } from 'react-router-dom';
import { Auth_Data } from '../../constants/auth_constant';
import theme from '../../theme';
import { getDatabase, ref, push, set } from "firebase/database";
import UploadButton from './UploadButton';

const SyllabusForm = () => {
    const { text, button_text, fields, } = Auth_Data?.syllabustAdd || {};
    const [disbled, setDisabled] = useState(true);
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        subject_name: '',
        class: '',
        doc: '',
    });

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            const reader = new FileReader();
            reader.onload = () => {
                setUserData({
                    ...userData,
                    doc: file,
                    docBase64: reader.result
                });
                console.log('PDF file uploaded and converted to Base64:', reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload a PDF file');
        }
    };

    useEffect(() => {
        if (userData.class && userData.subject_name && userData.doc) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [userData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const db = getDatabase();
        const studentRef = push(ref(db, 'syllabus'));

        try {
            await set(studentRef, {
                subject_name: userData.subject_name,
                class: userData.class,
                docBase64: userData.docBase64,
            });

            console.log('Data successfully submitted to Firebase');
            setUserData({
                subject_name: '',
                class: '',
                doc: null,
                docBase64: ''
            });
            navigate('/syllabus/syllabus-list')
        } catch (error) {
            console.error('Error sending data:', error.message);
        }
    };

    return (
        <>
            <Box
                action="#"
                component={'form'}
                type={'submit'}
                onSubmit={handleSubmit}
                sx={{
                    width: '100%',
                    minHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    maxWidth: '500px',

                }}
            >
                <Box>
                    <Typography
                        sx={theme.typography.h5}
                    >
                        {text}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    {fields?.map(({ name, type, label, place_holder }) => (
                        <InputField
                            key={name}
                            type={type}
                            label={label}
                            placeholder={place_holder}
                            onChange={handleInputChange}
                            name={name}
                            value={userData[name]}
                            style={{
                                fontSize: '13px',
                                fontWeight: 400,
                                color: '#888888',
                                border: '2px solid #E4E4E4',
                                height: '40px',
                                backgroundColor: "#fff"
                            }}
                        />
                    ))}
                    {userData?.doc?.name &&
                        <Typography variant='h4' textAlign={'center'} >PDF Uploaded</Typography>
                    }
                    <UploadButton type={'file'} accept={"application/pdf"} handleFileChange={handleFileChange} />
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.4,
                        alignItems: 'center',
                        pt: 5,
                        px: 4,
                    }}
                >
                    <SubmitButton
                        text={button_text}
                        disabled={disbled}
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
            </Box>
        </>
    );
}
export default SyllabusForm;