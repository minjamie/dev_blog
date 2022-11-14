import { Tooltip } from "@mui/material";
import githubLogo from "Assets/Images/github_logo.png";
import symbolSrc from "Assets/Images/login-logo.jpg";
import ubcareLogo from "Assets/Images/ubcare_logo.jpg";
import MultipleSelect from "Components/SelectBox/SelectBox";
import React, { FC, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiCheck } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { closeSign } from "Stores/signInSlice";
import "./Icon.css";
import {
    LoginGoogle,
    LoginGoogleTitle,
    LoginGithub,
    LoginUBcare,
    LoginUBcareWrapper,
    SignBottom,
    SignButton,
    SignContainer,
    SignEmailInput,
    SignEmailLink,
    SignEmailLinkTitle,
    SignHelp,
    SignHelpTitle,
    SignHelpWrapper,
    SignImg,
    SignInputWrapper,
    SignLabel,
    SignOAuthContainer,
    SignOAuthLabel,
    SignOAuthWrapper,
    SignTitle,
    SignTop,
} from "./Sign.styles";

const Sign: FC<any> = () => {
    const dispatch = useDispatch();
    const closeLogin = () => {
        dispatch(closeSign());
        document.body.style.overflow = "unset";
    };

    const [isSignIn, setSign] = useState(true);
    const [isClick, setClick] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState("");

    const handleSignButton = () => {
        setSign(!isSignIn);
        setClick(false);
    };
    const hasClick: React.MouseEventHandler<HTMLDivElement> = (e): void =>
        setClick(true);
    const database = ["minjae2246@ubcare.co.kr"];

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    };

    const handleSubmit: React.MouseEventHandler<HTMLFormElement> = (
        event: React.FormEvent
    ): void => {
        event.preventDefault();
        const userData = database.some((email) => email == value);
        if (userData) {
            setSubmitting(true);
        } else {
            setSubmitting(false);
        }
    };

    return (
        <SignContainer>
            <SignTop>
                <TfiClose onClick={closeLogin} className="close-Button" />
                <SignImg src={symbolSrc} />
            </SignTop>
            <SignBottom>
                <SignTitle>{isSignIn ? "로그인" : "회원가입"}</SignTitle>
                <SignLabel>
                    {isClick ? "유비웨어" : "이메일"}로{" "}
                    {isSignIn ? "로그인" : "회원가입"}
                </SignLabel>
                <SignInputWrapper
                    onSubmit={handleSubmit}
                    isSignIn={isSignIn}
                    isClick={isClick}
                >
                    {submitting ? (
                        <SignEmailLink>
                            <FiCheck className="sign-Check" />
                            <SignEmailLinkTitle>
                                로그인 링크가 이메일로 전송되었습니다.
                            </SignEmailLinkTitle>
                        </SignEmailLink>
                    ) : (
                        <>
                            <SignEmailInput
                                type="email"
                                placeholder={
                                    isClick && isSignIn
                                        ? "유비웨어 계정을 입력하세요."
                                        : isClick && !isSignIn
                                        ? "사원 번호을 입력하세요."
                                        : "이메일을 입력하세요."
                                }
                                value={value}
                                onChange={handleInput}
                            ></SignEmailInput>
                            <SignButton type="submit">
                                {isSignIn
                                    ? "로그인"
                                    : !isClick
                                    ? "회원가입 "
                                    : "검색"}
                            </SignButton>
                        </>
                    )}
                </SignInputWrapper>
                <SignOAuthWrapper isSignIn={isSignIn} isClick={isClick}>
                    {isClick && !isSignIn ? (
                        <MultipleSelect />
                    ) : (
                        <SignOAuthLabel>
                            소셜 계정으로 {isSignIn ? "로그인" : "회원가입"}
                        </SignOAuthLabel>
                    )}
                    {isClick && !isSignIn ? null : (
                        <SignOAuthContainer>
                            <LoginGithub src={githubLogo} />
                            <LoginGoogle>
                                <FcGoogle className="login-Google" />
                                <LoginGoogleTitle>Google</LoginGoogleTitle>
                            </LoginGoogle>
                            <Tooltip
                                title="유비케어 소속이라면 클릭해주세요."
                                arrow
                            >
                                <LoginUBcareWrapper onClick={hasClick}>
                                    <LoginUBcare src={ubcareLogo} />
                                </LoginUBcareWrapper>
                            </Tooltip>
                        </SignOAuthContainer>
                    )}
                </SignOAuthWrapper>
                <SignHelpWrapper isSignIn={isSignIn} isClick={isClick}>
                    <SignHelpTitle>
                        {isClick && !isSignIn
                            ? "오류 발생시 관리자에게 문의바랍니다."
                            : !isClick && !isSignIn
                            ? "계정이 이미 있으신가요?"
                            : "아직 회원이 아니신가요?"}
                        &nbsp;
                        <SignHelp onClick={handleSignButton}>
                            {isClick && !isSignIn
                                ? "문의하기"
                                : !isClick && !isSignIn
                                ? "로그인"
                                : "회원가입"}
                        </SignHelp>
                    </SignHelpTitle>
                </SignHelpWrapper>
            </SignBottom>
        </SignContainer>
    );
};
export default Sign;
