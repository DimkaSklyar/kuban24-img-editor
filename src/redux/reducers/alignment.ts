import produce from "immer";

const initialState = {
  horizontalAlign: "center",
  verticalAlign: false,
  verticalPosition: true,
};

const alignment = (alignment = initialState, action: any) => {
  switch (action.type) {
    case "SET_HORIZONTAL_ALIGN":
      return produce(alignment, (draftState) => {
        draftState.horizontalAlign = action.payload;
      });
    case "SET_VERTICAL_ALIGN":
      return produce(alignment, (draftState) => {
        draftState.verticalAlign = action.payload;
      });
    case "SET_VERTICAL_POSITION":
      return produce(alignment, (draftState) => {
        draftState.verticalPosition = action.payload;
      });

    default:
      return alignment;
  }
};
export default alignment;
