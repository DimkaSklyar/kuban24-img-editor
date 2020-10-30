import { IColorRGBA } from "../../types/interfaces";

export const setBackgroundColor = (colorRgba: IColorRGBA) => ({
  type: "SET_COLOR_RGBA",
  payload: colorRgba,
});

export const setTextColor = (colorRgba: IColorRGBA) => ({
  type: "SET_COLOR_TEXT_RGBA",
  payload: colorRgba,
});
