import styled from "styled-components";
import { media } from "Styles/media.styles";

const CultureItem = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 2rem;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    background-color: white;
    height: auto;
    padding: 1rem 2rem;
    ${media.laptop`
    padding-left: 2rem;
    `}
    ${media.tablet`
        display:block;
        flex-direction: column;
        padding: 2rem 2rem;
`}
`;

const CultureInfo = styled.div`
    display: flex;
    flex-direction: column;
    ${media.tablet`
        padding-top: 2rem;
    `}
`;

const CultureTitle = styled.h1`
    font-weight: 900;
    font-size: 35px;
`;

const CultureImageWrapper = styled.div`
    padding-right: 2rem;
    ${media.tablet`
    text-align: left;
    `}
`;

const CultureImage = styled.img<{ src: string }>`
    src: src;
    background-color: white !important;
    border-radius: 50%;
    max-height: 120px;
`;

const CultureText = styled.h1`
    color: #252e48;
    font-size: 18px;
    line-height: 24px;
    white-space: normal;
`;

const CultureMeta = styled.ul`
    color: gray;
    padding: 0;
    ${media.mobile`
        display: flex;
        flex-direction: column;
`}
`;

const CultureEmail = styled.span`
    padding-right: 10px;
    ${media.mobile`
        padding-bottom: 0.3rem;
`}
`;
const CultureDate = styled.span`
    padding-right: 10px;
    ${media.mobile`
        padding-bottom: 0.3rem;
`}
`;
const CultureCount = styled.span``;

const CultureTags = styled.div`
    display: flex;
    white-space: pre;
    align-items: center;
    flex-wrap: wrap;
`;
const CultureTag = styled.span`
    text-decoration: none;
    border: 1px solid #ddd;
    padding: 2px 10px;
    margin: 0px 5px;
    color: #222;
    font-weight: 300;
    margin: 0.3rem;
`;

export {
    CultureItem,
    CultureTitle,
    CultureInfo,
    CultureImageWrapper,
    CultureImage,
    CultureText,
    CultureMeta,
    CultureEmail,
    CultureDate,
    CultureCount,
    CultureTags,
    CultureTag,
};
