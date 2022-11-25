import { Skeleton } from "@mui/material";
import { FC, useEffect, useState } from "react";
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
    const [loading, setLoading] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setLoading(0);
        }, 1000);
    });
    return (
        <CultureItem>
            <CultureImageWrapper>
                {loading ? (
                    <Skeleton variant="circular" width={120} height={120} />
                ) : (
                    <CultureImage src={img} />
                )}
            </CultureImageWrapper>
            <CultureInfo>
                {loading ? (
                    <Skeleton
                        variant="rectangular"
                        width={"25%"}
                        height={42}
                        sx={{ marginBottom: "20px" }}
                    />
                ) : (
                    <CultureTitle>{title}</CultureTitle>
                )}
                {loading ? (
                    <Skeleton
                        variant="rectangular"
                        width={"99%"}
                        height={240}
                        sx={{ marginBottom: "8px" }}
                    />
                ) : (
                    <CultureText>{content}</CultureText>
                )}
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
