import React from "react";
import { SCText, SCTextArea } from "../App/AppStyle";

interface ISettingsState {
  font: string;
  fontSize: number | number[];
}

interface IEditImageBlock {
  selectImage: string;
  selectColor: any;
  selectColorText: any;
  selectedTextAlign: string;
  onEdit: boolean;
  refImg: any;
  verticalCenter: boolean;
  positionBlock: boolean;
  aspectRatio: boolean;
  bcgImg: any;
  settings: ISettingsState;
}

const EditImageBlock: React.FC<IEditImageBlock> = ({
  settings,
  selectImage,
  selectColor,
  selectColorText,
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
        <img src={bcgImg} alt="" style={{ height: "105%", width: "105%" }} />
      </div>
      <img
        src={selectImage}
        alt=""
        style={{ height: !aspectRatio ? "auto" : "100%" }}
      />
      {onEdit ? (
        <SCTextArea
          fonts={settings.font}
          bcg={selectColor}
          color={selectColorText}
          textAlign={selectedTextAlign}
          positionBlock={positionBlock}
          verticalAlign={text.split("\n").length}
          style={{
            fontSize: `${settings.fontSize}px`,
            borderColor: !onEdit ? "transparent" : "",
            paddingTop: `${
              verticalCenter
                ? `calc(390px / 2.${text.split("\n").length - 1} - ${
                    Number(settings.fontSize) * 1.05
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
          fonts={settings.font}
          bcg={selectColor}
          color={selectColorText}
          textAlign={selectedTextAlign}
          verticalCenter={verticalCenter}
          positionBlock={positionBlock}
          style={{
            fontSize: `${settings.fontSize}px`,
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
