import styled, { keyframes } from "styled-components";

const TechPage = styled.main`
    height: 100vh;
    width: 100%;
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

export { TechList, TechPage };