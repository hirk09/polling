import { put, call, takeLatest } from "redux-saga/effects";
import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR} from "../redux/constant"
import { handleApiErrors } from '../components/lib/api-errors'


const registerUrl = `${'https://secure-refuge-14993.herokuapp.com/add_user?username=admin&password=admin&role=admin'}/api/Clients`

function registerApi (username, password,role) {
  return fetch(registerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, password,role}),
  })
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => json)
    .catch((error) => { throw error })
}


function* registerFlow(action) {
  try {
    const {username, password, role} = action
    const response = yield call(registerApi, username, password, role)
    yield put({ type: REGISTER_SUCCESS, response });
  } catch (error) {
    yield put({ type: REGISTER_ERROR, error });
  }
}

function* registerWatcher() {
  yield takeLatest(REGISTER_REQUEST, registerFlow);
}

export default registerWatcher;
