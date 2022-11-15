import styled from "styled-components";

const WritePage = styled.div``;
const WriteTitleAndTagWrapper = styled.div`
    height: auto;
    align-items: center;
    padding: 1rem;
    height: auto;
`;

const WriteTitleInput = styled.input`
    width: 100%;
    padding-left: 0.7rem;
    font-weight: 700;
    font-size: 2.5rem;
    border: none;
    outline: none;
`;
const WriteTagInputWrapper = styled.div`
    width: auto;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
`;
const WriteTagInput = styled.input`
    padding-left: 1rem;
    font-weight: 700;
    border: none;
    outline: none;
    padding-top: 0.7rem;
    padding-bottom: 0.3rem;
`;

const WriteTagWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const WriteTag = styled.span`
    padding: 0.1rem 0.2rem;
    white-space: nowrap;
    color: #00a8ff;
    background-color: #f6f9fc;
    border: none;
    outline: none;
    border-radius: 0.7rem;
    margin-left: 1rem;
    margin-top: 0.5rem;
`;

const WriteButtonWrapper = styled.div`
    background-color: #f6f9fc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    height: auto;
`;

const WriteRegisterButton = styled.button`
    background-color: #00a8ff;
    border: none;
    outline: none;
    color: white;
    margin-left: 1.5rem;
    border-radius: 0.25rem;
    padding: 0.2rem 0.7rem;
`;

const WriteSaveAndExitButtonWrapper = styled.div``;

const WriteSaveButton = styled.button`
    background-color: #f6f9fc;
    border: none;
    outline: none;
    color: #00a8ff;
`;
const WriteExitButton = styled.button`
    background-color: #f6f9fc;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
`;

export {
    WritePage,
    WriteTitleAndTagWrapper,
    WriteTitleInput,
    WriteTagInputWrapper,
    WriteTagInput,
    WriteTag,
    WriteTagWrapper,
    WriteButtonWrapper,
    WriteRegisterButton,
    WriteSaveButton,
    WriteSaveAndExitButtonWrapper,
    WriteExitButton,
};
