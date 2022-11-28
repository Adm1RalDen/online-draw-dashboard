import { ContentState, EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { FC, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

interface TextEditorProps {
  onChange: (name: string, value: string) => void
  name: string
  value: string
}

export const TextEditor: FC<TextEditorProps> = ({ name, onChange, value = '' }) => {
  const contentBlock = htmlToDraft(value)
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)

  const [textState, setTextState] = useState(EditorState.createWithContent(contentState))

  const onEditorStateChange = (editorState: EditorState) => {
    setTextState(editorState)
    onChange(name, draftToHtml(convertToRaw(editorState.getCurrentContent())))
  }

  return (
    <Editor
      toolbarClassName='custom__wysiwig__toolbar'
      editorClassName='custom__wysiwig__editor'
      wrapperClassName='custom__wysiwig__wrapper'
      editorState={textState}
      onEditorStateChange={onEditorStateChange}
    />
  )
}
