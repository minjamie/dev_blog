import styled from "styled-components";
import { media } from "Styles/media.styles";

const PostArea = styled.section`
    padding: 4rem 0;
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
const PostList = styled.div<{ cardLength: number }>`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: ${(props: any) =>
        props.cardLength % 3 == 0 ? "center" : "start"};
    ${media.laptop`  
        flex-flow: row wrap;
    `}
`;

export { PostArea, PostContainer, PostWrapper, PostList };
