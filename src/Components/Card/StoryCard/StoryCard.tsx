import { FC, useRef } from "react";
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
    const ref: React.MutableRefObject<any> = useRef<any>();

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
                    <StoryImage src={img} ref={ref} />
                </StoryImageWrapper>
            </StoryItem>
        </StoryLink>
    );
};

export default StoryCard;
