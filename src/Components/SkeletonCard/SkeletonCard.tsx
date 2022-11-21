import { Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export default function SkeletonCard(props: any) {
    return (
        <Box
            sx={{
                transition: "ease all 1s",
                textAlign: "center",
                width: props.sectionCategory == "feature" ? "25%" : "33.33333%",
                paddingLeft: "1.4%",
                paddingRight: "0.4%",
                ["@media (max-width:1200px)"]: {
                    // eslint-disable-line no-useless-computed-key
                    width: "50%",
                    "&:last-child": {
                        width:
                            (props.sectionCategory === "highlight" &&
                                props.cardIndex === 2) ||
                            (props.sectionCategory === "post" &&
                                props.cardLength % 2 == 1)
                                ? "100%"
                                : "50%",
                        display:
                            (props.sectionCategory === "highlight" &&
                                props.cardIndex === 2) ||
                            (props.sectionCategory === "post" &&
                                props.cardLength % 2 == 1)
                                ? "flex"
                                : null,
                        flexDirection:
                            props.sectionCategory === "post" &&
                            props.cardLength % 2 == 1
                                ? "column"
                                : null,
                        padding:
                            props.sectionCategory === "highlight" &&
                            props.cardIndex === 2
                                ? "0 0 0 1rem"
                                : props.sectionCategory === "post" &&
                                  props.cardLength % 2 == 1
                                ? "1rem"
                                : "0 0 0rem 1rem",
                    },
                },
                ["@media (max-width:600px)"]: {
                    // eslint-disable-line no-useless-computed-key
                    padding: "0 1.5rem",
                    width: "100vw",
                    display: "flex",
                    flexDirection: "row-reverse",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:last-child": {
                        padding: "0 1.5rem",
                        width: "100vw",
                        display: "flex",
                        flexDirection: "row-reverse",
                        justifyContent: "center",
                    },
                },
            }}
        >
            <Skeleton
                variant="rectangular"
                height={1057}
                sx={{
                    bgcolor: "grey.300",
                    maxWidth: `calc(100% - 10px)`,
                    maxHeight:
                        props.sectionCategory == "feature" ? "217px" : "257px",
                    borderRadius: "20px",
                    ["@media (max-width:1200px)"]: {
                        // eslint-disable-line no-useless-computed-key
                        width:
                            props.sectionCategory === "highlight"
                                ? "45vw"
                                : props.sectionCategory === "post" &&
                                  props.cardIndex === props.cardLength - 1 &&
                                  props.cardLength % 2 == 1
                                ? "47.5%"
                                : "100%",
                    },
                    ["@media (max-width:600px)"]: {
                        // eslint-disable-line no-useless-computed-key
                        maxWidth: "150px",
                        maxHeight: "150px",
                    },
                }}
            />
            <Box
                sx={{
                    margin: "2rem 0 2rem 0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    textAlign: "left",
                    ["@media (max-width:1200px)"]: {
                        // eslint-disable-line no-useless-computed-key
                        width:
                            props.sectionCategory === "highlight"
                                ? "50vw"
                                : (props.sectionCategory === "highlight" &&
                                      props.cardIndex === 2) ||
                                  (props.cardIndex === props.cardLength - 1 &&
                                      props.cardLength % 2 == 1)
                                ? "47.5%"
                                : "100%",
                        justifyContent:
                            props.sectionCategory === "highlight" &&
                            props.cardIndex === 2
                                ? "center"
                                : "start",
                        paddingLeft:
                            props.sectionCategory === "highlight" &&
                            props.cardIndex === 2
                                ? "2.4rem"
                                : "0.3rem",
                        margin:
                            props.sectionCategory === "highlight" &&
                            props.cardIndex === 2
                                ? "0"
                                : "3rem 0 3rem 0",
                    },
                    ["@media (max-width:600px)"]: {
                        // eslint-disable-line no-useless-computed-key
                        paddingLeft: "0rem",
                        width: "100%",
                    },
                }}
            >
                <Skeleton
                    height={25}
                    width="60%"
                    sx={{
                        bgcolor: "grey.300",
                        paddingBottom: "5px",
                    }}
                />
                <Skeleton
                    height={40}
                    width="80%"
                    sx={{ bgcolor: "grey.300", paddingBottom: "5px" }}
                />
                <Skeleton
                    height={25}
                    width="40%"
                    sx={{ bgcolor: "grey.300" }}
                />
            </Box>
        </Box>
    );
}
