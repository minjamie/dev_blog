import styled from "styled-components";
import { media } from "Styles/media.styles";

const FooterBar = styled.footer`
    background: white;
    display: block;
`;

const FooterBarContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 1rem;
    ${media.tablet`  
    `}
`;

const FooterBarTop = styled.div`
    display: flex;
    align-items: center;
    ${media.laptop`  
 `}

    ${media.tablet`  
    flex-direction: column;
    `}
`;

const FooterBarBottom = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    ${media.tablet`  
    justify-content: flex-start;
    `}
`;

const FooterTopCenter = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    width: 860px;
    height: 30px;
    background-color: white;
    ${media.laptop`  
        width: 100%;
    padding: 0 27rem;
    `}
`;

const FooterBarMenuIcon = styled.div`
    width: auto;
    cursor: pointer;
    white-space: nowrap;
    height: 30px;
    ${media.laptop`
    `}
`;
const FooterBarTitle = styled.h5`
    margin: 0;
    font-size: 1.5rem;
`;
const FooterBarMenuList = styled.ul`
    display: flex;
    list-style: none;
    height: 30px;
    margin: 0;
    padding: 0;
    ${media.laptop`  
`}
    ${media.tablet`  
`}
${media.mobile`  
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
    FooterTopCenter,
    FooterBarBottom,
    FooterBarMenuIcon,
    FooterBarMenuList,
    FooterBarTitle,
    FooterBarMenuItem,
    FooterBarMenuLink,
};
