import { FC } from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import {
    FooterBar,
    FooterBarBottom,
    FooterBarContainer,
    FooterBarMenuIcon,
    FooterBarMenuItem,
    FooterBarMenuLink,
    FooterBarMenuList,
    FooterBarTitle,
    FooterBarTop,
    FooterTopCenter,
} from "./Footer.styles";
import "./Icon.css";

const Footerbar: FC<any> = (props) => {
    return (
        <FooterBar>
            <FooterBarContainer>
                <FooterBarTop>
                    <FooterBarMenuList>
                        {props.footerMenu.map((a: any, index: any) => {
                            return (
                                <FooterBarMenuItem key={index}>
                                    <FooterBarMenuLink>
                                        {props.footerMenu[index].name}
                                    </FooterBarMenuLink>
                                </FooterBarMenuItem>
                            );
                        })}
                    </FooterBarMenuList>
                    <FooterTopCenter />
                    <FooterBarMenuIcon>
                        <AiFillFacebook className="Menu-Facebook"></AiFillFacebook>
                        <AiFillInstagram className="Menu-Instagram"></AiFillInstagram>
                    </FooterBarMenuIcon>
                </FooterBarTop>
                <FooterBarBottom>
                    <FooterBarTitle>
                        © UBcare Inc. All Rights Reserved.
                    </FooterBarTitle>
                </FooterBarBottom>
            </FooterBarContainer>
        </FooterBar>
    );
};

export default Footerbar;
