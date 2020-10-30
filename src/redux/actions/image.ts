export const setUploadImage = (image: string | null) => ({
  type: "SET_UPLOAD_IMAGE",
  payload: image,
});

export const setCroppData = (image: string | null) => ({
  type: "SET_CROPP_DATA",
  payload: image,
});
