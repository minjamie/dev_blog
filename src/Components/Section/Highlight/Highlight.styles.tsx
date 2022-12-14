import styled from "styled-components";
import { media } from "Styles/media.styles";

const HighlightArea = styled.section`
    padding: 4rem 0rem;
    background-color: #f4f6f8;
`;
const HighlightContainer = styled.section`
    max-width: 1200px;
    width: 100%;
    height: auto;
    margin: 0 auto;
`;

const HighlightWrapper = styled.div`
    width: 100%;
    height: auto;
`;

const MainLink = styled.a`
    display: flex;
    padding: 0 1rem;
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
    width: 770px;
    height: 459px;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    &:hover {
        transition: ease all 0.5s;
        transform: scale(0.97);
    }
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
    padding: 1rem 2rem 2rem 2rem;
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
    padding: 0;
    margin: 0;
    justify-content: center;
    ${media.laptop`  
    flex-flow: row wrap;
    `};
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
