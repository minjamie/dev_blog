import { useState } from "react";
import { TechList, TechPage } from "./Tech.styles";
import "App.css";
import Card from "Components/Card/Card";
import posts from "Assets/dummy/Post";

export default function Tech(props: any) {
    const [data, setData] = useState(posts);
    return (
        <TechPage>
            <TechList>
                {posts.map((a: any, index: any) => {
                    return <Card key={index} data={data[index]} />;
                })}
            </TechList>
        </TechPage>
    );
}
