import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';

import InputField from '../../components/global/InputField';
import SubmitButton from '../../components/global/SubmitButton';
import { Link, useNavigate } from 'react-router-dom';
import { Auth_Data } from '../../constants/auth_constant';

const Login = () => {
  const { text, checkbox_text, reset_link, button_text, fields, link } =
    Auth_Data?.login || {};
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    remember_me: '',
  });
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeRemember = (event) => {
    setRememberMe(event.target.checked);
    setUserData({
      ...userData,
      remember_me: event.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({ email: '', password: '' });
    setRememberMe(false);
    console.log({ login: userData });
    navigate('/dashboard')
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
            gap: 2,
          }}
        >
          {fields?.map(({ type, label, place_holder }) => (
            <InputField
              key={type}
              type={type}
              label={label}
              placeholder={place_holder}
              onChange={handleInputChange}
              name={type}
              value={userData[type]}
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <FormControlLabel
            sx={{
              fontSize: '14px',
              fontFamily: 400,
              '@media (max-width: 400px)': {
                order: { xs: 2, sm: 1 },
                width: '100%',
              },
              width: 'auto',
              color: '#666',
              '& .MuiCheckbox-root': {
                color: '#E4E4E4',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
                '&.Mui-checked': {
                  color: 'primary !important',
                },
              },
            }}
            control={
              <Checkbox
                disableRipple
                checked={rememberMe}
                onChange={handleChangeRemember}
                color="primary"
              />
            }
            label={
              <>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#404040',
                  }}
                >
                  {checkbox_text}
                </Typography>
              </>
            }
          />
          <Link to={reset_link?.href}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 400,
                color: '#404040',
              }}
            >
              {reset_link?.text}
            </Typography>
          </Link>
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
            disabled={!userData?.email || !userData?.password || !rememberMe}
            text={button_text}
            type={'submit'}
            style={{
              width: '100%',
              height: '40px',
              border: '1px solid #FEBD17',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: 500,
              color:
                !userData?.email || !userData?.password || !rememberMe
                  ? '#FEBD17 !important'
                  : '#404040',
              backgroundColor:
                !userData?.email || !userData?.password || !rememberMe
                  ? '#FAFAFA'
                  : '#FEBD17',
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

export default Login;
