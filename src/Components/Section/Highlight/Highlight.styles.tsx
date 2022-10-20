import styled from "styled-components";

const HighlightArea = styled.section`
    padding: 4rem;
    background: #fff;
    @media only screen and (min-width: 1024px) {
        display: flex;
    }
`;

const HighlightContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;
`;

const HighlightWrapper = styled.div`
    position: relative;
    margin: 50px 0 45px;
`;
const HighlightList = styled.div`
    margin-bottom: 24px;
    display: flex;
    flex: 1;
    margin: 0 1rem;
    border-radius: 10px;
    padding-bottom: 50px;
`;

export {
    HighlightArea,
    HighlightArea,
    HighlightContainer,
    HighlightWrapper,
    HighlightList,
};
