import "App.css";
import CategoryBar from "Components/CategoryBar/CategoryBar";
import MenuBar from "Components/MenuBar/MenuBar";
import Culture from "Pages/Culture/Culture";
import Story from "Pages/Story/Story";
import Tech from "Pages/Tech/Tech";
import { MenuPage } from "./Menu.styles";

export default function Menu(props: any) {
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
