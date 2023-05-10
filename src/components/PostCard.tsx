import React from "react";
import {
    Avatar,
    Badge,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
    id: number;
    title: string;
    body: string;
    imageUrl: string;
    avatarUrl: string;
    authorName: string;
    reactionCount: number;
}

export default function PostCard(props: PostCardProps) {
    const { id, title, body, imageUrl, avatarUrl, authorName, reactionCount } =
        props;

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/${id}`);
    };

    return (
        <Card
            sx={{
                maxWidth: 345,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
            }}
            onClick={handleCardClick}
        >
            <CardHeader
                avatar={<Avatar alt={authorName} src={avatarUrl} />}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={title}
                subheader={authorName}
            />
            <CardMedia
                component="img"
                height="194"
                image={imageUrl}
                alt="Post image"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {body}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ flex: 1, alignItems: "end" }}>
                <IconButton aria-label="add to favorites">
                    <Badge badgeContent={reactionCount} color="primary">
                        <FavoriteIcon color="error" />
                    </Badge>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
