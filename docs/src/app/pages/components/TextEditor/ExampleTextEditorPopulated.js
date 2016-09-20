import React from 'react'
import TextEditor from 'react-conventions/lib/TextEditor'

const changeCallback = (event) => {
  console.log(event.target.value)
}

const editorContent = '<h1>Hello World!</h1><p><br></p><p>This is an <strong>example</strong> of some <em>editor</em> <u>content</u>!</p><p><br></p><ol><li>This is a list item</li><li>This is also a list item</li><li>I don\'t know what this is...</li></ol>'

const ExampleTextEditorPopulated = () => (
  <TextEditor changeCallback={changeCallback} value={editorContent} />
)

export default ExampleTextEditorPopulated
