import React from "react";
import { RgbaColorPicker } from "react-colorful";
import "react-colorful/dist/index.css";

interface IPopoverPopupState {
  selectColor: any;
  onSelectColor: any;
}

const Colorful: React.FC<IPopoverPopupState> = ({
  selectColor,
  onSelectColor,
}) => {
  return <RgbaColorPicker color={selectColor} onChange={onSelectColor} />;
};

export default Colorful;
