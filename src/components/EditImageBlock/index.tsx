import React from "react";
import { Rnd } from "react-rnd";
import { SCTextArea } from "../App/AppStyle";

interface IEditImageBlock {
  selectImage: string;
  selectedFont: string;
}

const EditImageBlock: React.FC<IEditImageBlock> = ({
  selectImage,
  selectedFont,
}) => {
  return (
    <div className="container__wrapper">
      <img src={selectImage} alt="" />

      <Rnd
        default={{
          x: 0,
          y: 0,
          width: 200,
          height: 200,
        }}
      >
        <SCTextArea fonts={selectedFont}>fewfe</SCTextArea>
      </Rnd>
    </div>
  );
};

export default EditImageBlock;
