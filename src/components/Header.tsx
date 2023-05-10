import {
    AppBar,
    Box,
    IconButton,
    InputBase,
    Button,
    Toolbar,
    Typography,
} from "@mui/material";
import dailyPosts from "../assets/daily-posts.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

export default function Header() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate(`/`);
    };

    return (
        <AppBar
            position="static"
            sx={{ background: "#122636", height: "75px" }}
        >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{
                        mr: 2,
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                    onClick={handleLogoClick}
                >
                    <img
                        src={dailyPosts}
                        alt="Daily Posts"
                        style={{ height: "50px" }}
                    />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                        flexGrow: 1,
                        // display: { xs: "none", sm: "block" },
                        color: "white",
                        cursor: "pointer",
                        fontSize: { xs: "1rem", sm: "1.5rem" },
                    }}
                    onClick={handleLogoClick}
                >
                    Daily Posts
                </Typography>

                <Button sx={{ color: "white" }}>Sign in</Button>
                <Button sx={{ color: "white" }}>Sign up</Button>
            </Toolbar>
        </AppBar>
    );
}
