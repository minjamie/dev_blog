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
    position: relative;
    margin: 50px 0 45px;
`;
const PostList = styled.div`
    margin-bottom: 24px;
    display: flex;
    flex: 1;
    margin: 0 1rem;
    border-radius: 10px;
    padding-bottom: 50px;
`;

export { PostArea, PostContainer, PostWrapper, PostList };
