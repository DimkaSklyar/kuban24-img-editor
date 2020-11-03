import { combineReducers } from "redux";

import color from "./color";
import font from "./font";
import fontSize from "./fontSize";
import image from "./image";
import alignment from "./alignment";
import aspectRatio from "./aspectRatio";

const rootReducer = combineReducers({
  color,
  font,
  fontSize,
  image,
  alignment,
  aspectRatio
});

export default rootReducer;
