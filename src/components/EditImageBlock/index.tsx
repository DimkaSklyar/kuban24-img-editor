import React from "react";
import { useSelector } from "react-redux";
import { IAlignment, ISettingsState } from "../../types/interfaces";
import { SCText, SCTextArea } from "../App/AppStyle";

interface IEditImageBlock {
  onEdit: boolean;
  refImg: any;
}

const EditImageBlock: React.FC<IEditImageBlock> = ({ onEdit, refImg }) => {
  const [text, setText] = React.useState("Ваш Текст");

  const { croppData, blurImage } = useSelector((images: any) => images.image);
  const { colorBcg, colorText } = useSelector(
    ({ color }: ISettingsState) => color
  );
  const { aspectRatio } = useSelector((ratio: any) => ratio.aspectRatio);
  const { horizontalAlign, verticalAlign, verticalPosition } = useSelector(
    ({ alignment }: IAlignment) => alignment
  );
  const { font } = useSelector((fonts: any) => fonts.font);
  const { fontSize } = useSelector((fonts: any) => fonts.fontSize);

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  return (
    <div
      className="container__wrapper"
      ref={refImg}
      style={{
        alignItems:
          !aspectRatio && !verticalAlign
            ? "flex-start"
            : verticalAlign
            ? "flex-end"
            : "center",
      }}
    >
      <div className="bg-blur">
        <img src={blurImage} alt="" style={{ height: "105%", width: "105%" }} />
      </div>
      <img
        src={croppData}
        alt=""
        style={{ height: !aspectRatio ? "auto" : "100%" }}
      />
      {onEdit ? (
        <SCTextArea
          style={{
            top: verticalAlign ? "60px" : "",
            bottom: !verticalAlign ? "60px" : "",
            textAlign: horizontalAlign,
            color: `rgba(${colorText.r},${colorText.g},${colorText.b},${colorText.a})`,
            backgroundColor: `rgba(${colorBcg.r},${colorBcg.g},${colorBcg.b},${colorBcg.a})`,
            fontFamily: `${font}, sans-serif`,
            fontSize: `${fontSize}px`,
            borderColor: !onEdit ? "transparent" : "",
            paddingTop: `${
              verticalPosition
                ? `calc(390px / 2.${text.split("\n").length - 1} - ${
                    Number(fontSize) * 1.05
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
          verticalPosition
          style={{
            top: verticalAlign ? "60px" : "",
            bottom: !verticalAlign ? "60px" : "",
            textAlign: horizontalAlign,
            color: `rgba(${colorText.r},${colorText.g},${colorText.b},${colorText.a})`,
            backgroundColor: `rgba(${colorBcg.r},${colorBcg.g},${colorBcg.b},${colorBcg.a})`,
            fontFamily: `${font}, sans-serif`,
            fontSize: `${fontSize}px`,
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
