import { combineReducers } from "redux";

import color from "./color";
import font from "./font";
import fontSize from "./fontSize";
import image from "./image";
import alignment from "./alignment";
import aspectRatio from "./aspectRatio";
import logo from "./logo";

const rootReducer = combineReducers({
  color,
  font,
  fontSize,
  image,
  alignment,
  aspectRatio,
  logo,
});

export default rootReducer;
