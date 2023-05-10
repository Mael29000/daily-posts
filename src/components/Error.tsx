import { Box, Button, Typography } from "@mui/material";
import image404 from "../assets/404.png";
import errorImage from "../assets/error.png";
import { useNavigate } from "react-router-dom";

interface ErrorProps {
    message: string;
    code?: number;
}

export default function Error(props: ErrorProps) {
    const { message, code } = props;

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate(`/`);
    };

    return (
        <Box
            sx={{
                marginTop: { xs: "20px", sm: "30px" },
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                width: { xs: "380px", sm: "600px" },
                padding: "20px",
            }}
        >
            {code === 404 || code === 400 ? (
                <>
                    <Typography variant="h5">
                        It's doesn't go anywhere
                    </Typography>
                    <img
                        src={image404}
                        alt="desert"
                        style={{
                            maxHeight: "500px",
                            maxWidth: "100%",
                            marginTop: "30px",
                            marginBottom: "30px",
                        }}
                    />
                    <Typography
                        variant="h5"
                        sx={{
                            marginBottom: "30px",
                            fontSize: { xs: "20px", sm: "1.5rem" },
                        }}
                    >
                        Don't worry, you can still go home
                    </Typography>
                    <Button onClick={handleGoHome} variant="contained">
                        Go Home
                    </Button>
                </>
            ) : (
                <>
                    <Typography variant="h5">Something went wrong</Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            marginTop: "20px",
                            fontSize: { xs: "20px", sm: "1.5rem" },
                        }}
                    >
                        {message}
                    </Typography>
                    <img
                        src={errorImage}
                        alt="destroy robot"
                        style={{
                            maxHeight: "500px",
                            maxWidth: "100%",
                            marginTop: "30px",
                            marginBottom: "30px",
                        }}
                    />
                    <Typography
                        variant="h5"
                        sx={{
                            marginBottom: "30px",
                            textAlign: "center",
                            fontSize: { xs: "1rem", sm: "1.5rem" },
                        }}
                    >
                        If the problem persists, please contact the
                        administrator at maelsuard@orange.fr
                    </Typography>
                    <Button onClick={handleGoHome} variant={"contained"}>
                        Go Home
                    </Button>
                </>
            )}
        </Box>
    );
}
