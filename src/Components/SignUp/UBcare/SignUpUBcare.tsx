import MultipleSelect from "Components/SelectBox/SelectBox";
import React from "react";
import { TfiClose } from "react-icons/tfi";
import {
    SignUpUBcareContainer,
    SignUpUBcareEmailInput,
    SignUpUBcareTitle,
    SignUpUBcareLabel,
    SignUpUBcareOAuthWrapper,
    SignUpUBcareOAuthLabel,
    SignUpUBcareTop,
    SignUpUBcareBottom,
    SignUpUBcareHelpWrapper,
    SignUpUBcareHelpTitle,
    SignUpUBcareHelp,
    SignUpUBcareImg,
    SignUpUBcareButton,
    SignUpUBcareInputWrapper,
    LoginKakao,
    LoginGoogle,
    LoginUBcare,
    LoginGoogleTitle,
    SignUpUBcareOAuthContainer,
    LoginUBcareWrapper,
} from "./SignUpUBcare.styles";
export default function SignUpUBcare() {
    return (
        <SignUpUBcareContainer>
            <SignUpUBcareTop>
                환영합니다. 유비케어
                <TfiClose className="close-Button" />
            </SignUpUBcareTop>
            <SignUpUBcareBottom>
                <SignUpUBcareTitle></SignUpUBcareTitle>
                <SignUpUBcareLabel></SignUpUBcareLabel>
                <SignUpUBcareInputWrapper>
                    <SignUpUBcareEmailInput
                        type="text"
                        placeholder="사원 번호를 입력하세요."
                    ></SignUpUBcareEmailInput>
                    <MultipleSelect></MultipleSelect>
                    <SignUpUBcareButton></SignUpUBcareButton>
                </SignUpUBcareInputWrapper>
                <SignUpUBcareOAuthWrapper>
                    <SignUpUBcareOAuthLabel></SignUpUBcareOAuthLabel>
                    <SignUpUBcareOAuthContainer></SignUpUBcareOAuthContainer>
                </SignUpUBcareOAuthWrapper>
                <SignUpUBcareHelpWrapper>
                    <SignUpUBcareHelpTitle>
                        <SignUpUBcareHelp></SignUpUBcareHelp>
                    </SignUpUBcareHelpTitle>
                </SignUpUBcareHelpWrapper>
            </SignUpUBcareBottom>
        </SignUpUBcareContainer>
    );
}
