import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import {
    PreviewPage,
    PreviewLeft,
    PreviewTitle,
    PreviewThumbnail,
    PreviewIntroduce,
    PreviewIntroduceCount,
    PreviewRight,
    PreviewOpenSettingTitle,
    PreviewPathTitle,
    PreviewPath,
    PreviewButtonWrapper,
    PreviewSaveTitle,
    PreviewContainer,
    PreviewOpenSettingWrapper,
    PreviewPathWrapper,
    PreviewSavePositionWrapper,
    PreviewPathDefault,
    PreviewPathAndDefaultWrapper,
    PreviewOpenSettingButtonWrapper,
} from "./Preview.styles";
import PublicIcon from "@mui/icons-material/Public";
import LockIcon from "@mui/icons-material/Lock";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { WriteExitButton, WriteRegisterButton } from "Pages/Write/Write.styles";
import { GlobalStyle } from "Styles/global.styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

export default function Preview(props: any) {
    const [intro, setIntro] = useState("");
    const [path, setPath] = useState("");
    const [isOpen, setOpen] = useState(true);
    const [isSave, setSave] = useState(true);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const my = {
        src: "https://velog.velcdn.com/images/minj9_6/profile/f8889f8f-fa44-4ef3-984c-616c55410ad5/P20200203_225352227_66B88E27-7A21-4EC5-987F-0B0457A4AA0C.jpeg",
        nickName: "minjae2246",
    };

    const defaultPath = my.nickName.replace(/^/, "/@").replace(/$/, "/");
    const handleChange = (event: React.ChangeEvent): void => {
        const { value, name } = event.target as HTMLInputElement;
        if (name === "intro") {
            setIntro(value);
        } else if (name === "path") {
            setPath(value);
        }
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
                                strokeWidth: "30", // --> higher value === more thickness the filled area
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
                <PreviewRight>
                    <PreviewOpenSettingWrapper>
                        <PreviewOpenSettingTitle>
                            {isSave ? "저장위치 설정" : "공개 설정"}
                        </PreviewOpenSettingTitle>
                        {isSave && (
                            <Box
                                sx={{
                                    width: "100%",
                                    height: 300,
                                    maxWidth: 320,
                                    bgcolor: "background.paper",
                                    position: "fixed",
                                    zIndex: 2,
                                }}
                            >
                                <List
                                    component="nav"
                                    aria-label="main mailbox folders"
                                >
                                    <ListItemButton
                                        selected={selectedIndex === 0}
                                        onClick={(event) =>
                                            handleListItemClick(event, 0)
                                        }
                                    >
                                        <ListItemIcon>
                                            <InboxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Inbox" />
                                    </ListItemButton>
                                    <ListItemButton
                                        selected={selectedIndex === 1}
                                        onClick={(event) =>
                                            handleListItemClick(event, 1)
                                        }
                                    >
                                        <ListItemIcon>
                                            <DraftsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Drafts" />
                                    </ListItemButton>
                                </List>
                                <Divider />
                                <List
                                    component="nav"
                                    aria-label="secondary mailbox folder"
                                >
                                    <ListItemButton
                                        selected={selectedIndex === 2}
                                        onClick={(event) =>
                                            handleListItemClick(event, 2)
                                        }
                                    >
                                        <ListItemText primary="Trash" />
                                    </ListItemButton>
                                    <ListItemButton
                                        selected={selectedIndex === 3}
                                        onClick={(event) =>
                                            handleListItemClick(event, 3)
                                        }
                                    >
                                        <ListItemText primary="Spam" />
                                    </ListItemButton>
                                </List>
                            </Box>
                        )}
                        <PreviewOpenSettingButtonWrapper>
                            <Button
                                onClick={(e) => clickOpen(e, true)}
                                sx={{
                                    color: isOpen ? "#f5f6f6" : "#868e96",
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
                                    color: isOpen ? "#868e96" : "#f5f6f6",
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
                        <PreviewSaveTitle>저장위치 설정</PreviewSaveTitle>
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
                    <PreviewButtonWrapper>
                        <WriteExitButton
                            onClick={() => {
                                props.setClick(false);
                            }}
                        >
                            {isSave ? "취소" : "나가기"}
                        </WriteExitButton>
                        <WriteRegisterButton>출간하기</WriteRegisterButton>
                    </PreviewButtonWrapper>
                </PreviewRight>
            </PreviewContainer>
        </PreviewPage>
    );
}
