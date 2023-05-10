import Header from "./components/Header";
import { TopicProvider } from "./contexts/TopicContext";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <TopicProvider>
                <BrowserRouter>
                    <ScrollToTop />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:id" element={<PostPage />} />
                    </Routes>
                </BrowserRouter>
            </TopicProvider>
        </ThemeProvider>
    );
}

export default App;
