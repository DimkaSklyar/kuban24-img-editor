import React from "react";
import { Container } from "@material-ui/core";
import { DropzoneAreaBase } from "material-ui-dropzone";
import { Rnd } from "react-rnd";

import { SCTextArea } from "./AppStyle";

function App() {
  const [uploadImage, setuploadImage] = React.useState<any>(undefined);

  return (
    <div className="App">
      <Container fixed>
        {!uploadImage && (
          <DropzoneAreaBase
            onAdd={(fileObjs) => setuploadImage(fileObjs[0].data)}
            onDelete={(fileObj) => console.log("Removed File:", fileObj)}
            onAlert={(message, variant) =>
              console.log(`${variant}: ${message}`)
            }
            dropzoneText={"Перетащите файл сюда или нажмите для загрузки"}
          />
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
        <img src={uploadImage} alt="" />
      </Container>
    </div>
  );
}

export default App;
