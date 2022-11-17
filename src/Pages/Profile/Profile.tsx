import { GlobalStyle } from "Styles/global.styles";
import {
    ProfileImage,
    ProfileImageWrapper,
    ProfileInfoWrapper,
    ProfileLeft,
    ProfilePage,
    ProfileRight,
} from "./Profile.styles";

export default function Profile() {
    const my = {
        src: "https://velog.velcdn.com/images/minj9_6/profile/f8889f8f-fa44-4ef3-984c-616c55410ad5/P20200203_225352227_66B88E27-7A21-4EC5-987F-0B0457A4AA0C.jpeg",
        nickName: "minjae2246",
        name: "김민재",
        introduce: "안녕하세요",
    };

    return (
        <ProfilePage>
            <GlobalStyle></GlobalStyle>
            <ProfileLeft>
                <ProfileImageWrapper>
                    <ProfileImage src={my.src}></ProfileImage>
                </ProfileImageWrapper>
            </ProfileLeft>
            <ProfileRight>
                프로필
                <ProfileInfoWrapper></ProfileInfoWrapper>
            </ProfileRight>
        </ProfilePage>
    );
}
