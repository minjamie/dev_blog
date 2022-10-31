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
        document.body.style.overflow = "unset";
        dispatch(closeSignIn());
    };
    return (
        <SignInContainer>
            <SignInTop>
                <TfiClose onClick={closeLogin} className="close-Button" />
                <SignInImg src={symbolSrc} />
            </SignInTop>
            <SignInBottom>
                <SignInTitle>로그인</SignInTitle>
                <SignInLabel>이메일로 로그인</SignInLabel>
                <SignInInputWrapper>
                    <SignInEmailInput
                        type="text"
                        placeholder="이메일을 입력하세요."
                    ></SignInEmailInput>
                    <SignInButton>로그인</SignInButton>
                </SignInInputWrapper>
                <SignInOAuthWrapper>
                    <SignInOAuthLabel>소셜 계정으로 로그인</SignInOAuthLabel>
                    <SignInOAuthContainer>
                        <LoginKakao src={kakaoLogo} />
                        <LoginGoogle>
                            <FcGoogle className="login-Google" />
                            <LoginGoogleTitle>Login</LoginGoogleTitle>
                        </LoginGoogle>
                        <LoginUBcare src={ubcareLogo} />
                    </SignInOAuthContainer>
                </SignInOAuthWrapper>
                <SignInHelpWrapper>
                    <SignInHelpTitle>
                        아직 회원이 아니신가요?
                        <SignInHelp>회원가입</SignInHelp>
                    </SignInHelpTitle>
                </SignInHelpWrapper>
            </SignInBottom>
        </SignInContainer>
    );
};
export default SignIn;
