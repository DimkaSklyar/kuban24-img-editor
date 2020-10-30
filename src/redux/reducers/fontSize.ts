import produce from "immer";

const initialState = {
  fontSize: 80,
};

const fontSize = (fontSize = initialState, action: any) => {
  switch (action.type) {
    case "SET_FONTS_SIZE":
      return produce(fontSize, (draftState) => {
        draftState.fontSize = action.payload;
      });
    default:
      return initialState;
  }
};
export default fontSize;
