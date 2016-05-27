import React from 'react'
import FileUpload from 'react-conventions/lib/FileUpload'

const callback = (event) => {
  console.log(event);
}

const ExampleFileUploadCallback = () => (
  <FileUpload label="File upload with callback" showPreview={true} changeCallback={callback} value="http://vignette4.wikia.nocookie.net/gameofthrones/images/5/56/Jon_Kill_the_Boy.jpg" />
)

export default ExampleFileUploadCallback
