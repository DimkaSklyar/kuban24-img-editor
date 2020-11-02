import React from "react";
import { Redirect, Route } from "react-router-dom";
import download from "downloadjs";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import html2canvas from "@nidi/html2canvas";

import { Container, IconButton, Snackbar } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppContainerStyle, SCContainerRectangle } from "./AppStyle";

import {
  CroppBlock,
  UploadImageBlock,
  EditImageBlock,
  SettingsProBlock,
} from "..";

import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { Done, Edit, FileCopy, Save as SaveIcon } from "@material-ui/icons";

import "react-image-crop/lib/ReactCrop.scss";
import { IScreenShotSettings } from "../../types/interfaces";
import { useSelector } from "react-redux";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
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
      marginBottom: "20px",
    },
  })
);

function App() {
  const [open, setOpen] = React.useState(false);
  const { uploadImage } = useSelector((images: any) => images.image);

  const [onEdit, setOnEdit] = React.useState(true);
  const [bcgImg, setBcgImg] = React.useState<any>("");
  const [aspectRatio, setAspectRatio] = React.useState<boolean>(false);

  const refImg: any = React.useRef();
  const classes = useStyles();

  const screenShotSettings: IScreenShotSettings = {
    scrollY: -window.pageYOffset,
    // Странность в 74 пикселя
    x: 74,
    height: 1080,
    imageTimeout: 2000,
    allowTaint: true,
  };

  const onScreenShot = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    html2canvas(refImg.current, {
      ...screenShotSettings,
      windowWidth: refImg.current.scrollWidth,
    }).then((canvas) => {
      download(canvas.toDataURL());
    });
  };

  const onCopyScreenShot = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const temp: any = window;
    html2canvas(refImg.current, {
      ...screenShotSettings,
      windowWidth: refImg.current.scrollWidth,
    }).then((canvas) =>
      canvas.toBlob((blob) =>
        temp.navigator.clipboard
          .write([new temp.ClipboardItem({ "image/png": blob })])
          .then(() => setOpen(true))
      )
    );
  };

  const onAspectRatio = (a: boolean) => {
    setAspectRatio(a);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <AppContainerStyle>
      <Route exact path="/" component={UploadImageBlock} />
      <Route exact path="/step1">
        {uploadImage ? (
          <SCContainerRectangle>
            <CroppBlock onAspectRatio={onAspectRatio} setBcgImg={setBcgImg} />
          </SCContainerRectangle>
        ) : (
          <Redirect to="/" />
        )}
      </Route>
      <Route exact path="/step2">
        {uploadImage ? (
          <Container maxWidth="lg">
            <div className={classes.root}>
              <Grid container spacing={7}>
                <Grid item xs={11}>
                  <SCContainerRectangle>
                    <EditImageBlock
                      onEdit={onEdit}
                      refImg={refImg}
                      aspectRatio={aspectRatio}
                      bcgImg={bcgImg}
                    />
                  </SCContainerRectangle>
                </Grid>
                <Grid item xs={1}>
                  <div className="sticky-settings">
                    <Paper className={classes.settings}>
                      <SettingsProBlock disabled={onEdit} />
                    </Paper>
                    <Paper className={classes.settings}>
                      <IconButton
                        color="secondary"
                        aria-label="edit"
                        component="span"
                        onClick={() => setOnEdit(!onEdit)}
                      >
                        {onEdit ? <Done /> : <Edit />}
                      </IconButton>
                    </Paper>
                    <Paper className={classes.settings}>
                      <IconButton
                        disabled={onEdit}
                        color="default"
                        aria-label="copy picture"
                        component="span"
                        onClick={onCopyScreenShot}
                      >
                        <FileCopy />
                      </IconButton>
                    </Paper>
                    <Paper className={classes.settings}>
                      <IconButton
                        disabled={onEdit}
                        color="primary"
                        aria-label="save picture"
                        component="span"
                        onClick={onScreenShot}
                      >
                        <SaveIcon />
                      </IconButton>
                    </Paper>
                  </div>
                </Grid>
              </Grid>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Изображение скопированно в буфер обмена
              </Alert>
            </Snackbar>
          </Container>
        ) : (
          <Redirect to="/" />
        )}
      </Route>
    </AppContainerStyle>
  );
}

export default App;
