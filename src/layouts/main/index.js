import React, { useState } from "react";
import { Stack, Link, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "../../components/Footer";

const MainLayout = ({ currentPage, setCurrentPage }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prevValue) => !prevValue);
    };

    const setNavigation = (page) => {
        setCurrentPage(page);
        setMenuOpen(false);
    };

    return (
        <Stack sx={{ bgcolor: "#000", color: "#e7e7e7", minHeight: "100vh" }}>
            <Box
                component="nav"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    width: "650px",
                    maxWidth: "100%",
                    mx: "auto",
                    p: 2,
                    bgcolor: "#000",
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                    marginTop: "2rem",
                }}
            >
                <IconButton
                    onClick={toggleMenu}
                    sx={{
                        display: { xs: "block", md: "none" },
                        color: "white",
                    }}
                >
                    <MenuIcon />
                </IconButton>

                {/* Navigation Links */}
                <Box
                    sx={{
                        display: { xs: menuOpen ? "flex" : "none", md: "flex" },
                        flexDirection: { xs: "column", md: "row" },
                        position: { xs: "absolute", md: "static" },
                        top: { xs: "60px", md: "auto" },
                        left: 0,
                        width: { xs: "100%", md: "auto" },
                        bgcolor: { xs: "#000", md: "transparent" },
                        px: { xs: 5, md: 0 },
                        py: { xs: 2, md: 0 },
                        gap: { xs: 3, md: 6 },
                        zIndex: 999,
                    }}
                >
                    <Link onClick={() => setNavigation("home")} sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
                        Home
                    </Link>
                    <Link onClick={() => setNavigation("about")} sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
                        About
                    </Link>
                    <Link onClick={() => setNavigation("skills")} sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
                        Skills
                    </Link>
                    <Link onClick={() => setNavigation("uses")} sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
                        Uses
                    </Link>
                </Box>
            </Box>

            <Box component="main" sx={{ flexGrow: 1, width: "100%", maxWidth: "100%", marginTop: "10vh" }}>
                {currentPage}
            </Box>

            <Footer />
        </Stack>
    );
};

export default MainLayout;
