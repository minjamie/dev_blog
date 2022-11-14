import styled from "styled-components";
import { media } from "Styles/media.styles";

const SignUpPage = styled.div`
    padding: 0 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--main-background-color);
    ${media.tablet`  
 `};
`;

const SignUpWelcomeWrapper = styled.div`
    white-space: nowrap;
    padding-bottom: 1rem;
    ${media.tablet`  
 `}
`;

const SignUpWelcomeTitle = styled.h1`
    font-size: 3rem;
    font-weight: 900;
    padding-bottom: 0.5rem;
`;

const SignUpHelpTitle = styled.h3`
    font-size: 1.5rem;
    color: black;
`;

export {
    SignUpPage,
    SignUpWelcomeWrapper,
    SignUpWelcomeTitle,
    SignUpHelpTitle,
};
