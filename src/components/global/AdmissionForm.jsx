import React, { useEffect, useState } from 'react';
import { Box, FormControlLabel, Radio, Typography, RadioGroup, FormControl, FormLabel } from '@mui/material';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import { useNavigate } from 'react-router-dom';
import { Auth_Data } from '../../constants/auth_constant';
import theme from '../../theme';
import { getDatabase, ref, push, set } from "firebase/database";
import DatePic from './DatePic';

const AdmissionForm = () => {
    const { text, button_text, fields, redio } = Auth_Data?.admission || {};
    const [disbled, setDisabled] = useState(true);
    const navigate = useNavigate()
    const [selectedDate, setSelectedDate] = useState(null);
    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        qualification: '',
        date_of_birth: '',
        email: '',
        phonenum: '',
        gender: '',
    });
    const handleChange = (event) => {
        setUserData({
            ...userData,
            gender: event.target.value,
        });
    };

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDateChange = (newValue) => {
        setSelectedDate(newValue);
        setUserData({
            ...userData,
            date_of_birth: selectedDate?.format('YYYY-MM-DD')
        })
    };

    useEffect(() => {
        if (
            userData?.first_name &&
            userData?.last_name &&
            userData?.email &&
            userData?.qualification &&
            userData?.phonenum &&
            userData?.date_of_birth &&
            userData?.gender
        ) {
            return setDisabled(false);
        } else {
            return setDisabled(true);
        }
    }, [userData]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userData);
        const db = getDatabase();
        const admissionRef = push(ref(db, "classlist"));
        try {
            await set(admissionRef, {
                first_name: userData?.first_name,
                last_name: userData?.last_name,
                email: userData?.email,
                qualification: userData?.qualification,
                phonenum: userData?.phonenum,
                gender: userData?.gender
            });
            console.log(userData, 'classlist')

            console.log("Data successfully submitted to Firebase");
            setUserData({
                first_name: '',
                last_name: '',
                email: '',
                qualification: '',
                phonenum: '',
                gender: null,
                date_of_birth: '',
            });
            navigate('/class/class-list')

        } catch (error) {
            console.error("Error sending data:", error.message);
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
                        <>
                            {name === 'date_of_birth' ? (<DatePic label={label} value={selectedDate} onChange={handleDateChange} />) : (
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
                            )}
                        </>
                    ))}
                </Box>
                <Box
                    sx={{
                        fontSize: '10px',
                        width: '100%',
                    }}
                >
                    <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={userData?.gender}
                            onChange={handleChange}
                        >
                            {redio?.map(({ text, value }) => (
                                <FormControlLabel name={value} value={text} control={<Radio />} label={text} />

                            ))}
                        </RadioGroup>
                    </FormControl>
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
export default AdmissionForm;