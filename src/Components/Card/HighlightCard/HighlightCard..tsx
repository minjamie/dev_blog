import React, { FC } from "react";
import { HighlightCardProp } from "./HighlightCard.interface";
import {
    HighlightCardImage,
    HighlightCardLink,
    HighlightCardContent,
    HighlightCardTitle,
    HighlightCardInfo,
    HighlightCardCategory,
    HighlightCardWriteDate,
    HighlightCardViewCount,
} from "./HighlightCard.styles";

const HighlightCard: FC<any> = (props: HighlightCardProp) => {
    const { githubFolks, githubStars, img, title, category } = props.data;

    return (
        <HighlightCardLink>
            <HighlightCardImage src={img} />
            <HighlightCardContent>
                <HighlightCardCategory>{category}</HighlightCardCategory>
                <HighlightCardTitle> {title}</HighlightCardTitle>
                <HighlightCardInfo>
                    <HighlightCardWriteDate>
                        {githubFolks} Folks /
                    </HighlightCardWriteDate>
                    <HighlightCardViewCount>
                        {githubStars} Ratings
                    </HighlightCardViewCount>
                </HighlightCardInfo>
            </HighlightCardContent>
        </HighlightCardLink>
    );
};

export default HighlightCard;
