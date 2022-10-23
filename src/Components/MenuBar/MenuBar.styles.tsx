import styled from "styled-components";

const MenuBarWrapper = styled.div`
    max-width: 100vw;
    height: 15vh;
    font-size: 1.3rem;
    z-index: 2;
    padding: 0 170px;
`;

const MenuBarContainer = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
`;

const MenuBarCategoryRight = styled.div`
    height: 35px;
    text-align: right;
`;

const MenuBarCategoryLeft = styled.div`
    height: 35px;
    text-align: left;
`;

const CategoryTitle = styled.h5`
    font-size: 35px;
    width: 200px;
    height: 50px;
`;

const Category = styled.h4``;

export {
    MenuBarWrapper,
    MenuBarContainer,
    MenuBarCategoryLeft,
    MenuBarCategoryRight,
    CategoryTitle,
    Category,
};
