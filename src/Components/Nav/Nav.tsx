import logoSrc from "Assets/Images/ub_devblog_logo.png";
import { Search } from "Components/Search/Search";
import { FC, useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { TfiAlignLeft, TfiClose, TfiSearch } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { activeCategory, closeCategory } from "Stores/categorySlice";
import { activeSearch, closeSearch } from "Stores/searchSlice";
import { activeSign } from "Stores/signInSlice";
import "./Icon.css";
import {
    NavBar,
    NavBarContainer,
    NavBarLogo,
    NavBarLogoLink,
    NavBarMenuIcon,
    NavBarMenuItem,
    NavBarMenuLink,
    NavBarMenuList,
    NavBarMenuProfile,
} from "./Nav.styles";

const Navbar: FC<any> = (props) => {
    const userData = {
        src: "https://velog.velcdn.com/images/minj9_6/profile/f8889f8f-fa44-4ef3-984c-616c55410ad5/P20200203_225352227_66B88E27-7A21-4EC5-987F-0B0457A4AA0C.jpeg",
    };
    const [SignIn, setSignIn] = useState(true);
    const [Authentication, setAuthentication] = useState(true);
    const [scroll, setScroll] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 10) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
    }, [scroll]);

    const openCategory = () => {
        dispatch(activeCategory());
        dispatch(closeSearch());
        document.body.style.overflow = "hidden";
    };

    const openSearch = () => {
        dispatch(activeSearch());
        dispatch(closeCategory());
        document.body.style.overflow = "hidden";
    };

    const activeLogin = () => {
        dispatch(activeSign());
        dispatch(closeSearch());
        dispatch(closeCategory());
        document.body.style.overflow = "hidden";
    };

    const signIn = () => {
        setSignIn(true);
    };

    return (
        <NavBar>
            <NavBarContainer shadow={scroll}>
                <NavBarLogoLink href="/">
                    <NavBarLogo src={logoSrc} />
                </NavBarLogoLink>
                <NavBarMenuIcon onClick={openCategory}>
                    {props.active.category.active ? (
                        <TfiClose className="Menu-Bar" />
                    ) : (
                        <TfiAlignLeft className="Menu-Bar" />
                    )}
                </NavBarMenuIcon>
                <NavBarMenuList
                    active={props.active.category.active}
                    SignIn={SignIn}
                    Authentication={Authentication}
                >
                    {props.category.map((a: any, index: any) => {
                        return (
                            <NavBarMenuItem
                                key={index}
                                SignIn={SignIn}
                                Authentication={Authentication}
                            >
                                <NavBarMenuLink
                                    href={`${props.category[index].name}`}
                                >
                                    {props.category[index].name}
                                </NavBarMenuLink>
                            </NavBarMenuItem>
                        );
                    })}
                    {SignIn ? (
                        <>
                            <NavBarMenuItem
                                SignIn={SignIn}
                                Authentication={Authentication}
                            >
                                <NavBarMenuLink
                                    href={
                                        Authentication
                                            ? "Write"
                                            : "Authenticate"
                                    }
                                >
                                    {Authentication
                                        ? "Write new post"
                                        : "Authenticate"}
                                </NavBarMenuLink>
                            </NavBarMenuItem>
                            <NavBarMenuItem
                                SignIn={SignIn}
                                Authentication={Authentication}
                            >
                                <NavBarMenuProfile src={userData.src} />
                                <AiFillCaretDown className="Down-Button" />
                            </NavBarMenuItem>
                        </>
                    ) : (
                        <NavBarMenuItem
                            SignIn={SignIn}
                            Authentication={Authentication}
                            onClick={activeLogin}
                        >
                            <NavBarMenuLink>Sign-In</NavBarMenuLink>
                        </NavBarMenuItem>
                    )}
                </NavBarMenuList>
                {props.active.search.active ? (
                    <TfiClose className="Menu-Search" onClick={openSearch} />
                ) : (
                    <TfiSearch className="Menu-Search" onClick={openSearch} />
                )}
                <Search
                    type="text"
                    placeholder="search.."
                    onClick={openSearch}
                    expand={props.active.search.active}
                />
            </NavBarContainer>
        </NavBar>
    );
};

export default Navbar;
