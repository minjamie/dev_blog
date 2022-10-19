import "./Icon.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Button } from "Components/Button/Button";
import {
    NavBar,
    NavBarContainer,
    NavBarLogo,
    NavBarLogoLink,
    NavBarMenuIcon,
    NavBarMenuItem,
    NavBarMenuLink,
    NavBarMenuList,
    NavBarMenuMobileLink,
} from "./Nav.styles";
import logoSrc from "Assets/Images/ub_devblog_logo.png";
import { TfiClose, TfiSearch } from "react-icons/tfi";
import { SearchInput } from "Components/Search/Search.styles";
import { Search } from "Components/Search/Search";

function Navbar() {
    const [click, setClick] = useState(false);
    const [clickSearch, setSearchClick] = useState(false);
    const [button, setButton] = useState(true);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => setClick(!click);
    const handleSearchClick = () => setSearchClick(!clickSearch);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 10) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
    });

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

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
                    <NavBarMenuItem>
                        <NavBarMenuLink href="/Stroy" onClick={closeMobileMenu}>
                            Stroy
                        </NavBarMenuLink>
                    </NavBarMenuItem>
                    <NavBarMenuItem>
                        <NavBarMenuLink href="/Tech" onClick={closeMobileMenu}>
                            Tech
                        </NavBarMenuLink>
                    </NavBarMenuItem>
                    <NavBarMenuItem>
                        <NavBarMenuLink
                            href="/Culture"
                            onClick={closeMobileMenu}
                        >
                            Culture
                        </NavBarMenuLink>
                    </NavBarMenuItem>
                    <NavBarMenuItem>
                        <NavBarMenuMobileLink
                            href="/sign-up"
                            onClick={closeMobileMenu}
                        >
                            Sign Up
                        </NavBarMenuMobileLink>
                    </NavBarMenuItem>
                </NavBarMenuList>
                {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
                {clickSearch == true ? (
                    <TfiClose
                        className="Menu-Search"
                        onClick={handleSearchClick}
                    />
                ) : (
                    <TfiSearch
                        className="Menu-Search"
                        onClick={handleSearchClick}
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
}

export default Navbar;
