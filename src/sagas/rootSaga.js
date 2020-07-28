import RegisterSaga from './RegisterSaga'
import { fork, all } from 'redux-saga/effects';
  export default function* RootSaga() {
    yield all([
        fork(RegisterSaga),
    ]);
}