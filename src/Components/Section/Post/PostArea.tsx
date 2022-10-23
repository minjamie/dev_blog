import posts from "Assets/dummy/Post";
import Card from "Components/Card/Card";
import React, { useState } from "react";
import {
    PostArea,
    PostContainer,
    PostList,
    PostWrapper,
} from "./PostArea.styles";

export default function Post() {
    const [data, setData] = useState(posts);
    return (
        <PostArea>
            <PostContainer>
                <PostWrapper>
                    <PostList>
                        {posts.map((a: any, index: any) => {
                            return <Card key={index} data={data[index]} />;
                        })}
                    </PostList>
                </PostWrapper>
            </PostContainer>
        </PostArea>
    );
}
