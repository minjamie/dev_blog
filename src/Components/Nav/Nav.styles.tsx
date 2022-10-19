import styled from "styled-components";
import { media } from "Styles/media.styles";

const NavBar = styled.div`
    background: white;
    margin: 0 auto;
    max-width: 100vw;
    height: 80px;
    padding: 0;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.3rem;
    z-index: 2;
`;

const NavBarContainer = styled.div<{ shadow: boolean }>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    border-bottom: ${(props) =>
        props.shadow ? "1px solid rgba(0, 0, 0, 0.1)" : null};
    box-shadow: ${(props) =>
        props.shadow ? "0 2px 5px -1px rgba(0, 0, 0, 0.08);" : null};
    ${media.laptopS`  
        padding: 0 30px;
    `}
`;

const NavBarLogoLink = styled.a`
    display: flex;
    align-items: center;
    height: 35px;
    cursor: pointer;
    ${media.laptopS`  
        cursor: pointer;
        flex-grow: 0.9;
        display: inline-flex;
        order: 2;
    `}
`;

const NavBarLogo = styled.div<{ src: string }>`
    background-image: url(${(props) => props.src});
    background-size: cover;
    width: 200px;
    height: 50px;
`;

const NavBarMenuIcon = styled.div`
    display: flex;
    align-items: center;
    display: none;
    height: 30px;
    cursor: pointer;
    ${media.laptopS`  
        flex-grow: 0.9;
        display: inline-flex;
        font-size: 1.8rem;
        cursor: pointer;
        order: 1;
    `}
`;

const NavBarMenuList = styled.ul<{ active: boolean }>`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 60vw;
    justify-content: end;
    margin-right: 2rem;
    height: 60px;
    margin-right: 0;
    padding: 0;
    ${media.laptopS`  
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

const NavBarMenuItem = styled.li`
    height: 80px;
`;

const NavBarMenuLink = styled.a`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    ${media.laptopS`  
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
    `}
    &:hover {
        color: orange;
        border-bottom: 4px solid orange;
        transition: all 0.2s ease-out;
    }
`;

const NavBarMenuMobileLink = styled.a`
    display: none;
    ${media.laptopS`  
        display: block;
        text-align: center;
        margin: 2rem auto;
        border-radius: 4px;
        width: 80%;
        text-decoration: none;
        font-size: 1.5rem;
        background-color: transparent;
        color: #fff;
        padding: 14px 20px;
        border: 1px solid #fff;
        transition: all 0.3s ease-out;
    `}
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
    NavBarMenuMobileLink,
};
