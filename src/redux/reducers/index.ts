import { combineReducers } from "redux";

import color from "./color";
import font from "./font";
import fontSize from "./fontSize";
import image from "./image";

const rootReducer = combineReducers({
  color,
  font,
  fontSize,
  image,
});

export default rootReducer;
