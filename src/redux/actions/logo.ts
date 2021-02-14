export const setShowLogo = (logo: boolean | null) => ({
  type: "SET_SHOW_LOGO",
  payload: logo,
});

export const setTypeLogo = (logo: string | null) => ({
  type: "SET_TYPE_LOGO",
  payload: logo,
});
