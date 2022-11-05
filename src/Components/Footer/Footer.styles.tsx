import styled from "styled-components";
import { media } from "Styles/media.styles";

const FooterBar = styled.footer`
    background: white;
`;

const FooterBarContainer = styled.div`
    max-width: 1180px;
    width: 100%;
    height: auto;
    margin: 0 auto;
`;

const FooterBarWrapper = styled.div`
    padding: 1.5rem 0rem;
    ${media.laptop`
    padding: 1.5rem 1rem;
`}
`;

const FooterBarTopContent = styled.div`
    display: flex;
    justify-content: space-between;
    ${media.tablet` 
         justify-content: center;
flex-direction: column;
    `}
`;

const FooterBarLeft = styled.div`
    display: flex;
    flex-direction: column;
`;

const FooterBarMenuIcon = styled.div`
    cursor: pointer;
    white-space: nowrap;
    height: 30px;
    ${media.laptop`  
        margin-top: 1.5rem;
`}
`;
const FooterBarTitle = styled.h5`
    margin: 0;
    font-size: 1.2rem;
`;
const FooterBarMenuList = styled.ul`
    display: flex;
    list-style: none;
    height: 30px;
    margin: 0;
    padding: 0;
    margin-bottom: 1.5rem;
    ${media.laptop`  
`}

    ${media.mobile`  
`}
`;

const FooterBarMenuItem = styled.li`
    padding-right: 1rem;
    white-space: nowrap;
    font-size: var(--font-size-navTitle);
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
    FooterBarWrapper,
    FooterBarTopContent,
    FooterBarLeft,
    FooterBarMenuIcon,
    FooterBarMenuList,
    FooterBarTitle,
    FooterBarMenuItem,
    FooterBarMenuLink,
};
