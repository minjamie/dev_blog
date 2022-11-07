import styled from "styled-components";
import { media } from "Styles/media.styles";

const StoryLink = styled.a<{ cardLength: number }>`
    display: inline-block;
    width: 33.33%;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    padding-bottom: 4rem;

    &:nth-child(6n + 4) {
        background-color: white;
    }
    &:nth-child(6n + 5) {
        background-color: white;
    }
    &:nth-child(6n + 6) {
        background-color: white;
    }
    ${media.laptop`  
        transition: ease all 1s;
        width: 50%;
        &:nth-child(6n + 4) {
        background-color: #f4f6f8;
        }
        &:nth-child(6n + 5) {
            background-color: #f4f6f8;
        }
        &:nth-child(6n + 6) {
            background-color: #f4f6f8;
        }
        &:nth-child(4n + 3) {
            background-color: white;
        }
        &:nth-child(4n + 4) {
            background-color: white;
        }
        &:last-child{
            display: ${(props: any) =>
                props.cardLength % 2 == 1 ? "flex" : null};
            flex-direction: ${(props: any) =>
                props.cardLength % 2 == 1 ? "column" : null};
        }
        ${media.mobile` 
        transition: ease all 0.5s;
padding-bottom: 0;
 border-top-left-radius: 3rem;
    border-top-right-radius:3rem; 
    background-color: white;
    justify-content: center;
        &:nth-child(6n + 4) {
        background-color: white;
        }
        &:nth-child(6n + 5) {
            background-color: white
        }
        &:nth-child(6n + 6) {
            background-color: white
        } 
            width: 100vw;
            margin-bottom: 2.5rem;
        :hover {
        border-bottom: 2px solid #fbaf97;
    }
`}
`}
`;

const StoryInterviewMark = styled.strong`
    color: #fbaf97;
    padding: 0.2rem 0.8rem;
    margin: 0;
    border: 1px solid #fbaf97;
    border-radius: 2rem;
    font-size: 0.8rem;
`;

const StoryNotInterviewMark = styled(StoryInterviewMark)`
    opacity: 0;
`;

const StoryItem = styled.li`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    ${media.mobile` 
    justify-content: center;
    flex-direction: row;
`}
`;

const StoryName = styled.h5`
    font-size: 1.5rem;
    font-weight: 700;
    color: black;
`;

const StoryImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #ebebeb;
    transition: ease all 0.5s;
    :hover {
        border-bottom: 2px solid #fbaf97;
    }
    ${media.mobile`  
    border-bottom: none;
:hover {
        border-bottom:none;
    }
    `}
`;

const StoryImage = styled.img<{ src: string }>`
    max-width: calc(100% - 10px);
    object-fit: contain;
    width: 410px;
    height: 100%;
    src: src;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    :hover {
        filter: none;
        -webkit-filter: grayscale(0);
    }
    ${media.mobile`  
    max-width: 200px;
    max-height: 250px;
    `}
`;

const StoryDesc = styled.div`
    text-align: left;
    padding: 0.5rem 1rem;
`;

const StoryTeam = styled.h1`
    color: #252e48;
    font-size: 1rem;
`;

export {
    StoryItem,
    StoryInterviewMark,
    StoryNotInterviewMark,
    StoryLink,
    StoryName,
    StoryImageWrapper,
    StoryImage,
    StoryDesc,
    StoryTeam,
};
