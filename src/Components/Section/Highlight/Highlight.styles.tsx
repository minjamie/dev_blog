import styled from "styled-components";
import { Link } from "react-router-dom";

const HighlightArea = styled.section`
    padding: 4rem;
    background: #fff;
`;

const HighlightContainer = styled.div`
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;
    width: 75vw;
`;

const HighlightWrapper = styled.div``;

const HighlightMain = styled.article``;

const MainLink = styled(Link)`
    display: flex;
    text-decoration: none;
    margin: 0 auto;
    padding: 0 15px;
    padding-bottom: 30px;
`;
const MainImage = styled.img`
    display: block;
    object-fit: contain;
    width: 42vw;
    border-radius: 10px;
    max-width: 100%;
    height: 40vh;
    max-height: 100%;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
`;
const MainContent = styled.div`
    width: 30vw;
    height: 40vh;
    background-color: aliceblue;
    text-align: left;
    padding: 54px 24px;
`;
const MainCategory = styled.h1`
    font-size: 25px;
`;
const MainTitle = styled.h1`
    font-size: 40px;
`;
const MainInfo = styled.h2``;
const MainWriteDate = styled.span`
    font-size: 15px;
`;
const MainViewCount = styled.span`
    font-size: 15px;
`;

const HighlightList = styled.div`
    display: flex;
    flex-direction: row;
`;

export {
    HighlightArea,
    HighlightContainer,
    HighlightWrapper,
    HighlightMain,
    MainLink,
    MainImage,
    MainContent,
    MainCategory,
    MainTitle,
    MainInfo,
    MainWriteDate,
    MainViewCount,
    HighlightList,
};
