import styled from "styled-components";
import { Link } from "react-router-dom";

const HighlightArea = styled.section`
    padding: 4rem;
    background-color: #f4f6f8;
`;

const HighlightContainer = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
`;

const HighlightWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

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
    background-color: white;
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
