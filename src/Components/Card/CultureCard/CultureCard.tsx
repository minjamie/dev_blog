import path from "path";
import React, { FC } from "react";
import { CultureProp } from "./CultureCard.interface";
import {
    CultureItem,
    CultureTitle,
    CultureImage,
    CultureLink,
    CultureText,
    CultureInfo,
    CultureMeta,
    CultureEmail,
    CultureDate,
    CultureCount,
    CultureTags,
    CultureTag,
} from "./CultureCard.styles";
import { BsTags } from "react-icons/bs";

const CultureCard: FC<any> = (props: CultureProp) => {
    const { content, img, title, email, count, date, tags } = props.data;

    return (
        <CultureItem>
            <CultureLink href="abc">
                <CultureImage src={img} />
                <CultureInfo>
                    <CultureTitle>{title}</CultureTitle>
                    <CultureText>{content}</CultureText>
                    <CultureMeta>
                        <CultureEmail>{email}</CultureEmail>
                        <CultureDate>등록일 | {date}</CultureDate>
                        <CultureCount> 게시글 수 | {count}</CultureCount>
                    </CultureMeta>
                    <CultureTags>
                        <BsTags className="CultureTag" />
                        {tags.map((a, index) => {
                            return (
                                <CultureTag key={index}>
                                    {tags[index]}
                                </CultureTag>
                            );
                        })}
                    </CultureTags>
                </CultureInfo>
            </CultureLink>
        </CultureItem>
    );
};

export default CultureCard;
