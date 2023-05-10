import { useState, useEffect } from "react";
import axios from "axios";
import { IPost } from "./useGetPosts";

export default function useGetUserPosts(authorId?: number) {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<{
        error: boolean;
        message: string;
        code: number;
    }>({
        error: false,
        message: "",
        code: 0,
    });

    const getPostsUrl = `https://dummyjson.com/posts/user/${authorId}`;
    const getUsersUrl = `https://dummyjson.com/users/${authorId}`;

    useEffect(() => {
        const getPosts = async () => {
            try {
                if (!authorId) return;
                const postsResponse = await axios.get(getPostsUrl);
                const usersResponse = await axios.get(getUsersUrl);

                const posts = postsResponse.data.posts.map((post: any) => {
                    let user = usersResponse.data;
                    if (user.message) {
                        // return random user
                        user = {
                            image: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
                            firstName: "Anonymous",
                            lastName: "",
                        };
                    }
                    return {
                        id: post.id,
                        title: post.title,
                        body: post.body,
                        avatarUrl: user.image,
                        authorName: `${user.firstName} ${user.lastName}`,
                        authorId: user.id,
                        reactionCount: post.reactions,
                        topics: post.tags,
                    };
                });

                setPosts(posts);
                setLoading(false);
            } catch (error: any) {
                setError({
                    error: true,
                    message: error.message,
                    code: error.response?.status,
                });
                setLoading(false);
            }
        };
        getPosts();
    }, [authorId]);

    return { posts, loading, error };
}
