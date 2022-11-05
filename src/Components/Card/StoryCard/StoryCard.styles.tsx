import styled from "styled-components";

const StoryItem = styled.li`
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
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
    object-fit: contain;
    width: 300px;
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`;

export { StoryItem, StoryLink, StoryTitle, StoryImage, StoryDesc, StoryText };
