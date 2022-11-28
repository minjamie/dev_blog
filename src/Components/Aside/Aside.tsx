import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import {
    CultureAside,
    CultureAsideContainer,
    CultureAsideImage,
    CultureAsideName,
    CultureAsideNumber,
    CultureAsideTitle,
    CultureAsideWrapper,
} from "./Aside.styles";

export default function Aside(props: any) {
    const [loading, setLoading] = useState(1);

    useEffect(() => {
        // setTimeout(() => {
        //     setLoading(0);
        // }, 1000);
    });

    return (
        <CultureAside>
            <CultureAsideTitle>TOP3 UB People</CultureAsideTitle>
            <CultureAsideWrapper>
                {props.data.slice(0, 3).map((a: any, index: any) => {
                    return (
                        <CultureAsideContainer key={index}>
                            <CultureAsideNumber>
                                0{index + 1}
                            </CultureAsideNumber>
                            {loading ? (
                                <Skeleton
                                    variant="circular"
                                    width={35}
                                    height={35}
                                />
                            ) : (
                                <CultureAsideImage src={a.img} />
                            )}
                            {loading ? (
                                <Skeleton
                                    variant="rounded"
                                    // width={160}
                                    height={30}
                                    sx={{
                                        width: "160px",
                                        marginLeft: "0.5rem",
                                        ["@media (max-width:1200px)"]: {
                                            // eslint-disable-line no-useless-computed-key
                                            width: "9rem",
                                        },
                                        ["@media (max-width:768px)"]: {
                                            // eslint-disable-line no-useless-computed-key
                                            width: "7rem",
                                        },
                                        ["@media (max-width:600px)"]: {
                                            // eslint-disable-line no-useless-computed-key
                                            width: "5rem",
                                        },
                                    }}
                                />
                            ) : (
                                <CultureAsideName>{a.title}</CultureAsideName>
                            )}
                        </CultureAsideContainer>
                    );
                })}
            </CultureAsideWrapper>
        </CultureAside>
    );
}
