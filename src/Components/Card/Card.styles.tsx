import styled from "styled-components";
import { media } from "Styles/media.styles";

const CardLink = styled.article<{
    sectionCategory: string;
    cardLength: number;
}>`
    text-align: center;
    width: ${(props) =>
        props.sectionCategory == "feature" ? "25%" : "33.33333%"};
    ${media.laptop`  
        transition: ease all 1s;
        width: 50%;
        &:last-child{
            width: ${(props: any) =>
                props.sectionCategory === "post" && props.cardLength % 2 == 1
                    ? "100%"
                    : "50%"};
            display: ${(props: any) =>
                props.sectionCategory === "post" && props.cardLength % 2 == 1
                    ? "flex"
                    : null};
            flex-direction: ${(props: any) =>
                props.sectionCategory === "post" && props.cardLength % 2 == 1
                    ? "column"
                    : null};
            padding: 
            ${(props: any) =>
                props.sectionCategory === "post" && props.cardLength % 2 == 1
                    ? "1rem"
                    : "0rem"};
        }
    `}
    ${media.mobile`  
    padding: 0 1.5rem;
            transition: ease all 1s;
            width: 100vw;
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            &:last-child{
                width: 100vw;
                display: flex;
                flex-direction: row-reverse;
                justify-content: center;        
                padding-left: 1.5rem;
                padding-right: 1.5rem;
        }
    `}
`;
const CardImage = styled.img<{
    sectionCategory: string;
    index: number;
    cardLength: number;
}>`
    background-color: white !important;
    border-radius: 20px;
    object-fit: contain;
    max-width: calc(95% - 10px);
    height: 217px;
    width: ${(props) => (props.sectionCategory == "feature" ? "90%" : "100%")};
    max-height: ${(props) =>
        props.sectionCategory == "feature" ? "180px" : "217px"};
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    &:hover {
        transition: ease all 0.5s;
        transform: scale(0.95);
    }
    ${media.laptop`  
        max-height: 257px;
        width: ${(props: any) =>
            props.sectionCategory === "post" &&
            props.index === props.cardLength - 1 &&
            props.cardLength % 2 == 1
                ? "47.5%"
                : "100%"}; 
    `}
    ${media.mobile`  
    max-width: 150px;
    max-height: 150px;
    `}
`;
const CardContent = styled.div<{
    sectionCategory: string;
    index: number;
    cardLength: number;
}>`
    margin: 2rem 0 4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: left;
    padding-left: 1rem;
    ${media.laptop`  
        {
            justify-content: ${(props: any) =>
                props.sectionCategory === "highlight" && props.cardIndex === 2
                    ? "center"
                    : "start"}; 
            width: ${(props: any) =>
                (props.sectionCategory === "highlight" &&
                    props.cardLength === 2) ||
                (props.cardIndex === props.cardLength - 1 &&
                    props.sectionCategory === "post" &&
                    props.cardLength % 2 == 1)
                    ? "47.5%"
                    : "100%"};
            margin: ${(props: any) =>
                props.sectionCategory === "highlight" && props.cardIndex === 2
                    ? "0"
                    : "2rem 0 4rem 0"}; 
            padding-left: 
            ${(props: any) =>
                props.sectionCategory === "post" &&
                props.cardLength % 2 == 1 &&
                props.cardIndex === props.cardLength - 1
                    ? "0rem"
                    : "1rem"};
    `}
    ${media.mobile`  
        padding-left:0rem;
        width:  100%;
    `}
`;
const CardCategory = styled.h1`
    font-size: var(--font-size-card-Title);
    color: var(--font-color-subTitle);
    padding-bottom: 5px;
    margin: 0;
`;
const CardTitle = styled.h1<{ sectionCategory: string }>`
    color: ${(props) =>
        props.sectionCategory === "feature" ? "white" : "black"};
    font-size: var(--font-size-subTitle);
    margin: 0;
    padding-bottom: 5px;
`;
const CardInfo = styled.div`
    font-size: var(--font-size-card-subTitle);
    color: var(--font-color-subTitle);
    margin: 0;
`;
const CardWriteDate = styled.span`
    font-size: 15px;
`;
const CardViewCount = styled.span`
    font-size: 15px;
`;

export {
    CardLink,
    CardImage,
    CardContent,
    CardCategory,
    CardTitle,
    CardInfo,
    CardWriteDate,
    CardViewCount,
};
