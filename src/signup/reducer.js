import {
  SIGNUP_REQUESTING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from './constants'
const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
}
const reducer = function signupReducer (state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUESTING:
      return {
        requesting: true,
        successful: false,
        messages: [{ body: 'Signing up...', time: new Date() }],
        errors: [],
      }
    case SIGNUP_SUCCESS:
      console.log("ghcgnchdf ", action);
      const username = action.response.data ? action.response.data.username : undefined
      return {
        errors: [],
        messages: [{
          body: username? `Successfully created account for ${username }`: action.response.message,
          time: new Date(),
        }],
        requesting: false,
        successful: true,
      }
    case SIGNUP_ERROR:
      return {
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        messages: [],
        requesting: false,
        successful: false,
      }
    default:
      return state
  }
}
export default reducer
