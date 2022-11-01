import posts from "Assets/dummy/Post";
import Card from "Components/Card/Card";
import React, { useState } from "react";
import {
    PostArea,
    PostContainer,
    PostList,
    PostWrapper,
} from "./PostArea.styles";

export default function Post(props: any) {
    const [data, setData] = useState(posts);
    props.sectionCategory;
    return (
        <PostArea>
            <PostContainer>
                <PostWrapper>
                    <PostList cardLength={data.length}>
                        {posts.map((a: any, index: any) => {
                            return (
                                <Card
                                    key={index}
                                    data={data[index]}
                                    cardLength={data.length}
                                    sectionCategory={props.sectionCategory}
                                    cardIndex={index}
                                />
                            );
                        })}
                    </PostList>
                </PostWrapper>
            </PostContainer>
        </PostArea>
    );
}
