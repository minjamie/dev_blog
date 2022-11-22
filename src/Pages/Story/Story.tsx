import "App.css";
import story from "Assets/dummy/Story";
import StoryCard from "Components/Card/StoryCard/StoryCard";
import StorySkeletonCard from "Components/SkeletonCard/StoryCard/StorySkeletonCard";
import { useEffect, useState } from "react";
import { StoryList, StoryPage } from "./Story.styles";

export default function Story(props: any) {
    const [data, setData] = useState(story);
    const [loading, setLoading] = useState(1);

    useEffect(() => {
        // setTimeout(() => {
        //     setLoading(0);
        // }, 500);
    });
    return (
        <StoryPage>
            <StoryList cardLength={data.length}>
                {story.map((a: any, index: any) => {
                    return loading ? (
                        <StorySkeletonCard
                            key={index}
                            sectionCategory={props.sectionCategory}
                            cardIndex={index}
                        />
                    ) : (
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
