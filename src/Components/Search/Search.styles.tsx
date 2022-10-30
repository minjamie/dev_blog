import styled, { keyframes } from "styled-components";
import { media } from "Styles/media.styles";

const SearchContainer = styled.div<{
    expand: boolean;
}>`
    background-color: white;
    position: fixed;
    width: 100%;
    height: 100px;
    left: 0;
    top: 80px;
    z-index: 1;
    padding: 0 6rem 0 5rem;
    transition: ${(props) => (props.expand ? "all 0.25s ease-out" : null)};
    border-bottom: ${(props) =>
        props.expand ? "1px solid rgba(0, 0, 0, 0.1)" : null};
    box-shadow: ${(props) =>
        props.expand ? "0 2px 5px -1px rgba(0, 0, 0, 0.08);" : null};
    visibility: ${(props: any) => (props.expand ? "visible" : "hidden")};
    animation: ${(props: any) => (props.expand ? FadeUp : FadeDown)} all 1s;
    ${media.laptop`  
        padding: 0 5.4rem 0 5rem;
`}
`;

const FadeUp = keyframes`
        from {
            opacity: 0;
            transform: translate3d(0, 0, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
      }
`;

const FadeDown = keyframes`
        from {
            opacity: 0;
            transform: translate3d(0, 0.1%, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
`;

const SearchFrom = styled.form`
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 1155px;
`;

const SearchInput = styled.input<{
    type: string;
    placeholder: string;
    expand: boolean;
}>`
    width: 100%;
    height: 80px;
    font-size: 30px;
    border: none;
    outline: none;
`;

export { SearchContainer, SearchFrom, SearchInput };
