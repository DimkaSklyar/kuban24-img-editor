import produce from "immer";

const initialState = {
  font: "Inter",
  fontSize: 80,
  colorBcg: { r: 255, g: 255, b: 255, a: 1 },
  colorText: { r: 0, g: 0, b: 0, a: 1 },
};

const settings = (settings = initialState, action: any) => {
  switch (action.type) {
    case "SET_FONTS":
      return produce(settings, (draftState) => {
        draftState.font = action.payload;
      });
    case "SET_FONTS_SIZE":
      return produce(settings, (draftState) => {
        draftState.fontSize = action.payload;
      });
    case "SET_COLOR_RGBA":
      return produce(settings, (draftState) => {
        draftState.colorBcg = action.payload;
      });
    case "SET_COLOR_TEXT_RGBA":
      return produce(settings, (draftState) => {
        draftState.colorText = action.payload;
      });

    default:
      return initialState;
  }
};
export default settings;
