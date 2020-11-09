import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AppContainerStyle } from "./AppStyle";
import { CroppBlock, UploadImageBlock } from "..";

import "react-image-crop/lib/ReactCrop.scss";

import { useSelector } from "react-redux";
import Editor from "../../pages/Editor";

function App() {
  const { uploadImage } = useSelector((images: any) => images.image);

  return (
    <AppContainerStyle>
      <Route exact path="/" component={UploadImageBlock} />
      <Route exact path="/step1">
        {uploadImage ? <CroppBlock /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/step2">
        {uploadImage ? <Editor /> : <Redirect to="/" />}
      </Route>
    </AppContainerStyle>
  );
}

export default App;
