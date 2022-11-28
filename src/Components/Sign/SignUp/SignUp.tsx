import { Button, FormHelperText } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import * as React from "react";
import { GlobalStyle } from "Styles/global.styles";
import {
    SignUpHelpTitle,
    SignUpPage,
    SignUpWelcomeTitle,
    SignUpWelcomeWrapper,
} from "./SignUp.styles";

export default function SignUp() {
    const SignUpData = {
        name: "김민재",
        email: "minjae2246@gmail.com.kr",
        nickName: "",
        introduce: "",
    };

    const [submit, setSubmit] = React.useState(false);

    const [form, setForm] = React.useState<any>({
        name: {
            value: "",
            error: false,
            errorMessage: "이름이 비었습니다. 입력해주세요",
        },
        email: {
            value: "minjae2246@ubacare.co.kr",
            error: false,
            errorMessage: "이메일이 비었습니다. 입력해주세요",
        },
        nickName: {
            value: "",
            error: false,
            errorMessage: "닉네임이 비었습니다. 입력해주세요",
        },
        introduce: {
            value: "",
            error: false,
            errorMessage: "한 줄 소개가 비었습니다. 입력해주세요",
        },
    });

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const formFields = Object.keys(form);
        let newFormValues = { ...form };

        for (let index = 0; index < formFields.length; index++) {
            const currentField = formFields[index];

            const currentValue = form[currentField].value;

            if (currentValue === "") {
                newFormValues = {
                    ...newFormValues,
                    [currentField]: {
                        ...form[currentField],
                        error: true,
                    },
                };
            }
        }

        setSubmit(true);
        setForm(newFormValues);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSubmit(false);
        setForm({
            ...form,
            [name]: {
                ...form[name],
                value,
                error: false,
            },
        });
    };

    return (
        <SignUpPage>
            <GlobalStyle />
            <Box
                component="form"
                sx={{
                    "& > :not(style)": {
                        m: 1,
                        width: "47.5%",
                    },
                    width: "730px",
                    margin: "0 auto",
                    textAlign: "left",
                }}
                noValidate
                autoComplete="off"
            >
                <SignUpWelcomeWrapper>
                    <SignUpWelcomeTitle>환영합니다!</SignUpWelcomeTitle>
                    <SignUpHelpTitle>
                        기본 회원 정보를 등록해주세요.
                    </SignUpHelpTitle>
                </SignUpWelcomeWrapper>
                <FormControl variant="standard" onSubmit={handleSubmit}>
                    <InputLabel
                        sx={{ fontSize: "1.2rem" }}
                        color="warning"
                        htmlFor="component-simple"
                    >
                        이름
                    </InputLabel>
                    <Input
                        color="warning"
                        sx={{ width: "35%", fontSize: "1.2rem" }}
                        id="component-simple"
                        value={form.name.value}
                        onChange={handleChange}
                        required
                        name="name"
                        error={form.name.error}
                    />
                    <FormHelperText id="component-helper-text">
                        {form.name.value.length === 0
                            ? "이름을 입력하세요."
                            : null}
                    </FormHelperText>
                </FormControl>
                <FormControl
                    disabled
                    variant="standard"
                    onSubmit={handleSubmit}
                >
                    <InputLabel
                        htmlFor="component-disabled"
                        sx={{ fontSize: "1.2rem" }}
                        color="warning"
                    >
                        이메일
                    </InputLabel>
                    <Input
                        id="component-disabled"
                        value={form.email.value}
                        onChange={handleChange}
                        error={form.email.error}
                        color="warning"
                        sx={{
                            width: "85%",
                            fontSize: "1.2rem",
                        }}
                    />
                </FormControl>
                <FormHelperText id="component-helper-text">
                    {form.email.value.length === 0
                        ? "이메일을 입력하세요."
                        : null}
                </FormHelperText>
                <FormControl variant="standard" onSubmit={handleSubmit}>
                    <InputLabel
                        sx={{ fontSize: "1.2rem" }}
                        color="warning"
                        htmlFor="component-simple"
                    >
                        닉네임
                    </InputLabel>
                    <Input
                        color="warning"
                        sx={{ width: "65%", fontSize: "1.2rem" }}
                        id="component-simple"
                        value={form.nickName.value}
                        onChange={handleChange}
                        name="nickName"
                        error={form.nickName.error}
                    />
                    <FormHelperText id="component-helper-text">
                        {form.nickName.value.length === 0
                            ? "닉네임을 입력하세요."
                            : null}
                    </FormHelperText>
                </FormControl>
                <FormControl variant="standard" onSubmit={handleSubmit}>
                    <InputLabel
                        sx={{ fontSize: "1.2rem" }}
                        color="warning"
                        htmlFor="component-simple"
                    >
                        한 줄 소개
                    </InputLabel>
                    <Input
                        color="warning"
                        sx={{ width: "100%", fontSize: "1.2rem" }}
                        id="component-simple"
                        value={form.introduce.value}
                        name="introduce"
                        onChange={handleChange}
                        error={form.introduce.error}
                    />
                    <FormHelperText id="component-helper-text">
                        {form.introduce.value.length === 0
                            ? "한 줄 소개를 입력하세요."
                            : null}{" "}
                    </FormHelperText>
                </FormControl>
                <FormHelperText
                    id="component-helper-text"
                    sx={{
                        color: "#d32f2f",
                        fontWeight: "900",
                        fontSize: "1.1rem",
                    }}
                >
                    {form.name.error && submit
                        ? form.name.errorMessage
                        : form.nickName.error && submit
                        ? form.nickName.errorMessage
                        : form.introduce.error && submit
                        ? form.introduce.errorMessage
                        : null}
                </FormHelperText>
                <Box
                    sx={{
                        "& button": {
                            m: 1,
                            margin: 0,
                            marginRight: "1rem",
                            maxWidth: "1180px",
                        },
                        paddingTop: "1.5rem",
                    }}
                >
                    <Button
                        variant="outlined"
                        size="large"
                        sx={{ borderRadius: "2rem" }}
                    >
                        취소
                    </Button>
                    <Button
                        type="button"
                        variant="contained"
                        size="large"
                        sx={{ borderRadius: "2rem" }}
                        onClick={handleSubmit}
                    >
                        다음
                    </Button>
                </Box>
            </Box>
        </SignUpPage>
    );
}
