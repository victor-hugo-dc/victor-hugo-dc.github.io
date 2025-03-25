import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Stack, Link, Box, IconButton } from '@mui/material';
import Footer from '../../components/Footer';
import MenuIcon from '@mui/icons-material/Menu';

const MainLayout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prevValue) => !prevValue);
    };

    return (
        // color #8fa2bb
        <Stack sx={{ bgcolor: '#000', color: '#e7e7e7', height: "100%" }}>
            <Box
                component="nav"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    width: '650px',
                    maxWidth: '1200px',
                    mx: 'auto',
                    p: 2,
                    bgcolor: '#000',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1000,
                    marginTop: '2rem',
                    marginBottom: '2rem',
                }}
            >

                <IconButton
                    onClick={toggleMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        color: 'white',
                    }}
                >
                    <MenuIcon />
                </IconButton>

                {/* Navigation Links */}
                <Box
                    sx={{
                        display: { xs: menuOpen ? 'flex' : 'none', md: 'flex' },
                        flexDirection: { xs: 'column', md: 'row' },
                        position: { xs: 'absolute', md: 'static' },
                        top: { xs: '60px', md: 'auto' },
                        left: 0,
                        width: { xs: '100%', md: 'auto' },
                        bgcolor: { xs: '#000', md: 'transparent' },
                        px: { xs: 3, md: 0 },
                        py: { xs: 2, md: 0 },
                        gap: { xs: 3, md: 6 },
                        zIndex: 999,
                    }}
                >
                    <Link href="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
                        Home
                    </Link>
                    <Link href="/about" sx={{ textDecoration: 'none', color: 'inherit' }}>
                        About
                    </Link>
                    <Link href="/skills" sx={{ textDecoration: 'none', color: 'inherit' }}>
                        Skills
                    </Link>
                    <Link href="/uses" sx={{ textDecoration: 'none', color: 'inherit' }}>
                        Uses
                    </Link>
                </Box>
            </Box>

            <Box component="main" sx={{ flexGrow: 1, height: "100%", marginTop: "4rem" }}>
                <Outlet />
            </Box>

            <Footer />
        </Stack>
    );
};

export default MainLayout;