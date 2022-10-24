import styled, { keyframes } from "styled-components";

const StoryItem = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    margin: 0 1rem;
    border-radius: 10px;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    @media only screen and (max-width: 1024px) {
        margin-bottom: 2rem;
    }
    height: 250px;
`;
const StoryLink = styled.a`
    display: flex;
    flex-flow: column;
    width: 65%;
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
    padding: 30px;
`;

const StoryTitle = styled.h1`
    position: relative;
    width: 100%;
    padding-top: 67%;
    overflow: hidden;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: black;
    box-sizing: border-box;
    font-size: 50px;
`;
const StoryImage = styled.img<{ src: string }>`
    left: 0;
    object-fit: contain;
    width: 30%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    src: src;
    padding: 30px 60px;
`;

const StoryDesc = styled.div`
    padding: 20px 30px 30px;
`;
const StoryText = styled.h5`
    color: #252e48;
    font-size: 18px;
    line-height: 24px;
`;

export { StoryItem, StoryLink, StoryTitle, StoryImage, StoryDesc, StoryText };
