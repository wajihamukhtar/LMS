import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Students from '../../screens/students';

const SidebarAccordion = ({ sidebarLinks}) => {
    const location = useLocation();
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (_event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const navigate = useNavigate()

    // const navigateScreen = (route) => {
    //     navigate(`${route}`)
    // }
    const handlePath=()=>{
      
            if (Students) {
                navigate( )   
            }
    }
    return (
        <div>
            {sidebarLinks?.map((item, index) => (
                <div key={index}>
                    <Box > 
                        <Accordion
                            expanded={
                                item.sublinks == null ? null : expanded === `panel${index + 1}`
                            }
                            onChange={handleChange(`panel${index + 1}`)}
                            sx={{
                                boxShadow: 'none !important',
                                width: '100%',
                                border: 0,
                                '.mui-vf72v2-MuiPaper-root-MuiAccordion-root.Mui-expanded': {
                                    boxShadow: 'none !important',
                                    border: 0,
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={item?.sublinks == null ? null : <ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id={`panel${index + 1}a-header`}
                                sx={{
                                    mx: 'auto',
                                    p: 1.4,
                                    mb: 0,
                                    minHeight: '55px',
                                    gap: 2,
                                    width: '95%',
                                    height: '43px',
                                    borderRight: `${item?.link == location ? '2px solid #068987' : null
                                        }`,
                                    borderRadius: '2px',
                                    backgroundColor: `${item?.link == location ? '#E6F5F4' : null
                                        }`,
                                }}
                            >
                                <Link href={`${item?.link}`}>
                                    {item?.icon && (
                                        <>
                                            {item?.icon}
                                        </>
                                    )}
                                </Link>
                                {item?.sublinks ? (
                            
                                    <Typography
                                        variant="body1"
                                        
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            fontWeight: `${item?.link == location ? 600 : 400}`,
                                            ml: 2,
                                            color: '#008000',
                                        }}
                                    >
                                        {item?.text}
                                    </Typography>
                                 
                                ) : (
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                        
                                                fontWeight: `${item?.link == location ? 600 : 400}`,
                                                ml: 2,
                                                color: '#008000',
                                            }}
                                        >
                                            {item?.text}
                                        </Typography>

                                )}
                            </AccordionSummary>
                            {item?.sublinks &&
                                item?.sublinks?.map((eachItem, index) => (
                                    <div key={index}>
                                            <AccordionDetails
                                                key={index}
                                                sx={{
                                                    pl: 6.5,
                                                    pt: 1.5,
                                                    pb: 1.5,
                                                    mb: 0.7,
                                                    boxShadow: 'none !important',
                                                    alignItems: 'center',
                                                    '&:hover': { backgroundColor: '#E6F5F4 !important' },
                                                    borderRight: `${eachItem?.link == location
                                                        ? '2px solid #068987 !important'
                                                        : null
                                                        }`,
                                                    backgroundColor: `${eachItem?.link == location
                                                        ? '#E6F5F4 !important'
                                                        : null
                                                        }`,
                                                }}
                                            >
                                                <Link
                                                    style={{ width: '100%', height: '100%', textDecoration:'none' }}
                                                to={`${eachItem?.link}`}
                                                >
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            width: '100%',
                                                            height: '100%',
                                                            color: '#008000',
                                                            
                                                        }}
                                                    >
                                                        {eachItem?.text}
                                                    </Typography>
                                                </Link>
                                            </AccordionDetails>
                                    </div>
                                ))}
                        </Accordion>
                    </Box>
                </div>
            ))}
        </div>
    );
};

export default SidebarAccordion;
