import "App.css";
import story from "Assets/dummy/Story";
import StoryCard from "Components/Card/StoryCard/StoryCard";
import { useState } from "react";
import { StoryList, StoryPage } from "./Story.styles";

export default function Story(props: any) {
    const [data, setData] = useState(story);
    return (
        <StoryPage>
            <StoryList cardLength={data.length}>
                {story.map((a: any, index: any) => {
                    return (
                        <StoryCard
                            key={index}
                            data={data[index]}
                            cardLength={data.length}
                        />
                    );
                })}
            </StoryList>
        </StoryPage>
    );
}
