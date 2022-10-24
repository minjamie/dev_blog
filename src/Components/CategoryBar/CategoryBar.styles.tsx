import styled from "styled-components";

const CategoryBarWrapper = styled.div`
    max-width: 100vw;
    height: 15vh;
    font-size: 1.3rem;
    z-index: 2;
    padding: 0 170px;
`;

const CategoryBarContainer = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const CategoryTitle = styled.h5`
    font-size: 35px;
    width: 200px;
    height: 50px;
`;

const CategoryHash = styled.a<{ active: boolean }>`
    text-decoration: none;
    display: inline-block;
    border: 1px solid #ddd;
    margin: 5px 10px;
    padding: 3px 6px;
    color: #222;
    font-weight: 300;
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
