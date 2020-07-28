import { call, put, takeLatest } from "redux-saga/effects";
import { handleApiErrors } from "../lib/api-errors";
import { SIGNUP_REQUESTING, SIGNUP_SUCCESS, SIGNUP_ERROR } from "./constants";

function signupApi(username, password, role) {
  const signupUrl = `https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${password}&role=${role}`;
  console.log(username, password, role);
  return fetch(signupUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(handleApiErrors)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      throw error;
    });
}
function* signupFlow(action) {
  try {
    const { username, password, role } = action;
    const response = yield call(signupApi, username, password, role);

    console.log("username:", response);
    yield put({ type: SIGNUP_SUCCESS, response });
  } catch (error) {
    yield put({ type: SIGNUP_ERROR, error });
  }
}
function* signupWatcher() {
  yield takeLatest(SIGNUP_REQUESTING, signupFlow);
}
export default signupWatcher;
