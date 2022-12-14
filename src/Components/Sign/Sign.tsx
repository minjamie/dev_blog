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
                <SignTitle>{isSignIn ? "?????????" : "????????????"}</SignTitle>
                <SignLabel>
                    {isClick ? "????????????" : "?????????"}???{" "}
                    {isSignIn ? "?????????" : "????????????"}
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
                                ????????? ????????? ???????????? ?????????????????????.
                            </SignEmailLinkTitle>
                        </SignEmailLink>
                    ) : (
                        <>
                            <SignEmailInput
                                type="email"
                                placeholder={
                                    isClick && isSignIn
                                        ? "???????????? ????????? ???????????????."
                                        : isClick && !isSignIn
                                        ? "?????? ????????? ???????????????."
                                        : "???????????? ???????????????."
                                }
                                value={value}
                                onChange={handleInput}
                            ></SignEmailInput>
                            <SignButton type="submit">
                                {isSignIn
                                    ? "?????????"
                                    : !isClick
                                    ? "???????????? "
                                    : "??????"}
                            </SignButton>
                        </>
                    )}
                </SignInputWrapper>
                <SignOAuthWrapper isSignIn={isSignIn} isClick={isClick}>
                    {isClick && !isSignIn ? (
                        <MultipleSelect />
                    ) : (
                        <SignOAuthLabel>
                            ?????? ???????????? {isSignIn ? "?????????" : "????????????"}
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
                                title="???????????? ??????????????? ??????????????????."
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
                            ? "?????? ????????? ??????????????? ??????????????????."
                            : !isClick && !isSignIn
                            ? "????????? ?????? ????????????????"
                            : "?????? ????????? ????????????????"}
                        &nbsp;
                        <SignHelp onClick={handleSignButton}>
                            {isClick && !isSignIn
                                ? "????????????"
                                : !isClick && !isSignIn
                                ? "?????????"
                                : "????????????"}
                        </SignHelp>
                    </SignHelpTitle>
                </SignHelpWrapper>
            </SignBottom>
        </SignContainer>
    );
};
export default Sign;
