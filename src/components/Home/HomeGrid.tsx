import { useEffect } from "react";
import PostCard from "../../components/PostCard";
import { Backdrop, Box, CircularProgress, Grid } from "@mui/material";
import useGetPosts from "../../hooks/useGetPosts";
import Masonry from "@mui/lab/Masonry";
import { useTopicContext } from "../../contexts/TopicContext";

export default function HomeGrid() {
    const { posts, loading, error } = useGetPosts();
    const { selectedTopics } = useTopicContext();
    const filteredPosts = posts.filter(
        (post) =>
            selectedTopics.length === 0 ||
            selectedTopics.some((topic) => post.topics.includes(topic))
    );

    // workaround for ResizeObserver error due to masonry
    // usually this not good practice
    // but I wanted to test the masonry layout
    useEffect(() => {
        window.addEventListener("error", (e) => {
            console.log("error", e.message);
            if (
                e.message.includes("ResizeObserver") ||
                e.message === "Script error."
            ) {
                const resizeObserverErrDiv = document.getElementById(
                    "webpack-dev-server-client-overlay-div"
                );
                const resizeObserverErr = document.getElementById(
                    "webpack-dev-server-client-overlay"
                );
                if (resizeObserverErr) {
                    resizeObserverErr.setAttribute("style", "display: none");
                }
                if (resizeObserverErrDiv) {
                    resizeObserverErrDiv.setAttribute("style", "display: none");
                }
            }
        });
    }, []);

    return (
        <Box
            sx={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                paddingTop: 0,
                marginTop: "30px",
                overflow: "scroll",
                height: "calc(100vh - 75px)",
                position: "relative",
                paddingLeft: { xs: "20px", sm: "0px" },
            }}
        >
            {loading ? (
                <>
                    <Backdrop open={loading} />
                    <CircularProgress
                        color="primary"
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                </>
            ) : (
                <Masonry
                    columns={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
                    spacing={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
                >
                    {filteredPosts.map((post) => (
                        <PostCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            body={post.body}
                            imageUrl={`https://picsum.photos/id/${
                                post.id + 15
                            }/600/300`}
                            avatarUrl={post.avatarUrl}
                            authorName={post.authorName}
                            reactionCount={post.reactionCount}
                        />
                    ))}
                </Masonry>
            )}
        </Box>
    );
}
