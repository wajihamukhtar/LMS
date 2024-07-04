import { Backdrop, Box, Drawer, Typography, useMediaQuery } from '@mui/material';
import { Auth_Data } from '../constants/auth_constant';
import SidebarAccordion from '../components/global/SidebarAccordion';

export const SidebarLayout = (props) => {
    const { open, onClose } = props;
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const sidebarLinks =Auth_Data?.sidebarLinks || [];
    
    const content = (
        <Box sx={{ width: 250 }} role="presentation">
            <SidebarAccordion sidebarLinks={sidebarLinks} />
        </Box>
    );
    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        color: '	 #40bf40',
                        width: { xs: 280, xl: 350 },
                        marginTop: '70px',
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        boxShadow: '2px 5px 5px -2px #00000040'
                    },
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
        );
    }
    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            BackdropProps={{ click: false }}
            BackdropComponent={(props) => (
                <Backdrop {...props} sx={{ backgroundColor: 'rgba(0, 0, 0, 0)' }} />
            )}
            PaperProps={{
                sx: {
                    marginTop: '91px',
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    width: 265,
                },
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
};
