import React, { useState } from "react";
import {
    CategoryBarWrapper,
    CategoryBarContainer,
    CategoryHash,
    CategoryTitle,
    CategoryBarBottom,
} from "./CategoryBar.styles";

export default function CategoryBar(props: any) {
    const hash = [
        { title: "전체", count: null },
        { title: "#Application & Library", count: 1 },
        { title: "#프레임워크", count: 1 },
        { title: "분산처리 & Library", count: 1 },
        { title: "#WEB", count: 1 },
        { title: "#Data Analytics", count: 1 },
        { title: "#시각화", count: 1 },
        { title: "#Cloud", count: 1 },
        { title: "#가상화", count: 1 },
        { title: "#DB", count: 1 },
        { title: "#OS", count: 1 },
        { title: "#SW 공학", count: 1 },
        { title: "#퍼블릭 클라우드", count: 1 },
    ];
    const [click, setClick] = useState(false);
    const meta = { number: 13, category: props.category };
    return (
        <CategoryBarWrapper>
            <CategoryBarContainer>
                <CategoryTitle>{meta.category}</CategoryTitle>
                <CategoryBarBottom>
                    {hash.map((a, index) => {
                        return (
                            <CategoryHash active={click} key={index}>
                                {hash[index].title}
                                {hash[index].count && `(${hash[index].count})`}
                            </CategoryHash>
                        );
                    })}
                </CategoryBarBottom>
            </CategoryBarContainer>
        </CategoryBarWrapper>
    );
}
