import produce from "immer";

const initialState = {
  font: "Inter",
  fontSize: 80
};

const settings = produce((draft = initialState, action) => {
  switch (action.type) {
    case "SET_FONTS":
      draft.font = action.payload;
      return;
    case "SET_FONTS_SIZE":
      return {
        fontSize: action.payload,
      };
    default:
      return initialState;
  }
});
export default settings;
