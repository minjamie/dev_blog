import styled from "styled-components";
import { media } from "Styles/media.styles";

const MenuBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 82px;
    background-color: #f4f6f8;
`;

const MenuBarContainer = styled.div`
    flex-shrink: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
    ${media.laptop`  
     padding-right: 5rem;
     padding-left: 5rem;
   `}
    ${media.mobile`  
     padding-right: 5.5rem;
     padding-left: 5.5rem; `}
`;

const MenuBarCategoryRight = styled.div`
    text-align: right;
    max-width: 70px;
`;
const MenuBarCategoryCenter = styled.ul`
    flex-shrink: 5;
    display: flex;
    list-style: none;
    max-width: 1000px;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 90px;
    ${media.laptop`  
        width: 100%;
        max-width: 1300px;
        max-height: 250px;
        margin-left:0;
        margin-right: 0;
        height: 90px;
    `}
`;

const MenuBarCategoryLeft = styled.div`
    text-align: left;
    max-width: 140px;
    ${media.laptop`  
    /* padding-left: 2.5rem */
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
