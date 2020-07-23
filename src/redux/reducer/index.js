import { combineReducers } from "redux";
import Login from "./Login";
import Register from "./Register";
const rootReducer = combineReducers({
  login: Login,
  register: Register,
});

export default rootReducer;
