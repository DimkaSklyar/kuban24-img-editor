import produce from "immer";

const initialState = 80;

const fontSize = (fontSize = initialState, action: any) => {
  switch (action.type) {
    case "SET_FONTS_SIZE":
      return produce(fontSize, (draftState) => (draftState = action.payload));
    default:
      return fontSize;
  }
};
export default fontSize;
