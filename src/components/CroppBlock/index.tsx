import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AspectRatio, NavigateNext } from "@material-ui/icons";
import { Link } from "react-router-dom";

interface ICroppBlock {
  selectImage: string;
  setCropData: Function;
  onAspectRatio: Function;
}

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: "10px 0 0 10px",
  },
  editImage: {
    boxShadow: "-2px -2px 20px 9px rgba(0, 0, 0, .23)",
  },
});

const CroppBlock: React.FC<ICroppBlock> = ({
  selectImage,
  setCropData,
  onAspectRatio,
}) => {
  const cropperRef = useRef<HTMLImageElement>(null);
  const [cropper, setCropper] = useState<any>();

  const onScreenShot = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Cropper
        className={classes.editImage}
        src={selectImage}
        style={{ height: 400, width: "100%" }}
        aspectRatio={1 / 1}
        guides={true}
        ref={cropperRef}
        viewMode={2}
        onInitialized={(instance) => {
          setCropper(instance);
        }}
      />
      <Button
        className={classes.root}
        variant="contained"
        color="primary"
        size="large"
        startIcon={<AspectRatio />}
        disabled={!selectImage}
        onClick={() => {
          cropper.setAspectRatio(1080 / 630);
          onAspectRatio(false);
        }}
      >
        Прямоугольник
      </Button>
      <Button
        className={classes.root}
        variant="contained"
        color="primary"
        size="large"
        startIcon={<AspectRatio />}
        disabled={!selectImage}
        onClick={() => {
          cropper.setAspectRatio(1 / 1);
          onAspectRatio(true);
        }}
      >
        Квадрат
      </Button>
      <Button
        className={classes.root}
        component={Link}
        to="/step2"
        variant="contained"
        color="primary"
        size="large"
        endIcon={<NavigateNext />}
        disabled={!selectImage}
        onClick={onScreenShot}
      >
        Далее
      </Button>
    </React.Fragment>
  );
};

export default CroppBlock;
