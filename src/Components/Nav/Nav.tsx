import "./Icon.css";
import { useState, useEffect, FC } from "react";
import {
    NavBar,
    NavBarContainer,
    NavBarLogo,
    NavBarLogoLink,
    NavBarMenuIcon,
    NavBarMenuItem,
    NavBarMenuLink,
    NavBarMenuList,
} from "./Nav.styles";
import logoSrc from "Assets/Images/ub_devblog_logo.png";
import { TfiClose, TfiSearch, TfiAlignLeft } from "react-icons/tfi";
import { Search } from "Components/Search/Search";
import { useDispatch } from "react-redux";
import { activeSearch, closeSearch } from "Stores/searchSlice";
import { activeCategory, closeCategory } from "Stores/categorySlice";
import { activeSignIn } from "Stores/signInSlice";

const Navbar: FC<any> = (props) => {
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
    });

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
        dispatch(activeSignIn());
        document.body.style.overflow = "hidden";
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
                <NavBarMenuList active={props.active.category.active}>
                    {props.category.map((a: any, index: any) => {
                        return (
                            <NavBarMenuItem key={index}>
                                <NavBarMenuLink
                                    href={`${props.category[index].name}`}
                                >
                                    {props.category[index].name}
                                </NavBarMenuLink>
                            </NavBarMenuItem>
                        );
                    })}
                    <NavBarMenuItem onClick={activeLogin}>
                        <NavBarMenuLink>Sign-In</NavBarMenuLink>
                    </NavBarMenuItem>
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
