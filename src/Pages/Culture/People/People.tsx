import "App.css";
import { PeopleList, PeoplePage } from "./People.styles";
import posts from "Assets/dummy/Post";
import { useState } from "react";
import Card from "Components/Card/Card";
import { useParams } from "react-router-dom";

export default function People(props: any) {
    const [data, setData] = useState(posts);
    const { id } = useParams();
    return (
        <PeoplePage>
            <PeopleList>
                {posts.map((a: any, index: any) => {
                    return <Card key={index} data={data[index]} />;
                })}
            </PeopleList>
        </PeoplePage>
    );
}
