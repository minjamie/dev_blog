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
    padding: 15px 0px;
    border-bottom: ${(props) =>
        props.shadow ? "1px solid rgba(0, 0, 0, 0.1)" : null};
    box-shadow: ${(props) =>
        props.shadow ? "0 2px 5px -1px rgba(0, 0, 0, 0.08);" : null};
    ${media.laptop`  
        padding: 15px 50px;
    `}
`;

const NavBarLogoLink = styled.a`
    cursor: pointer;
    flex-basis: 200px;
    flex-shrink: 0;
    ${media.laptop`  
        flex-grow: 0.9;
        display: inline-flex;
        order: 2;
    `}
`;

const NavBarLogo = styled.img<{ src: string }>`
    src: src;
    width: 100%;
    display: block;
    height: auto;
    max-width: 200px;
`;

const NavBarMenuIcon = styled.div`
    display: flex;
    align-items: center;
    display: none;
    height: 30px;
    cursor: pointer;
    ${media.laptop`  
        flex-grow: 0.9;
        display: inline-flex;
        font-size: 1.8rem;
        cursor: pointer;
        order: 1;
    `}
`;

const NavBarMenuList = styled.ul<{ active: boolean }>`
    flex-shrink: 4;
    display: grid;
    flex-shrink: 1;
    grid-template-columns: repeat(4, auto);
    grid-gap: 1.5rem;
    list-style: none;
    width: 55vw;
    justify-content: end;
    margin: 0;
    padding: 0;
    margin-right: 1.5rem;
    ${media.laptop`  
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: -100%;
        opacity: 1;
        transition: all 0.5s ease;
        background:${(props: any) => (props.active ? "#242222" : null)};
        left: ${(props: any) => (props.active ? 0 : null)};
        opacity: ${(props: any) => (props.active ? 1 : null)};
        transition: ${(props: any) => (props.active ? "all 0.5s ease;" : null)};
        z-index: ${(props: any) => (props.active ? 1 : null)};
    `}
`;

const NavBarMenuItem = styled.li``;

const NavBarMenuLink = styled.a`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    ${media.laptop`  
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
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
