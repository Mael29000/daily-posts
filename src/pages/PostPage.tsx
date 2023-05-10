import {
    Avatar,
    Backdrop,
    Badge,
    Box,
    Chip,
    CircularProgress,
    IconButton,
    Typography,
    Button,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import useGetPost from "../hooks/useGetPost";
import useGetUserPosts from "../hooks/useGetUserPosts";
import PostCard from "../components/PostCard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IPost } from "../hooks/useGetPosts";
import Error from "../components/Error";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function PostPage() {
    const navigate = useNavigate();
    // get the id in the params
    const { id } = useParams();
    const { post, loading, error } = useGetPost(id);
    const {
        posts: authorPosts,
        loading: loadingAuthorPosts,
        error: errorAuthorPost,
    } = useGetUserPosts(post?.authorId);

    const filteredAuthorPosts = authorPosts?.filter(
        (post: IPost) => post.id.toString() !== id
    );

    const handleGoHome = () => {
        navigate(`/`);
    };

    console.log("post", post);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                overflow: "scroll",
                height: "calc(100vh - 75px)",
                position: "relative",
            }}
        >
            {error.error ? (
                <Error message={error.message} code={error.code} />
            ) : (
                <>
                    {!loading && post ? (
                        <Box
                            sx={{
                                width: {
                                    xs: "350px",
                                    sm: "550px",
                                    md: "720px",
                                },
                                paddingTop: "30px",
                            }}
                        >
                            <Typography
                                variant="h4"
                                component="h4"
                                gutterBottom
                                sx={{ fontWeight: "bold" }}
                            >
                                {post?.title}
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: "20px",
                                }}
                            >
                                <Avatar
                                    alt={post?.authorName}
                                    src={post?.avatarUrl}
                                    sx={{
                                        background: "#ffeb3b",
                                        marginRight: "10px",
                                    }}
                                />
                                <Box
                                    sx={{
                                        justifyContent: "space-between",
                                        width: "100%",
                                        alignItems: "center",
                                        display: "flex",
                                    }}
                                >
                                    <Typography variant="subtitle1">
                                        {post?.authorName}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "flex",
                                                md: "flex",
                                                lg: "flex",
                                                xl: "flex",
                                            },
                                            alignItems: "center",
                                        }}
                                    >
                                        {post?.topics.map((topic) => (
                                            <Chip
                                                label={
                                                    topic[0].toLocaleUpperCase() +
                                                    topic.slice(1)
                                                }
                                                sx={{
                                                    marginRight: "10px",
                                                    fontWeight: "bold",
                                                }}
                                            />
                                        ))}
                                        <IconButton aria-label="add to favorites">
                                            <Badge
                                                badgeContent={
                                                    post?.reactionCount
                                                }
                                                color="primary"
                                            >
                                                <FavoriteIcon color="error" />
                                            </Badge>
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: {
                                        xs: "flex",
                                        sm: "none",
                                        md: "none",
                                        lg: "none",
                                        xl: "none",
                                    },
                                    marginTop: "20px",
                                    alignItems: "center",
                                }}
                            >
                                {post?.topics.map((topic) => (
                                    <Chip
                                        label={
                                            topic[0].toLocaleUpperCase() +
                                            topic.slice(1)
                                        }
                                        sx={{
                                            marginRight: "10px",
                                            fontWeight: "bold",
                                        }}
                                    />
                                ))}
                                <IconButton aria-label="add to favorites">
                                    <Badge
                                        badgeContent={post?.reactionCount}
                                        color="primary"
                                    >
                                        <FavoriteIcon color="error" />
                                    </Badge>
                                </IconButton>
                            </Box>

                            <Typography
                                variant="body1"
                                gutterBottom
                                sx={{
                                    marginTop: "50px",
                                    marginBottom: "20px",
                                    lineHeight: "30px",
                                }}
                            >
                                {post?.body}
                            </Typography>
                            <Box>
                                <img
                                    src={`https://picsum.photos/id/${
                                        post?.id + 15
                                    }/720/360`}
                                    style={{ width: "100%" }}
                                />
                            </Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    marginTop: 6,
                                    lineHeight: "30px",
                                }}
                            >
                                Little trees and bushes grow however makes them
                                happy. Let's have a little bit of fun today. Now
                                we can begin working on lots of happy little
                                things. You don't have to spend all your time
                                thinking about what you're doing, you just let
                                it happen. Those great big fluffy clouds. The
                                least little bit can do so much. The little tiny
                                Tim easels will let you down. Just a little
                                indication. We have all at one time or another
                                mixed some mud. This is your creation - and it's
                                just as unique and special as you are. I really
                                believe that if you practice enough you could
                                paint the 'Mona Lisa' with a two-inch brush.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    marginTop: 2,
                                    lineHeight: "30px",
                                }}
                            >
                                Just use the old one inch brush. We don't really
                                know where this goes - and I'm not sure we
                                really care. Let's make a happy little mountain
                                now. Let's make some happy little clouds in our
                                world. Let's go up in here, and start having
                                some fun I think there's an artist hidden in the
                                bottom of every single one of us. La- da- da-
                                da- dah. Just be happy. Happy painting, God
                                bless. And maybe a little bush lives there. The
                                more we do this - the more it will do good
                                things to our heart. By now you should be quite
                                happy about what's happening here. Steve wants
                                reflections, so let's give him reflections.
                                Trees get lonely too, so we'll give him a little
                                friend. Anyone can paint. Any little thing can
                                be your friend if you let it be. This is truly
                                an almighty mountain. Look around, look at what
                                we have. Beauty is everywhere, you only have to
                                look to see it. There's nothing wrong with
                                having a tree as a friend. It looks so good, I
                                might as well not stop.
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: "20px",
                                }}
                            >
                                <Button
                                    onClick={handleGoHome}
                                    // variant="contained"
                                    startIcon={<ArrowBackIcon />}
                                    sx={{
                                        position: {
                                            xs: "block",
                                            sm: "block",
                                            md: "block",
                                            lg: "absolute",
                                        },
                                        top: "50px",
                                        left: "50px",
                                        marginBottom: "30px",
                                    }}
                                >
                                    Go Home
                                </Button>
                            </Box>

                            {post.comments && post.comments.length > 0 && (
                                <Box>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            marginTop: "60px",
                                            marginBottom: "20px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Comments
                                    </Typography>
                                    <Box>
                                        {post?.comments?.map((comment) => (
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    padding: "20px",
                                                    "&:hover": {
                                                        background: "#f5f5f5",
                                                    },
                                                    borderRadius: "30px",
                                                }}
                                            >
                                                <Avatar
                                                    alt={comment?.user.userName}
                                                    src={comment?.user.image}
                                                    sx={{
                                                        border: "5px solid white",
                                                    }}
                                                />
                                                <Box
                                                    sx={{ marginLeft: "20px" }}
                                                >
                                                    <Typography
                                                        variant="subtitle1"
                                                        sx={{
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {comment?.user.userName}
                                                    </Typography>
                                                    <Typography variant="body1">
                                                        {comment?.body}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            )}
                            <Box sx={{ position: "relative" }}>
                                {filteredAuthorPosts?.length > 0 ? (
                                    <Box
                                        sx={{
                                            marginTop: "30px",
                                            paddingBottom: "30px",
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                marginTop: "60px",
                                                marginBottom: "20px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            More from {post?.authorName}
                                        </Typography>
                                        {!loadingAuthorPosts ? (
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: {
                                                        xs: "center",
                                                    },
                                                    flexDirection: "column",
                                                    width: "100%",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "grid",

                                                        gridTemplateColumns: {
                                                            xs: "1fr",
                                                            sm: "repeat(2, 1fr)",
                                                            md: "repeat(2, 1fr)",
                                                        },
                                                        gap: "20px",
                                                    }}
                                                >
                                                    {filteredAuthorPosts?.map(
                                                        (post) => (
                                                            <PostCard
                                                                title={
                                                                    post.title
                                                                }
                                                                body={post.body}
                                                                authorName={
                                                                    post.authorName
                                                                }
                                                                avatarUrl={
                                                                    post.avatarUrl
                                                                }
                                                                id={post.id}
                                                                imageUrl={`https://picsum.photos/id/${
                                                                    post.id + 15
                                                                }/600/300`}
                                                                reactionCount={
                                                                    post.reactionCount
                                                                }
                                                            />
                                                        )
                                                    )}
                                                </Box>
                                            </Box>
                                        ) : (
                                            <>
                                                <Backdrop
                                                    open={loadingAuthorPosts}
                                                />
                                                <CircularProgress
                                                    color="primary"
                                                    sx={{
                                                        position: "absolute",
                                                        top: "50%",
                                                        left: "50%",
                                                        transform:
                                                            "translate(-50%, -50%)",
                                                    }}
                                                />
                                            </>
                                        )}
                                    </Box>
                                ) : null}
                            </Box>
                        </Box>
                    ) : (
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
                    )}
                </>
            )}
        </Box>
    );
}
