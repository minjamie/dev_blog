import StoryCard from "Components/Card/StoryCard/StoryCard";
import "App.css";
import posts from "Assets/dummy/Post";
import { useState } from "react";
import { StoryPage, StoryList } from "./Story.styles";

export default function Story(props: any) {
    const [data, setData] = useState(posts);
    return (
        <StoryPage>
            <StoryList>
                {posts.map((a: any, index: any) => {
                    return <StoryCard key={index} data={data[index]} />;
                })}
            </StoryList>
        </StoryPage>
    );
}
