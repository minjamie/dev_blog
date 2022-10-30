import "./Icon.css";
import { FC } from "react";
import {
    FooterBar,
    FooterBarContainer,
    FooterBarTop,
    FooterBarMenuItem,
    FooterBarMenuLink,
    FooterBarMenuList,
    FooterBarBottom,
    FooterBarTitle,
    FooterBarMenuIcon,
} from "./Footer.styles";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const Footerbar: FC<any> = (props) => {
    console.log(props.footerMenu);
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
