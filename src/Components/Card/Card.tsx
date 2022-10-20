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
} from "./Card.styles";

const Card: FC<any> = (props: CardProp) => {
    const { text, img, title } = props.data;

    return (
        <CardItem>
            <CardLink>
                <CardFigure title={title}>
                    <CardImage src={img} />
                </CardFigure>
                <CardDesc>
                    <CardText>{text}</CardText>
                </CardDesc>
            </CardLink>
        </CardItem>
    );
};

export default Card;
