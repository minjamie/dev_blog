import MenuBar from "Components/MenuBar/MenuBar";
import "App.css";
import { MenuPage, StoryList, TechList } from "./Menu.styles";
import Card from "Components/Card/Card";
import posts from "Assets/dummy/Post";
import { useState } from "react";
import Story from "Components/Story/Story";

export default function Menu(props: any) {
    const [data, setData] = useState(posts);
    return (
        <MenuPage>
            <MenuBar category={props.category}></MenuBar>
            {props.category === "Story" ? (
                <StoryList>
                    {posts.map((a: any, index: any) => {
                        return <Story key={index} data={data[index]} />;
                    })}
                </StoryList>
            ) : (
                <TechList>
                    {posts.map((a: any, index: any) => {
                        return <Card key={index} data={data[index]} />;
                    })}
                </TechList>
            )}
        </MenuPage>
    );
}
