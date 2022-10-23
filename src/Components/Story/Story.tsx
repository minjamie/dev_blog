import path from "path";
import React, { FC } from "react";
import { StoryProp } from "./Story.interface";
import {
    StoryItem,
    StoryTitle,
    StoryDesc,
    StoryImage,
    StoryLink,
    StoryText,
} from "./Story.styles";

const Story: FC<any> = (props: StoryProp) => {
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

export default Story;
