import styled from "styled-components";

const WritePage = styled.div`
    position: fixed;
    right: 0;
    left: 0;
`;
const WriteTitleAndTagWrapper = styled.div`
    height: 5vh;
    display: flex;
    align-items: center;
    padding: 3rem 1rem;
`;

const WriteTitleInput = styled.input`
    padding-left: 1.5rem;
    font-weight: 700;
    font-size: 2.5rem;
    width: 50%;
    border: none;
    outline: none;
    border-right: 1.5px solid #f5f6f8;
`;
const WriteTagInputWrapper = styled.div`
    width: 50%;
    flex-wrap: wrap;
    display: flex;
`;
const WriteTagInput = styled.input`
    margin-top: 1rem;
    padding-left: 1.5rem;
    font-weight: 700;
    border: none;
    outline: none;
`;

const WriteTagWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const WriteTag = styled.span`
    white-space: nowrap;
    margin-left: 1rem;
    margin-top: 1rem;
    color: #00a8ff;
    background-color: #f6f9fc;
    border: none;
    outline: none;
    padding: 0.2rem 1rem;
    border-radius: 0.7rem;
`;

const WriteButtonWrapper = styled.div`
    background-color: #f6f9fc;
    display: flex;
    justify-content: space-between;
    height: 5vh;
    align-items: center;
    padding: 0 2rem;
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
