import path from "path";
import React, { FC } from "react";
import { CardProp } from "./Card.interface";
import {
    CardItem,
    CardDesc,
    CardFigure,
    CardImage,
    CardLink,
    CardText,
    CardCategory,
    CardTitle,
} from "./Card.styles";

const Card: FC<any> = (props: CardProp) => {
    const { content, img, title, category } = props.data;

    return (
        <CardItem>
            <CardLink href="abc">
                <CardFigure>
                    <CardImage src={img} />
                </CardFigure>
                <CardDesc>
                    <CardCategory>{category}</CardCategory>
                    <CardTitle>{title}</CardTitle>
                    <CardText>{content}</CardText>
                </CardDesc>
            </CardLink>
        </CardItem>
    );
};

export default Card;
