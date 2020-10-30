import { combineReducers } from "redux";

import color from "./color";
import font from "./font";
import fontSize from "./fontSize";

const rootReducer = combineReducers({
  color,
  font,
  fontSize,
});

export default rootReducer;
