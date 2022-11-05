import styled from "styled-components";
import { media } from "Styles/media.styles";

const CulturePage = styled.main`
    padding: 4rem 0 4rem 0;
    background-color: #f4f6f8;
`;

const CultureContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`;
const CultureWrapper = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    ${media.laptop`
    flex-direction: column;
   `}
`;

const CultureSide = styled.div`
    display: flex;
    flex-direction: column;
    ${media.laptop`
        padding: 0 2rem;
    `}
`;
const CultureSideTopHr = styled.hr``;

const CultureSideBottomHr = styled.hr`
    ${media.laptop`
        display:none
    `}
`;

const CultureList = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 0 1.5rem;
    max-width: 950px;
    ${media.laptop`
     max-width: 1200px;
    padding: 0rem 1.5rem 4rem;
   `}
`;

export {
    CulturePage,
    CultureWrapper,
    CultureSide,
    CultureContainer,
    CultureList,
    CultureSideTopHr,
    CultureSideBottomHr,
};
