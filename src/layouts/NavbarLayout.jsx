import { Box } from '@mui/material';

export const NavbarLayout = (props) => {
    const { onNavOpen } = props;

    return (
        <>
            <Box
                component="header"
                sx={{
                    height: 'auto',
                    position: 'sticky',
                    left: {
                        lg: `${0}px`,
                    },
                    top: 0,
                    width: {
                        lg: `calc(100% - ${0}px)`,
                    },
                    zIndex: 500,
                }}
            >
                <Box sx={{ height: '91px', backgroundColor: 'red' }}>Navbar</Box>
            </Box>
        </>
    );
};
