import LockIcon from "@mui/icons-material/Lock";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PublicIcon from "@mui/icons-material/Public";
import { Button } from "@mui/material";
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

    const [selectedIndex, setSelectedIndex] = React.useState(1);

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
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number
    ) => {
        setSelectedIndex(index);
    };

    return (
        <PreviewPage click={props.props}>
            <GlobalStyle></GlobalStyle>
            <PreviewContainer>
                <PreviewLeft>
                    <PreviewTitle>포스트 미리보기</PreviewTitle>
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
                            썸네일 업로드
                            <input
                                hidden
                                accept="image/*"
                                multiple
                                type="file"
                            />
                        </Button>
                    </PreviewThumbnail>
                    <PreviewIntroduce
                        maxLength={149}
                        value={intro}
                        onChange={handleChange}
                        placeholder={"당신의 글을 짧게 설명해주세요."}
                        name="intro"
                    />
                    <PreviewIntroduceCount>{`${intro.length} / 150`}</PreviewIntroduceCount>
                </PreviewLeft>
                <PreviewRight isFucus={isFucus}>
                    <PreviewOpenSettingTitle>
                        {isSave ? "저장위치 설정" : "공개 설정"}
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
                                        "새로운 저장공간의 이름을 입력하세요"
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
                                                취소
                                            </PreviewSavePositionCancelButton>
                                            <PreviewSavePositionRegisterButton
                                                onClick={addSavePath}
                                            >
                                                저장공간 추가
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
                                        전체 공개
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
                                        비공개
                                    </Button>
                                </PreviewOpenSettingButtonWrapper>
                            </PreviewOpenSettingWrapper>
                            <PreviewPathWrapper>
                                <PreviewPathTitle>URL 설정</PreviewPathTitle>
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
                                    저장위치 설정
                                </PreviewSaveTitle>
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
                                    저장위치 추가
                                </Button>
                            </PreviewSavePositionWrapper>
                        </>
                    )}
                    <PreviewButtonWrapper isSave={isSave}>
                        <WriteExitButton
                            onClick={() => {
                                isSave ? setSave(false) : props.setClick(false);
                            }}
                        >
                            {isSave ? "취소" : "나가기"}
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
                            disabled={isSave ? true : false}
                        >
                            출간하기
                        </Button>
                    </PreviewButtonWrapper>
                </PreviewRight>
            </PreviewContainer>
        </PreviewPage>
    );
}
