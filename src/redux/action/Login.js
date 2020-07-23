import {LoginSuccess, LoginRequest, LoginError} from "./Action"



export function loginRequest(userData){
    return async function (dispatch){
        try{
            dispatch(LoginRequest())
            let data;
            if (data.error) {
                dispatch(LoginError({error : data.message}))
            }
            else {
                dispatch(LoginSuccess({response : data}))
            }
        }
        catch(e){
            dispatch(LoginError({error : e}))
        }
    }
}