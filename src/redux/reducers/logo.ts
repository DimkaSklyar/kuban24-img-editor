import produce from "immer";
import Logo from "../../assets/logo.png";
const initialState = {
  showLogo: false,
  typeLogo: Logo,
};

const logo = (logo = initialState, action: any) => {
  switch (action.type) {
    case "SET_SHOW_LOGO":
      return produce(logo, (draftState) => {
        draftState.showLogo = action.payload;
      });
    case "SET_TYPE_LOGO":
      return produce(logo, (draftState) => {
        draftState.typeLogo = action.payload;
      });
    default:
      return logo;
  }
};
export default logo;
