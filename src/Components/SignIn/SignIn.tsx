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
import { Tooltip } from "@mui/material";
import MultipleSelect from "Components/SelectBox/SelectBox";

const SignIn: FC<any> = () => {
    const dispatch = useDispatch();
    const closeLogin = () => {
        dispatch(closeSignIn());
        document.body.style.overflow = "unset";
    };

    const [isSignIn, setSignIn] = useState(true);
    const [isClick, setClick] = useState(false);
    console.log("isSignIn", isSignIn, "isClick", isClick);

    const handleSignButton = () => {
        setSignIn(!isSignIn);
        setClick(false);
    };
    const hasClick: React.MouseEventHandler<HTMLDivElement> = (e): void =>
        setClick(true);
    return (
        <SignInContainer>
            <SignInTop>
                <TfiClose onClick={closeLogin} className="close-Button" />
                <SignInImg src={symbolSrc} />
            </SignInTop>
            <SignInBottom>
                <SignInTitle>{isSignIn ? "로그인" : "회원가입"}</SignInTitle>

                <SignInLabel>
                    {isClick ? "유비웨어" : "이메일"}로{" "}
                    {isSignIn ? "로그인" : "회원가입"}
                </SignInLabel>
                <SignInInputWrapper isSignIn={isSignIn} isClick={isClick}>
                    <SignInEmailInput
                        type="text"
                        placeholder={
                            isClick && isSignIn
                                ? "유비웨어 계정을 입력하세요."
                                : isClick && !isSignIn
                                ? "사원 번호을 입력하세요."
                                : "이메일을 입력하세요."
                        }
                    ></SignInEmailInput>
                    <SignInButton>
                        {isSignIn ? "로그인" : !isClick ? "회원가입 " : "검색"}
                    </SignInButton>
                </SignInInputWrapper>
                <SignInOAuthWrapper isSignIn={isSignIn} isClick={isClick}>
                    {isClick && !isSignIn ? (
                        <MultipleSelect />
                    ) : (
                        <SignInOAuthLabel>
                            소셜 계정으로 {isSignIn ? "로그인" : "회원가입"}
                        </SignInOAuthLabel>
                    )}
                    {isClick && !isSignIn ? null : (
                        <SignInOAuthContainer>
                            <LoginKakao src={kakaoLogo} />
                            <LoginGoogle>
                                <FcGoogle className="login-Google" />
                                <LoginGoogleTitle>Login</LoginGoogleTitle>
                            </LoginGoogle>
                            <Tooltip
                                title="유비케어 소속이라면 클릭해주세요."
                                arrow
                            >
                                <LoginUBcareWrapper onClick={hasClick}>
                                    <LoginUBcare src={ubcareLogo} />
                                </LoginUBcareWrapper>
                            </Tooltip>
                        </SignInOAuthContainer>
                    )}
                </SignInOAuthWrapper>
                <SignInHelpWrapper isSignIn={isSignIn} isClick={isClick}>
                    <SignInHelpTitle>
                        {isClick && !isSignIn
                            ? "오류 발생시 관리자에게 문의바랍니다."
                            : !isClick && !isSignIn
                            ? "계정이 이미 있으신가요?"
                            : "아직 회원이 아니신가요?"}
                        &nbsp;
                        <SignInHelp onClick={handleSignButton}>
                            {isClick && !isSignIn
                                ? "문의하기"
                                : !isClick && !isSignIn
                                ? "로그인"
                                : "회원가입"}
                        </SignInHelp>
                    </SignInHelpTitle>
                </SignInHelpWrapper>
            </SignInBottom>
        </SignInContainer>
    );
};
export default SignIn;
