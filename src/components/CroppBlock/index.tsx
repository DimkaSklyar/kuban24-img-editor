import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AspectRatio, NavigateNext } from "@material-ui/icons";
import { Link } from "react-router-dom";
// @ts-ignore
import screenshot from "image-screenshot";
import { useDispatch, useSelector } from "react-redux";
import { setBlurImage, setCroppData } from "../../redux/actions/image";
import { setAspectRatio } from "../../redux/actions/aspectRatio";
import { SCContainerRectangle } from "../App/AppStyle";

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

const CroppBlock = () => {
  const cropperRef = useRef<HTMLImageElement>(null);
  const [cropper, setCropper] = useState<any>();
  const dispatch = useDispatch();
  const { uploadImage } = useSelector((images: any) => images.image);

  const refBcg = React.useRef<any>();

  const onScreenShot = () => {
    if (typeof cropper !== "undefined") {
      dispatch(setCroppData(cropper.getCroppedCanvas().toDataURL()));
      //какая-то магия которая работает
      const img = document.createElement("img");
      img.setAttribute("src", cropper.getCroppedCanvas().toDataURL());
      img.style.filter = "blur(14px)";
      refBcg.current.append(img);
      screenshot(refBcg.current.querySelector("img")).then((url: any) => {
        dispatch(setBlurImage(url));
      });
    }
  };

  const handleAspectRatio = (a: boolean) => {
    dispatch(setAspectRatio(a));
  };

  const classes = useStyles();
  return (
    <SCContainerRectangle>
      <Cropper
        className={classes.editImage}
        src={uploadImage}
        style={{ height: 400, width: "100%" }}
        aspectRatio={1080 / 690}
        guides={true}
        ref={cropperRef}
        viewMode={2}
        onInitialized={(instance) => {
          setCropper(instance);
        }}
      />
      <div
        className="preview"
        ref={refBcg}
        style={{ height: "0px", overflow: "hidden" }}
      >
        <img src={uploadImage} alt="" style={{ filter: "blur(10px)" }} />
      </div>
      <Button
        className={classes.root}
        variant="contained"
        color="primary"
        size="large"
        startIcon={<AspectRatio />}
        disabled={!uploadImage}
        onClick={() => {
          cropper.setAspectRatio(1080 / 690);
          handleAspectRatio(false);
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
        disabled={!uploadImage}
        onClick={() => {
          cropper.setAspectRatio(1 / 1);
          handleAspectRatio(true);
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
        disabled={!uploadImage}
        onClick={onScreenShot}
      >
        Далее
      </Button>
    </SCContainerRectangle>
  );
};

export default CroppBlock;
