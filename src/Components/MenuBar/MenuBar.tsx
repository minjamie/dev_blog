import {
    Category,
    CategoryMeta,
    CategoryTitle,
    MenuBarCategoryCenter,
    MenuBarCategoryLeft,
    MenuBarCategoryRight,
    MenuBarContainer,
    MenuBarWrapper,
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
                <MenuBarCategoryCenter />
                <MenuBarCategoryRight>
                    <CategoryMeta>{meta.number}</CategoryMeta>
                    <Category>Articles</Category>
                </MenuBarCategoryRight>
            </MenuBarContainer>
        </MenuBarWrapper>
    );
}
