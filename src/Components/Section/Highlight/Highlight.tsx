import highlight from "Assets/dummy/highlight";
import HighlightCard from "Components/Card/HighlightCard/HighlightCard";
import { useState } from "react";
import { GlobalStyle } from "Styles/global.styles";
import {
    HighlightArea,
    HighlightContainer,
    HighlightList,
    HighlightWrapper,
    MainCategory,
    MainContent,
    MainImage,
    MainInfo,
    MainLink,
    MainTitle,
    MainViewCount,
    MainWriteDate,
} from "./Highlight.styles";

export default function Highlight(props: any) {
    const [mainData, setMainData] = useState(highlight[0]);
    const restData = highlight.slice(1, 4);
    const [subData] = useState(restData);
    return (
        <HighlightArea>
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
        </HighlightArea>
    );
}
