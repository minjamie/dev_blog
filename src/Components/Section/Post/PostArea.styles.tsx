import styled, { keyframes } from "styled-components";

const PostArea = styled.section`
    padding: 4rem;
    background: #fff;
    @media only screen and (min-width: 1024px) {
        display: flex;
    }
`;

const PostContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;
`;

const PostWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 50px 0 100px;
`;
const PostList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    column-gap: 30px;
    row-gap: 30px;
    grid-gap: 20px;
    margin: 0 auto;
`;

export { PostArea, PostContainer, PostWrapper, PostList };
