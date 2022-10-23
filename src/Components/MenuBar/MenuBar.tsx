import React from "react";
import {
    MenuBarWrapper,
    MenuBarContainer,
    MenuBarCategoryLeft,
    MenuBarCategoryRight,
    CategoryTitle,
    Category,
} from "./MenuBar.styles";

export default function MenuBar(props: any) {
    const meta = { number: 13, category: props.category };
    return (
        <MenuBarWrapper>
            <MenuBarContainer>
                <MenuBarCategoryLeft>
                    <CategoryTitle>{meta.category}</CategoryTitle>
                    <Category>Category</Category>
                </MenuBarCategoryLeft>
                <MenuBarCategoryRight>
                    <CategoryTitle>{meta.number}</CategoryTitle>
                    <Category>Article</Category>
                </MenuBarCategoryRight>
            </MenuBarContainer>
        </MenuBarWrapper>
    );
}
