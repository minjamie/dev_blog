import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "Styles/media.styles";

const HighlightArea = styled.section`
    background-color: #f4f6f8;
    display: flex;
    justify-content: center;
`;

const HighlightContainer = styled.div`
    width: 71.5%;
    ${media.laptop`  
        width: 95%;
    `}
`;

const HighlightWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`;

const MainLink = styled.a`
    display: flex;
    padding-bottom: 30px;
    border-radius: 30px;
    text-decoration: none;
    ${media.laptop`  
        width: 95%;
    justify-content: center;
    `}
`;
const MainImage = styled.img`
    display: block;
    object-fit: contain;
    width: 35vw;
    height: auto;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
`;
const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30vw;
    height: 40vh;
    background-color: white;
    text-align: left;
    padding: 20px 40px;
`;
const MainCategory = styled.h1`
    font-size: 20px;
    margin: 0;
    padding-bottom: 20px;
    ${media.laptop`  
        font-size: 15px;
        padding-bottom: 8px;
    `}
`;
const MainTitle = styled.h1`
    font-size: 30px;
    margin: 0;
    padding-bottom: 20px;
    ${media.laptop`  
    font-size: 25px;
    padding-bottom: 8px;
    `}
`;
const MainInfo = styled.div`
    margin: 0;
`;
const MainWriteDate = styled.span`
    font-size: 15px;
`;
const MainViewCount = styled.span`
    font-size: 15px;
`;

const HighlightList = styled.ul`
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    ${media.tablet`  
        flex-wrap: wrap;
    `}
`;

export {
    HighlightArea,
    HighlightContainer,
    HighlightWrapper,
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
