import path from "path";
import React, { FC } from "react";
import { CultureProp } from "./CultureCard.interface";
import {
    CultureItem,
    CultureTitle,
    CultureDesc,
    CultureImage,
    CultureLink,
    CultureText,
} from "./CultureCard.styles";

const CultureCard: FC<any> = (props: CultureProp) => {
    const { content, img, title } = props.data;

    return (
        <CultureItem>
            <CultureImage src={img} />
            <CultureLink href="abc">
                <CultureTitle>{title}</CultureTitle>
                <CultureDesc>
                    <CultureText>{content}</CultureText>
                </CultureDesc>
            </CultureLink>
        </CultureItem>
    );
};

export default CultureCard;
