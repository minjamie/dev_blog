import { Tooltip } from "@mui/material";
import kakaoLogo from "Assets/Images/kakao_login_large.png";
import symbolSrc from "Assets/Images/login-logo.jpg";
import ubcareLogo from "Assets/Images/ubcare_logo.jpg";
import MultipleSelect from "Components/SelectBox/SelectBox";
import React, { FC, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { TfiClose } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { closeSign } from "Stores/signInSlice";
import "./Icon.css";
import {
    LoginGoogle,
    LoginGoogleTitle,
    LoginKakao,
    LoginUBcare,
    LoginUBcareWrapper,
    SignBottom,
    SignButton,
    SignContainer,
    SignEmailInput,
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
    const database = [
        {
            username: "김민재",
            email: "minjae2246@ubcare.co.kr",
        },
    ];
    const errors = {
        invalid: "invalid email",
        notFound: "invalid email",
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    };


    const handleSubmit: React.MouseEventHandler<HTMLFormElement> = (
        event: React.FormEvent
    ): void => {
        setSubmitting(true);
        let isValidate = validate(values);
        setErrors(validate(values));
        if (Object.values(isValidate).length === 0) {
            alert("로그인 성공");
            // do something when form submit
        }
        event.preventDefault();
        // const userData = database.find(
        //     // (user) => user.email === event.target.value
        // );
        // if (userData) {
        //     if (userData.email !== invalid.value) {
        //         // Invalid password
        //         setErrorMessages({ name: "uemail", message: errors.invalid });
        //     } else {
        //         setIsSubmitted(true);
        //     }
        // } else {
        //     setErrorMessages({ name: "notFound", message: errors.notFound });
        // }
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
                        onChange={handleChange}
                    ></SignEmailInput>
                    <SignButton type="submit">
                        {isSignIn ? "로그인" : !isClick ? "회원가입 " : "검색"}
                    </SignButton>
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
