import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR} from "../constant"
const initialState ={
    isRegistered: false,
    isError: false,
    isLoading: false
  };
export default function appReducer (state=initialState, action){
    switch(action.type){
      case REGISTER_REQUEST :
        console.log('tt')
      return { ...state, isLoading: true };
        case REGISTER_SUCCESS :
      return { ...state, isLoading: false, isRegistered: true, response: action.payload.response };
    case REGISTER_ERROR :
        return
        default :
        return state
    }
}