import React from "react";
import { Rnd } from "react-rnd";
import download from "downloadjs";
import ReactCrop from "react-image-crop";
import html2canvas from "@nidi/html2canvas";

import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppStyle,
  SCTextArea,
  ContainerStyle,
  SCDropzoneAreaBaseStyle,
} from "./AppStyle";
import "react-image-crop/lib/ReactCrop.scss";
import "../../index.css";
import ColorsTimeline from "../TimeLine";
import CroppBlock from "../CroppBlock";

function App() {
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
      {/* <ColorsTimeline /> */}
      <CroppBlock />
      <AppStyle>
        <ContainerStyle ref={refImg}>
          {!uploadImage ? (
            <SCDropzoneAreaBaseStyle
              classes={{ root: "upload-block" }}
              onAdd={(fileObjs) => setUploadImage(fileObjs[0].data)}
              onDelete={(fileObj) => console.log("Removed File:", fileObj)}
              onAlert={(message, variant) =>
                console.log(`${variant}: ${message}`)
              }
              dropzoneText={"Перетащите файл сюда или нажмите для загрузки"}
            />
          ) : (
            <div className="containerImage">
              <img src={uploadImage} alt="" />
            </div>
          )}

          <Rnd
            default={{
              x: 0,
              y: 0,
              width: 200,
              height: 200,
            }}
          >
            <SCTextArea>fewfe</SCTextArea>
          </Rnd>
        </ContainerStyle>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={onScreenShot}
        >
          Save
        </Button>
      </AppStyle>
    </div>
  );
}

export default App;
