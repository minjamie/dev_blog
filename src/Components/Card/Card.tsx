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
    const { content, img, title } = props.data;

    return (
        <CardItem>
            <CardLink href="abc">
                <CardFigure title={title}>
                    <CardImage src={img} />
                </CardFigure>
                <CardDesc>
                    <CardText>{content}</CardText>
                </CardDesc>
            </CardLink>
        </CardItem>
    );
};

export default Card;
