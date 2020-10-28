import React from "react";
import { Redirect, Route } from "react-router-dom";
import download from "downloadjs";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import html2canvas from "@nidi/html2canvas";

import SaveIcon from "@material-ui/icons/Save";
import { Container, IconButton, Snackbar } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppContainerStyle,
  SCContainerRectangle,
  SCConteinerUpload,
} from "./AppStyle";
import "react-image-crop/lib/ReactCrop.scss";
import CroppBlock from "../CroppBlock";
import UploadImageBlock from "../UploadImageBlock";
import EditImageBlock from "../EditImageBlock";
import PopoverPopupState from "../SettingsProBlock";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { Done, Edit, FileCopy } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { ISettingsState } from "../../types/interfaces";

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

const arrayTextAlign = ["left", "center", "right"];

function App() {
  const [open, setOpen] = React.useState(false);
  const settings = useSelector(({ settings }: ISettingsState) => settings);

  const [cropData, setCropData] = React.useState<any>("#");
  const [uploadImage, setUploadImage] = React.useState<any>(undefined);
  const [color, setColor] = React.useState({ r: 255, g: 255, b: 255, a: 1 });
  const [colorText, setColorText] = React.useState({ r: 0, g: 0, b: 0, a: 1 });
  const [onEdit, setOnEdit] = React.useState(true);
  const [textAlign, setTextAlign] = React.useState(arrayTextAlign[1]);
  const [verticalCenter, setVerticallCenter] = React.useState(true);
  const [positionBlock, setPositionBlock] = React.useState(true);
  const [bcgImg, setBcgImg] = React.useState<any>("");
  const [aspectRatio, setAspectRatio] = React.useState<boolean>(false);
  const refImg: any = React.useRef();
  const classes = useStyles();

  const onScreenShot = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    html2canvas(refImg.current, {
      scrollY: -window.pageYOffset,
      // Странность в 74 пикселя
      x: 74,
      windowWidth: refImg.current.scrollWidth,
      height: 1080,
      imageTimeout: 2000,
      allowTaint: true,
    }).then((canvas) => {
      download(canvas.toDataURL());
    });
  };

  const onCopyScreenShot = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const temp: any = window;
    html2canvas(refImg.current, {
      scrollY: -window.pageYOffset,
      // Странность в 74 пикселя
      x: 74,
      windowWidth: refImg.current.scrollWidth,
      height: 1080,
      imageTimeout: 2000,
      allowTaint: true,
    }).then((canvas) =>
      canvas.toBlob((blob) =>
        temp.navigator.clipboard
          .write([new temp.ClipboardItem({ "image/png": blob })])
          .then(() => setOpen(true))
      )
    );
  };

  const onSelectColor = (a: any) => {
    setColor(a);
  };

  const onSelectTextAlign = (i: number) => {
    setTextAlign(arrayTextAlign[i]);
  };

  const onSelectColorText = (a: any) => {
    setColorText(a);
  };

  const onSelectColorBcg = (a: any) => {
    setColorText(a.textColor);
    setColor(a.bcg);
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
      <Route exact path="/">
        <SCConteinerUpload>
          <UploadImageBlock
            uploadImage={setUploadImage}
            selectImage={uploadImage}
          />
        </SCConteinerUpload>
      </Route>
      <Route exact path="/step1">
        {!uploadImage ? (
          <Redirect to="/" />
        ) : (
          <SCContainerRectangle>
            <CroppBlock
              selectImage={uploadImage}
              setCropData={setCropData}
              onAspectRatio={onAspectRatio}
              setBcgImg={setBcgImg}
            />
          </SCContainerRectangle>
        )}
      </Route>
      <Route exact path="/step2">
        {!uploadImage ? (
          <Redirect to="/" />
        ) : (
          <Container maxWidth="lg">
            <div className={classes.root}>
              <Grid container spacing={7}>
                <Grid item xs={11}>
                  <SCContainerRectangle>
                    <EditImageBlock
                      settings={settings}
                      selectImage={cropData}
                      selectColor={color}
                      selectColorText={colorText}
                      selectedTextAlign={textAlign}
                      onEdit={onEdit}
                      refImg={refImg}
                      verticalCenter={verticalCenter}
                      positionBlock={positionBlock}
                      aspectRatio={aspectRatio}
                      bcgImg={bcgImg}
                    />
                  </SCContainerRectangle>
                </Grid>
                <Grid item xs={1}>
                  <div className="sticky-settings">
                    <Paper className={classes.settings}>
                      <PopoverPopupState
                        disabled={onEdit}
                        selectColor={color}
                        onSelectColor={onSelectColor}
                        onSelectColorText={onSelectColorText}
                        colorText={colorText}
                        verticalCenter={verticalCenter}
                        setVerticallCenter={setVerticallCenter}
                        onSelectTextAlign={onSelectTextAlign}
                        onSelectColorBcg={onSelectColorBcg}
                        setPositionBlock={setPositionBlock}
                      />
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
        )}
      </Route>
    </AppContainerStyle>
  );
}

export default App;
