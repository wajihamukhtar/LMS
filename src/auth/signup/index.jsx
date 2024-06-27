import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import InputField from '../../components/global/InputField';
import SubmitButton from '../../components/global/SubmitButton';
import { Link } from 'react-router-dom';
import { Auth_Data } from '../../constants/auth_constant';

import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const Signup = () => {
  const { text, button_text, fields, link } = Auth_Data?.signup || {};
  const [disbled, setDisabled] = useState(true);
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (
      userData?.first_name &&
      userData?.last_name &&
      userData?.email &&
      userData?.password
    ) {
      return setDisabled(false);
    } else {
      return setDisabled(true);
    }
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate('/Students')
    setUserData({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    });
    const auth=getAuth()
    createUserWithEmailAndPassword(auth,userData.first_name,userData.last_name, userData.email, userData.password)
    .then((res) => {
      const user = res.user;
      console.log('User created acount:', user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error('Error creating user:', errorMessage);
    });
  };

  return (
    <>
      <Box
        action="#"
        component={'form'}
        onSubmit={(e) => handleSubmit(e)}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          maxWidth: '500px',
          px: 4,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { md: '22px', lg: '24px', xl: '26px' },
              fontWeight: 500,
              textDecoration: 'underLine',
              color: '#404040',
            }}
          >
            {text}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
          }}
        >
          {fields?.map(({ type, label, place_holder, name }, index) => (
            <InputField
              key={index}
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
                border: '1px solid #E4E4E4',
                height: '40px',
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 1.4,
            alignItems: 'center',
            pt: 5,
          }}
        >
          <SubmitButton
            disabled={disbled}
            text={button_text}
            type={'submit'}
            style={{
              width: '100%',
              height: '40px',
              border: '1px solid #FEBD17',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: 500,
              color: disbled ? '#FEBD17 !important' : '#404040',
              backgroundColor: disbled ? '#FAFAFA' : '#FEBD17',
              '&:hover': {
                backgroundColor: '#FEBD17',
              },
            }}
          />
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 400,
              color: '#404040',
            }}
          >
            {'Or'}
          </Typography>
          <Link to={link?.href}>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 400,
                color: '#FEBD17',
                textDecoration: 'underLine',
              }}
            >
              {link?.text}
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
