import { useState, useEffect } from "react";
import axios from "axios";
import { IPost } from "./useGetPosts";

export default function useGetPost(id?: string) {
    const [post, setPost] = useState<IPost>();
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

    const getPostsUrl = `https://dummyjson.com/posts/${id}`;

    useEffect(() => {
        if (!id) return;

        const getPost = async () => {
            try {
                const postResponse = await axios.get(getPostsUrl);

                const getUsersUrl = `https://dummyjson.com/users/${postResponse.data.userId}`;
                const userResponse = await axios.get(getUsersUrl);

                const getCommentsUrl = `https://dummyjson.com/posts/${id}/comments`;
                const commentsResponse = await axios.get(getCommentsUrl);

                const comments = await commentsResponse.data.comments.map(
                    async (comment: any) => {
                        const getCommentUserUrl = `https://dummyjson.com/users/${comment.user.id}`;
                        const commentUserResponse = await axios.get(
                            getCommentUserUrl
                        );

                        const user = {
                            id: comment.user.id,
                            userName: comment.user.username,
                            image: commentUserResponse.data.image,
                        };

                        return {
                            id: comment.id,
                            body: comment.body,
                            user: user,
                        };
                    }
                );

                const post = {
                    id: postResponse.data.id,
                    title: postResponse.data.title,
                    body: postResponse.data.body,
                    avatarUrl: userResponse.data.image,
                    authorName: `${userResponse.data.firstName} ${userResponse.data.lastName}`,
                    authorId: userResponse.data.id,
                    reactionCount: postResponse.data.reactions,
                    topics: postResponse.data.tags,
                    comments: await Promise.all(comments),
                };
                setPost(post);
                setLoading(false);
            } catch (error: any) {
                setError({
                    error: true,
                    message: error.message,
                    code: error.reponse?.status,
                });
            }
        };
        getPost();
    }, [id]);

    return { post, loading, error };
}
