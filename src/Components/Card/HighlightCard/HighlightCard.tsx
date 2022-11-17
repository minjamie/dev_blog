import { FC } from "react";
import { HighlightCardProp } from "./HighlightCard.interface";
import {
    HighlightCardCategory,
    HighlightCardContent,
    HighlightCardImage,
    HighlightCardInfo,
    HighlightCardLink,
    HighlightCardTitle,
    HighlightCardViewCount,
    HighlightCardWriteDate,
} from "./HighlightCard.styles";

const HighlightCard: FC<any> = (props: HighlightCardProp) => {
    const { githubFolks, githubStars, img, title, category } = props.data;

    return (
        <HighlightCardLink>
            <HighlightCardImage cardIndex={props.cardIndex} src={img} />
            <HighlightCardContent cardIndex={props.cardIndex}>
                <HighlightCardCategory>{category}</HighlightCardCategory>
                <HighlightCardTitle> {title}</HighlightCardTitle>
                <HighlightCardInfo>
                    <HighlightCardWriteDate>
                        {githubFolks} Folks /
                    </HighlightCardWriteDate>
                    &nbsp;
                    <HighlightCardViewCount>
                        {githubStars} Ratings
                    </HighlightCardViewCount>
                </HighlightCardInfo>
            </HighlightCardContent>
        </HighlightCardLink>
    );
};

export default HighlightCard;
