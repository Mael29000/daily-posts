import { createContext, useContext, useState } from "react";

interface ITopicContext {
    topics: string[];
    selectedTopics: string[];
    setSelectedTopics: (topics: string[]) => void;
}

const TopicContext = createContext<ITopicContext>({
    topics: [],
    selectedTopics: [],
    setSelectedTopics: () => {},
});

const allTopics = [
    "history",
    "american",
    "crime",
    "french",
    "fiction",
    "english",
    "magical",
    "mystery",
    "love",
    "classic",
];

export const TopicProvider = ({ children }: any) => {
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

    return (
        <TopicContext.Provider
            value={{ topics: allTopics, selectedTopics, setSelectedTopics }}
        >
            {children}
        </TopicContext.Provider>
    );
};

export const useTopicContext = () => {
    return useContext(TopicContext);
};
