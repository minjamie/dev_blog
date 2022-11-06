import { FC } from "react";
import { StoryProp } from "./StoryCard.interface";
import {
    StoryDesc,
    StoryImage,
    StoryImageWrapper,
    StoryItem,
    StoryLink,
    StoryName,
    StoryTeam,
} from "./StoryCard.styles";

const StoryCard: FC<any> = (props: StoryProp) => {
    const { category, img, title } = props.data;

    return (
        <StoryLink>
            <StoryItem>
                <StoryDesc>
                    <StoryName>{category}</StoryName>
                    <StoryTeam>{title}</StoryTeam>
                </StoryDesc>
                <StoryImageWrapper>
                    <StoryImage src={img} />
                </StoryImageWrapper>
            </StoryItem>
        </StoryLink>
    );
};

export default StoryCard;
