import { useState, useEffect } from "react";
import axios from "axios";

export interface IUser {
    id: number;
    userName: string;
    image: string;
}

export interface IComment {
    id: number;
    body: string;
    user: IUser;
}

export interface IPost {
    id: number;
    title: string;
    body: string;
    avatarUrl: string;
    authorName: string;
    authorId: number;
    reactionCount: number;
    topics: string[];
    comments?: IComment[];
}

export default function useGetPosts() {
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

    const getPostsUrl = "https://dummyjson.com/posts?limit=50";
    const getUsersUrl = "https://dummyjson.com/users?limit=0";

    useEffect(() => {
        const getPosts = async () => {
            try {
                const postsResponse = await axios.get(getPostsUrl);
                const usersResponse = await axios.get(getUsersUrl);

                const posts = postsResponse.data.posts.map((post: any) => {
                    let user = usersResponse.data.users.find(
                        (user: any) => user.id === post.userId
                    );
                    if (!user) {
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
    }, []);

    return { posts, loading, error };
}
