import highlight from "Assets/dummy/highlight";
import Card from "Components/Card/Card";
import React, { useState } from "react";
import {
    HighlightArea,
    HighlightContainer,
    HighlightMain,
    MainLink,
    MainImage,
    MainContent,
    MainCategory,
    MainTitle,
    MainInfo,
    HighlightList,
    HighlightWrapper,
    MainWriteDate,
    MainViewCount,
} from "./Highlight.styles";

export default function Highlight() {
    const [mainData, setMainData] = useState(highlight[0]);
    const restData = highlight.slice(1, 4);
    const [subData] = useState(restData);

    return (
        <HighlightArea>
            <HighlightContainer>
                <HighlightWrapper>
                    <HighlightMain>
                        <MainLink to={mainData.path}>
                            <MainImage src={mainData.img} />
                            <MainContent>
                                <MainCategory>{mainData.category}</MainCategory>
                                <MainTitle> 🤍 {mainData.title}</MainTitle>
                                <MainInfo>
                                    <MainWriteDate>
                                        {mainData.githubFolks} Folks /
                                    </MainWriteDate>
                                    <MainViewCount>
                                        {mainData.githubStars} Ratings
                                    </MainViewCount>
                                </MainInfo>
                            </MainContent>
                        </MainLink>
                        <HighlightList>
                            {subData.map((a, index) => {
                                return (
                                    <Card key={index} data={subData[index]} />
                                );
                            })}
                        </HighlightList>
                    </HighlightMain>
                </HighlightWrapper>
            </HighlightContainer>
        </HighlightArea>
    );
}
