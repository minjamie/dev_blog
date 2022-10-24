import MenuBar from "Components/MenuBar/MenuBar";
import "App.css";
import { CultureList, CulturePage } from "./Culture.styles";
import posts from "Assets/dummy/Post";
import { useState } from "react";
import CultureCard from "Components/Card/CultureCard/CultureCard";

export default function Culture(props: any) {
    const [data, setData] = useState(posts);
    return (
        <CulturePage>
            <CultureList>
                {posts.map((a: any, index: any) => {
                    return <CultureCard key={index} data={data[index]} />;
                })}
            </CultureList>
        </CulturePage>
    );
}
