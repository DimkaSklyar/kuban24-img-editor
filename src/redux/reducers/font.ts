import produce from "immer";

const initialState = "Inter";

const font = (font = initialState, action: any) => {
  switch (action.type) {
    case "SET_FONTS":
      return produce(font, (draftState) => (draftState = action.payload));
    default:
      return font;
  }
};
export default font;
