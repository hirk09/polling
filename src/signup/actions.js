import { SIGNUP_REQUESTING } from './constants'

const signupRequest = function signupRequest ({ username, password, role }) {
  console.log('called');
  return {
    type: SIGNUP_REQUESTING,
    username,
    password,
    role
  }
}

export default signupRequest
