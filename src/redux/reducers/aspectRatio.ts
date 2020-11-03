import produce from "immer";

const initialState = {
  aspectRatio: false,
};

const aspectRatio = (aspectRatio = initialState, action: any) => {
  switch (action.type) {
    case "SET_ASPECT_RATIO":
      return produce(aspectRatio, (draftState) => {
        draftState.aspectRatio = action.payload;
      });
    default:
      return aspectRatio;
  }
};
export default aspectRatio;
