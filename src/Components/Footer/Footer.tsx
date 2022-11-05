import { FC } from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import {
    FooterBar,
    FooterBarContainer,
    FooterBarLeft,
    FooterBarMenuIcon,
    FooterBarMenuItem,
    FooterBarMenuLink,
    FooterBarMenuList,
    FooterBarTitle,
    FooterBarTopContent,
    FooterBarWrapper,
} from "./Footer.styles";
import "./Icon.css";

const Footerbar: FC<any> = (props) => {
    return (
        <FooterBar>
            <FooterBarContainer>
                <FooterBarWrapper>
                    <FooterBarTopContent>
                        <FooterBarLeft>
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
                            <FooterBarTitle>
                                © UBcare Inc. All Rights Reserved.
                            </FooterBarTitle>
                        </FooterBarLeft>
                        <FooterBarMenuIcon>
                            <AiFillFacebook className="Menu-Facebook"></AiFillFacebook>
                            <AiFillInstagram className="Menu-Instagram"></AiFillInstagram>
                        </FooterBarMenuIcon>
                    </FooterBarTopContent>
                </FooterBarWrapper>
            </FooterBarContainer>
        </FooterBar>
    );
};

export default Footerbar;
