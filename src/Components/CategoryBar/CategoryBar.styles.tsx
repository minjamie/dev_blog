import styled from "styled-components";

const CategoryBarWrapper = styled.div`
    font-size: 1.3rem;
    padding: 0 170px;
`;

const CategoryBarContainer = styled.div`
    width: 100%;
    height: 15vh;
`;

const CategoryTitle = styled.h1`
    font-size: 35px;
    height: 50px;
`;

const CategoryHash = styled.a<{ active: boolean }>`
    text-decoration: none;
    display: inline-block;
    border: 1px solid #ddd;
    margin: 5px 3px;
    padding: 3px 6px;
    color: #222;
    font-weight: 300;
    font-size: medium;
    background-color: ${(props) => (props.active ? "#1f98f4;" : null)};
    border-color: ${(props) => (props.active ? "#1f98f4;" : null)};
    :hover {
        color: #fff;
        background-color: #1f98f4;
        border-color: #1f98f4;
    }
`;

const CategoryBarBottom = styled.div``;

export {
    CategoryBarWrapper,
    CategoryBarContainer,
    CategoryTitle,
    CategoryHash,
    CategoryBarBottom,
};
