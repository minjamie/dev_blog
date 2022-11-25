import { CultureItem } from "Components/Card/CultureCard/CultureCard.styles";
import { Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export default function CultureSkeletonCard(props: any) {
    return (
        <CultureItem>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    ["@media (max-width:600px)"]: {
                        // eslint-disable-line no-useless-computed-key
                        justifyContent: "center",
                        flexDirection: "row",
                        alignContent: "center",
                    },
                }}
            >
                <Box
                    sx={{
                        textAlign: "left",
                        padding: "0.1rem 0 1.9rem 1.3rem",
                        ["@media (max-width:1200px)"]: {
                            // eslint-disable-line no-useless-computed-key
                        },
                        ["@media (max-width:600px)"]: {
                            // eslint-disable-line no-useless-computed-key
                            padding: "0 1rem",
                        },
                    }}
                >
                    <Skeleton
                        height={42}
                        width="3.5rem"
                        sx={{
                            bgcolor: "grey.300",
                            ["@media (max-width:1200px)"]: {
                                // eslint-disable-line no-useless-computed-key
                            },
                            ["@media (max-width:600px)"]: {
                                // eslint-disable-line no-useless-computed-key
                            },
                        }}
                    />
                    <Skeleton
                        height={30}
                        width="5.5rem"
                        sx={{
                            bgcolor: "grey.300",
                            ["@media (max-width:1200px)"]: {
                                // eslint-disable-line no-useless-computed-key
                            },
                            ["@media (max-width:600px)"]: {
                                // eslint-disable-line no-useless-computed-key
                            },
                        }}
                    />
                </Box>
                <Skeleton
                    variant="rectangular"
                    sx={{
                        height: "267px",
                        maxWidth: `calc(100% - 10px)`,
                        width: "410px",
                        ["@media (max-width:1200px)"]: {
                            // eslint-disable-line no-useless-computed-key
                            width: "126%",
                        },
                        ["@media (max-width:600px)"]: {
                            // eslint-disable-line no-useless-computed-key
                            height: "140px",
                            width: "200px",
                        },
                    }}
                />
            </Box>
        </CultureItem>
    );
}
