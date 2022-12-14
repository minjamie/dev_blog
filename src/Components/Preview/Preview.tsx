import LockIcon from "@mui/icons-material/Lock";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button, InputAdornment, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { WriteExitButton } from "Pages/Write/Write.styles";
import React, { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { GlobalStyle } from "Styles/global.styles";
import {
    PreviewButtonWrapper,
    PreviewContainer,
    PreviewIntroduce,
    PreviewIntroduceCount,
    PreviewLeft,
    PreviewOpenSettingButtonWrapper,
    PreviewOpenSettingTitle,
    PreviewOpenSettingWrapper,
    PreviewPage,
    PreviewPath,
    PreviewPathAndDefaultWrapper,
    PreviewPathDefault,
    PreviewPathTitle,
    PreviewPathWrapper,
    PreviewRight,
    PreviewSavePosition,
    PreviewSavePositionButtonWrapper,
    PreviewSavePositionCancelButton,
    PreviewSavePositionInputWrapper,
    PreviewSavePositionPathContainer,
    PreviewSavePositionPathDefault,
    PreviewSavePositionPathDefaultInput,
    PreviewSavePositionPathWrapper,
    PreviewSavePositionRegisterButton,
    PreviewSavePositionWrapper,
    PreviewSaveTitle,
    PreviewThumbnail,
    PreviewTitle,
} from "./Preview.styles";

export default function Preview(props: any) {
    const [intro, setIntro] = useState("");
    const [path, setPath] = useState("");
    const [isOpen, setOpen] = useState(true);
    const [isSave, setSave] = useState(false);
    const [isFucus, setFocus] = useState<boolean>(false);
    const [savePaths, setSavePaths] = useState<string[]>([
        "Save1",
        "Save2",
        "Save3",
        "Save4",
        "Save5",
        "Save6",
    ]);
    const [savePath, setSavePath] = useState<string>("");

    const [selectedIndex, setSelectedIndex] = React.useState<number>(-1);

    const my = {
        src: "https://velog.velcdn.com/images/minj9_6/profile/f8889f8f-fa44-4ef3-984c-616c55410ad5/P20200203_225352227_66B88E27-7A21-4EC5-987F-0B0457A4AA0C.jpeg",
        nickName: "minjae2246",
    };

    const defaultPath = my.nickName.replace(/^/, "/@").replace(/$/, "/");
    const defaultSavePath = defaultPath.replace(/$/, "Save/");
    const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;

    const handleChange = (event: React.ChangeEvent): void => {
        const { value, name } = event.target as HTMLInputElement;
        if (name === "intro") {
            setIntro(value);
        } else if (name === "path") {
            setPath(value);
        } else if (name === "savePath") {
            setSavePath(value);
        }
    };

    const addSavePath = (): void => {
        const arr = [...savePaths];
        arr.push(savePath);
        setSavePaths(arr);
        setSavePath("");
        setFocus(false);
        setSelectedIndex(arr.length - 1);
    };

    const clickSave = (e: React.MouseEvent<HTMLButtonElement>): void => {
        setSave(!isSave);
    };

    const clickOpen = (
        e: React.MouseEvent<HTMLButtonElement>,
        isOpen: boolean
    ): void => {
        setOpen(isOpen);
    };

    const handleListItemClick = (
        event: React.MouseEvent<any>,
        index: number
    ) => {
        setSelectedIndex(index);
    };

    const clickCancel = (): void => {
        setSelectedIndex(-1);
        setSave(false);
    };

    const clickSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
        if (isSave && selectedIndex >= 0) {
            setSave(false);
            setSavePath(savePaths[selectedIndex]);
        }
        if (!isSave && !props.props.title) {
            alert("????????? ??????????????????");
        }
    };

    const [form, setForm] = React.useState<any>({
        name: {
            value: "",
            error: false,
            errorMessage: "????????? ???????????????. ??????????????????",
        },
        email: {
            value: "minjae2246@ubacare.co.kr",
            error: false,
            errorMessage: "???????????? ???????????????. ??????????????????",
        },
        nickName: {
            value: "",
            error: false,
            errorMessage: "???????????? ???????????????. ??????????????????",
        },
        introduce: {
            value: "",
            error: false,
            errorMessage: "??? ??? ????????? ???????????????. ??????????????????",
        },
        tech: {
            value: [],
            error: false,
            errorMessage: "?????? ????????? ???????????? ???????????????. ??????????????????",
        },
    });
    return (
        <PreviewPage click={props.props.click}>
            <GlobalStyle></GlobalStyle>
            <PreviewContainer>
                <PreviewLeft>
                    <PreviewTitle>????????? ????????????</PreviewTitle>
                    <PreviewThumbnail>
                        <AiOutlinePicture
                            style={{
                                fontSize: "8rem",
                                strokeWidth: "30",
                                stroke: "#e9ecef",
                                color: "#bdc2c7",
                            }}
                        />
                        <Button variant="contained" component="label">
                            ????????? ?????????
                            <input
                                hidden
                                accept="image/*"
                                multiple
                                type="file"
                            />
                        </Button>
                    </PreviewThumbnail>
                    {props.props.title}
                    <PreviewIntroduce
                        maxLength={149}
                        value={intro}
                        onChange={handleChange}
                        placeholder={"????????? ?????? ?????? ??????????????????."}
                        name="intro"
                    />
                    <PreviewIntroduceCount>{`${intro.length} / 150`}</PreviewIntroduceCount>
                </PreviewLeft>
                <PreviewRight isFucus={isFucus}>
                    <PreviewOpenSettingTitle>
                        {isSave ? "???????????? ??????" : "?????? ??????"}
                    </PreviewOpenSettingTitle>
                    {isSave ? (
                        <Box
                            sx={{
                                width: "100%",
                                height: isFucus ? 380 : 370,
                                maxHeight: 400,
                                maxWidth: 380,
                                bgcolor: "background.paper",
                                ["@media (max-width:1200px)"]: {
                                    // eslint-disable-line no-useless-computed-key
                                    maxWidth: 350,
                                },
                                ["@media (max-width:780px)"]: {
                                    // eslint-disable-line no-useless-computed-key
                                    maxWidth: 780,
                                },
                            }}
                        >
                            <PreviewSavePositionInputWrapper isFucus={isFucus}>
                                <PreviewSavePosition
                                    placeholder={
                                        "????????? ??????????????? ????????? ???????????????"
                                    }
                                    onFocus={() => setFocus(true)}
                                    isFucus={isFucus}
                                    value={savePath}
                                    name="savePath"
                                    onChange={handleChange}
                                />
                                {isFucus && (
                                    <PreviewSavePositionPathContainer>
                                        <PreviewSavePositionPathWrapper>
                                            <PreviewSavePositionPathDefault>
                                                {defaultSavePath}
                                            </PreviewSavePositionPathDefault>
                                            <PreviewSavePositionPathDefaultInput
                                                defaultValue={savePath.replace(
                                                    reg,
                                                    ""
                                                )}
                                            />
                                        </PreviewSavePositionPathWrapper>
                                        <PreviewSavePositionButtonWrapper>
                                            <PreviewSavePositionCancelButton
                                                onClick={() => {
                                                    setFocus(false);
                                                }}
                                            >
                                                ??????
                                            </PreviewSavePositionCancelButton>
                                            <PreviewSavePositionRegisterButton
                                                onClick={addSavePath}
                                            >
                                                ???????????? ??????
                                            </PreviewSavePositionRegisterButton>
                                        </PreviewSavePositionButtonWrapper>
                                    </PreviewSavePositionPathContainer>
                                )}
                            </PreviewSavePositionInputWrapper>
                            <Divider />
                            <List
                                sx={{
                                    width: "100%",
                                    bgcolor: "background.paper",
                                    overflow: "auto",
                                    maxHeight: 240,
                                    padding: 0,
                                    "& ul": { padding: 0 },
                                }}
                                component="nav"
                            >
                                {savePaths.map((a, index) => {
                                    return (
                                        <ListItemButton
                                            key={index}
                                            selected={selectedIndex === index}
                                            onClick={(event) =>
                                                handleListItemClick(
                                                    event,
                                                    index
                                                )
                                            }
                                        >
                                            <ListItemText primary={a} />
                                        </ListItemButton>
                                    );
                                })}
                            </List>
                        </Box>
                    ) : (
                        <>
                            <PreviewOpenSettingWrapper>
                                <PreviewOpenSettingButtonWrapper>
                                    <Button
                                        onClick={(e) => clickOpen(e, true)}
                                        sx={{
                                            color: isOpen
                                                ? "#f5f6f6"
                                                : "#868e96",
                                            border: isOpen
                                                ? "1.5px solid #1976d2"
                                                : "1.5px solid #f5f6f6",
                                            backgroundColor: isOpen
                                                ? "#1976d2"
                                                : "#ffffff",
                                            height: "50px",
                                            width: "175px",
                                            fontSize: "1.35rem",
                                            marginRight: "1rem",
                                            "&:hover": {
                                                backgroundColor: isOpen
                                                    ? "#1976d2"
                                                    : "#ffffff",
                                                border: isOpen
                                                    ? "1.5px solid #1976d2"
                                                    : "1.5px solid #f5f6f6",
                                                opacity: 0.9,
                                            },
                                            ["@media (max-width:1200px)"]: {
                                                // eslint-disable-line no-useless-computed-key
                                                height: "45px",
                                                width: "150px",
                                                fontSize: "1.2rem",
                                            },
                                            ["@media (max-width:780px)"]: {
                                                // eslint-disable-line no-useless-computed-key
                                                height: "45px",
                                                width: "50%",
                                                fontSize: "1.2rem",
                                            },
                                        }}
                                        variant="outlined"
                                        startIcon={<PublicIcon />}
                                    >
                                        ?????? ??????
                                    </Button>
                                    <Button
                                        onClick={(e) => clickOpen(e, false)}
                                        sx={{
                                            color: isOpen
                                                ? "#868e96"
                                                : "#f5f6f6",
                                            border: isOpen
                                                ? "1.5px solid #f5f6f6"
                                                : "1.5px solid #1976d2",
                                            backgroundColor: isOpen
                                                ? "#ffffff"
                                                : "#1976d2",
                                            height: "50px",
                                            width: "175px",
                                            fontSize: "1.35rem",
                                            "&:hover": {
                                                backgroundColor: isOpen
                                                    ? "#ffffff"
                                                    : "#1976d2",
                                                border: isOpen
                                                    ? "1.5px solid #f5f6f6"
                                                    : "1.5px solid #1976d2",
                                                opacity: 0.9,
                                            },
                                            ["@media (max-width:1200px)"]: {
                                                // eslint-disable-line no-useless-computed-key
                                                height: "45px",
                                                width: "150px",
                                                fontSize: "1.2rem",
                                            },
                                            ["@media (max-width:780px)"]: {
                                                // eslint-disable-line no-useless-computed-key
                                                height: "45px",
                                                width: "50%",
                                                fontSize: "1.2rem",
                                            },
                                        }}
                                        variant="contained"
                                        startIcon={<LockIcon />}
                                    >
                                        ?????????
                                    </Button>
                                </PreviewOpenSettingButtonWrapper>
                            </PreviewOpenSettingWrapper>
                            <PreviewPathWrapper>
                                <PreviewPathTitle>URL ??????</PreviewPathTitle>
                                <PreviewPathAndDefaultWrapper>
                                    <PreviewPathDefault>
                                        {defaultPath}
                                    </PreviewPathDefault>
                                    <PreviewPath
                                        onChange={handleChange}
                                        value={path}
                                        name="path"
                                        type="text"
                                    ></PreviewPath>
                                </PreviewPathAndDefaultWrapper>
                            </PreviewPathWrapper>
                            <PreviewSavePositionWrapper>
                                <PreviewSaveTitle>
                                    ???????????? ??????
                                </PreviewSaveTitle>
                                {selectedIndex >= 0 ? (
                                    <TextField
                                        fullWidth
                                        sx={{}}
                                        id="outlined-read-only-input"
                                        defaultValue={savePaths[selectedIndex]}
                                        InputProps={{
                                            style: {
                                                padding: 0,
                                            },
                                            readOnly: true,
                                            endAdornment: (
                                                <InputAdornment
                                                    position="end"
                                                    sx={{
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    <SettingsIcon
                                                        sx={{
                                                            backgroundColor:
                                                                "#00a8ff",
                                                            fontSize: "2rem",
                                                        }}
                                                    />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                ) : (
                                    <Button
                                        onClick={clickSave}
                                        sx={{
                                            height: "50px",
                                            fontSize: "1.35rem",
                                            ["@media (max-width:1200px)"]: {
                                                // eslint-disable-line no-useless-computed-key
                                                height: "45px",
                                                fontSize: "1.2rem",
                                            },
                                        }}
                                        variant="outlined"
                                        fullWidth
                                        startIcon={<PlaylistAddIcon />}
                                    >
                                        ???????????? ??????
                                    </Button>
                                )}
                            </PreviewSavePositionWrapper>
                        </>
                    )}
                    <PreviewButtonWrapper isSave={isSave}>
                        <WriteExitButton
                            onClick={() => {
                                isSave ? clickCancel() : props.setClick(false);
                            }}
                        >
                            {isSave ? "??????" : "?????????"}
                        </WriteExitButton>
                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                width: "80px",
                                height: "30px",
                                backgroundColor: "#00a8ff",
                                fontSize: "0.9rem",
                                marginLeft: "1rem",
                                "&:hover": {
                                    backgroundColor: "#00a8ff",

                                    opacity: 0.7,
                                },
                            }}
                            disabled={
                                isSave && selectedIndex < 0 ? true : false
                            }
                            onClick={clickSubmit}
                        >
                            {isSave && selectedIndex >= 0
                                ? "????????????"
                                : "????????????"}
                        </Button>
                    </PreviewButtonWrapper>
                </PreviewRight>
            </PreviewContainer>
        </PreviewPage>
    );
}
