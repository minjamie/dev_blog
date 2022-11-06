import styled from "styled-components";

const StoryLink = styled.a`
    display: inline-block;
    width: 33.33%;
    vertical-align: top;
    position: relative;
    cursor: pointer;
    text-decoration: none;
`;

const StoryItem = styled.li`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`;

const StoryName = styled.h5`
    font-size: 1.5rem;
    font-weight: 700;
    color: black;
`;

const StoryImageWrapper = styled.div``;

const StoryImage = styled.img<{ src: string }>`
    object-fit: contain;
    width: 300px;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    src: src;
`;

const StoryDesc = styled.div``;

const StoryTeam = styled.h1`
    color: #252e48;
    font-size: 1rem;
`;

export {
    StoryItem,
    StoryLink,
    StoryName,
    StoryImageWrapper,
    StoryImage,
    StoryDesc,
    StoryTeam,
};
