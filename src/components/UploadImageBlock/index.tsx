import React from "react";
import { Link } from "react-router-dom";
import { Rnd } from "react-rnd";

import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { ContainerStyle } from "../App/AppStyle";
import { DropzoneArea, DropzoneAreaBase } from "material-ui-dropzone";

interface IUploadImageBlock {
  uploadImage: Function;
  files: any;
  setFiles: Function;
}

const UploadImageBlock: React.FC<IUploadImageBlock> = ({
  uploadImage,
  setFiles,
  files,
}) => {
  console.log(files);
  const handleAdd = (newFiles: any) => {
    newFiles = newFiles.filter(
      (file: any) => !files.find((f: any) => f.data === file.data)
    );
    setFiles([...files, ...newFiles]);
    uploadImage(newFiles[0].data);
  };

  const handleDelete = (deleted: any) => {
    setFiles(files.filter((f: any) => f !== deleted));
    uploadImage(null);
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
      <DropzoneAreaBase
        fileObjects={files}
        onAdd={handleAdd}
        onDelete={handleDelete}
      />

      <Button
        component={Link}
        to="/step1"
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Далее
      </Button>
    </div>
  );
};

{
  /* <Rnd
default={{
  x: 0,
  y: 0,
  width: 200,
  height: 200,
}}
>
<SCTextArea>fewfe</SCTextArea>
</Rnd> */
}

export default UploadImageBlock;
