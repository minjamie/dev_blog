import styled from "styled-components";

const PostArea = styled.section`
    padding: 4rem 0 4rem 0;
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
`;

export { PostArea, PostContainer, PostWrapper, PostList };
