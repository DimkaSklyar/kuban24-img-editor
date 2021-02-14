import React from "react";
import { useSelector } from "react-redux";
import { SCText, SCTextArea } from "../App/AppStyle";
interface IEditImageBlock {
  onEdit: boolean;
  refImg: any;
}

const EditImageBlock: React.FC<IEditImageBlock> = ({ onEdit, refImg }) => {
  const [text, setText] = React.useState("Ваш Текст");

  const settings = useSelector((setting: any) => setting);
  const { croppData, blurImage } = useSelector((images: any) => images.image);

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  return (
    <div
      className="container__wrapper"
      ref={refImg}
      style={{
        alignItems:
          !settings.aspectRatio && !settings.alignment.verticalAlign
            ? "flex-start"
            : settings.alignment.verticalAlign
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
        style={{ height: !settings.aspectRatio ? "auto" : "100%" }}
      />
      {settings.logo.showLogo && (
        <img src={settings.logo.typeLogo} alt="logo" className="logo" />
      )}
      {onEdit ? (
        <SCTextArea
          {...settings}
          countString={text.split("\n").length - 1}
          value={text}
          onChange={handleChange}
        >
          {text}
        </SCTextArea>
      ) : (
        <SCText {...settings} verticalPosition>
          {text}
        </SCText>
      )}
    </div>
  );
};

export default EditImageBlock;
