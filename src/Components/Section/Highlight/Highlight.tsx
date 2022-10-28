import Card from "Components/Card/Card";
import highlight from "Assets/dummy/highlight";
import React, { useState } from "react";
import {
    HighlightContainer,
    MainLink,
    MainImage,
    MainContent,
    MainCategory,
    MainTitle,
    MainInfo,
    HighlightList,
    MainWriteDate,
    MainViewCount,
    HighlightWrapper,
} from "./Highlight.styles";
import { GlobalStyle } from "Styles/global.styles";
import HighlightCard from "Components/Card/HighlightCard/HighlightCard.";

export default function Highlight(props: any) {
    const [mainData, setMainData] = useState(highlight[0]);
    const restData = highlight.slice(1, 4);
    const [subData] = useState(restData);
    return (
        <section>
            <GlobalStyle />

            <HighlightWrapper>
                <HighlightContainer>
                    <MainLink>
                        <MainImage src={mainData.img} />
                        <MainContent>
                            <MainCategory> {mainData.category}</MainCategory>
                            <MainTitle> 🤍&nbsp;{mainData.title}</MainTitle>
                            <MainInfo>
                                <MainWriteDate>
                                    {mainData.githubFolks} Folks /&nbsp;
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
                                <HighlightCard
                                    key={index}
                                    data={subData[index]}
                                    sectionCategory={props.sectionCategory}
                                    cardIndex={index}
                                />
                            );
                        })}
                    </HighlightList>
                </HighlightContainer>
            </HighlightWrapper>
        </section>
    );
}
