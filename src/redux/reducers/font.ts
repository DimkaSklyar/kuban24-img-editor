import produce from "immer";

const initialState = {
  font: "Inter",
};

const font = (font = initialState, action: any) => {
  switch (action.type) {
    case "SET_FONTS":
      return produce(font, (draftState) => {
        draftState.font = action.payload;
      });
    default:
      return font;
  }
};
export default font;
