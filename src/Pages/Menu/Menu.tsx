import { useState } from "react";
import { CultureList, MenuPage, TechList } from "./Menu.styles";
import MenuBar from "Components/MenuBar/MenuBar";
import "App.css";
import Card from "Components/Card/Card";
import posts from "Assets/dummy/Post";
import CategoryBar from "Components/CategoryBar/CategoryBar";
import Story from "Pages/Story/Story";
import Culture from "Pages/Culture/Culture";
import Tech from "Pages/Tech/Tech";

export default function Menu(props: any) {
    const [data, setData] = useState(posts);
    return (
        <MenuPage>
            {props.category.id !== 2 ? (
                <MenuBar category={props.category.name} />
            ) : (
                <CategoryBar category={props.category.name} />
            )}
            {props.category.name === "Story" ? (
                <Story></Story>
            ) : props.category.name === "Tech" ? (
                <Tech></Tech>
            ) : (
                <Culture></Culture>
            )}
        </MenuPage>
    );
}
