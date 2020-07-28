import {REGISTER_REQUEST} from "../constant"



export default function registerRequest({ username, password, role}){
  console.log('called');

    return {
        type: REGISTER_REQUEST,
        username,
        password,
        role
      }
    }