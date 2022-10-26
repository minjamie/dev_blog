import "./Icon.css";
import { useState, useEffect, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars, faX } from "@fortawesome/free-solid-svg-icons";
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
import { TfiClose, TfiSearch } from "react-icons/tfi";
import { Search } from "Components/Search/Search";
import { media } from "Styles/media.styles";

const Navbar: FC<any> = (props) => {
    const [click, setClick] = useState(false);
    const [clickSearch, setSearchClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => setClick(!click);
    const handleSearchClick = () => setSearchClick(!clickSearch);
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 10) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
    });

    return (
        <NavBar>
            <NavBarContainer shadow={scroll}>
                <NavBarLogoLink href="/" onClick={closeMobileMenu}>
                    <NavBarLogo src={logoSrc} />
                </NavBarLogoLink>
                <NavBarMenuIcon onClick={handleClick}>
                    <FontAwesomeIcon
                        className="Menu-Bar"
                        icon={click ? faTimes : faBars}
                    />
                </NavBarMenuIcon>
                <NavBarMenuList active={click}>
                    {props.category.map((a: any, index: any) => {
                        return (
                            <NavBarMenuItem key={index}>
                                <NavBarMenuLink
                                    href={`${props.category[index].name}`}
                                    onClick={closeMobileMenu}
                                >
                                    {props.category[index].name}
                                </NavBarMenuLink>
                            </NavBarMenuItem>
                        );
                    })}
                </NavBarMenuList>
                {clickSearch == true ? (
                    <TfiClose
                        className="Menu-Search"
                        onClick={handleSearchClick}
                    />
                ) : (
                    <TfiSearch
                        className="Menu-Search"
                        onClick={handleSearchClick}
                        style={{}}
                    />
                )}
                <Search
                    type="text"
                    placeholder="search.."
                    onClick={handleSearchClick}
                    expand={clickSearch}
                />
            </NavBarContainer>
        </NavBar>
    );
};

export default Navbar;
