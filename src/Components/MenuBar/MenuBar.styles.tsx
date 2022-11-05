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
        padding-right: 1.5rem;
        padding-left: 1.5rem;
    `}
    ${media.mobile`
        flex-direction:column;
        align-items: start;
    `}
`;

const MenuBarCategoryRight = styled.div`
    text-align: right;
    max-width: 70px;
    ${media.mobile`
      padding-top: 1rem;
        display:flex;
    `}
`;
const MenuBarCategoryCenter = styled.ul`
    flex-shrink: 5;
    display: flex;
    list-style: none;
    max-width: 990px;
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
    ${media.mobile`
        display:none
    `}
`;

const MenuBarCategoryLeft = styled.div`
    text-align: left;
    max-width: 140px;
`;

const CategoryTitle = styled.h5`
    font-size: 35px;
    ${media.mobile`
        display:flex;
    `}
`;

const CategoryMeta = styled.h5`
    font-size: 35px;
    ${media.mobile`
        font-size: 25px;
        color: var(--font-color-subTitle);
    `}
`;

const Category = styled.h4`
    color: var(--font-color-subTitle);
    ${media.mobile`
    font-size: 25px;
    `}
`;

export {
    MenuBarWrapper,
    MenuBarContainer,
    MenuBarCategoryLeft,
    MenuBarCategoryCenter,
    MenuBarCategoryRight,
    CategoryTitle,
    CategoryMeta,
    Category,
};
