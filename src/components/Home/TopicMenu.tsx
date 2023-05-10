import { Box, Divider, List, ListItem } from "@mui/material";
import React from "react";
import { useTopicContext } from "../../contexts/TopicContext";

export default function TopicMenu() {
    const { topics, selectedTopics, setSelectedTopics } = useTopicContext();

    const handleTopicClick = (topic: string) => {
        if (selectedTopics.includes(topic)) {
            setSelectedTopics(
                selectedTopics.filter(
                    (selectedTopic) => selectedTopic !== topic
                )
            );
        } else {
            setSelectedTopics([...selectedTopics, topic]);
        }
    };

    return (
        <Box
            sx={{
                height: "calc(100vh - 75px)",
                paddingTop: "25px",
                overflow: "scroll",
                marginTop: "5px",
                display: { xs: "none", sm: "none", md: "block" },
            }}
        >
            <List>
                {topics.map((topic) => (
                    <Box key={topic} sx={{}}>
                        <Box
                            sx={{
                                padding: "15px",
                                paddingLeft: "40px",
                                "&:hover": {
                                    opacity: 0.5,
                                    cursor: "pointer",
                                },
                            }}
                        >
                            <ListItem
                                sx={{
                                    backgroundColor: selectedTopics.includes(
                                        topic
                                    )
                                        ? "primary.main"
                                        : "inherit",
                                    color: selectedTopics.includes(topic)
                                        ? "white"
                                        : "inherit",
                                    width: "100px",
                                    borderRadius: "100px",
                                    display: selectedTopics.includes(topic)
                                        ? "flex"
                                        : undefined,
                                    justifyContent: selectedTopics.includes(
                                        topic
                                    )
                                        ? "center"
                                        : undefined,
                                }}
                                onClick={() => handleTopicClick(topic)}
                            >
                                {topic[0].toLocaleUpperCase() + topic.slice(1)}
                            </ListItem>
                        </Box>
                        <Divider />
                    </Box>
                ))}
            </List>
        </Box>
    );
}
