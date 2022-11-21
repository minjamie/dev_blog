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
                    paddingBottom: "2rem",
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
                    padding: "0rem 2rem 2rem 2.5rem",
                    maxWidth: "480px",
                    width: "35%",
                    height: "460px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    ["@media (max-width:1200px)"]: {
                        // eslint-disable-line no-useless-computed-key
                        paddingLeft: "2rem",
                    },
                    ["@media (max-width:768px)"]: {
                        // eslint-disable-line no-useless-computed-key
                        padding: "1rem 2rem 2rem 2rem",
                        width: "100%",
                        height: "auto",
                    },
                }}
            >
                <Skeleton
                    width="60%"
                    sx={{
                        backgroundColor: "red",
                        bgcolor: "grey.300",
                        height: "3rem",
                        justifyItems: "flex-start",
                        ["@media (max-width:1200px)"]: {
                            // eslint-disable-line no-useless-computed-key
                            height: "1.9rem",
                            marginBottom: "-0.35rem",
                        },
                        ["@media (max-width:768px)"]: {
                            // eslint-disable-line no-useless-computed-key
                            marginBottom: "0.2rem",
                        },
                    }}
                />
                <Skeleton
                    width="100%"
                    sx={{
                        height: "9rem",
                        marginTop: "0rem",
                        bgcolor: "grey.300",
                        ["@media (max-width:1200px)"]: {
                            // eslint-disable-line no-useless-computed-key
                            height: "5.5rem",
                        },
                        ["@media (max-width:768px)"]: {
                            // eslint-disable-line no-useless-computed-key
                            height: "3rem",
                        },
                    }}
                />
                <Skeleton
                    width="60%"
                    sx={{
                        height: "2rem",
                        bgcolor: "grey.300",
                        justifyItems: "center",
                        ["@media (max-width:1200px)"]: {
                            // eslint-disable-line no-useless-computed-key
                            height: "1.7rem",
                        },
                    }}
                />
            </Box>
        </Box>
    );
}
