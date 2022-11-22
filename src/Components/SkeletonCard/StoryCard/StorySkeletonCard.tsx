import { Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import {
    StoryImageWrapper,
    StoryLink,
} from "Components/Card/StoryCard/StoryCard.styles";

export default function StorySkeletonCard(props: any) {
    return (
        <StoryLink cardLength={props.cardLength}>
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
                            padding: "0 2rem 0 0",
                        },
                    }}
                >
                    <Skeleton
                        height={40}
                        width="30%"
                        sx={{
                            bgcolor: "grey.300",
                            ["@media (max-width:1200px)"]: {
                                // eslint-disable-line no-useless-computed-key
                            },
                            ["@media (max-width:600px)"]: {
                                // eslint-disable-line no-useless-computed-key
                                padding: "0 1.5rem",
                            },
                        }}
                    />
                    <Skeleton
                        height={30}
                        width="40%"
                        sx={{
                            bgcolor: "grey.300",
                            ["@media (max-width:1200px)"]: {
                                // eslint-disable-line no-useless-computed-key
                            },
                            ["@media (max-width:600px)"]: {
                                // eslint-disable-line no-useless-computed-key
                                padding: "0 3rem",
                            },
                        }}
                    />
                </Box>
                <StoryImageWrapper>
                    <Skeleton
                        variant="rectangular"
                        sx={{
                            maxWidth: `calc(100% - 10px)`,
                            width: "400px",
                            height: "270px",
                            ["@media (max-width:1200px)"]: {
                                // eslint-disable-line no-useless-computed-key
                                width: "98%",
                                height: "287px",
                            },
                            ["@media screen and (max-width: 874px) and (min-width: 750px)"]:
                                {
                                    // eslint-disable-line no-useless-computed-key
                                    height: "257px",
                                },
                            ["@media screen and (max-width: 749px) and (min-width: 601px)"]:
                                {
                                    // eslint-disable-line no-useless-computed-key
                                    height: "237px",
                                },
                            ["@media screen and (max-width: 700px) and (min-width: 601px)"]:
                                {
                                    // eslint-disable-line no-useless-computed-key
                                    height: "187px",
                                },
                            ["@media (max-width:600px)"]: {
                                // eslint-disable-line no-useless-computed-key
                                height: "140px",
                                width: "150px",
                            },
                        }}
                    />
                </StoryImageWrapper>
            </Box>
        </StoryLink>
    );
}
