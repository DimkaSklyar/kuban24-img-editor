import React from "react";

import {
  Container,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Snackbar,
  Theme,
} from "@material-ui/core";
import { Done, Edit, FileCopy, Save } from "@material-ui/icons";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { EditImageBlock, SettingsProBlock } from "../../components";
import { SCContainerRectangle } from "../../components/App/AppStyle";
import html2canvas from "@nidi/html2canvas";
import { IScreenShotSettings } from "../../types/interfaces";
import download from "downloadjs";

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

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Editor() {
  const [open, setOpen] = React.useState(false);
  const [onEdit, setOnEdit] = React.useState(true);
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

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Grid container spacing={7}>
          <Grid item xs={11}>
            <SCContainerRectangle>
              <EditImageBlock onEdit={onEdit} refImg={refImg} />
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
                  <Save />
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
  );
}

export default Editor;
