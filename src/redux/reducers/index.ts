import { combineReducers } from "redux";

import color from "./color";
import font from "./font";
import fontSize from "./fontSize";
import image from "./image";
import alignment from "./alignment";

const rootReducer = combineReducers({
  color,
  font,
  fontSize,
  image,
  alignment,
});

export default rootReducer;
