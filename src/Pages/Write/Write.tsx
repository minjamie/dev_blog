import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
    WriteTag,
    WriteTagInput,
    WriteTagInputWrapper,
    WriteTitleAndTagWrapper,
    WriteTitleInput,
} from "./Write.styles";

interface Props {
    content: string;
}

export default function Write(props: any) {
    const ref: React.MutableRefObject<any> = useRef<any>();
    const tagInputWrapperRef: React.MutableRefObject<any> = useRef<any>();

    const [size, setSize] = useState(0);
    const [tagSize, setTagSize] = useState(0);

    const autoResize = () => {
        console.log(tagSize);
        setSize(window.innerHeight - 190);
    };

    useEffect(() => {
        window.addEventListener("resize", autoResize);
        autoResize();
    }, []);

    useEffect(() => {
        setTagSize(tagInputWrapperRef.current.clientHeight);
    }, [tagInputWrapperRef]);

    useLayoutEffect(() => {
        setTagSize(tagInputWrapperRef.current.clientHeight);
    }, []);

    const [tag, setTag] = useState<string>("");
    const [tags, setTags] = useState<string[]>([]);

    const handleChangeTag = (event: React.ChangeEvent): void => {
        const { value } = event.target as HTMLInputElement;
        setTag(value);
    };

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
                <WriteTagInputWrapper ref={tagInputWrapperRef}>
                    {tags.map((a, index) => {
                        return <WriteTag key={index}>{a}</WriteTag>;
                    })}
                    <WriteTagInput
                        placeholder="태그를 입력하세요."
                        onChange={handleChangeTag}
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                event.preventDefault();
                                const arr = [...tags];
                                arr.push(tag);
                                setTags(arr);
                                setTag("");
                            }
                        }}
                        value={tag}
                    ></WriteTagInput>
                </WriteTagInputWrapper>
            </WriteTitleAndTagWrapper>
            <Editor
                ref={ref}
                initialValue={props.content || ``}
                previewHighlight={false}
                previewStyle="vertical"
                hideModeSwitch={true}
                initialEditType={"markdown"}
                placeholder={"당신의 이야기를 들려주세요!"}
                plugins={[
                    colorSyntax,
                    fontSize,
                    [codeSyntaxHighlight, { highlighter: Prism }],
                ]}
                autofocus={false}
                height={`${size}px`}
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
