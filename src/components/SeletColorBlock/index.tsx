import { Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBackgroundColor, setTextColor } from "../../redux/actions/color";
import { IColorRGBA, ISettingsState } from "../../types/interfaces";
import Colorful from "../Colorful";

const SelectColorBlock = () => {
  const dispatch = useDispatch();
  const { colorBcg, colorText } = useSelector(({ color }: ISettingsState) => color);

  const handleSelectedColorBcg = (color: IColorRGBA) => {
    dispatch(setBackgroundColor(color));
  };

  const handleSelectedColorText = (color: IColorRGBA) => {
    dispatch(setTextColor(color));
  };
  return (
    <React.Fragment>
      <Typography>Цвет Фона</Typography>
      <Colorful
        selectColor={colorBcg}
        onSelectedColor={handleSelectedColorBcg}
      />
      <Typography>Цвет Текст</Typography>
      <Colorful
        selectColor={colorText}
        onSelectedColor={handleSelectedColorText}
      />
    </React.Fragment>
  );
};

export default SelectColorBlock;
