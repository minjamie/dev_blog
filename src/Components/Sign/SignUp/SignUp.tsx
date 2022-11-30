import { Button, Chip, FormHelperText, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import { GlobalStyle } from "Styles/global.styles";
import {
    SignUpHelpTitle,
    SignUpPage,
    SignUpWelcomeTitle,
    SignUpWelcomeWrapper,
} from "./SignUp.styles";

export default function SignUp() {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const SignUpData = {
        name: "김민재",
        email: "minjae2246@gmail.com.kr",
        nickName: "",
        introduce: "",
        tech: [],
    };

    const [submit, setSubmit] = React.useState(false);
    const [etc, setEtc] = React.useState(false);
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
        tech: {
            value: [],
            error: false,
            errorMessage: "기술 분야가 선택되지 않았습니다. 선택해주세요",
        },
    });
    const handleSubmit = (event: any) => {
        event.preventDefault();

        const formFields = Object.keys(form);
        let newFormValues = { ...form };

        for (let index = 0; index < formFields.length; index++) {
            const currentField = formFields[index];

            const currentValue = form[currentField].value;

            if (currentValue === "" || currentValue.length === 0) {
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

    const techs = [
        "Software Engineering",
        "Data Engineering",
        "Software Architect",
        "기타(직접 입력)",
    ];

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

    const selectChange = (e: SelectChangeEvent<typeof form.tech.value>) => {
        const { name, value } = e.target;

        if (value.includes("기타(직접 입력)")) {
            if (value.findIndex((v: string) => v == "기타(직접 입력)") === 0) {
                // value.slice(0, -1);
            } else {
                value.length === 1;
                setForm({
                    ...form,
                    [name]: {
                        value: ["기타(직접 입력)"],
                        error: false,
                    },
                });
            }
        } else {
            setForm({
                ...form,
                [name]: {
                    ...form[name],
                    value,
                    error: false,
                },
            });
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLLIElement>, value: string) => {
        if (value === "기타(직접 입력)") {
            setEtc(!etc);
        }
    };

    console.log(form);

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
                    "& > :nth-of-type(7)": {
                        marginTop: etc ? "2.5rem" : "",
                    },
                    "& > :nth-of-type(6)": {
                        marginTop: "2.5rem",
                    },
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
                            : null}
                    </FormHelperText>
                </FormControl>

                <FormControl sx={{ m: 1, width: 300, margin: "0" }}>
                    <InputLabel color="warning" id="demo-multiple-chip-label">
                        기술분야
                    </InputLabel>
                    <Select
                        sx={{
                            "&.MuiOutlinedInput-root": {
                                "& fieldset": {
                                    border: form.tech.error
                                        ? "0.15rem solid red"
                                        : "",
                                },
                            },
                        }}
                        error={form.tech.error ? true : false}
                        name="tech"
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        color="warning"
                        value={form.tech.value}
                        onChange={selectChange}
                        input={
                            <OutlinedInput
                                id="select-multiple-chip"
                                label="기술분야"
                            />
                        }
                        renderValue={(selected) => (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 0.5,
                                }}
                            >
                                {selected === "기타(직접 입력)" ? (
                                    <Chip
                                        key={selected}
                                        label={selected}
                                        sx={{
                                            height: 23,
                                        }}
                                    />
                                ) : (
                                    selected.map((value: any) => {
                                        return (
                                            <Chip
                                                key={value}
                                                label={value}
                                                sx={{
                                                    height: 23,
                                                }}
                                            />
                                        );
                                    })
                                )}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {techs.map((name: any) => (
                            <MenuItem
                                key={name}
                                value={name}
                                onClick={(e) => handleClick(e, name)}
                                sx={{}}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText
                        id="component-helper-text"
                        sx={{ marginRight: 0, marginLeft: 0 }}
                    >
                        {form.tech.value.length === 0
                            ? "기술 분야를 선택해주세요."
                            : " "}
                    </FormHelperText>
                </FormControl>
                {etc ? (
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <TextField
                            id="outlined-textarea"
                            label="기타(직접 입력)"
                            placeholder="직접입력"
                            multiline
                        />
                    </FormControl>
                ) : null}
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
                        : form.tech.error && submit
                        ? form.tech.errorMessage
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
