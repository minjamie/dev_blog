import React from "react";
import Feature from "./Feature/Feature";
import Highlight from "./Highlight/Highlight";
import Post from "./Post/PostArea";
import { SectionContainer } from "./Section.styles";

export default function Section() {
    const sectionCategory = ["highlight", "feature", "post"];
    return (
        <SectionContainer>
            <Highlight sectionCategory={sectionCategory[0]}></Highlight>
            <Feature sectionCategory={sectionCategory[1]}></Feature>
            <Post sectionCategory={sectionCategory[2]}></Post>
        </SectionContainer>
    );
}
