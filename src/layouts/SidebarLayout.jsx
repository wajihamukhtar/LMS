import { Backdrop, Box, Drawer, useMediaQuery } from '@mui/material';

export const SidebarLayout = (props) => {
    const { open, onClose } = props;
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

    const content = (
        <Box sx={{ height: '100%', backgroundColor: 'green' }}>Sidebar</Box>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        width: { xs: 280, xl: 350 },
                        marginTop: '91px',
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
