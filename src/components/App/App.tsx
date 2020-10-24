import React from "react";
import { Route } from "react-router-dom";
import download from "downloadjs";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import html2canvas from "@nidi/html2canvas";

import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppContainerStyle,
  SCContainerRectangle,
  SCConteinerUpload,
  SCTextArea,
} from "./AppStyle";
import "react-image-crop/lib/ReactCrop.scss";
import CroppBlock from "../CroppBlock";
import UploadImageBlock from "../UploadImageBlock";
import EditImageBlock from "../EditImageBlock";
import PopoverPopupState from "../SettingsBlock";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    settings: {
      padding: theme.spacing(0),
      textAlign: "center",
      color: theme.palette.text.secondary,
      borderRadius: "50%",
    },
  })
);

function App() {
  const [files, setFiles] = React.useState<Array<any>>([]);
  const [cropData, setCropData] = React.useState<any>("#");
  const [uploadImage, setUploadImage] = React.useState<any>(undefined);
  const [selectFont, setSelectFont] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectFont(event.target.value as string);
  };

  const refImg: any = React.useRef();
  const classes = useStyles();

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
    <AppContainerStyle>
      <Route exact path="/">
        <SCConteinerUpload>
          <UploadImageBlock
            uploadImage={setUploadImage}
            selectImage={uploadImage}
            files={files}
            setFiles={setFiles}
          />
        </SCConteinerUpload>
      </Route>
      <Route exact path="/step1">
        <SCContainerRectangle>
          <CroppBlock selectImage={uploadImage} setCropData={setCropData} />
        </SCContainerRectangle>
      </Route>
      <Route exact path="/step2">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={11}>
              <SCContainerRectangle>
                <EditImageBlock
                  selectImage={cropData}
                  selectedFont={selectFont}
                />
              </SCContainerRectangle>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.settings}>
                <PopoverPopupState
                  onSelectFont={handleChange}
                  selectedFont={selectFont}
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Route>
    </AppContainerStyle>
  );
}

export default App;
