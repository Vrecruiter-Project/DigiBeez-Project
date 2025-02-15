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

export default function Navbar({ onButtonClick }) {


    return (

        <AppBar
            position="fixed"
            sx={{
                backgroundColor: '#ffffff',
                backdropFilter: 'blur(10px)',
                zIndex: 1,
            }}
        >
            <Container>
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>

                    {/* Logo that changes based on theme */}
                   
                    <img
                        src={LogoLight}
                        alt="Logo"
                        style={{
                            height: '50px',
                            width: 'auto',
                            cursor: 'pointer',
                        }}
                    />

                    {/* Right Side: Dark Mode Toggle & Book a Free Demo Button */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button
                            onClick={onButtonClick}
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
                       
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    
    );
}
