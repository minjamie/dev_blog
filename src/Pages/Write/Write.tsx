import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { useRef } from "react";
import { FiArrowLeft } from "react-icons/fi";
import "tui-color-picker/dist/tui-color-picker.css";
import fontSize from "tui-editor-plugin-font-size";
import "tui-editor-plugin-font-size/dist/tui-editor-plugin-font-size.css";
import "./Icon.css";
import {
    WriteButtonWrapper,
    WriteExitButton,
    WritePage,
    WriteRegisterButton,
    WriteSaveAndExitButtonWrapper,
    WriteSaveButton,
    WriteTagInput,
    WriteTitleAndTagWrapper,
    WriteTitleInput,
} from "./Write.styles";

interface Props {
    content: string;
}

export default function Write(props: any) {
    const ref: React.MutableRefObject<any> = useRef<any>();

    const pop = () => {
        const editorIns = ref.current.getInstance();
        const contentHtml = editorIns.getHTML();
        const contentMark = editorIns.getMarkdown();
        console.log(contentHtml);
        console.log(contentMark);
    };

    return (
        <WritePage>
            <WriteTitleAndTagWrapper>
                <WriteTitleInput placeholder="제목을 입력하세요"></WriteTitleInput>
                <WriteTagInput
                    placeholder="태그를 입력하세요.&#13;&#10;쉼표 혹은 엔터를 입력하여 태그를 등록할 수 있습니다."
                ></WriteTagInput>
            </WriteTitleAndTagWrapper>
            <Editor
                ref={ref}
                initialValue={props.content || " "}
                previewHighlight={false}
                previewStyle="vertical"
                height="83vh"
                hideModeSwitch={true}
                initialEditType={"markdown"}
                placeholder={"당신의 이야기를 들려주세요!"}
                plugins={[
                    colorSyntax,
                    fontSize,
                    [codeSyntaxHighlight, { highlighter: Prism }],
                ]}
                autofocus={false}
            />
            <WriteButtonWrapper>
                <WriteExitButton type="submit">
                    <FiArrowLeft className="Exit-Button" />
                    나가기
                </WriteExitButton>
                <WriteSaveAndExitButtonWrapper>
                    <WriteSaveButton type="submit">임시저장</WriteSaveButton>
                    <WriteRegisterButton type="submit" onClick={pop}>
                        출간하기
                    </WriteRegisterButton>
                </WriteSaveAndExitButtonWrapper>
            </WriteButtonWrapper>
        </WritePage>
    );
}
