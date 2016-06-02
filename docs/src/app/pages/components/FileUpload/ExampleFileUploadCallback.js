import React from 'react'
import FileUpload from 'react-conventions/lib/FileUpload'

const callback = (event) => {
  console.log(event);
}

const ExampleFileUploadCallback = () => (
  <FileUpload label="File upload with callback" showPreview={true} changeCallback={callback} />
)

export default ExampleFileUploadCallback
