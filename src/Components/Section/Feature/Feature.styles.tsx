import styled from "styled-components";

const FeatureArea = styled.section`
    width: 100vw;
    height: auto;
    background: aliceblue;
    margin-left: auto;
    padding-top: 0.5rem;
    padding-bottom: 4rem;
`;

const FeatureContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`;

const FeatureWrapper = styled.div``;

const FeatureTaps = styled.div`
    width: 90%;
    display: flex;
    font-size: 0;
    padding: 44px 0 24px 15px;
`;
const FeatureTapButton = styled.button`
    z-index: 1;
    padding: 4px 16px;
    margin: 0 2px 2px 0;
    font-size: 15px;
    font-weight: 500;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    margin-right: 10px;
    font-weight: 500;
    color: #1f98f4;
    outline: none;
    border: none;
    border-radius: 12px;
    background: white;
`;

const FeatureList = styled.div`
    display: flex;
    flex-direction: row;
`;

export {
    FeatureArea,
    FeatureContainer,
    FeatureWrapper,
    FeatureTaps,
    FeatureTapButton,
    FeatureList,
};
