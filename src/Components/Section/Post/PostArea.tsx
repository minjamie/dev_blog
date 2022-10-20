import { dummy } from "Assets/dummy/dummy";
import Card from "Components/Card/Card";
import React, { useState } from "react";
import {
    PostArea,
    PostContainer,
    PostList,
    PostWrapper,
} from "./PostArea.styles";

export default function Post() {
    const [data, setData] = useState(dummy);
    console.log(data);
    return (
        <PostArea>
            <PostContainer>
                <PostWrapper>
                    <PostList>
                        {dummy.slice(0, 3).map((a, index) => {
                            return <Card key={index} data={data[index]} />;
                        })}
                    </PostList>
                    <PostList>
                        {dummy.slice(3, 6).map((a, index) => {
                            return <Card key={index} data={data[index]} />;
                        })}
                    </PostList>
                </PostWrapper>
            </PostContainer>
        </PostArea>
    );
}
