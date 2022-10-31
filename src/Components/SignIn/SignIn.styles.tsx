import styled from "styled-components";

const SignInContainer = styled.div`
    position: fixed;
    width: 500px;
    height: 400px;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: white;
    border-radius: 1rem;
`;

const SignInTop = styled.div`
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    text-align: center;
    height: 150px;
    background: linear-gradient(to bottom, #faad93 5%, #fee2d6 45%);
`;
const SignInImg = styled.img<{ src: string }>`
    width: auto;
    height: 150px;
`;
const SignInBottom = styled.div`
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
`;
const SignInTitle = styled.h1`
    font-size: 1.2rem;
    font-weight: 900;
    padding-bottom: 0.5rem;
`;
const SignInLabel = styled.label`
    font-size: 0.9rem;
    font-weight: 600;
    color: #7a7b85;
`;
const SignInInputWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 0 2rem 0;
`;
const SignInEmailInput = styled.input`
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
`;

const SignInButton = styled.button`
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    height: 40px;
    width: 72px;
    background-color: #fbaf97;
    color: white;
    border: #fbaf97;
`;
const SignInOAuthWrapper = styled.div`
    width: 100%;
`;
const SignInOAuthContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const SignInOAuthLabel = styled.h1`
    font-size: 0.9rem;
    font-weight: 600;
    color: #7a7b85;
    padding-bottom: 0.5rem;
`;
const SignInHelpWrapper = styled.div`
    width: 100%;
    height: 150px;
    position: relative;
`;
const SignInHelpTitle = styled.h1`
    font-size: 0.8rem;
    color: black;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0;
`;
const SignInHelp = styled.span`
    color: #faad93;
    font-weight: 900;
`;
const LoginKakao = styled.img`
    width: 80px;
    height: 40px;
`;
const LoginGoogle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 40px;
    border: 1.5px solid #eaedef;
    border-radius: 0.3rem;
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
`;

const LoginUBcare = styled.img`
    width: 50px;
    height: 30px;
`;

export {
    SignInContainer,
    SignInTop,
    SignInImg,
    SignInBottom,
    SignInTitle,
    SignInInputWrapper,
    SignInEmailInput,
    SignInButton,
    SignInLabel,
    SignInOAuthWrapper,
    SignInOAuthContainer,
    SignInOAuthLabel,
    SignInHelpWrapper,
    SignInHelpTitle,
    SignInHelp,
    LoginKakao,
    LoginGoogle,
    LoginGoogleTitle,
    LoginUBcareWrapper,
    LoginUBcare,
};
