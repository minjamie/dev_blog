import { FC } from "react";
import { CardProp } from "./Card.interface";
import {
    CardCategory,
    CardContent,
    CardImage,
    CardInfo,
    CardLink,
    CardTitle,
    CardViewCount,
    CardWriteDate,
} from "./Card.styles";

const Card: FC<any> = (props: CardProp) => {
    const { githubFolks, githubStars, img, title, category } = props.data;
    return (
        <CardLink
            sectionCategory={props.sectionCategory}
            cardLength={props.cardLength}
        >
            <CardImage
                index={props.cardIndex}
                sectionCategory={props.sectionCategory}
                cardLength={props.cardLength}
                src={img}
            />
            <CardContent
                sectionCategory={props.sectionCategory}
                cardLength={props.cardLength}
                index={props.cardIndex}
            >
                <CardCategory>{category}</CardCategory>
                <CardTitle sectionCategory={props.sectionCategory}>
                    {title}
                </CardTitle>
                <CardInfo>
                    <CardWriteDate>{githubFolks} Folks / </CardWriteDate>
                    <CardViewCount>{githubStars} Ratings</CardViewCount>
                </CardInfo>
            </CardContent>
        </CardLink>
    );
};

export default Card;
