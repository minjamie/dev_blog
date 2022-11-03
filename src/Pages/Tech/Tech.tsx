import "App.css";
import Post from "Components/Section/Post/PostArea";
import { TechList, TechPage } from "./Tech.styles";

export default function Tech(props: any) {
    return (
        <TechPage>
            <TechList>
                <Post sectionCategory={"post"}></Post>
            </TechList>
        </TechPage>
    );
}
