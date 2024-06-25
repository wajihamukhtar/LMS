import { Box, Grid } from '@mui/material';
import LogoSection from '../components/authentication/LogoSection';
import FormSection from '../components/authentication/FormSection';

const AuthLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        minHeight: '750px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          minHeight: '750px',
          maxWidth: '1400px',
          maxHeight: '800px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0px 0px 10px 0px #00000040',
          my: 3,
        }}
      >
        <Grid container height={'100%'}>
          <Grid
            item
            lg={6}
            sx={{
              display: { xs: 'none', lg: 'block' },
              height: '100%',
            }}
          >
            <LogoSection />
          </Grid>

          <Grid item xs={12} lg={6}>
            <FormSection />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AuthLayout;
