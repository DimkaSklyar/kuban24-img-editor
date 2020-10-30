import React from "react";
import { SCConteinerUpload } from "../../components/App/AppStyle";
import { Link } from "react-router-dom";

import { NavigateNext } from "@material-ui/icons";
import { Button } from "@material-ui/core";

import { DropzoneAreaBase } from "material-ui-dropzone";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useDispatch } from "react-redux";
import { setUploadImage } from "../../redux/actions/image";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: "10px 0 0 0",
  },
  uploadImage: {
    boxShadow: "-2px -2px 9px 9px rgba(0, 0, 0, .07);",
  },
});

function UploadImage() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [files, setFiles] = React.useState<Array<any>>([]);

  const handleAdd = (newFiles: any) => {
    newFiles = newFiles.filter(
      (file: any) => !files.find((f: any) => f.data === file.data)
    );
    setFiles([...files, ...newFiles]);
    dispatch(setUploadImage(newFiles[0].data));
  };

  const handleDelete = (deleted: any) => {
    setFiles(files.filter((f: any) => f !== deleted));
    dispatch(setUploadImage(null));
  };
  return (
    <SCConteinerUpload>
      <DropzoneAreaBase
        getFileAddedMessage={(fileName) =>
          `Изображение ${fileName} успешно добавлено.`
        }
        getFileRemovedMessage={(fileName) =>
          `Изображение ${fileName} успешно удаленно.`
        }
        dropzoneText={
          "Перетащите сюда изображение или просто нажмите в данной области"
        }
        filesLimit={1}
        dropzoneClass={classes.uploadImage}
        fileObjects={files}
        onAdd={handleAdd}
        onDelete={handleDelete}
      />

      <Button
        className={classes.root}
        component={Link}
        to="/step1"
        variant="contained"
        color="primary"
        size="large"
        endIcon={<NavigateNext />}
        disabled={files.length === 0}
      >
        Далее
      </Button>
    </SCConteinerUpload>
  );
}

export default UploadImage;
