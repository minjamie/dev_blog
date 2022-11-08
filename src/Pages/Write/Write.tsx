import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import "App.css";
import Prism from "prismjs";
import { useRef } from "react";
import { WritePage } from "./Write.styles";
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
            {/* <WriteTitleAndTagWrapper>
                <WriteTitleInput placeholder="제목을 입력하세요"></WriteTitleInput>
                <WriteTagInput placeholder="태그를 입력하세요"></WriteTagInput>
            </WriteTitleAndTagWrapper> */}
            <Editor
                initialValue={content || " "} // 글 수정 시 사용
                previewHighlight={false}
                previewStyle="vertical" // 미리보기 스타일 지정
                height="600px" // 에디터 창 높이
                hideModeSwitch={true}
                useCommandShortcut={true}
                initialEditType={"markdown"}
                plugins={[
                    colorSyntax,
                    [codeSyntaxHighlight, { highlighter: Prism }],
                ]}
            ></Editor>
            {/* <WriteButtonWrapper>
                <WriteExitButton type="submit">나가기</WriteExitButton>
                <WriteRegisterButton type="submit">
                    출간하기
                </WriteRegisterButton>
                <WriteSaveButton type="submit">임시저장</WriteSaveButton>
            </WriteButtonWrapper> */}
        </WritePage>
    );
}
