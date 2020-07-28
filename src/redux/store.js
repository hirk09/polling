import {createStore, applyMiddleware} from "redux"
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer/index'
import Rootsaga from '../sagas/RegisterSaga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(Rootsaga)
export default store

