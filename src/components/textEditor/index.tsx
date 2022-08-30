import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { FC, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";
import { FunctionWithParams } from "types";

const EditorWrapper = styled.div`
  border: 1px solid #f3f3f3;
  position: relative;
  background-color: white;
  margin: 10px 0px;
  border-radius: 10px;
  overflow: hidden;

  & > textarea {
    position: absolute;
    opacity: 0;
  }
`;

type TextEditorProps = {
  name: string;
  onChange: FunctionWithParams<string>;
  value: string;
};

export const TextEditor: FC<TextEditorProps> = ({
  name,
  onChange,
  value = "",
}) => {
  const contentBlock = htmlToDraft(value);
  const contentState = ContentState.createFromBlockArray(
    contentBlock.contentBlocks
  );

  const [textState, setTextState] = useState(
    EditorState.createWithContent(contentState)
  );

  const onEditorStateChange = (editorState: any) => {
    setTextState(editorState);
    onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <EditorWrapper>
      <Editor
        editorState={textState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
      <textarea
        disabled
        name={name}
        value={draftToHtml(convertToRaw(textState.getCurrentContent()))}
      />
    </EditorWrapper>
  );
};
