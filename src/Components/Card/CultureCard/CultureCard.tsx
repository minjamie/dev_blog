import { FC } from "react";
import { BsTags } from "react-icons/bs";
import { CultureProp } from "./CultureCard.interface";
import {
    CultureCount,
    CultureDate,
    CultureEmail,
    CultureImage,
    CultureImageWrapper,
    CultureInfo,
    CultureItem,
    CultureMeta,
    CultureTag,
    CultureTags,
    CultureText,
    CultureTitle,
} from "./CultureCard.styles";

const CultureCard: FC<any> = (props: CultureProp) => {
    const { content, img, title, email, count, date, tags } = props.data;

    return (
        <CultureItem>
            <CultureImageWrapper>
                <CultureImage src={img} />
            </CultureImageWrapper>
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
                            <CultureTag key={index}>{tags[index]}</CultureTag>
                        );
                    })}
                </CultureTags>
            </CultureInfo>
        </CultureItem>
    );
};

export default CultureCard;
