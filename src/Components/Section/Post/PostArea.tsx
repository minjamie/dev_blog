import posts from "Assets/dummy/Post";
import Card from "Components/Card/Card";
import PaginationComponent from "Components/Pagination/Pagination";
import SkeletonCard from "Components/SkeletonCard/SkeletonCard";
import { useEffect, useState } from "react";
import {
    PostArea,
    PostContainer,
    PostList,
    PostWrapper,
} from "./PostArea.styles";

export default function Post(props: any) {
    const [data, setData] = useState(posts);
    const [loading, setLoading] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setLoading(0);
        }, 500);
    });
    return (
        <PostArea>
            <PostContainer>
                <PostWrapper>
                    <PostList cardLength={data.length}>
                        {posts.map((a: any, index: any) => {
                            return loading ? (
                                <SkeletonCard
                                    key={index}
                                    sectionCategory={props.sectionCategory}
                                    cardLength={data.length}
                                    cardIndex={index}
                                />
                            ) : (
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
                <PaginationComponent />
            </PostContainer>
        </PostArea>
    );
}
