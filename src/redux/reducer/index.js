import { combineReducers } from "redux";
// import Login from "./Login";
import register from "./Register";
const rootReducer = combineReducers({
  // login: Login,
  register: register,
});

export default rootReducer;
