import styled from "styled-components";
import { media } from "Styles/media.styles";

const SignUpUBcareContainer = styled.div`
    position: fixed;
    width: 500px;
    height: 400px;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: white;
    border-radius: 1rem;
    ${media.tablet`  
    border-radius: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
 `}
`;

const SignUpUBcareTop = styled.div`
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    text-align: center;
    height: 150px;
    background: linear-gradient(to bottom, #faad93 5%, #fee2d6 45%);
    ${media.tablet`  
    border-radius: 0;
    height: 0;
 `}
`;
const SignUpUBcareImg = styled.img<{ src: string }>`
    width: auto;
    height: 150px;
    ${media.tablet`  
    height: 100%;
 `}
`;
const SignUpUBcareBottom = styled.div`
    width: 100%;
    background-color: #f4f6f8;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    height: 350px;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 1rem 4rem;
    ${media.tablet`  
    height: 100%;
    border-radius: 0;
    padding: 2rem 2rem;
 
`}
`;
const SignUpUBcareTitle = styled.h1`
    font-size: 1.2rem;
    font-weight: 900;
    padding-bottom: 0.5rem;
`;
const SignUpUBcareLabel = styled.label`
    font-size: 0.9rem;
    font-weight: 600;
    color: #7a7b85;
`;
const SignUpUBcareInputWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 0 2rem 0;
    ${media.tablet`  
    width: 100%;
 `}
`;
const SignUpUBcareEmailInput = styled.input`
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    height: 40px;
    width: 300px;
    outline: 1px;
    border: 1.4px solid #eaedef;
    text-indent: 10px;
    ::placeholder {
        color: #7a7b85;
        font-size: 0.8rem;
    }
    ${media.tablet`  
    width: 100%;
 `}
`;

const SignUpUBcareButton = styled.button`
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    height: 40px;
    width: 72px;
    background-color: #fbaf97;
    color: white;
    border: #fbaf97;
    &:hover {
        opacity: 0.5;
    }
`;
const SignUpUBcareOAuthWrapper = styled.div`
    width: 100%;
`;
const SignUpUBcareOAuthContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const SignUpUBcareOAuthLabel = styled.h1`
    font-size: 0.9rem;
    font-weight: 600;
    color: #7a7b85;
    padding-bottom: 0.5rem;
`;
const SignUpUBcareHelpWrapper = styled.div`
    width: 100%;
    height: 150px;
    position: relative;

    ${media.tablet`  
    height: 100%;
 `}
`;
const SignUpUBcareHelpTitle = styled.h1`
    font-size: 0.8rem;
    color: black;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0;
`;
const SignUpUBcareHelp = styled.span`
    color: #faad93;
    font-weight: 900;
    &:hover {
        text-decoration: underline #faad93 1px;
        cursor: pointer;
    }
`;

const LoginKakao = styled.img`
    width: 80px;
    height: 40px;
    cursor: pointer;
`;
const LoginGoogle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 40px;
    border: 1.5px solid #eaedef;
    border-radius: 0.3rem;
    cursor: pointer;
`;

const LoginGoogleTitle = styled.h4`
    font-size: 0.85rem;
    font-weight: 500;
    margin: 0;
    padding-left: 0.25rem;
`;

const LoginUBcareWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 40px;
    border: 1.5px solid #df8353;
    border-radius: 0.3rem;
    cursor: pointer;
`;

const LoginUBcare = styled.img`
    width: 50px;
    height: 30px;
    cursor: pointer;
`;

const arrowBox = styled.div`
    position: relative;
    background: #88b7d5;
    border: 4px solid #c2e1f5;

    :after {
        border-color: rgba(136, 183, 213, 0);
        border-top-color: #88b7d5;
        border-width: 30px;
        margin-left: -30px;
    }
    :before {
        border-color: rgba(194, 225, 245, 0);
        border-top-color: #c2e1f5;
        border-width: 36px;
        margin-left: -36px;
    }
`;

export {
    SignUpUBcareContainer,
    SignUpUBcareTop,
    SignUpUBcareImg,
    SignUpUBcareBottom,
    SignUpUBcareTitle,
    SignUpUBcareInputWrapper,
    SignUpUBcareEmailInput,
    SignUpUBcareButton,
    SignUpUBcareLabel,
    SignUpUBcareOAuthWrapper,
    SignUpUBcareOAuthContainer,
    SignUpUBcareOAuthLabel,
    SignUpUBcareHelpWrapper,
    SignUpUBcareHelpTitle,
    SignUpUBcareHelp,
    LoginKakao,
    LoginGoogle,
    LoginGoogleTitle,
    LoginUBcareWrapper,
    LoginUBcare,
    arrowBox,
};
