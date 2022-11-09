import {
    WritePage,
    WriteTitleAndTagWrapper,
    WriteTitleInput,
    WriteTagInput,
    WriteButtonWrapper,
    WriteRegisterButton,
    WriteSaveButton,
    WriteExitButton,
} from "./Write.styles";
// eslint-disable-next-line
import "prismjs/themes/prism.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from "prismjs";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
// eslint-disable-next-line
import "prismjs/themes/prism.css";
import fontSize from "tui-editor-plugin-font-size";
import "tui-editor-plugin-font-size/dist/tui-editor-plugin-font-size.css";
import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";
export default function Write({ content }: any) {
    const editorRef = useRef();
    const handleChangeEditor = (e: any) => {
        const content = Editor.prototype.getInstance().getHTML();
    };

    const handleRegisterButton = () => {
        const content = Editor.prototype.getInstance().getHTML();
        const content2 = Editor.prototype.getInstance().getMarkdown();

        // 입력창에 입력한 내용을 MarkDown 형태로 취득
        console.log(content);
        console.log(content2);
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
                initialValue={content || " "}
                previewHighlight={false}
                previewStyle="vertical"
                height="88vh"
                hideModeSwitch={true}
                useCommandShortcut={true}
                initialEditType={"markdown"}
                placeholder={"당신의 이야기를 적어보세요"}
                plugins={[
                    colorSyntax,
                    fontSize,
                    [codeSyntaxHighlight, { highlighter: Prism }],
                ]}
            ></Editor>
            <WriteButtonWrapper>
                <WriteExitButton type="submit">나가기</WriteExitButton>
                <WriteRegisterButton type="submit">
                    출간하기
                </WriteRegisterButton>
                <WriteSaveButton type="submit">임시저장</WriteSaveButton>
            </WriteButtonWrapper>
        </WritePage>
    );
}
