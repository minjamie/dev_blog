import styled from "styled-components";

const MenuPage = styled.main`
    height: 100vh;
    width: 100%;
`;

const StoryList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 150px;
`;

const TechList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    column-gap: 30px;
    row-gap: 30px;
    grid-gap: 20px;
    margin: 0 auto;
    padding: 0 150px;
`;

const CultureList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 150px;
    margin-top: 40px;
`;

export { MenuPage, StoryList, TechList, CultureList };
