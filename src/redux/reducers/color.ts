import produce from "immer";

const initialState = {
  colorBcg: { r: 255, g: 255, b: 255, a: 1 },
  colorText: { r: 0, g: 0, b: 0, a: 1 },
};

const color = (color = initialState, action: any) => {
  switch (action.type) {
    case "SET_COLOR_RGBA":
      return produce(color, (draftState) => {
        draftState.colorBcg = action.payload;
      });
    case "SET_COLOR_TEXT_RGBA":
      return produce(color, (draftState) => {
        draftState.colorText = action.payload;
      });

    default:
      return color;
  }
};
export default color;
