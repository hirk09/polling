import {RegisterSuccess, RegisterRequest, RegisterError} from "./Action"



export function registerRequest(userData){
    return async function (dispatch){
        try{
            dispatch(RegisterRequest())
            let data;
            if (data.error) {
                dispatch(RegisterError({error : data.message}))
            }
            else {
                dispatch(RegisterSuccess({response : data}))
            }
        }
        catch(e){
            dispatch(RegisterError({error : e}))
        }
    }
}