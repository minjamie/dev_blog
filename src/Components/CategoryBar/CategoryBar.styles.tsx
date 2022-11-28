import styled from "styled-components";
import { media } from "Styles/media.styles";

const CategoryBarWrapper = styled.div<{ category: string }>`
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    background-color: #f4f6f8;
    padding-top: ${(props: any) => (props.category ? "82px" : null)};
    ${media.laptop`
        margin: 0;
    `}
`;

const CategoryBarContainer = styled.div<{ category: string }>`
    flex-shrink: 1;
    width: 100%;
    padding-top: ${(props: any) => (props.category ? "4rem" : "1rem")};
    ${media.laptop`
    padding-right: 1.5rem;
      padding-left:${(props: any) => (props.category ? "1.5rem" : null)};
    `}
`;

const CategoryTitle = styled.h1<{ category: string }>`
    font-size: ${(props: any) => (props.category ? "35px" : "1.3rem")};
    font-weight: ${(props: any) => (props.category ? null : "bolder")};
    height: ${(props: any) => (props.category ? "50px" : "30px")};
    padding-bottom: 8px;
    margin: 0;
`;

const CategoryHash = styled.a<{ active: boolean; category: string }>`
    text-decoration: none;
    display: ${(props: any) => (props.category ? "inline-block" : "block")};
    width: fit-content;
    border: 1px solid #ddd;
    margin: 5px 3px;
    padding: 3px 6px;
    color: #222;
    background-color: white;
    font-weight: 300;
    :hover {
        color: #fff;
        background-color: #1f98f4;
        border-color: #1f98f4;
    }
    ${media.laptop`
        display: inline-block;
    `}
`;

const CategoryBarBottom = styled.div``;

export {
    CategoryBarWrapper,
    CategoryBarContainer,
    CategoryTitle,
    CategoryHash,
    CategoryBarBottom,
};
