import React from 'react'
import FileUpload from 'react-ions/lib/components/FileUpload'

const callback = (event) => {
  console.log(event)
}

const ExampleFileUploadCallback = () => (
  <FileUpload label="File upload with callback" showPreview={true} changeCallback={callback} />
)

export default ExampleFileUploadCallback
