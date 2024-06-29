import { Backdrop, Box, Drawer, Typography, useMediaQuery } from '@mui/material';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Auth_Data } from '../constants/auth_constant';
import { useNavigate } from 'react-router-dom';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { BATreeView } from '../components/global/BATreeView';

export const SidebarLayout = (props) => {
    const { open, onClose } = props;
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const list =Auth_Data.sidebarList || [];
   
    const navigate=useNavigate()

    const navigateScreen=(route)=>{
        navigate(`${route}`)
    }
    const content = (
        <Box sx={{ width: 250 }} role="presentation">
        <List>
          {list.map((x, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={()=>navigateScreen(x.route)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText  primary={x.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
        <BATreeView />

      </Box>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
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
