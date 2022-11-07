import { FC } from "react";
import { StoryProp } from "./StoryCard.interface";
import {
    StoryDesc,
    StoryImage,
    StoryImageWrapper,
    StoryInterviewMark,
    StoryItem,
    StoryLink,
    StoryName,
    StoryNotInterviewMark,
    StoryTeam,
} from "./StoryCard.styles";

const StoryCard: FC<any> = (props: StoryProp) => {
    const { category, img, title, hasDoneInterview } = props.data;

    return (
        <StoryLink cardLength={props.cardLength}>
            <StoryItem>
                <StoryDesc>
                    <StoryName>{category}</StoryName>
                    <StoryTeam>{title}</StoryTeam>
                    {hasDoneInterview ? (
                        <StoryInterviewMark>인터뷰</StoryInterviewMark>
                    ) : (
                        <StoryNotInterviewMark>
                            인터뷰 예정
                        </StoryNotInterviewMark>
                    )}
                </StoryDesc>
                <StoryImageWrapper>
                    <StoryImage src={img} />
                </StoryImageWrapper>
            </StoryItem>
        </StoryLink>
    );
};

export default StoryCard;
