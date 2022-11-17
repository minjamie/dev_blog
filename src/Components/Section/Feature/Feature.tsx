import feature from "Assets/dummy/Feature";
import Card from "Components/Card/Card";
import SkeletonCard from "Components/SkeletonCard/SkeletonCard";
import { useEffect, useState } from "react";
import { GlobalStyle } from "Styles/global.styles";
import {
    FeatureArea,
    FeatureContainer,
    FeatureList,
    FeatureTapButton,
    FeatureTaps,
    FeatureWrapper,
} from "./Feature.styles";

export default function Feature(props: any) {
    const [data, setData] = useState(feature);
    const [loading, setLoading] = useState(1);

    console.log(props.sectionCategory);
    useEffect(() => {
        setTimeout(() => {
            setLoading(0);
        }, 500);
    });
    return (
        <FeatureArea>
            <GlobalStyle></GlobalStyle>
            <FeatureContainer>
                <FeatureWrapper>
                    <FeatureTaps>
                        <FeatureTapButton>Featured</FeatureTapButton>
                        <br></br>
                        <FeatureTapButton>Popular</FeatureTapButton>
                    </FeatureTaps>
                    <FeatureList>
                        {feature.map((a: any, index: any) => {
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
                                    data={feature[index]}
                                    cardIndex={index}
                                    sectionCategory={props.sectionCategory}
                                    cardLength={data.length}
                                />
                            );
                        })}
                    </FeatureList>
                </FeatureWrapper>
            </FeatureContainer>
        </FeatureArea>
    );
}
