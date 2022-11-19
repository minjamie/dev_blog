import { Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export default function MainSkeletonCard(props: any) {
    return (
        <Box
            sx={{
                transition: "ease all 0.5s",
                display: "flex",
                padding: "0 1rem",
                paddingBottom: "2rem",
                ["@media (max-width:768px)"]: {
                    flexDirection: "column",
                },
            }}
        >
            <Skeleton
                variant="rectangular"
                sx={{
                    width: "770px",
                    height: "459px",
                    bgcolor: "grey.300",
                    maxWidth: `calc(66.66667% - 10px)`,
                    borderRadius: "20px",
                    ["@media (max-width:768px)"]: {
                        // eslint-disable-line no-useless-computed-key
                        maxWidth: `calc(99.66667% - 10px)`,
                    },
                }}
            />
            <Box
                sx={{
                    padding: "2.5rem 2rem 2rem 2rem",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    maxWidth: "480px",
                    width: "35%",
                    maxHeight: "589px",
                    backgroundColor: "red",
                    height: "auto",
                    ["@media (max-width:768px)"]: {
                        // eslint-disable-line no-useless-computed-key
                        width: "100%",
                    },
                }}
            >
                <Skeleton
                    height={50}
                    width="60%"
                    sx={{
                        bgcolor: "grey.300",
                        ["@media (max-width:1200px)"]: {
                            // eslint-disable-line no-useless-computed-key
                            paddingBottom: "0",
                            marginBottom: "0",
                        },
                    }}
                />
                <Skeleton
                    height={150}
                    width="100%"
                    sx={{
                        bgcolor: "grey.300",
                        ["@media (max-width:1200px)"]: {
                            // eslint-disable-line no-useless-computed-key
                            padding: "0",
                            marginBottom: "0",
                        },
                    }}
                />
                <Skeleton
                    height={30}
                    width="60%"
                    sx={{
                        bgcolor: "grey.300",
                        ["@media (max-width:1200px)"]: {
                            // eslint-disable-line no-useless-computed-key
                            paddingBottom: "0",
                        },
                    }}
                />
            </Box>
        </Box>
    );
}
