import styled from "styled-components";

const WritePage = styled.div`
    position: fixed;
    right: 0;
    left: 0;
`;
const WriteTitleAndTagWrapper = styled.div`
    height: 7vh;
    display: flex;
    align-items: center;
    padding: 2rem 1rem;
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

const WriteTagInput = styled.textarea`
    padding-left: 1.5rem;
    font-weight: 700;
    width: 50%;
    border: none;
    outline: none;
`;

const WriteButtonWrapper = styled.div`
    background-color: black;
    height: 12vh;
`;
const WriteRegisterButton = styled.button``;
const WriteSaveButton = styled.button``;
const WriteExitButton = styled.button``;

export {
    WritePage,
    WriteTitleAndTagWrapper,
    WriteTitleInput,
    WriteTagInput,
    WriteButtonWrapper,
    WriteRegisterButton,
    WriteSaveButton,
    WriteExitButton,
};
