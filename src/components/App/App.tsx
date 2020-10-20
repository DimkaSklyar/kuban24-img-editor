import React from "react";
import { Route } from "react-router-dom";
import download from "downloadjs";

import html2canvas from "@nidi/html2canvas";

import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppStyle, SCTextArea } from "./AppStyle";
import "react-image-crop/lib/ReactCrop.scss";
import CroppBlock from "../CroppBlock";
import UploadImageBlock from "../UploadImageBlock";

function App() {
  const [files, setFiles] = React.useState<Array<any>>([]);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      button: {
        margin: theme.spacing(1),
      },
    })
  );

  const classes = useStyles();
  const [uploadImage, setUploadImage] = React.useState<any>(undefined);

  const refImg: any = React.useRef();

  const onScreenShot = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    console.log(refImg);
    html2canvas(refImg.current, {
      scrollY: -window.pageYOffset,
      x: 0,
      windowWidth: refImg.current.scrollWidth,
      height: 800,
      imageTimeout: 2000,
    }).then((canvas) => {
      download(canvas.toDataURL());
    });
  };

  return (
    <div className="container__wrapper">
      <Route exact path="/">
        <UploadImageBlock
          uploadImage={setUploadImage}
          files={files}
          setFiles={setFiles}
        />
      </Route>
      <Route exact path="/step1">
        <CroppBlock selectImage={uploadImage} />
      </Route>
    </div>
  );
}

export default App;
