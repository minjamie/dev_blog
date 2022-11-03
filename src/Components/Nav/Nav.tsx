import logoSrc from "Assets/Images/ub_devblog_logo.png";
import { Search } from "Components/Search/Search";
import { FC, useEffect, useState } from "react";
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
} from "./Nav.styles";

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
        dispatch(activeSign());
        dispatch(closeSearch());
        dispatch(closeCategory());
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
