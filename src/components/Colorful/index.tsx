import React from "react";
import { RgbaColorPicker } from "react-colorful";
import "react-colorful/dist/index.css";
import { IColorRGBA } from "../../types/interfaces";

interface IColorful {
  selectColor: IColorRGBA;
  onSelectedColor(color: IColorRGBA): void;
}

const Colorful: React.FC<IColorful> = ({ selectColor, onSelectedColor }) => {
  return <RgbaColorPicker color={selectColor} onChange={onSelectedColor} />;
};

export default Colorful;
