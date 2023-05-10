import React from "react";
import PostPage from "./PostPage";
import { Box } from "@mui/material";
import TopicMenu from "../components/Home/TopicMenu";
import HomeGrid from "../components/Home/HomeGrid";

export default function Home() {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: { sm: "1fr", md: "1fr 4fr" },
                height: "100%",
            }}
        >
            <TopicMenu />
            <HomeGrid />
        </Box>
    );
}
