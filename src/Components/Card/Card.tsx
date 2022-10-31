import path from "path";
import React, { FC } from "react";
import { CardProp } from "./Card.interface";
import {
    CardImage,
    CardLink,
    CardContent,
    CardTitle,
    CardInfo,
    CardCategory,
    CardWriteDate,
    CardViewCount,
} from "./Card.styles";

const Card: FC<any> = (props: CardProp) => {
    const { githubFolks, githubStars, img, title, category } = props.data;
    return (
        <CardLink sectionCategory={props.sectionCategory}>
            <CardImage
                index={props.cardIndex}
                sectionCategory={props.sectionCategory}
                src={img}
            />
            <CardContent index={props.cardIndex}>
                <CardCategory>{category}</CardCategory>
                <CardTitle sectionCategory={props.sectionCategory}>
                    {title}
                </CardTitle>
                <CardInfo>
                    <CardWriteDate>{githubFolks} Folks /</CardWriteDate>
                    <CardViewCount>{githubStars} Ratings</CardViewCount>
                </CardInfo>
            </CardContent>
        </CardLink>
    );
};

export default Card;
