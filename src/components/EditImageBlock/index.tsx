import React from "react";
import { useSelector } from "react-redux";
import { ISettingsState } from "../../types/interfaces";
import { SCText, SCTextArea } from "../App/AppStyle";

interface IEditImageBlock {
  selectedTextAlign: string;
  onEdit: boolean;
  refImg: any;
  verticalCenter: boolean;
  positionBlock: boolean;
  aspectRatio: boolean;
  bcgImg: any;
}

const EditImageBlock: React.FC<IEditImageBlock> = ({
  selectedTextAlign,
  onEdit,
  refImg,
  verticalCenter,
  positionBlock,
  aspectRatio,
  bcgImg,
}) => {
  const [text, setText] = React.useState("Ваш Текст");

  const { croppData } = useSelector((images: any) => images.image);

  const { colorBcg, colorText } = useSelector(
    ({ color }: ISettingsState) => color
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
        src={croppData}
        alt=""
        style={{ height: !aspectRatio ? "auto" : "100%" }}
      />
      {onEdit ? (
        <SCTextArea
          textAlign={selectedTextAlign}
          positionBlock={positionBlock}
          verticalAlign={text.split("\n").length}
          style={{
            color: `rgba(${colorText.r},${colorText.g},${colorText.b},${colorText.a})`,
            backgroundColor: `rgba(${colorBcg.r},${colorBcg.g},${colorBcg.b},${colorBcg.a})`,
            fontFamily: `${font}, sans-serif`,
            fontSize: `${fontSize}px`,
            borderColor: !onEdit ? "transparent" : "",
            paddingTop: `${
              verticalCenter
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
          textAlign={selectedTextAlign}
          verticalCenter={verticalCenter}
          positionBlock={positionBlock}
          style={{
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
