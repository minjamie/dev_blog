import React from "react";
import Feature from "./Feature/Feature";
import Highlight from "./Highlight/Highlight";
import Post from "./Post/PostArea";
import { SectionContainer } from "./Section.styles";

export default function Section() {
    return (
        <SectionContainer>
            <Highlight></Highlight>
            <Feature></Feature>
            <Post></Post>
        </SectionContainer>
    );
}
