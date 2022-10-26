import styled from "styled-components";

const CardItem = styled.li`
    margin-bottom: 24px;
    display: flex;
    flex: 1;
    margin: 0 1rem;
    border-radius: 10px;
    @media only screen and (max-width: 1024px) {
        margin-bottom: 2rem;
    }
`;
const CardLink = styled.a`
    display: flex;
    flex-flow: column;
    width: 100%;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
`;

const CardFigure = styled.figure<{ title: string }>`
    position: relative;
    width: 100%;
    padding-top: 67%;
    overflow: hidden;
    ::after {
        content: attr(title);
        position: absolute;
        bottom: 0;
        margin-left: 10px;
        padding: 6px 8px;
        max-width: calc((100%) - 60px);
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        background-color: #1f98f4;
        box-sizing: border-box;
    }
`;
const CardImage = styled.img<{ src: string }>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    object-fit: contain;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    transition: all 0.2s linear;
    src: src;
    :hover {
        transform: scale(1.1);
    }
`;

const CardDesc = styled.div`
    padding: 20px 30px 30px;
`;
const CardText = styled.h5`
    color: #252e48;
    font-size: 18px;
    line-height: 24px;
    display: inline; /* or in-line block according to your requirement */
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: brek-word;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`;

export { CardItem, CardLink, CardFigure, CardImage, CardDesc, CardText };
