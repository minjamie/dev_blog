import "./Icon.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faTimes,
    faBars,
    faX,
} from "@fortawesome/free-solid-svg-icons";
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
import { FaBars } from "react-icons/fa";

function Navbar() {
    const [click, setClick] = useState(false);
    const [clickSearch, setSearchClick] = useState(true);
    const [button, setButton] = useState(true);
    const [scroll, setScroll] = useState(false);

    console.log(clickSearch);
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
                {/* <FontAwesomeIcon
                    className="Menu-Search"
                    icon={clickSearch ? faMagnifyingGlass : faX}
                    onClick={handleSearchClick}
                    size="10x"
                /> */}
                <FaBars />
            </NavBarContainer>
        </NavBar>
    );
}

export default Navbar;
