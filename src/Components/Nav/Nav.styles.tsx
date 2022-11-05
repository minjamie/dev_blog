import styled from "styled-components";
import { media } from "Styles/media.styles";

const NavBar = styled.nav`
    width: 100%;
    background: #ffffff;
    position: fixed;
    top: 0;
    z-index: 2;
`;

const NavBarContainer = styled.div<{ shadow: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding: 1rem 0 1rem 0;
    border-bottom: ${(props) =>
        props.shadow ? "1px solid rgba(0, 0, 0, 0.1)" : null};
    box-shadow: ${(props) =>
        props.shadow ? "0 2px 5px -1px rgba(0, 0, 0, 0.08);" : null};
    ${media.laptop`
        justify-content: space-between;
  
        padding: 1rem 1.5rem 1rem 1.5rem;
   `}
`;

const NavBarLogoLink = styled.a`
    cursor: pointer;
    ${media.laptop`  
        order: 2;
    `}
`;

const NavBarLogo = styled.img<{ src: string }>`
    src: src;
    width: 100%;
    display: block;
    width: 210px;
    height: 50px;
`;

const NavBarMenuIcon = styled.div`
    display: flex;
    align-items: center;
    display: none;
    height: 30px;
    cursor: pointer;
    ${media.laptop`  
        display: inline-flex;
        font-size: 1.8rem;
        cursor: pointer;
        order: 1;
    `}
`;

const NavBarMenuList = styled.ul<{ active: boolean }>`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-left: 40rem;
    margin-right: 1rem;
    background-color: white;
    ${media.laptop`  
        width: 100%;
        flex-direction:column;
        max-width: 1300px;
        max-height: 250px;
        margin-left:0;
        margin-right: 0;
        position: absolute;
        top:75px;
        visibility: ${(props: any) => (props.active ? "visible" : "hidden")};
        opacity: ${(props: any) => (props.active ? 1 : 0)};
        transform: ${(props: any) =>
            props.active ? "translate3d(0, 0, 0)" : "translate3d(0, -1%, 0)"};
    transition: 
    ${(props: any) => (props.active ? "all 0.2s ease-out" : null)};
    `}
`;

const NavBarMenuItem = styled.li`
    white-space: nowrap;
    font-size: var(--font-size-navTitle);
    padding-left: 1rem;
    ${media.laptop`
        font-size: var(--font-size-subTitle);
            padding:0 1.5rem;
            &:last-child {
            padding-bottom: 1rem
            }
    `}
`;

const NavBarMenuLink = styled.a`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    ${media.laptop`  
    z-index: -1000;
        text-align: left;
        padding: 0.5rem 0;
        width: 100%;
    `}
    &:hover {
        color: #1f98f4;
        transition: all 0.2s ease-out;
    }
`;

export {
    NavBar,
    NavBarContainer,
    NavBarLogoLink,
    NavBarLogo,
    NavBarMenuIcon,
    NavBarMenuList,
    NavBarMenuItem,
    NavBarMenuLink,
};
