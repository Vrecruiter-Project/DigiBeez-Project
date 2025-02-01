import React, { useState, useEffect } from 'react';
import LogoLight from '../../../assets/NavbarLogo/trace.png';
import LogoDark from '../../../assets/NavbarLogo/trace1.png';
import {
    AppBar,
    Toolbar,
    IconButton,
    Container,
    Button,
    Box,
    CssBaseline,
    ThemeProvider,
    createTheme
} from '@mui/material';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Navbar() {


    return (
      
            <AppBar
                position="fixed"
                sx={{
                    
                    backgroundColor: '#ffffff',
                   // boxShadow: mode === 'light' ? '0px 4px 12px rgba(0, 0, 0, 0.1)' : '0px 4px 12px rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(10px)',
                   // transition: 'background-color 0.3s ease-in-out',
                    zIndex: 1,
                }}
            >
                <Container>
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
                        
                        {/* Logo that changes based on theme */}
                        {/* <img
                            src={mode === 'light' ? LogoLight : LogoDark}
                            alt="Logo"
                            style={{
                                height: '50px',
                                width: 'auto',
                                cursor: 'pointer',
                                transition: 'opacity 0.3s ease-in-out',
                            }}
                        /> */}
                        <img
                            src={ LogoLight }
                            alt="Logo"
                            style={{
                                height: '50px',
                                width: 'auto',
                                cursor: 'pointer',
                               // transition: 'opacity 0.3s ease-in-out',
                            }}
                        />

                        {/* Right Side: Dark Mode Toggle & Book a Free Demo Button */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#FCC41B',
                                    color: '#000',
                                    px: 3,
                                    display: { xs: 'none', sm: 'block' },
                                }}
                            >
                                Book a Free Demo
                            </Button>
                            {/* <IconButton
                                onClick={toggleTheme}
                                sx={{
                                    color: mode === 'light' ? '#000' : '#fff',
                                    mx: 1,
                                    '&:hover': {
                                        color: mode === 'light' ? '#555' : '#ddd',
                                    },
                                }}
                            >
                                {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                            </IconButton> */}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        // </ThemeProvider>
    );
}
