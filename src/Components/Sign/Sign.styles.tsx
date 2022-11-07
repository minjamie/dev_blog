import styled from "styled-components";
import { media } from "Styles/media.styles";

const SignContainer = styled.div`
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

const SignTop = styled.div`
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
const SignImg = styled.img<{ src: string }>`
    width: auto;
    height: 150px;
    ${media.tablet`  
    height: 100%;
 `}
`;
const SignBottom = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
const SignTitle = styled.h1`
    font-size: 1.2rem;
    font-weight: 900;
    padding-bottom: 0.5rem;
`;
const SignLabel = styled.label`
    font-size: 0.9rem;
    font-weight: 600;
    color: #7a7b85;
`;
const SignInputWrapper = styled.form<{ isSignIn: boolean; isClick: boolean }>`
    display: flex;
    justify-content: center;
    padding: 1rem 0 2rem 0;
    order: ${(props: any) => (!props.isSignIn && props.isClick ? 1 : null)};
    padding: ${(props: any) =>
        !props.isSignIn && props.isClick ? "2.5rem 0 5rem 0" : null};
    ${media.tablet`  
    width: 100%;
 `}
`;
const SignEmailInput = styled.input`
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

const SignButton = styled.button`
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
const SignOAuthWrapper = styled.div<{ isSignIn: boolean; isClick: boolean }>`
    padding-top: ${(props: any) =>
        !props.isSignIn && props.isClick ? "1rem" : null};
    order: ${(props: any) => (!props.isSignIn && props.isClick ? 0 : null)};
    width: 100%;
`;
const SignOAuthContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const SignOAuthLabel = styled.h1`
    font-size: 0.9rem;
    font-weight: 600;
    color: #7a7b85;
    padding-bottom: 0.5rem;
`;
const SignHelpWrapper = styled.div<{ isSignIn: boolean; isClick: boolean }>`
    width: 100%;
    height: 150px;
    position: relative;
    order: ${(props: any) => (!props.isSignIn && props.isClick ? 2 : null)};

    ${media.tablet`  
    height: 100%;
 `}
`;

const SignHelpTitle = styled.h1`
    font-size: 0.8rem;
    color: black;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0;
`;

const SignUBcareHelpTitle = styled(SignHelpTitle)``;
const SignHelp = styled.span`
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

export {
    SignContainer,
    SignTop,
    SignImg,
    SignBottom,
    SignTitle,
    SignInputWrapper,
    SignEmailInput,
    SignButton,
    SignLabel,
    SignOAuthWrapper,
    SignOAuthContainer,
    SignOAuthLabel,
    SignHelpWrapper,
    SignHelpTitle,
    SignUBcareHelpTitle,
    SignHelp,
    LoginKakao,
    LoginGoogle,
    LoginGoogleTitle,
    LoginUBcareWrapper,
    LoginUBcare,
};
