import styled from "styled-components";
import { media } from "Styles/media.styles";

const StoryPage = styled.main`
    height: 100%;
    width: 100%;
    padding: 4rem 0 4rem 0;
`;

const StoryList = styled.ul<{ cardLength: number }>`
    height: 100%;
    max-width: 1180px;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    ${media.laptop`
        padding: 0 1.5rem;
    `}
`;

export { StoryPage, StoryList };
