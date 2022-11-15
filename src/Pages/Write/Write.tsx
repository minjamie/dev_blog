import { Tooltip } from "@mui/material";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import Preview from "Components/Preview/Preview";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import React, { useEffect, useRef, useState } from "react";
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
    const tagRef: React.MutableRefObject<any> = useRef<any>();

    const [size, setSize] = useState(0);
    const [tagSize, setTagSize] = useState(0);
    const [tag, setTag] = useState<string>("");
    const [title, setTile] = useState<string>("");
    const [tags, setTags] = useState<string[]>([]);
    const [contents, setContents] = useState("");
    const [click, setClick] = useState(false);
    const [tooltipIsOpen, setTooltipIsOpen] = React.useState(false);
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 1200px)").matches
    );
    const tipText =
        "쉼표 혹은 엔터를 이용해서 태그를 등록할 수있습니다.\n 등록된 태그를 클릭하면 삭제됩니다.";

    const autoResize = () => {
        setSize(window.innerHeight - 155);
    };

    useEffect(() => {
        window.addEventListener("resize", autoResize);
        autoResize();

        return () => window.removeEventListener("resize", autoResize);
    }, []);

    useEffect(() => {
        const target = tagRef.current;
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { height } = entry.contentRect;
                setTagSize(height);
            }
        });
        observer.observe(target);
    }, []);

    useEffect(() => {
        window
            .matchMedia("(min-width: 1200px)")
            .addEventListener("change", (e) => setMatches(e.matches));
    }, []);

    const handleChange = (event: React.ChangeEvent): void => {
        const { value, name } = event.target as HTMLInputElement;
        if (name === "tag") {
            setTag(value);
        } else if (name === "title") {
            setTile(value);
        }
    };

    const addTag = (event: React.KeyboardEvent): void => {
        if (event.key === "Enter" || event.key === ",") {
            event.preventDefault();
            const arr = [...tags];
            arr.push(tag);
            setTags(arr);
            setTooltipIsOpen(false);
            setTag("");
        }
    };

    const removeTag = (event: React.MouseEvent, index: number): void => {
        const arr = [...tags];
        arr.splice(index, 1);
        setTags(arr);
    };

    const handleWrite = () => {
        const editorIns = ref.current.getInstance();
        // const contentHtml = editorIns.getHTML();
        const contentMark = editorIns.getMarkdown();
        setClick(!click);
        setContents(contentMark);
    };

    return (
        <WritePage>
            <WriteTitleAndTagWrapper>
                <WriteTitleInput
                    placeholder="제목을 입력하세요"
                    value={title}
                    onChange={handleChange}
                    name="title"
                ></WriteTitleInput>
                <WriteTagInputWrapper ref={tagRef}>
                    {tags.map((tag, index) => {
                        return (
                            <WriteTag
                                key={index}
                                onClick={(e) => removeTag(e, index)}
                            >
                                {tag}
                            </WriteTag>
                        );
                    })}
                    <Tooltip
                        style={{ whiteSpace: "pre-line" }}
                        title={
                            <span style={{ whiteSpace: "pre-line" }}>
                                {tipText}
                            </span>
                        }
                        arrow
                        onClick={() => setTooltipIsOpen(!tooltipIsOpen)}
                        onClose={() => setTooltipIsOpen(false)}
                        onOpen={() => setTooltipIsOpen(true)}
                        open={tooltipIsOpen}
                        disableHoverListener={true}
                    >
                        <WriteTagInput
                            placeholder="태그를 입력하세요."
                            onChange={handleChange}
                            onKeyPress={addTag}
                            value={tag}
                            name="tag"
                        ></WriteTagInput>
                    </Tooltip>
                </WriteTagInputWrapper>
            </WriteTitleAndTagWrapper>
            <Editor
                ref={ref}
                initialValue={props.content || ``}
                previewHighlight={false}
                previewStyle={matches ? "vertical" : "tab"}
                hideModeSwitch={true}
                initialEditType={"markdown"}
                // placeholder={"당신의 이야기를 들려주세요!"}
                plugins={[
                    colorSyntax,
                    fontSize,
                    [codeSyntaxHighlight, { highlighter: Prism }],
                ]}
                height={`${size - tagSize}px`}
            />
            <WriteButtonWrapper>
                <WriteExitButton type="submit">
                    <FiArrowLeft className="Exit-Button" />
                    나가기
                </WriteExitButton>
                <WriteSaveAndExitButtonWrapper>
                    <WriteSaveButton type="submit">임시저장</WriteSaveButton>
                    <WriteRegisterButton type="submit" onClick={handleWrite}>
                        출간하기
                    </WriteRegisterButton>
                </WriteSaveAndExitButtonWrapper>
            </WriteButtonWrapper>
            <Preview props={click} setClick={setClick} />
        </WritePage>
    );
}
