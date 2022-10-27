
import styled from "styled-components";

const CultureItem = styled.li`
    display: flex;
    margin: 0 1.4rem;
    border-radius: 10px;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    @media only screen and (max-width: 1024px) {
        margin-bottom: 2rem;
    }
    height: auto;
`;

const CultureLink = styled.a`
    display: flex;
    flex-flow: row;
    text-decoration: none;
    padding: 30px;
`;

const CultureInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
`;

const CultureTitle = styled.h1`
    font-weight: 900;
    font-size: 35px;
`;
const CultureImage = styled.img<{ src: string }>`
    margin: auto;
    width: 30vw;
    height: 15vh;
    src: src;
`;

const CultureText = styled.h1`
    color: #252e48;
    font-size: 18px;
    line-height: 24px;
    padding: 20px 0;
`;

const CultureMeta = styled.ul`
    color: gray;
    padding: 0;
`;

const CultureEmail = styled.span`
    padding-right: 10px;
`;
const CultureDate = styled.span`
    padding-right: 10px;
`;
const CultureCount = styled.span``;

const CultureTags = styled.div``;
const CultureTag = styled.span`
    text-decoration: none;
    display: inline;
    border: 1px solid #ddd;
    padding: 2px 10px;
    margin: 0px 5px;
    color: #222;
    font-weight: 300;
`;

export {
    CultureItem,
    CultureLink,
    CultureTitle,
    CultureInfo,
    CultureImage,
    CultureText,
    CultureMeta,
    CultureEmail,
    CultureDate,
    CultureCount,
    CultureTags,
    CultureTag,
};
