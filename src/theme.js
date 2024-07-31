'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008000',
    },
    secondary: {
      main: '#008000',
    },
    info: {
      main: '##888888 ',
    },
    background: {
      default: '#ffffff',
    },
    default: {
      main: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#008000',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ['poppins', 'sans-serif'].join(','),
    h1: {
      fontSize: '40px',
      fontWeight: 700,
    },
    h2: {
      fontSize: { md: '28px', lg: '30px', xl: '30px' },
      fontWeight: 500,
      textDecoration: 'underLine',
      color: '#404040',
      width: '70%',
      textAlign: 'center'
    },
    h3: {
      fontSize: '30px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '15px',
      fontWeight: 700,
    },
    h5: {
      fontSize: { md: '22px', lg: '24px', xl: '26px' },
      fontWeight: 500,
      textDecoration: 'underLine',
      color: '#404040',
    },
    h6: {
      fontSize: '16px',
      fontWeight: 700,
    },
    body1: {
      fontSize: '20px',
    },
    button: {
      textTransform: 'normal',
    },
    link: {
      textDecoration: 'none',
      color: '#008000',
      '&:hover': {
        color: '#404040',
      },
      '&:active': {
        color: '#008000',
      },
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            backgroundColor: '#008000 ',
            color: '#404040',
            borderRadius: '5px',
            position: 'relative',
            '&:hover': {
              backgroundColor: '#404040 ',
              color: '#ffffff',
            },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            backgroundColor: '#404040 ',
            color: '#ffffff',
            borderRadius: '5px',
            position: 'relative',
            '&:hover': {
              backgroundColor: '#FEBD17',
              color: '#404040',
            },
          },
        },
        {
          props: { variant: 'default' },
          style: {
            backgroundColor: '#FEBD17',
            color: '#404040',
            borderRadius: '5px',
            position: 'relative',
            '&:hover': {
              backgroundColor: '#404040 ',
              color: '#ffffff',
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            border: '1px solid #E4E4E4',
            boxShadow: '0px 0px 4px 0px #00000040',
            backgroundColor: '#fff',
            height: '40px',
            color: '#008000',
            '&:hover': {
              border: '1px solid #E4E4E4',
              boxShadow: '0px 0px 4px 0px #00000040',
              backgroundColor: '#fff',
              color: '#888888',
            },
          },
        },
      ],
    },
    MuiLink: {
      defaultProps: {
        variant: 'link',
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#008000',
          '&:hover': {
            backgroundColor: '#404040',
            color: '#008000',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {},
        select: {
          color: 'black',
          alignItems: 'center',
          paddingTop: '25px',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1260px !important',
          margin: '0 auto',
          // color:#4986fc,purple #ce4be8,blue #207ce5, tarbooz #dc3545,#673ab7
        },
      },
    },
  },
});

export default theme;
