import produce from "immer";

const initialState = {
  uploadImage: null,
  croppData: null,
  blurImage: null,
};

const image = (image = initialState, action: any) => {
  switch (action.type) {
    case "SET_UPLOAD_IMAGE":
      return produce(image, (draftState) => {
        draftState.uploadImage = action.payload;
      });
    case "SET_CROPP_DATA":
      return produce(image, (draftState) => {
        draftState.croppData = action.payload;
      });
    case "SET_BLUR_IMAGE":
      return produce(image, (draftState) => {
        draftState.blurImage = action.payload;
      });
    default:
      return image;
  }
};
export default image;
