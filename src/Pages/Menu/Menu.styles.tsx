import styled from "styled-components";

const MenuPage = styled.main``;

const StoryList = styled.div``;

const TechList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    column-gap: 30px;
    row-gap: 30px;
    grid-gap: 20px;
`;

const CultureList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 150px;
    margin-top: 40px;
`;

export { MenuPage, StoryList, TechList, CultureList };
