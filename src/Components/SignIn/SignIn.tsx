import "./Icon.css";
import React, { FC, useState } from "react";
import {
    SignInContainer,
    SignInEmailInput,
    SignInTitle,
    SignInLabel,
    SignInOAuthWrapper,
    SignInOAuthLabel,
    SignInTop,
    SignInBottom,
    SignInHelpWrapper,
    SignInHelpTitle,
    SignInHelp,
    SignInImg,
    SignInButton,
    SignInInputWrapper,
    LoginKakao,
    LoginGoogle,
    LoginUBcare,
    LoginGoogleTitle,
    SignInOAuthContainer,
    LoginUBcareWrapper,
} from "./SignIn.styles";
import symbolSrc from "Assets/Images/login-logo.jpg";
import ubcareLogo from "Assets/Images/ubcare_logo.jpg";
import kakaoLogo from "Assets/Images/kakao_login_large.png";
import { FcGoogle } from "react-icons/fc";
import { TfiClose } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { closeSignIn } from "Stores/signInSlice";

const SignIn: FC<any> = () => {
    const dispatch = useDispatch();
    const closeLogin = () => {
        dispatch(closeSignIn());
        document.body.style.overflow = "unset";
    };

    const [isSignIn, setSignIn] = useState(true);

    return (
        <SignInContainer>
            <SignInTop>
                <TfiClose onClick={closeLogin} className="close-Button" />
                <SignInImg src={symbolSrc} />
            </SignInTop>
            <SignInBottom>
                <SignInTitle>{isSignIn ? "로그인" : "회원가입"}</SignInTitle>
                <SignInLabel>
                    이메일로 {isSignIn ? "로그인" : "회원가입"}
                </SignInLabel>
                <SignInInputWrapper>
                    <SignInEmailInput
                        type="text"
                        placeholder="이메일을 입력하세요."
                    ></SignInEmailInput>
                    <SignInButton>
                        {isSignIn ? "로그인" : "회원가입"}
                    </SignInButton>
                </SignInInputWrapper>
                <SignInOAuthWrapper>
                    <SignInOAuthLabel>
                        소셜 계정으로 {isSignIn ? "로그인" : "회원가입"}
                    </SignInOAuthLabel>
                    <SignInOAuthContainer>
                        <LoginKakao src={kakaoLogo} />
                        <LoginGoogle>
                            <FcGoogle className="login-Google" />
                            <LoginGoogleTitle>Login</LoginGoogleTitle>
                        </LoginGoogle>
                        <LoginUBcareWrapper>
                            <LoginUBcare src={ubcareLogo} />
                        </LoginUBcareWrapper>
                    </SignInOAuthContainer>
                </SignInOAuthWrapper>
                <SignInHelpWrapper>
                    <SignInHelpTitle>
                        {isSignIn
                            ? "아직 회원이 아니신가요?"
                            : "계정이 이미 있으신가요?"}
                        &nbsp;
                        <SignInHelp onClick={() => setSignIn(!isSignIn)}>
                            {isSignIn ? "로그인" : "회원가입"}
                        </SignInHelp>
                    </SignInHelpTitle>
                </SignInHelpWrapper>
            </SignInBottom>
        </SignInContainer>
    );
};
export default SignIn;
