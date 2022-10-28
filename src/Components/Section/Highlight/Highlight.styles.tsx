import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "Styles/media.styles";

const HighlightContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    ${media.laptop`  
        padding: 3.8rem;
    `}
`;

const HighlightWrapper = styled.div`
    width: 100%;
    height: auto;
`;

const MainLink = styled.a`
    display: flex;
    padding-bottom: 2rem;
    text-decoration: none;
    ${media.tablet`  
        flex-direction: column;
    `}
`;

const MainImage = styled.img`
    border-radius: 20px;
    object-fit: contain;
    max-width: calc(66.66667% - 10px);
    height: 459px;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    ${media.laptop`  
        
  `}
    ${media.tablet`  
    transition: ease all 1s;
    max-width: calc(99.66667% - 10px);
    `}
`;
const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    max-width: 480px;
    width: 100%;
    max-height: 569px;
    height: auto;
    text-align: left;
    padding: 20px 10px 20px 20px;
`;
const MainCategory = styled.h1`
    font-size: var(--font-size-subTitle);
    color: var(--font-color-subTitle);
    padding-bottom: 20px;
    ${media.laptop`  
        font-size: 15px;
        padding-bottom: 8px;
    `}
`;
const MainTitle = styled.h1`
    font-size: var(--font-size-title);
    color: var(--font-color-title);
    font-weight: bolder;
    padding-bottom: 20px;
    ${media.laptop`  
    font-size: 25px;
    padding-bottom: 8px;
    `}
`;
const MainInfo = styled.div`
    font-size: var(--font-size-info);
    color: var(--font-color-subTitle);
    margin: 0;
`;
const MainWriteDate = styled.span`
    font-size: 15px;
`;
const MainViewCount = styled.span`
    font-size: 15px;
`;

const HighlightList = styled.ul`
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    ${media.laptop`  
        flex-flow: row wrap;
        justify-content: start ;
    `}
`;

export {
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
