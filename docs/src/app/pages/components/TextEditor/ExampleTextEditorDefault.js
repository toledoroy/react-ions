import React from 'react'
import TextEditor from 'react-conventions/lib/TextEditor'

const changeCallback = (event) => {
  console.log(event.target.value)
}
const ExampleTextEditorDefault = () => (
  <TextEditor changeCallback={changeCallback} />
)

export default ExampleTextEditorDefault
