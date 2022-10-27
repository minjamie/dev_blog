import styled from "styled-components";
import { media } from "Styles/media.styles";

const PostArea = styled.section`
    padding: 4rem;
    background-color: #f4f6f8;
`;

const PostContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`;

const PostWrapper = styled.div`
    width: 100%;
    height: auto;
`;
const PostList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    ${media.laptop`  
        flex-flow: row wrap;
        justify-content: start ;
    `}
`;

export { PostArea, PostContainer, PostWrapper, PostList };
