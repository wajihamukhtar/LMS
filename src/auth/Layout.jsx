import { Box, Grid } from '@mui/material';
import LogoSection from '../components/authentication/LogoSection';
import FormSection from '../components/authentication/FormSection';

const Authentication = () => {
  return (
    <Box
      sx={{
        p: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          minHeight: '750px',
          maxWidth: '1400px',
          maxHeight: '900px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0px 0px 10px 0px #00000040',
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

export default Authentication;
