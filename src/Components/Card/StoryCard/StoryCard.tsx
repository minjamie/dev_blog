import { FC } from "react";
import { StoryProp } from "./StoryCard.interface";
import {
    StoryDesc,
    StoryImage,
    StoryItem,
    StoryLink,
    StoryText,
    StoryTitle,
} from "./StoryCard.styles";

const StoryCard: FC<any> = (props: StoryProp) => {
    const { content, img, title } = props.data;

    return (
        <StoryLink href="abc">
            <StoryItem>
                <StoryTitle>{title}</StoryTitle>
                <StoryDesc>
                    <StoryText>{content}</StoryText>
                </StoryDesc>
                <StoryImage src={img} />
            </StoryItem>
        </StoryLink>
    );
};

export default StoryCard;
