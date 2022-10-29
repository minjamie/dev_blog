import styled from "styled-components";
import { media } from "Styles/media.styles";

const FeatureArea = styled.section`
    background-color: #011641;
    padding: 4rem;
`;

const FeatureContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    height: auto;
    margin: 0 auto;
`;

const FeatureWrapper = styled.div`
    width: 100%;
    height: auto;
`;

const FeatureTaps = styled.div`
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 2rem 1rem;
    ${media.laptop`  
    `}
    ${media.mobile`  
    `}
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
    text-align: center;
    ${media.laptop`  
        flex-flow: row wrap;
    `}
    ${media.mobile`  
`}
`;

export {
    FeatureArea,
    FeatureContainer,
    FeatureWrapper,
    FeatureTaps,
    FeatureTapButton,
    FeatureList,
};
