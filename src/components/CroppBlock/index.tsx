import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";

interface ICroppBlock {
  selectImage: string;
}

const CroppBlock: React.FC<ICroppBlock> = ({ selectImage }) => {
  const cropperRef = useRef<HTMLImageElement>(null);
  const [complitedEdit, setComplitedEdit] = useState(false);
  const [cropper, setCropper] = useState<any>();
  const [cropData, setCropData] = useState("#");

  const onScreenShot = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
    setComplitedEdit(true);
  };

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      button: {
        margin: theme.spacing(1),
      },
    })
  );

  const classes = useStyles();
  return (
    <div>
      {!complitedEdit ? (
        <Cropper
          src={selectImage}
          style={{ height: 400, width: "100%" }}
          initialAspectRatio={1 / 1}
          aspectRatio={1 / 1}
          guides={true}
          ref={cropperRef}
          onInitialized={(instance) => {
            setCropper(instance);
          }}
        />
      ) : (
        <div className="container__wrapper">
          <img src={cropData} alt="" />
        </div>
      )}
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
    </div>
  );
};

export default CroppBlock;
