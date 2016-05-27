import React from 'react'
import FileUpload from 'react-conventions/lib/FileUpload'

const ExampleFileUploadCustomPreview = () => (
  <FileUpload label="File upload with custom preview size" multiple={true} showPreview={true} previewSize={100} />
)

export default ExampleFileUploadCustomPreview
