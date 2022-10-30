import React, { useState } from "react";
import {
    SignInContainer,
    SignInEmailInput,
    SignInTitle,
    SignInLabel,
    SignInOAuthWrapper,
    SignInOAuthTitle,
    SignInLeft,
    SignInRight,
    SignInHelpWrapper,
    SignInHelpTitle,
    SignInHelp,
    SignInImg,
    SignInWelcome,
} from "./SignIn.styles";
import symbolSrc from "Assets/Images/symbol.png";

export default function SignIn() {
    const [isShow, setShow] = useState(false);
    return (
        <SignInContainer>
            <SignInLeft>
                <SignInImg src={symbolSrc} />
                <SignInWelcome>환영합니다!</SignInWelcome>
            </SignInLeft>
            <SignInRight>
                <SignInTitle>로그인</SignInTitle>
                <SignInLabel>이메일로 로그인</SignInLabel>
                <SignInEmailInput
                    type="text"
                    placeholder="이메일을 입력하세요."
                >
                    이메일
                </SignInEmailInput>
                <SignInOAuthWrapper>
                    <SignInOAuthTitle>소셜 계정으로 로그인</SignInOAuthTitle>
                    구글 / 카카오 / 유비웨어
                </SignInOAuthWrapper>
                <SignInHelpWrapper>
                    <SignInHelpTitle>
                        아직 회원이 아니신가요?
                        <SignInHelp>회원가입</SignInHelp>
                    </SignInHelpTitle>
                </SignInHelpWrapper>
            </SignInRight>
        </SignInContainer>
    );
}
