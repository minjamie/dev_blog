import styled, { keyframes } from "styled-components";

const SearchContainer = styled.div<{
    expand: boolean;
}>`
    background: white;
    margin: 0 auto;
    padding: 10px;
    background-color: white;
    position: fixed;
    width: 100%;
    height: 100px;
    top: 80px;
    z-index: 1;
    overflow: hidden;
    -webkit-transition: all 0.3s;
    /* transform: ${(props: any) =>
        props.expand ? "translate3d(0, 0, 0)" : "translate3d(0, -100%, 0);"}; */
    visibility: ${(props: any) => (props.expand ? "visible" : "hidden")};
    border-bottom: ${(props) =>
        props.expand ? "1px solid rgba(0, 0, 0, 0.1)" : null};
    box-shadow: ${(props) =>
        props.expand ? "0 2px 5px -1px rgba(0, 0, 0, 0.08);" : null};
    animation: ${(props: any) => (props.expand ? FadeUp : FadeDown)} all 1s;
`;

const FadeUp = keyframes`
        from {
            opacity: 0;
            transform: translate3d(0, 0, 0);
        }
        to {
            opacity: 1;
        }
`;

const FadeDown = keyframes`
        from {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
`;

const SearchFrom = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
`;

const SearchInput = styled.input<{
    type: string;
    placeholder: string;
    expand: boolean;
}>`
    width: 1170px;
    height: 80px;
    border: none;
    outline: none;
    font-size: 30px;
    ::-webkit-search-decoration,
    ::-webkit-search-cancel-button,
    ::-webkit-search-results-button,
    ::-webkit-search-results-decoration {
        display: none;
    }
`;

export { SearchContainer, SearchFrom, SearchInput };
