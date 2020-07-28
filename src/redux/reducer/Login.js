import * as constant from '../constant'

const initialState=[]
export default function appReducer (state=initialState, action){
    switch(action.type){
        case constant.LOGIN_SUCCESS :
            return 
    case constant.LOGIN_REQUEST :
            return
    case constant.LOGIN_ERROR :
        return
        default :
        return state
    }
}