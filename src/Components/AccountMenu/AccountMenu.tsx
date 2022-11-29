import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Logout from "@mui/icons-material/Logout";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonIcon from "@mui/icons-material/Person";
import { Badge } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import * as React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GlobalStyle } from "Styles/global.styles";

export default function AccountMenu(props: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLogOut = () => {
        props.sign(!props.my.isSignIn);
    };
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <GlobalStyle />
                    <Box
                        {...bindTrigger(popupState)}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <Tooltip title="">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2, padding: 0, margin: 0 }}
                                aria-controls={
                                    open ? "account-menu" : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                            >
                                {props.my.src.length > 0 ? (
                                    <Avatar
                                        src={props.my.src && props.my.src}
                                    />
                                ) : (
                                    <Avatar></Avatar>
                                )}
                                <AiFillCaretDown className="Down-Button" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        disableScrollLock={true}
                        {...bindMenu(popupState)}
                        anchorEl={anchorEl}
                        id="account-menu"
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: "visible",
                                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                width: "320px",
                                mt: 1.5,
                                "& .MuiAvatar-root": {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                "&:before": {
                                    content: '""',
                                    display: "block",
                                    position: "absolute",
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: "background.paper",
                                    transform: "translateY(-50%) rotate(45deg)",
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{
                            horizontal: "right",
                            vertical: "top",
                        }}
                        anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                        }}
                    >
                        <MenuItem
                            disableRipple
                            disableTouchRipple
                            focusRipple={true}
                            sx={{
                                display: "flex",
                                height: "120px",
                                paddingBottom: "0",
                                paddingTop: "0",
                                justifyContent: "space-between",
                                cursor: "default",
                                "&:hover": {
                                    background: "white",
                                },
                            }}
                        >
                            <Badge
                                overlap="circular"
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "right",
                                }}
                                badgeContent={
                                    <CameraAltIcon
                                        sx={{
                                            marginBottom: "0.8rem",
                                            marginRight: "1rem",
                                            background: "white",
                                            borderRadius: "50%",
                                        }}
                                    />
                                }
                            >
                                <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="label"
                                    sx={{
                                        width: 95,
                                        height: 95,
                                        "& .MuiAvatar-root": {
                                            width: "100%",
                                            height: "100%",
                                        },
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                        },
                                    }}
                                >
                                    <input
                                        hidden
                                        accept="image/*"
                                        type="file"
                                    />
                                    {props.my.src.length > 0 ? (
                                        <Avatar
                                            src={props.my.src && props.my.src}
                                        />
                                    ) : (
                                        <Avatar></Avatar>
                                    )}
                                </IconButton>
                            </Badge>
                            <Link
                                to="/Profile"
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                <Button
                                    onClick={popupState.close}
                                    variant="outlined"
                                    startIcon={<PersonIcon />}
                                    color="warning"
                                >
                                    마이 페이지
                                </Button>
                            </Link>
                        </MenuItem>
                        <MenuItem
                            disableRipple
                            disableTouchRipple
                            focusRipple={true}
                            sx={{
                                display: "flex",
                                height: "70px",
                                paddingBottom: "1rem",
                                paddingTop: "1rem",
                                justifyContent: "space-between",
                                cursor: "default",
                                "&:hover": {
                                    backgroundColor: "transparent",
                                },
                                transition: "none",
                            }}
                        >
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontSize: "1.35rem",
                                            fontWeight: "900",
                                        }}
                                        primary={`${props.my.nickName}`}
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <MailOutlineIcon
                                        sx={{
                                            fontSize: "1.15rem",
                                        }}
                                    />
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontSize: "1.15rem",
                                        }}
                                        sx={{ paddingLeft: "0.3rem" }}
                                        primary={`${props.my.email}`}
                                    />
                                </ListItem>
                            </List>
                        </MenuItem>
                        <MenuItem
                            disableRipple
                            disableTouchRipple
                            focusRipple={true}
                            sx={{
                                display: "block",
                                height: "80px",
                                cursor: "default",
                                "&:hover": {
                                    backgroundColor: "transparent",
                                },
                                transition: "none",
                            }}
                        >
                            <List
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <ListItem
                                    sx={{
                                        paddingLeft: "0",
                                        paddingBottom: "0",
                                        paddingTop: "0",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontSize: "1.15rem",
                                        }}
                                        primary={`마일리지`}
                                    />
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontSize: "1.5rem",
                                            fontWeight: "900",
                                            color: `var(--point3-background-color)`,
                                        }}
                                        primary={`${props.my.point} P`}
                                    />
                                </ListItem>
                                <ListItem
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        borderLeft: `1px solid var(--font-color-subTitle)`,
                                        paddingBottom: "0",
                                        paddingTop: "0",
                                        paddingLeft: "1.5rem",
                                    }}
                                >
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontSize: "1.15rem",
                                        }}
                                        primary={`방문수`}
                                    />
                                    <ListItemText
                                        primaryTypographyProps={{
                                            fontSize: "1.5rem",
                                            fontWeight: "900",
                                        }}
                                        primary={`${props.my.visitCount}`}
                                    />
                                </ListItem>
                            </List>
                        </MenuItem>
                        <MenuItem
                            disableRipple
                            disableTouchRipple
                            focusRipple={true}
                            onClick={popupState.close}
                            sx={{
                                cursor: "default",
                                justifyContent: "flex-end",
                                paddingBottom: "0.3rem",
                                paddingTop: "8px",
                                "&:hover": {
                                    background: "white",
                                },
                            }}
                        >
                            <ListItem
                                disablePadding
                                sx={{
                                    cursor: "pointer",
                                    width: "fit-content",
                                    textAlign: "right",
                                    "&:hover": {
                                        color: `var(--point3-background-color)`,
                                    },
                                }}
                            >
                                <ListItemText
                                    primaryTypographyProps={{
                                        fontSize: "1rem",
                                        fontWeight: "900",
                                    }}
                                    primary={`나의 글 보러가기`}
                                />
                                <ArrowForwardIosIcon
                                    sx={{
                                        fontSize: "1rem",
                                    }}
                                />
                            </ListItem>
                        </MenuItem>
                        <Divider />
                        <MenuItem
                            onClick={handleLogOut}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <ListItemIcon>
                                <Logout fontSize="small" />
                                로그아웃
                            </ListItemIcon>
                        </MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}
