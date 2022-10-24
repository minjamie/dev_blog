import path from "path";
import React, { FC } from "react";
import { StoryProp } from "./StoryCard.interface";
import {
    StoryItem,
    StoryTitle,
    StoryDesc,
    StoryImage,
    StoryLink,
    StoryText,
} from "./StoryCard.styles";

const StoryCard: FC<any> = (props: StoryProp) => {
    const { content, img, title } = props.data;

    return (
        <StoryItem>
            <StoryLink href="abc">
                <StoryTitle>{title}</StoryTitle>
                <StoryDesc>
                    <StoryText>{content}</StoryText>
                </StoryDesc>
            </StoryLink>
            <StoryImage src={img} />
        </StoryItem>
    );
};

export default StoryCard;
