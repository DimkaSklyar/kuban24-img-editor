export const setSelectFont = (font: string) => ({
  type: "SET_FONTS",
  payload: font,
});

export const setSelectFontSize = (size: number | number[]) => ({
  type: "SET_FONTS_SIZE",
  payload: size,
});
