import React from "react";
import { RgbaColorPicker } from "react-colorful";
import "react-colorful/dist/index.css";
import { useDispatch } from "react-redux";
import { IColorRGBA } from "../../types/interfaces";

interface IColorful {
  selectColor: IColorRGBA;
  onSelectedColor: Function;
}

const Colorful: React.FC<IColorful> = ({ selectColor, onSelectedColor }) => {
  const [color, setColor] = React.useState({ r: 200, g: 150, b: 35, a: 0.5 });
  const dispatch = useDispatch();

  React.useCallback(() => {
    dispatch(onSelectedColor(color));
  }, [color]);

  return <RgbaColorPicker color={selectColor} onChange={setColor} />;
};

export default Colorful;
