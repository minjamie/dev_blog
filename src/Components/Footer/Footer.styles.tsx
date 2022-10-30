import styled from "styled-components";
import { media } from "Styles/media.styles";

const FooterBar = styled.footer`
    width: 100%;
    background: white;
    display: block;
`;

const FooterBarContainer = styled.div`
    flex-shrink: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    padding: 1.5rem 0;
    ${media.laptop`  
        padding: 2rem 4rem;

    `}
`;

const FooterBarTop = styled.div`
    display: flex;
    justify-content: center;
    ${media.laptop`  
    flex-direction: column;
    `}
`;
const FooterBarBottom = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    ${media.laptop`  
    justify-content: flex-start;
    `}
`;

const FooterBarMenuIcon = styled.div`
    cursor: pointer;
    ${media.laptop`  
    `}
`;
const FooterBarTitle = styled.h5`
    font-size: 1rem;
`;
const FooterBarMenuList = styled.ul`
    flex-shrink: 5;
    display: flex;
    list-style: none;
    justify-content: start;
    margin: 0;
    padding: 0;
    max-width: 800px;
    margin-right: 55rem;
    ${media.laptop`  
    margin-bottom: 1.5rem;
    `}
`;

const FooterBarMenuItem = styled.li`
    padding-right: 1rem;
    white-space: nowrap;
    font-size: var(--font-size-navTitle);
    ${media.laptop`  
    `}
`;

const FooterBarMenuLink = styled.a`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    ${media.laptop`  
    `}
    &:hover {
        color: #1f98f4;
        transition: all 0.2s ease-out;
    }
`;

export {
    FooterBar,
    FooterBarContainer,
    FooterBarTop,
    FooterBarBottom,
    FooterBarMenuIcon,
    FooterBarMenuList,
    FooterBarTitle,
    FooterBarMenuItem,
    FooterBarMenuLink,
};
