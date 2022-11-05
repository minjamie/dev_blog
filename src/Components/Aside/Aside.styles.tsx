import styled from "styled-components";
import { media } from "Styles/media.styles";

const CultureAside = styled.aside`
    ${media.laptop`
    padding: 2rem 0;
    `}
`;

const CultureAsideWrapper = styled.div`
    ${media.laptop`
    display: flex;
    justify-content: space-between;
    `}
`;
const CultureAsideContainer = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 0.5rem;
`;

const CultureAsideTitle = styled.h3`
    font-size: 1.3rem;
    font-weight: bolder;
    margin: 0;
    padding-bottom: 0.5rem;
`;

const CultureAsideNumber = styled.span`
    font-size: 1.5rem;
    padding-right: 0.5rem;
`;

const CultureAsideImage = styled.img<{ src: string }>`
    src: src;
    height: 100%;
    background-color: white;
    object-fit: contain;
    width: 35px;
    height: 35px;
    border-radius: 50%;
`;

const CultureAsideName = styled.h5`
    font-size: 1.2rem;
    margin: 0;
    height: 100%;
    padding-left: 0.5rem;
    background-color: aliceblue;
`;
export {
    CultureAside,
    CultureAsideWrapper,
    CultureAsideContainer,
    CultureAsideTitle,
    CultureAsideNumber,
    CultureAsideImage,
    CultureAsideName,
};
