import { ContentState, EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { FC, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { FunctionWithParams } from 'types'

import { EditorWrapper } from './styles'

type TextEditorProps = {
  name: string
  onChange: FunctionWithParams<string>
  value: string
}

export const TextEditor: FC<TextEditorProps> = ({ name, onChange, value = '' }) => {
  const contentBlock = htmlToDraft(value)
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)

  const [textState, setTextState] = useState(EditorState.createWithContent(contentState))

  const onEditorStateChange = (editorState: any) => {
    setTextState(editorState)
    onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  }

  return (
    <EditorWrapper>
      <Editor
        editorState={textState}
        wrapperClassName='demo-wrapper'
        editorClassName='demo-editor'
        onEditorStateChange={onEditorStateChange}
      />
      <textarea
        disabled
        name={name}
        value={draftToHtml(convertToRaw(textState.getCurrentContent()))}
      />
    </EditorWrapper>
  )
}
