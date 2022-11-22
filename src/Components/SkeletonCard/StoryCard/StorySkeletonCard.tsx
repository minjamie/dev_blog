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
                    },
                }}
            >
                <Box
                    sx={{
                        textAlign: "left",
                        padding: "0.1rem 0 1.9rem 1.3rem",
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
                        }}
                    />
                </Box>
                <StoryImageWrapper>
                    <Skeleton
                        variant="rectangular"
                        height={267}
                        sx={{
                            width: "383px",
                            height: "100%",
                            ["@media (max-width:1200px)"]: {
                                // eslint-disable-line no-useless-computed-key
                                width: "350px",
                                height: "50%",
                                backgroundColor: "red",
                            },
                        }}
                    />
                </StoryImageWrapper>
            </Box>
        </StoryLink>
    );
}
