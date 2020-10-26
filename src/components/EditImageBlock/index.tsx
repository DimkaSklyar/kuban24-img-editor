import React from "react";
import { SCText, SCTextArea } from "../App/AppStyle";

interface IEditImageBlock {
  selectImage: string;
  selectedFont: string;
  selectColor: any;
  selectColorText: any;
  selectFontSize: string | number | (string | number)[];
  selectedTextAlign: string;
  onEdit: boolean;
  refImg: any;
  verticalCenter: boolean;
  positionBlock: boolean;
  aspectRatio: boolean;
  bcgImg: any;
}

const EditImageBlock: React.FC<IEditImageBlock> = ({
  selectImage,
  selectedFont,
  selectColor,
  selectColorText,
  selectFontSize,
  selectedTextAlign,
  onEdit,
  refImg,
  verticalCenter,
  positionBlock,
  aspectRatio,
  bcgImg,
}) => {
  const [text, setText] = React.useState("Ваш Текст");

  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  return (
    <div
      className="container__wrapper"
      ref={refImg}
      style={{
        alignItems:
          !aspectRatio && positionBlock
            ? "flex-start"
            : !positionBlock
            ? "flex-end"
            : "center",
      }}
    >
      <div className="bg-blur">
        <img src={bcgImg} style={{ height: "105%", width: "105%" }} />
      </div>
      <img
        src={selectImage}
        alt=""
        style={{ height: !aspectRatio ? "auto" : "100%" }}
      />
      {onEdit ? (
        <SCTextArea
          fonts={selectedFont}
          bcg={selectColor}
          color={selectColorText}
          fontSize={selectFontSize}
          textAlign={selectedTextAlign}
          positionBlock={positionBlock}
          verticalAlign={text.split("\n").length}
          style={{
            borderColor: !onEdit ? "transparent" : "",
            paddingTop: `${
              verticalCenter
                ? `calc(390px / 2.${text.split("\n").length - 1} - ${
                    Number(selectFontSize) * 1.05
                  }px)`
                : "0px"
            }`,
          }}
          value={text}
          onChange={handleChange}
        >
          {text}
        </SCTextArea>
      ) : (
        <SCText
          fonts={selectedFont}
          bcg={selectColor}
          color={selectColorText}
          fontSize={selectFontSize}
          textAlign={selectedTextAlign}
          verticalCenter={verticalCenter}
          positionBlock={positionBlock}
          style={{
            borderColor: !onEdit ? "transparent" : "",
          }}
        >
          {text}
        </SCText>
      )}
    </div>
  );
};

export default EditImageBlock;
