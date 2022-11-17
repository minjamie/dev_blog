import styled from "styled-components";
import { media } from "Styles/media.styles";

const HighlightCardLink = styled.article`
    width: 33.334%;
    text-align: center;
    ${media.laptop`  
        transition: ease all 1s;
        width: 50%;
        text-align:  center;
        &:nth-child(3){
        width: 100%;
        padding-left:1.2rem;
        transition: ease all 1s;
        display: flex;
        }
    `}
    ${media.mobile`  
            padding: 0 1.5rem;
            transition: ease all 1s;
            width: 100vw;
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            &:nth-child(3){
                width: 100vw;
                padding-left:1.5rem;
        }
    `}
`;
const HighlightCardImage = styled.img<{ cardIndex: number }>`
    border-radius: 20px;
    object-fit: contain;
    max-width: calc(95% - 10px);
    width: 100%;
    max-height: 217px;
    height: auto;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    &:hover {
        transition: ease all 0.5s;
        transform: scale(0.95);
    }
    ${media.laptop`  
        max-height: 257px;
        width: ${(props: any) => (props.cardIndex === 2 ? "45vw" : null)};
   `}
    ${media.mobile`  
        width: 100%;
        max-width: 150px;
        max-height: 150px;
    `}
`;
const HighlightCardContent = styled.div<{ cardIndex: number }>`
    margin: 2rem 0 4rem 0;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: left;
    ${media.laptop`  
        {
        justify-content: ${(props: any) =>
            props.cardIndex === 2 ? "center" : null}; 
        width: ${(props: any) => (props.cardIndex === 2 ? "50vw" : null)};
        padding-left: ${(props: any) =>
            props.cardIndex === 2 ? "3rem" : null};
        }
    `}
    ${media.mobile`  
         width: 80vw;
        padding-left:0rem;

    `}
`;
const HighlightCardCategory = styled.h1`
    font-size: var(--font-size-HighlightCard-Title);
    color: var(--font-color-subTitle);
    padding-bottom: 5px;
    margin: 0;
`;
const HighlightCardTitle = styled.h1`
    font-size: var(--font-size-subTitle);
    color: var(--font-color-title);
    margin: 0;
    padding-bottom: 5px;
`;
const HighlightCardInfo = styled.div`
    font-size: var(--font-size-HighlightCard-subTitle);
    color: var(--font-color-subTitle);
    margin: 0;
`;
const HighlightCardWriteDate = styled.span`
    font-size: 15px;
`;
const HighlightCardViewCount = styled.span`
    font-size: 15px;
`;

export {
    HighlightCardLink,
    HighlightCardImage,
    HighlightCardContent,
    HighlightCardCategory,
    HighlightCardTitle,
    HighlightCardInfo,
    HighlightCardWriteDate,
    HighlightCardViewCount,
};
