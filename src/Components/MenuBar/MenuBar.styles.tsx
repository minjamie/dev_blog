import styled from "styled-components";
import { media } from "Styles/media.styles";

const MenuBarWrapper = styled.div`
    height: 15vh;
    font-size: 1.3rem;
    z-index: 2;
`;

const MenuBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-justify-content: center;
    ${media.laptop`  
        justify-content: space-between;
        padding: 10px 50px;
    `}
`;

const MenuBarCategoryRight = styled.div`
    text-align: right;
    max-width: 140px;
    width: 100%;
    ${media.laptop`  
    `}
`;
const MenuBarCategoryCenter = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, auto);
    width: 38vw;
    margin: 0;
    padding: 0;
`;

const MenuBarCategoryLeft = styled.div`
    text-align: left;
    max-width: 140px;
    ${media.laptop`  
    `}
`;

const CategoryTitle = styled.h5`
    font-size: 35px;
`;

const Category = styled.h4``;

export {
    MenuBarWrapper,
    MenuBarContainer,
    MenuBarCategoryLeft,
    MenuBarCategoryCenter,
    MenuBarCategoryRight,
    CategoryTitle,
    Category,
};
