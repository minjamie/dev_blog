import React from "react";
import { HighlightArea, HighlightContainer, HighlightList, HighlightWrapper } from "./Highlight.styles";

export default function Highlight() {
    return (
        <HighlightArea>
            <HighlightContainer>
                <HighlightWrapper>
                    <HighlightList>
                        {/* {dummy.slice(0, 3).map((a, index) => {
                            return <Card key={index} data={data[index]} />;
                        })} */}
                    </HighlightList>
                    <HighlightList>
                        {/* {dummy.slice(3, 6).map((a, index) => {
                            return <Card key={index} data={data[index]} />;
                        })} */}
                    </HighlightList>
                </HighlightWrapper>
            </HighlightContainer>
        </HighlightArea>
    );
}
