export const setUploadImage = (image: string | null) => ({
  type: "SET_UPLOAD_IMAGE",
  payload: image,
});

export const setCroppData = (image: string | null) => ({
  type: "SET_CROPP_DATA",
  payload: image,
});

export const setBlurImage = (image: string | null) => ({
  type: "SET_BLUR_IMAGE",
  payload: image,
});
