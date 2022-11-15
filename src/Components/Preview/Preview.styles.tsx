import styled from "styled-components";
import { media } from "Styles/media.styles";

const PreviewPage = styled.div<{ click: boolean }>`
    bottom: 0px;
    background-color: #f6f9fc;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    transition: ease all 0.3s;
    position: fixed;
    top: 0;
    bottom: 0;
    transform: ${(props: any) =>
        props.click ? "translateY(0%)" : "translateY(100%)"};
`;

const PreviewContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    ${media.tablet`  
    padding: 1.5rem;
    justify-content: flex-start;
 flex-direction: column;
 `}
`;
const PreviewLeft = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 2rem;
    ${media.tablet`  
    width: 100%;
    padding-right: 0;
    `};
`;

const PreviewTitle = styled.h5`
    font-weight: 700;
    font-size: 1.5rem;
`;

const PreviewThumbnail = styled.div`
    width: 320px;
    height: 200px;
    background-color: #e9ecef;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    ${media.laptop`  
    width: 300px;
    height: 180px;
    `}
    ${media.tablet`  
    width: 100%;
    height: 270px;
`}
`;

const PreviewIntroduce = styled.textarea`
    width: 100%;
    resize: none;
    border: none;
    outline: none;
    box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
    background: white;
    line-height: 1.5;
    font-size: 0.875rem;
    height: 7.375rem;
    padding: 0.75rem 1rem;
    margin-top: 0.5rem;
    padding-left: 1rem;
    font-weight: 700;
`;

const PreviewIntroduceCount = styled.span`
    padding: 0.3rem 0.2rem;
    white-space: nowrap;
    color: #00a8ff;
    display: flex;
    justify-content: flex-end;
`;
const PreviewRight = styled.div<{ isFucus: boolean }>`
    display: flex;
    flex-direction: column;
    height: ${(props: any) => (props.isFucus ? "500px" : "400px")};
    width: 400px;
    border-left: 1px solid gray;
    padding-left: 2rem;
    ${media.laptop`  
        height: 380px;
        width: 350px;
    `}
    ${media.tablet`  
        width: 100%;
        padding-left: 0;
        border-left:none
`}
`;
const PreviewOpenSettingWrapper = styled.section`
    padding-bottom: 1.5rem;
`;
const PreviewPathWrapper = styled(PreviewOpenSettingWrapper)``;
const PreviewSavePositionWrapper = styled(PreviewOpenSettingWrapper)``;
const PreviewButtonWrapper = styled.div<{ isSave: boolean }>`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: ${(props: any) => (props.isSave ? "1.5rem" : "2rem")};
`;

const PreviewOpenSettingTitle = styled.h5`
    font-weight: 700;
    font-size: 1.4rem;
    padding-bottom: 0.5rem;
`;

const PreviewOpenSettingButtonWrapper = styled.div`
    display: flex;
`;
const PreviewSaveTitle = styled(PreviewOpenSettingTitle)``;
const PreviewPathTitle = styled(PreviewOpenSettingTitle)``;

const PreviewPathAndDefaultWrapper = styled.div`
    background-color: white;
    box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
    display: flex;
    align-items: center;
`;

const PreviewPath = styled.input`
    border: none;
    outline: none;
    width: 100%;
    padding: 0.5rem 0;
`;

const PreviewPathDefault = styled.span`
    padding-left: 1rem;
    white-space: nowrap;
    color: #00a8ff;
`;

const PreviewSavePositionInputWrapper = styled.div<{ isFucus: boolean }>`
    background-color: #e9ecef;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: ${(props: any) => (props.isFucus ? "9rem" : "4rem")};
`;

const PreviewSavePosition = styled.input<{ isFucus: boolean }>`
    width: 340px;
    height: 32px;
    padding: 1rem 1rem;
    border: none;
    outline: none;
    margin-bottom: ${(props: any) => (props.isFucus ? "0.5rem" : 0)};
`;

const PreviewSavePositionPathContainer = styled.div`
    width: 340px;
`;

const PreviewSavePositionPathWrapper = styled.div`
    display: flex;
    background-color: white;
    animation-duration: 0.125s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    align-items: center;
`;

const PreviewSavePositionPathDefault = styled.span`
    padding-left: 1rem;
    white-space: nowrap;
    color: #00a8ff;
    background-color: white;
`;

const PreviewSavePositionPathDefaultInput = styled.input`
    height: 32px;
    border: none;
    outline: none;
`;

const PreviewSavePositionButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
`;
const PreviewSavePositionCancelButton = styled.button`
    background-color: #e9ecef;
    border: none;
    outline: none;
`;
const PreviewSavePositionRegisterButton = styled.button`
    color: white;
    border: none;
    outline: none;
    margin-left: 1rem;
    border-radius: 0.25rem;
    padding: 0.2rem 0.7rem;
    background-color: #00a8ff;
`;
export {
    PreviewPage,
    PreviewContainer,
    PreviewLeft,
    PreviewTitle,
    PreviewThumbnail,
    PreviewIntroduce,
    PreviewSaveTitle,
    PreviewIntroduceCount,
    PreviewRight,
    PreviewOpenSettingTitle,
    PreviewPathTitle,
    PreviewPath,
    PreviewButtonWrapper,
    PreviewOpenSettingWrapper,
    PreviewPathWrapper,
    PreviewSavePositionWrapper,
    PreviewPathDefault,
    PreviewPathAndDefaultWrapper,
    PreviewOpenSettingButtonWrapper,
    PreviewSavePositionInputWrapper,
    PreviewSavePosition,
    PreviewSavePositionPathWrapper,
    PreviewSavePositionPathDefault,
    PreviewSavePositionPathDefaultInput,
    PreviewSavePositionButtonWrapper,
    PreviewSavePositionPathContainer,
    PreviewSavePositionCancelButton,
    PreviewSavePositionRegisterButton,
};
