import styled from "styled-components";
import { media } from "Styles/media.styles";

const ProfilePage = styled.div`
    padding: 0 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--main-background-color);
`;

const ProfileLeft = styled.section`
    width: 30%;
    background-color: rebeccapurple;
`;

const ProfileImageWrapper = styled.div``;
const ProfileImage = styled.img`
    width: 100%;
    display: block;
    width: 210px;
    height: 50px;
`;
const ProfileInfoWrapper = styled.div``;
const ProfileInfoEditorButton = styled.button`
    background-color: #e9ecef;
    border: none;
    outline: none;
`;

const ProfileRight = styled.section`
    width: 70%;
    background-color: rebeccapurple;
`;

export {
    ProfilePage,
    ProfileLeft,
    ProfileRight,
    ProfileImageWrapper,
    ProfileImage,
    ProfileInfoWrapper,
    ProfileInfoEditorButton,
};
