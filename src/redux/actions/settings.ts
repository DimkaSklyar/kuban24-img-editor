import { IColorRGBA } from "../../types/interfaces";

export const setSelectFont = (font: string) => ({
  type: "SET_FONTS",
  payload: font,
});

export const setSelectFontSize = (size: number | number[]) => ({
  type: "SET_FONTS_SIZE",
  payload: size,
});

export const setBackgroundColor = (colorRgba: IColorRGBA) => ({
  type: "SET_COLOR_RGBA",
  payload: colorRgba,
});

export const setTextColor = (colorRgba: IColorRGBA) => ({
  type: "SET_COLOR_TEXT_RGBA",
  payload: colorRgba,
});
