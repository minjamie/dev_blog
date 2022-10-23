import Card from "Components/Card/Card";
import feature from "Assets/dummy/Feature";
import fature from "Assets/dummy/Feature";
import React, { useState } from "react";
import {
    FeatureArea,
    FeatureContainer,
    FeatureWrapper,
    FeatureList,
    FeatureTaps,
    FeatureTapButton,
} from "./Feature.styles";

export default function Feature() {
    const [data, setData] = useState(feature);
    return (
        <FeatureArea>
            <FeatureContainer>
                <FeatureWrapper>
                    <FeatureTaps>
                        <FeatureTapButton>Featured</FeatureTapButton>
                        <br></br>
                        <FeatureTapButton>Popular</FeatureTapButton>
                    </FeatureTaps>
                    <FeatureList>
                        {fature.map((a, index) => {
                            return <Card key={index} data={feature[index]} />;
                        })}
                    </FeatureList>
                </FeatureWrapper>
            </FeatureContainer>
        </FeatureArea>
    );
}
